import React from 'react';
import { ApprenticeProgress } from '../types/induction';
import { INDUCTION_MODULES, BADGES, SENA_CAMPUS_IMAGE } from '../data/senaData';
import { 
  Sparkles, 
  Scale, 
  Laptop, 
  Award, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  FileCheck
} from 'lucide-react';
import { SenaEscudo } from './SenaEscudo';

interface ApprenticeHomeProps {
  progress: ApprenticeProgress;
  onSelectTab: (tab: string) => void;
  onOpenCertificate: () => void;
  onNavigateToQuiz: (quizId: string) => void;
}

export const ApprenticeHome: React.FC<ApprenticeHomeProps> = ({
  progress,
  onSelectTab,
  onOpenCertificate,
  onNavigateToQuiz
}) => {
  const isFinalApproved = Boolean(progress.quizzesCompletados['quiz-final']?.aprobado);

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#39A900]" />;
      case 'Scale': return <Scale className="w-5 h-5 text-[#00324D] dark:text-sky-400" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getModuleRoute = (modId: string) => {
    switch (modId) {
      case 'mod-identidad': return 'identidad';
      case 'mod-normativa': return 'normativa';
      case 'mod-ecosistema': return 'ecosistema';
      case 'mod-evaluacion': return 'evaluacion';
      default: return 'inicio';
    }
  };

  return (
    <div className="space-y-8 pb-12 transition-colors duration-300">
      {/* Hero Welcome Banner */}
      <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
        <img 
          src={SENA_CAMPUS_IMAGE} 
          alt="SENA Campus" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40" />

        <div className="relative p-6 sm:p-10 text-white space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-400 font-medium">
            <span>Ficha {progress.ficha}</span>
            <span>·</span>
            <span>{progress.programa}</span>
            <span>·</span>
            <span>{progress.regional}</span>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
              ¡Bienvenido a tu Proceso de Inducción SENA, {progress.nombre.split(' ')[0]}!
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-2 leading-relaxed">
              Inicias tu ruta formativa en la institución educativa más querida de Colombia. Domina los principios institucionales, apropia el reglamento del aprendiz y prepárate para transformar el sector productivo del país.
            </p>
          </div>

          {/* Global Induction Progress Bar */}
          <div className="max-w-xl bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 space-y-2">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-slate-200">Avance de Inducción Institucional</span>
              <span className="font-mono text-emerald-400 font-bold text-sm tabular-nums">
                {progress.progresoGlobal}%
              </span>
            </div>
            <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#39A900] rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progress.progresoGlobal}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-300 pt-1">
              <span>{progress.modulosCompletados.length} de 4 Módulos Aprobados</span>
              {isFinalApproved ? (
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Constancia Habilitada</span>
                </span>
              ) : (
                <span>Requisito: Examen Final ≥ 80%</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1 transition-colors">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Estado del Aprendiz</span>
          <div className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${
              progress.estado === 'Completado' ? 'bg-[#39A900]' : 'bg-amber-500'
            }`} />
            <span>{progress.estado}</span>
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">Último acceso: {progress.ultimoAcceso}</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1 transition-colors">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Quizzes Calificados</span>
          <div className="text-xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
            {Object.keys(progress.quizzesCompletados).length} / 3
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">Evaluaciones superadas</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1 transition-colors">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Casos de Comité Resueltos</span>
          <div className="text-xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
            {progress.casosCompletados.length} / 3
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">Dilemas éticos formativos</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1 transition-colors">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Insignias Ganadas</span>
          <div className="text-xl font-bold font-mono text-[#39A900] tabular-nums">
            {progress.insignias.length} / {BADGES.length}
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">Medallas de excelencia</span>
        </div>
      </div>

      {/* 4 Core Induction Modules Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Ruta de Módulos de Inducción</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Recorre cada estación formativa para completar tu proceso.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INDUCTION_MODULES.map((mod, index) => {
            const isCompleted = progress.modulosCompletados.includes(mod.id);
            const route = getModuleRoute(mod.id);

            return (
              <div 
                key={mod.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-400 dark:text-slate-500 font-semibold">Módulo 0{index + 1}</span>
                    <span className={`inline-flex items-center gap-1 font-semibold ${
                      isCompleted ? 'text-[#39A900]' : 'text-slate-400 dark:text-slate-500'
                    }`}>
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Completado</span>
                        </>
                      ) : (
                        <span>Pendiente</span>
                      )}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden p-1.5">
                      {mod.id === 'mod-identidad' ? (
                        <SenaEscudo className="w-7 h-7 object-contain" alt="Escudo SENA" />
                      ) : (
                        getModuleIcon(mod.icono)
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#39A900] dark:group-hover:text-[#39A900] transition-colors">
                        {mod.titulo}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {mod.descripcion}
                      </p>
                    </div>
                  </div>

                  {/* Units preview */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {mod.unidades.slice(0, 3).map((u) => (
                      <div key={u.id} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                        <span className="truncate">{u.titulo}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{mod.duracionEstimada}</span>
                  </span>

                  <button
                    onClick={() => onSelectTab(route)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00324D] dark:text-emerald-400 hover:text-[#39A900] dark:hover:text-emerald-300 transition-colors"
                  >
                    <span>{isCompleted ? 'Repasar módulo' : 'Iniciar módulo'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Official Certificate & Induction Checklist Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Official Certificate Banner */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 transition-colors">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#39A900]">
              <FileCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Certificación de Etapa</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Constancia Oficial de Inducción SENA</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Documento digital formal con código único de verificación institucional, que certifica que el aprendiz ha cumplido a cabalidad con la jornada de inducción, normativa institucional y conocimiento del Sistema de Formación Profesional Integral.
            </p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-2">
            <div className="flex items-center justify-between">
              <span>Examen de Inducción:</span>
              <strong className="text-slate-900 dark:text-white font-mono">
                {progress.quizzesCompletados['quiz-final'] 
                  ? `${progress.quizzesCompletados['quiz-final'].puntaje}% Aprobado` 
                  : 'Pendiente'}
              </strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Subdirección de Centro:</span>
              <span className="text-slate-600 dark:text-slate-400">{progress.centro}</span>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-3">
            {isFinalApproved ? (
              <button
                onClick={onOpenCertificate}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-sm transition-all"
              >
                <Award className="w-4 h-4" />
                <span>Ver y Descargar Constancia Oficial</span>
              </button>
            ) : (
              <button
                onClick={() => onNavigateToQuiz('quiz-final')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#00324D] dark:bg-emerald-600 hover:bg-[#002438] dark:hover:bg-emerald-500 rounded-xl shadow-sm transition-all"
              >
                <span>Presentar Examen Final para Certificar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Right: Badges Showcase */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Insignias Obtenidas</h3>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
              {progress.insignias.length} / {BADGES.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BADGES.map((b) => {
              const hasBadge = progress.insignias.includes(b.id);
              return (
                <div 
                  key={b.id}
                  className={`p-3 rounded-xl border transition-all text-xs space-y-1 ${
                    hasBadge 
                      ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/30' 
                      : 'border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 opacity-40'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{hasBadge ? '🏅' : '🔒'}</span>
                    <strong className="text-slate-900 dark:text-white font-semibold truncate">{b.nombre}</strong>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">{b.descripcion}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
