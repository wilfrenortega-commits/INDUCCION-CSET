import React from 'react';
import { ApprenticeProgress } from '../types/induction';
import { QUIZZES, BADGES } from '../data/senaData';
import { Award, ArrowRight, CheckCircle2, RotateCcw, AlertCircle } from 'lucide-react';
import { SenaEscudo } from './SenaEscudo';

interface ModuleEvaluacionProps {
  progress: ApprenticeProgress;
  onNavigateToQuiz: (quizId: string) => void;
  onOpenCertificate: () => void;
}

export const ModuleEvaluacion: React.FC<ModuleEvaluacionProps> = ({
  progress,
  onNavigateToQuiz,
  onOpenCertificate
}) => {
  const isFinalApproved = Boolean(progress.quizzesCompletados['quiz-final']?.aprobado);

  const quizList = [
    {
      id: 'quiz-identidad',
      titulo: 'Desafío 1: Identidad y Símbolos',
      preguntas: 5,
      descripcion: 'Historia, escudo, bandera, himno y valores éticos.',
      insignia: 'badge-identidad'
    },
    {
      id: 'quiz-normativa',
      titulo: 'Desafío 2: Normativa y Reglamento',
      preguntas: 5,
      descripcion: 'Derechos, deberes, prohibiciones y debido proceso.',
      insignia: 'badge-normativa'
    },
    {
      id: 'quiz-final',
      titulo: 'Examen Final Integral de Inducción',
      preguntas: 10,
      descripcion: 'Evaluación comprensiva para habilitar tu certificación oficial de inducción SENA.',
      insignia: 'badge-certificacion'
    }
  ];

  return (
    <div className="space-y-8 pb-12 transition-colors duration-300">
      {/* Banner */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#39A900] uppercase tracking-wider mb-1">
          <span>Evaluación & Validación Formativa</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Cuestionarios Interactivos y Certificación de Inducción
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
          Cada cuestionario ofrece retroalimentación pedagógica inmediata sustentada en el Reglamento del Aprendiz. Al superar el examen final con un puntaje mínimo del 80%, se generará tu Constancia Oficial Acreditada.
        </p>
      </div>

      {/* Quizzes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quizList.map((q) => {
          const completedData = progress.quizzesCompletados[q.id];
          const hasPassed = completedData?.aprobado;
          const isFinal = q.id === 'quiz-final';

          return (
            <div 
              key={q.id}
              className={`p-6 rounded-2xl border bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between space-y-5 transition-all ${
                isFinal 
                  ? 'border-amber-300 dark:border-amber-500/50 ring-2 ring-amber-100 dark:ring-amber-950/40' 
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400 dark:text-slate-500 font-semibold">{q.preguntas} preguntas</span>
                  {completedData ? (
                    <span className={`inline-flex items-center gap-1 font-semibold ${
                      hasPassed ? 'text-[#39A900]' : 'text-rose-600 dark:text-rose-400'
                    }`}>
                      {hasPassed ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                      <span>{hasPassed ? 'Aprobado' : 'No superado'}</span>
                    </span>
                  ) : (
                    <span className="text-slate-400 dark:text-slate-500">Sin presentar</span>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  {q.id === 'quiz-identidad' && (
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 p-1 border border-slate-200 dark:border-slate-700">
                      <SenaEscudo className="w-7 h-7 object-contain" alt="Escudo SENA" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{q.titulo}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{q.descripcion}</p>
                  </div>
                </div>

                {completedData && (
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700 text-xs flex items-center justify-between font-mono">
                    <span className="text-slate-500 dark:text-slate-400">Último puntaje:</span>
                    <strong className="text-slate-900 dark:text-white text-sm tabular-nums">{completedData.puntaje} / 100</strong>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onNavigateToQuiz(q.id)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm ${
                    hasPassed
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      : isFinal
                      ? 'bg-emerald-400 text-slate-900 hover:bg-emerald-300'
                      : 'bg-[#00324D] dark:bg-emerald-600 text-white hover:bg-[#002438] dark:hover:bg-emerald-500'
                  }`}
                >
                  {hasPassed ? (
                    <>
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Repetir evaluación</span>
                    </>
                  ) : (
                    <>
                      <span>Iniciar evaluación</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Official Certificate Card Callout */}
      <div className={`p-8 rounded-3xl border transition-all ${
        isFinalApproved 
          ? 'bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white border-emerald-500/40 shadow-lg' 
          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm text-slate-900 dark:text-white'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Constancia Oficial de Inducción</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight">
              {isFinalApproved 
                ? '¡Felicitaciones! Has culminado tu proceso de inducción institucional'
                : 'Completa el Examen Final para desbloquear tu Constancia'}
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${isFinalApproved ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'}`}>
              {isFinalApproved 
                ? 'Tu constancia oficial de aprobación con código de verificación ha sido generada exitosamente. Puedes visualizarla, imprimirla o guardarla en PDF para tu portafolio de evidencias.'
                : 'El examen integral evalúa de manera equitativa la identidad, los símbolos patrios e institucionales, el debido proceso y las plataformas SENA.'}
            </p>
          </div>

          <div className="shrink-0">
            {isFinalApproved ? (
              <button
                onClick={onOpenCertificate}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md active:scale-95"
              >
                <Award className="w-4 h-4" />
                <span>Abrir e Imprimir Constancia</span>
              </button>
            ) : (
              <button
                onClick={() => onNavigateToQuiz('quiz-final')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#00324D] dark:bg-emerald-600 hover:bg-[#002438] dark:hover:bg-emerald-500 transition-all shadow-sm"
              >
                <span>Presentar Examen Integral Ahora</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
