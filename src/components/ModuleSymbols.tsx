import React, { useState, useEffect } from 'react';
import { 
  INSTITUTIONAL_INFO, 
  SYMBOLS_DETAIL, 
  SENA_SYMBOLS_IMAGE,
  SENA_CAMPUS_IMAGE
} from '../data/senaData';
import { 
  playAnthemMelody, 
  stopAnthemMelody, 
  speakText, 
  stopSpeaking 
} from '../utils/audioPlayer';
import { 
  Play, 
  Square, 
  Volume2, 
  VolumeX, 
  Compass, 
  Shield, 
  Flag, 
  Music, 
  CheckCircle2, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import { SenaLogo } from './SenaLogo';
import { SenaEscudo, SENA_ESCUDO_URL } from './SenaEscudo';

interface ModuleSymbolsProps {
  onCompleteModule: (moduleId: string) => void;
  isCompleted: boolean;
  onNavigateToQuiz: (quizId: string) => void;
}

export const ModuleSymbols: React.FC<ModuleSymbolsProps> = ({
  onCompleteModule,
  isCompleted,
  onNavigateToQuiz
}) => {
  const [activeTab, setActiveTab] = useState<'mision' | 'escudo' | 'bandera' | 'logosimbolo' | 'himno' | 'valores'>('escudo');
  const [selectedHotspot, setSelectedHotspot] = useState<number>(0);
  const [isPlayingMelody, setIsPlayingMelody] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeStanzaIndex, setActiveStanzaIndex] = useState<number>(0);
  const [anthemVariant, setAnthemVariant] = useState<'estudiantes' | 'aprendices'>('aprendices');

  const formatAnthemVerse = (text: string) => {
    if (anthemVariant === 'aprendices') {
      return text
        .replace(/Estudiantes/g, 'Aprendices')
        .replace(/estudiantes/g, 'aprendices');
    }
    return text;
  };

  useEffect(() => {
    return () => {
      stopAnthemMelody();
      stopSpeaking();
    };
  }, []);

  const handlePlayMelody = () => {
    if (isPlayingMelody) {
      stopAnthemMelody();
      setIsPlayingMelody(false);
    } else {
      setIsPlayingMelody(true);
      playAnthemMelody(
        (index) => {
          setActiveStanzaIndex(Math.min(3, Math.floor(index / 6)));
        },
        () => {
          setIsPlayingMelody(false);
        }
      );
    }
  };

  const handleSpeak = (text: string) => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      speakText(text, () => setIsSpeaking(false));
    }
  };

  return (
    <div className="space-y-8 pb-12 transition-colors duration-300">
      {/* Module Title Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors">
        <div className="relative h-48 md:h-64 bg-slate-900">
          <img 
            src={SENA_CAMPUS_IMAGE} 
            alt="Campus SENA" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 mb-2">
              <span>Módulo 01</span>
              <span>·</span>
              <span>Identidad Institucional</span>
              <span>·</span>
              <span>45 min</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-2xl text-balance">
              Identidad, Símbolos y Cultura Institucional SENA
            </h1>
            <p className="text-sm text-slate-200 mt-1 max-w-xl">
              Descubre la historia, el significado vivo del escudo, bandera, himno y los valores éticos que distinguen a cada aprendiz en Colombia.
            </p>
          </div>
        </div>

        {/* Sub-navigation tabs */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 px-4 sm:px-6 flex items-center gap-1 sm:gap-2 overflow-x-auto py-2">
          <button
            onClick={() => setActiveTab('escudo')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'escudo' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Shield className="w-4 h-4 text-[#39A900]" />
            <span>El Escudo</span>
          </button>
          <button
            onClick={() => setActiveTab('bandera')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'bandera' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Flag className="w-4 h-4 text-emerald-600" />
            <span>La Bandera</span>
          </button>
          <button
            onClick={() => setActiveTab('logosimbolo')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'logosimbolo' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4 text-[#00324D] dark:text-sky-400" />
            <span>El Logosímbolo</span>
          </button>
          <button
            onClick={() => setActiveTab('himno')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'himno' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Music className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Himno Interactivo</span>
          </button>
          <button
            onClick={() => setActiveTab('mision')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'mision' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>Misión & Visión</span>
          </button>
          <button
            onClick={() => setActiveTab('valores')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'valores' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <HeartHandshake className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            <span>Valores SENA</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Escudo Interactivo */}
      {activeTab === 'escudo' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Canvas: Interactive Graphic */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider">Explorador Sensible</span>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Anatomía del Escudo del SENA</h2>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">Haz clic en los 3 sectores</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-6">
                El escudo oficial conjuga armónicamente los tres motores de la economía colombiana. Selecciona cada elemento para profundizar en su impacto formativo.
              </p>
            </div>

            {/* Visual Representation with Hotspots */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 aspect-4/3 flex items-center justify-center p-6 border border-slate-200/80 dark:border-slate-800 shadow-inner group">
              {/* Background ambient radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,169,0,0.12),transparent_70%)] pointer-events-none" />

              <SenaEscudo 
                className="w-auto h-60 sm:h-72 object-contain drop-shadow-xl z-10 transition-transform duration-300 group-hover:scale-[1.02]"
                priority
                alt="Escudo Oficial del SENA"
              />

              {/* Hotspot 1: Rueda Dentada */}
              <button
                onClick={() => setSelectedHotspot(0)}
                aria-label="Seleccionar Rueda Dentada - Sector Industria"
                className={`absolute top-[24%] left-[26%] transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all shadow-lg z-20 cursor-pointer ${
                  selectedHotspot === 0
                    ? 'bg-[#39A900] text-white ring-4 ring-[#39A900]/40 scale-110'
                    : 'bg-white/95 text-slate-900 border border-slate-200 hover:bg-white hover:scale-105'
                }`}
              >
                1
              </button>

              {/* Hotspot 2: Caduceo */}
              <button
                onClick={() => setSelectedHotspot(1)}
                aria-label="Seleccionar Caduceo - Sector Comercio y Servicios"
                className={`absolute top-[44%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all shadow-lg z-20 cursor-pointer ${
                  selectedHotspot === 1
                    ? 'bg-[#39A900] text-white ring-4 ring-[#39A900]/40 scale-110'
                    : 'bg-white/95 text-slate-900 border border-slate-200 hover:bg-white hover:scale-105'
                }`}
              >
                2
              </button>

              {/* Hotspot 3: Rayo y Agricultura */}
              <button
                onClick={() => setSelectedHotspot(2)}
                aria-label="Seleccionar Rayo y Agro - Sector Primario"
                className={`absolute top-[24%] right-[26%] transform translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all shadow-lg z-20 cursor-pointer ${
                  selectedHotspot === 2
                    ? 'bg-[#39A900] text-white ring-4 ring-[#39A900]/40 scale-110'
                    : 'bg-white/95 text-slate-900 border border-slate-200 hover:bg-white hover:scale-105'
                }`}
              >
                3
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Tres sectores económicos convergentes</span>
              <span className="font-mono">Acuerdo Consejo Directivo</span>
            </div>
          </div>

          {/* Right Concept Deck */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#39A900] text-white flex items-center justify-center text-xs font-bold">
                  {selectedHotspot + 1}
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Elemento seleccionado</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {SYMBOLS_DETAIL.escudo.elementos[selectedHotspot].nombre}
              </h3>

              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-100 dark:border-emerald-800 text-xs font-semibold text-emerald-900 dark:text-emerald-300">
                {SYMBOLS_DETAIL.escudo.elementos[selectedHotspot].sector}
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {SYMBOLS_DETAIL.escudo.elementos[selectedHotspot].detalle}
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => handleSpeak(`${SYMBOLS_DETAIL.escudo.elementos[selectedHotspot].nombre}. Representa el ${SYMBOLS_DETAIL.escudo.elementos[selectedHotspot].sector}. ${SYMBOLS_DETAIL.escudo.elementos[selectedHotspot].detalle}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-[#39A900] dark:hover:text-[#39A900] transition-colors"
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span>{isSpeaking ? 'Detener lectura' : 'Escuchar explicación'}</span>
                </button>
              </div>
            </div>

            {/* Quick selector buttons */}
            <div className="grid grid-cols-3 gap-2">
              {SYMBOLS_DETAIL.escudo.elementos.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedHotspot(idx)}
                  className={`p-3 text-left rounded-xl border text-xs transition-all ${
                    selectedHotspot === idx
                      ? 'border-[#39A900] bg-emerald-50/50 dark:bg-emerald-950/40 font-semibold text-slate-900 dark:text-white'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 mb-0.5">Sector 0{idx + 1}</div>
                  <div className="truncate">{item.nombre.split('(')[0]}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: La Bandera */}
      {activeTab === 'bandera' && (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-colors">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider">Pabellón Institucional</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">La Bandera del SENA</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              El pabellón del SENA ondea en las 33 regionales y más de 117 centros de formación de toda la geografía colombiana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual Flag */}
            <div className="md:col-span-6 bg-slate-100 dark:bg-slate-800 p-8 rounded-2xl flex items-center justify-center">
              <div className="w-full max-w-md aspect-3/2 bg-white border border-slate-300 shadow-md rounded-lg flex flex-col items-center justify-center p-6 relative overflow-hidden group">
                <div className="w-28 h-28 rounded-full border border-slate-200/90 p-2.5 flex items-center justify-center bg-white shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <SenaEscudo className="w-20 h-20 object-contain drop-shadow-xs" alt="Escudo oficial en la Bandera del SENA" />
                </div>
                <div className="absolute bottom-3 text-[11px] text-slate-500 font-mono">
                  Lienzo Blanco Puro · Escudo Nacional del SENA Centrado
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="md:col-span-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Significado del Color Blanco</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {SYMBOLS_DETAIL.bandera.significadoColor}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Protocolo del Aprendiz</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#39A900] shrink-0 mt-0.5" />
                    <span>Se iza en actos cívicos, ceremonias de certificación e inauguraciones de sedes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#39A900] shrink-0 mt-0.5" />
                    <span>Acompaña a la bandera nacional de Colombia en el costado izquierdo del recinto protocolario.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: El Logosímbolo */}
      {activeTab === 'logosimbolo' && (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider">Marca Humana</span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">El Logosímbolo Institucional</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                Diseñado para condensar la identidad de los colombianos que se capacitan para el trabajo productivo. Representa al aprendiz caminando erguido hacia el horizonte del conocimiento y el progreso.
              </p>
            </div>

            {/* Official Logo Display Box */}
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center p-4 shrink-0">
              <SenaLogo className="w-full h-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-[#39A900] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">La Figura Humana Erguida</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                El aprendiz como protagonista de su formación, caminando de frente con dignidad, sin importar su origen social o territorio.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-[#00324D] dark:text-blue-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">El Sendero y el Horizonte</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Los trazos inferiores representan los caminos del aprendizaje técnico y tecnológico que conducen a la libertad y el progreso económico.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Saber, Saber Hacer y Saber Ser</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                La conjunción de competencias cognitivas, técnicas y humanas para transformar positivamente el entorno productivo de Colombia.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Himno Interactivo */}
      {activeTab === 'himno' && (
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 transition-colors">
          {/* Header & Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider">Canto Institucional</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800">
                  Versión Oficial Completa
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">Himno del SENA</h2>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
                <span><strong>Letra:</strong> {SYMBOLS_DETAIL.himno.letraAutor}</span>
                <span>•</span>
                <span><strong>Música:</strong> {SYMBOLS_DETAIL.himno.musicaAutor}</span>
              </div>
            </div>

            {/* Actions: Audio Synth & Variant Switcher */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Variant Selector */}
              <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium">
                <button
                  onClick={() => setAnthemVariant('aprendices')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    anthemVariant === 'aprendices'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold shadow-xs'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Versión actual usada en ceremonias e inducción"
                >
                  Aprendices (Actual)
                </button>
                <button
                  onClick={() => setAnthemVariant('estudiantes')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    anthemVariant === 'estudiantes'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold shadow-xs'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Versión original histórica de partitura"
                >
                  Estudiantes (Original)
                </button>
              </div>

              {/* Play Melody Synth */}
              <button
                onClick={handlePlayMelody}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition-all ${
                  isPlayingMelody 
                    ? 'bg-rose-600 text-white hover:bg-rose-700' 
                    : 'bg-[#39A900] text-white hover:bg-[#2e8800]'
                }`}
              >
                {isPlayingMelody ? (
                  <>
                    <Square className="w-3.5 h-3.5 fill-white" />
                    <span>Detener Melodía</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Tocar Melodía (Sintetizador)</span>
                  </>
                )}
              </button>

              {/* Narrate All */}
              <button
                onClick={() => {
                  const chorusText = SYMBOLS_DETAIL.himno.coro.map(v => formatAnthemVerse(v)).join('. ');
                  const stanzasText = SYMBOLS_DETAIL.himno.estrofas
                    .map(e => `Estrofa ${e.numero}: ${e.versos.map(v => formatAnthemVerse(v)).join('. ')}`)
                    .join('. ');
                  handleSpeak(`Himno del SENA. Coro: ${chorusText}. ${stanzasText}`);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
                title="Escuchar locución completa del himno"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-[#39A900]" />}
                <span>{isSpeaking ? 'Detener Voz' : 'Escuchar Himno Completo'}</span>
              </button>
            </div>
          </div>

          {/* Pedagogical Note on Anthem Evolution */}
          <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 flex items-start gap-3 text-xs text-emerald-900 dark:text-emerald-200">
            <Music className="w-4 h-4 text-[#39A900] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Nota Institucional:</strong> En la partitura original de 1957 la letra inicia con <em>"Estudiantes del SENA, ¡adelante!"</em>. Con la consolidación del Reglamento del Aprendiz y la identidad institucional, en los actos cívicos y ceremonias de inducción contemporáneas la comunidad suele entonar con fervor patriótico <em>"Aprendices del SENA, ¡adelante!"</em>. Puedes alternar ambas versiones arriba.
            </p>
          </div>

          {/* Stanzas Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Chorus prominent card */}
            <div className={`lg:col-span-5 p-6 rounded-2xl border transition-all ${
              activeStanzaIndex === 0 && isPlayingMelody
                ? 'border-[#39A900] bg-emerald-50 dark:bg-emerald-950/40 shadow-md ring-2 ring-[#39A900]/30'
                : 'border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#39A900]" />
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-widest">
                    El Coro (Bis)
                  </span>
                </div>
                <button
                  onClick={() => handleSpeak(`Coro: ${SYMBOLS_DETAIL.himno.coro.map(v => formatAnthemVerse(v)).join('. ')}`)}
                  className="p-1.5 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 rounded-lg transition-colors"
                  title="Escuchar el coro"
                  aria-label="Escuchar el coro"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2 text-base sm:text-lg font-bold text-slate-900 dark:text-white italic font-serif leading-relaxed">
                {SYMBOLS_DETAIL.himno.coro.map((line, i) => (
                  <p key={i} className="tracking-wide">{formatAnthemVerse(line)}</p>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-200/80 dark:border-emerald-800/40 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Significado:</strong> Convocatoria vibrante al esfuerzo formativo y al amor patrio para liderar la transformación solidaria y productiva de Colombia.
              </div>
            </div>

            {/* The 4 Stanzas in 2x2 Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SYMBOLS_DETAIL.himno.estrofas.map((est, idx) => (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                    activeStanzaIndex === idx + 1 && isPlayingMelody
                      ? 'border-[#39A900] bg-emerald-50/50 dark:bg-emerald-950/40 shadow-sm ring-1 ring-[#39A900]/40'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#39A900] uppercase tracking-wider">
                        Estrofa {est.numero}
                      </span>
                      <button
                        onClick={() => handleSpeak(`Estrofa ${est.numero}: ${est.versos.map(v => formatAnthemVerse(v)).join('. ')}`)}
                        className="p-1 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-md transition-colors"
                        title={`Escuchar Estrofa ${est.numero}`}
                        aria-label={`Escuchar Estrofa ${est.numero}`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-sm font-serif italic text-slate-800 dark:text-slate-200 space-y-1 mb-3">
                      {est.versos.map((v, vi) => (
                        <p key={vi} className="leading-snug">{formatAnthemVerse(v)}</p>
                      ))}
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 leading-relaxed">
                    {est.analisis}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Protocol Banner */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#39A900] shrink-0" />
              <span>
                <strong>Protocolo de Respeto:</strong> El Himno del SENA se entona de pie y con la cabeza descubierta en todas las ceremonias cívicas, asambleas de aprendices y actos de certificación.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Misión y Visión */}
      {activeTab === 'mision' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider">Razón de Ser</span>
                <button
                  onClick={() => handleSpeak(`Misión del SENA: ${INSTITUTIONAL_INFO.mision}`)}
                  className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white flex items-center gap-1"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Escuchar</span>
                </button>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Misión Institucional</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {INSTITUTIONAL_INFO.mision}
              </p>
              <div className="pt-2 text-xs text-slate-400 dark:text-slate-500">
                Fundado por {INSTITUTIONAL_INFO.fundacion}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#00324D] dark:text-sky-400 uppercase tracking-wider">Hacia el Futuro</span>
                <button
                  onClick={() => handleSpeak(`Visión del SENA: ${INSTITUTIONAL_INFO.vision}`)}
                  className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white flex items-center gap-1"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Escuchar</span>
                </button>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Visión de Futuro</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {INSTITUTIONAL_INFO.vision}
              </p>
              <div className="pt-2 text-xs text-slate-400 dark:text-slate-500">
                {INSTITUTIONAL_INFO.pais} · {INSTITUTIONAL_INFO.lema}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Valores SENA */}
      {activeTab === 'valores' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider">Código de Integridad</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">Valores y Principios en el SENA</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
              Nuestra comunidad de aprendices e instructores vive día a día estos 5 valores universales en ambientes presenciales y virtuales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTITUTIONAL_INFO.valores.map((val, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#39A900]">0{idx + 1}</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">Conducta</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{val.titulo}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{val.descripcion}</p>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-white">En el ambiente: </strong>
                  {val.ejemplo}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Module Completion Call-to-action */}
      <div className="p-6 bg-slate-900 dark:bg-slate-900 border border-slate-800 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-white">¿Apropiaste los símbolos institucionales?</h4>
          <p className="text-xs text-slate-300 mt-0.5">
            Pon a prueba tu aprendizaje con el Desafío de Identidad y desbloquea tu primera insignia.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {!isCompleted && (
            <button
              onClick={() => onCompleteModule('mod-identidad')}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-colors whitespace-nowrap"
            >
              Marcar lectura completada
            </button>
          )}

          <button
            onClick={() => onNavigateToQuiz('quiz-identidad')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Presentar Quiz de Símbolos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
