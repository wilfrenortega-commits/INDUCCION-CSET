/**
 * Web Audio API synthesizer for the SENA Anthem melody
 * and Web Speech API narration helper for multimodal interaction.
 */

// Musical notes frequencies in Hz
const NOTE_FREQ: Record<string, number> = {
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.00,
  A4: 440.00,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  F5: 698.46,
  G5: 783.99,
  SILENCE: 0
};

// Simplified inspiring brass-like anthem theme for SENA (Coro: "Estudiantes del SENA, ¡adelante!...")
const ANTHEM_SCORE: { note: string; duration: number }[] = [
  { note: 'G4', duration: 0.35 },
  { note: 'C5', duration: 0.6 },
  { note: 'C5', duration: 0.4 },
  { note: 'D5', duration: 0.4 },
  { note: 'E5', duration: 0.8 },
  { note: 'SILENCE', duration: 0.15 },
  { note: 'E5', duration: 0.35 },
  { note: 'D5', duration: 0.35 },
  { note: 'C5', duration: 0.4 },
  { note: 'D5', duration: 0.6 },
  { note: 'G4', duration: 0.6 },
  { note: 'SILENCE', duration: 0.2 },
  { note: 'G4', duration: 0.35 },
  { note: 'D5', duration: 0.6 },
  { note: 'D5', duration: 0.4 },
  { note: 'E5', duration: 0.4 },
  { note: 'F5', duration: 0.8 },
  { note: 'SILENCE', duration: 0.15 },
  { note: 'F5', duration: 0.35 },
  { note: 'E5', duration: 0.35 },
  { note: 'D5', duration: 0.4 },
  { note: 'E5', duration: 0.6 },
  { note: 'C5', duration: 0.8 },
  { note: 'SILENCE', duration: 0.4 }
];

let audioCtx: AudioContext | null = null;
let isMelodyPlaying = false;
let currentTimeoutIds: number[] = [];

export function playAnthemMelody(onProgress?: (index: number) => void, onComplete?: () => void) {
  stopAnthemMelody();

  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    
    audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isMelodyPlaying = true;
    let accumulatedTime = 0;

    ANTHEM_SCORE.forEach((item, index) => {
      const delayMs = accumulatedTime * 1000;
      
      const tid = window.setTimeout(() => {
        if (!isMelodyPlaying || !audioCtx) return;

        if (onProgress) {
          onProgress(index);
        }

        const freq = NOTE_FREQ[item.note];
        if (freq && freq > 0) {
          // Lead oscillator (Brass / trumpet character)
          const osc1 = audioCtx.createOscillator();
          const osc2 = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();

          osc1.type = 'sawtooth';
          osc1.frequency.setValueAtTime(freq, audioCtx.currentTime);

          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(freq * 0.5, audioCtx.currentTime); // sub octave warmth

          // Envelope
          const now = audioCtx.currentTime;
          const noteDuration = item.duration * 0.9;
          gainNode.gain.setValueAtTime(0.001, now);
          gainNode.gain.exponentialRampToValueAtTime(0.2, now + 0.05);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + noteDuration);

          osc1.connect(gainNode);
          osc2.connect(gainNode);
          gainNode.connect(audioCtx.destination);

          osc1.start(now);
          osc2.start(now);
          osc1.stop(now + noteDuration);
          osc2.stop(now + noteDuration);
        }
      }, delayMs);

      currentTimeoutIds.push(tid);
      accumulatedTime += item.duration;
    });

    const finishTid = window.setTimeout(() => {
      stopAnthemMelody();
      if (onComplete) onComplete();
    }, accumulatedTime * 1000);
    currentTimeoutIds.push(finishTid);

  } catch (err) {
    console.error('Web Audio error:', err);
  }
}

export function stopAnthemMelody() {
  isMelodyPlaying = false;
  currentTimeoutIds.forEach(id => clearTimeout(id));
  currentTimeoutIds = [];
  if (audioCtx) {
    try {
      audioCtx.close();
    } catch {
      // ignore
    }
    audioCtx = null;
  }
}

/**
 * Narration utility via Web Speech API
 */
export function speakText(text: string, onEnd?: () => void) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-CO'; // Colombian Spanish
  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  if (onEnd) {
    utterance.onend = () => onEnd();
    utterance.onerror = () => onEnd();
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
