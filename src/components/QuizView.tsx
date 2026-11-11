import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { QUIZZES, BADGES } from '../data/senaData';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award,
  BookOpen
} from 'lucide-react';

interface QuizViewProps {
  quizId: string;
  onFinishQuiz: (quizId: string, score: number, passed: boolean) => void;
  onBackToModules: () => void;
  onOpenCertificate: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  quizId,
  onFinishQuiz,
  onBackToModules,
  onOpenCertificate
}) => {
  const quiz = QUIZZES[quizId] || QUIZZES['quiz-identidad'];
  
  const [currentQIdx, setCurrentQIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);

  const currentQuestion = quiz.preguntas[currentQIdx];

  const handleSelectOption = (optionIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQIdx]: optionIdx
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    quiz.preguntas.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.respuestaCorrecta) {
        correctCount++;
      }
    });
    return Math.round((correctCount / quiz.preguntas.length) * 100);
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    const passed = finalScore >= quiz.puntajeMinimoAprobacion;
    setIsSubmitted(true);

    if (passed) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }

    onFinishQuiz(quiz.id, finalScore, passed);
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentQIdx(0);
    setShowReview(false);
  };

  const allAnswered = quiz.preguntas.every((_, i) => selectedAnswers[i] !== undefined);
  const score = isSubmitted ? calculateScore() : 0;
  const isApproved = score >= quiz.puntajeMinimoAprobacion;
  const unlockedBadge = BADGES.find(b => b.id === quiz.insigniaDesbloqueable);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-colors">
        <div>
          <button
            onClick={onBackToModules}
            className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white mb-1 inline-block"
          >
            ← Volver a módulos de inducción
          </button>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">{quiz.titulo}</h1>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{quiz.descripcion}</p>
        </div>

        <div className="text-xs font-mono text-right text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-xl border border-slate-100 dark:border-slate-700">
          <div>Aprobación requerida: <strong className="text-slate-900 dark:text-white">{quiz.puntajeMinimoAprobacion}%</strong></div>
          <div>Preguntas: <strong className="text-slate-900 dark:text-white">{quiz.preguntas.length}</strong></div>
        </div>
      </div>

      {/* When not submitted: Interactive Question Card */}
      {!isSubmitted && (
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-colors">
          {/* Question Navigation Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Pregunta {currentQIdx + 1} de {quiz.preguntas.length}
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {quiz.preguntas.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentQIdx(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                    currentQIdx === idx
                      ? 'bg-[#39A900] text-white shadow-sm'
                      : selectedAnswers[idx] !== undefined
                      ? 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Question prompt */}
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
              {currentQuestion.pregunta}
            </h2>
            {currentQuestion.contexto && (
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                {currentQuestion.contexto}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3 pt-2">
            {currentQuestion.opciones.map((opcion, oIdx) => {
              const isSelected = selectedAnswers[currentQIdx] === oIdx;
              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelectOption(oIdx)}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'border-[#39A900] bg-emerald-50/70 dark:bg-emerald-950/40 text-slate-900 dark:text-white ring-2 ring-[#39A900]/20 font-medium'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    isSelected ? 'bg-[#39A900] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + oIdx)}
                  </span>
                  <span className="leading-relaxed">{opcion}</span>
                </button>
              );
            })}
          </div>

          {/* Footer controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              disabled={currentQIdx === 0}
              onClick={() => setCurrentQIdx(prev => Math.max(0, prev - 1))}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 border border-slate-200 dark:border-slate-700 rounded-lg"
            >
              Anterior
            </button>

            {currentQIdx < quiz.preguntas.length - 1 ? (
              <button
                onClick={() => setCurrentQIdx(prev => prev + 1)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#00324D] dark:bg-emerald-600 hover:bg-[#002438] dark:hover:bg-emerald-500 rounded-lg shadow-sm"
              >
                Siguiente
              </button>
            ) : (
              <button
                disabled={!allAnswered}
                onClick={handleSubmit}
                className="px-6 py-2 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-40 rounded-lg shadow-sm"
              >
                Finalizar y Calificar
              </button>
            )}
          </div>
        </div>
      )}

      {/* When Submitted: Results Card */}
      {isSubmitted && !showReview && (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-6 transition-colors">
          <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl font-bold bg-slate-50 dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700">
            {isApproved ? '🏆' : '📚'}
          </div>

          <div className="space-y-1">
            <span className={`text-xs font-bold uppercase tracking-wider ${
              isApproved ? 'text-[#39A900]' : 'text-amber-600 dark:text-amber-400'
            }`}>
              {isApproved ? '¡Aprobación Exitosa!' : 'Puntaje por Debajo del Requerido'}
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
              {score} / 100 Puntos
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              {isApproved 
                ? 'Felicitaciones, has demostrado un dominio solvente de este componente de la inducción SENA.'
                : `Se requiere un mínimo de ${quiz.puntajeMinimoAprobacion}% para certificar este módulo. Puedes repasar y volver a intentarlo.`}
            </p>
          </div>

          {/* Unlocked badge preview */}
          {isApproved && unlockedBadge && (
            <div className="max-w-sm mx-auto p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-[#39A900] text-white flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">{unlockedBadge.nombre}</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300">{unlockedBadge.descripcion}</div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setShowReview(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Revisar Respuestas y Justificaciones</span>
            </button>

            {!isApproved && (
              <button
                onClick={handleRetry}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#00324D] dark:bg-emerald-600 hover:bg-[#002438] dark:hover:bg-emerald-500 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Intentar Nuevamente</span>
              </button>
            )}

            {isApproved && quiz.id === 'quiz-final' && (
              <button
                onClick={onOpenCertificate}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-colors"
              >
                <Award className="w-4 h-4" />
                <span>Ver Constancia de Inducción</span>
              </button>
            )}

            <button
              onClick={onBackToModules}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 rounded-lg transition-colors"
            >
              Volver a Módulos
            </button>
          </div>
        </div>
      )}

      {/* Review Screen */}
      {isSubmitted && showReview && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Retroalimentación Pedagógica ({quiz.preguntas.length} preguntas)
            </h3>
            <button
              onClick={() => setShowReview(false)}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
            >
              Cerrar revisión
            </button>
          </div>

          <div className="space-y-4">
            {quiz.preguntas.map((q, qIndex) => {
              const userAnswer = selectedAnswers[qIndex];
              const isCorrect = userAnswer === q.respuestaCorrecta;

              return (
                <div 
                  key={q.id} 
                  className={`p-6 rounded-2xl border bg-white dark:bg-slate-900 shadow-sm space-y-4 transition-colors ${
                    isCorrect 
                      ? 'border-emerald-200 dark:border-emerald-800' 
                      : 'border-rose-200 dark:border-rose-900'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Pregunta 0{qIndex + 1}</span>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded font-semibold ${
                      isCorrect 
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' 
                        : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                    }`}>
                      {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      <span>{isCorrect ? 'Correcta' : 'Incorrecta'}</span>
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{q.pregunta}</h4>

                  {/* Options breakdown */}
                  <div className="space-y-1.5 text-xs">
                    {q.opciones.map((opt, oIndex) => {
                      const isCorrectChoice = oIndex === q.respuestaCorrecta;
                      const isUserChoice = oIndex === userAnswer;
                      return (
                        <div
                          key={oIndex}
                          className={`p-3 rounded-lg border flex items-center justify-between ${
                            isCorrectChoice
                              ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 font-medium'
                              : isUserChoice
                              ? 'border-rose-300 dark:border-rose-700 bg-rose-50 dark:bg-rose-950/40 text-rose-950 dark:text-rose-200'
                              : 'border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[10px]">{String.fromCharCode(65 + oIndex)}.</span>
                            <span>{opt}</span>
                          </div>
                          {isCorrectChoice && <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">Respuesta Oficial</span>}
                          {isUserChoice && !isCorrectChoice && <span className="text-[10px] text-rose-700 dark:text-rose-400 font-bold">Tu Selección</span>}
                        </div>
                      );
                    })}
                  </div>

                  {/* Legal / Institutional explanation */}
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white block mb-0.5">Fundamentación Formativa:</strong>
                    {q.explicacion}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onBackToModules}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-[#00324D] dark:bg-emerald-600 hover:bg-[#002438] dark:hover:bg-emerald-500 rounded-xl shadow-sm"
            >
              Volver a Módulos de Inducción
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
