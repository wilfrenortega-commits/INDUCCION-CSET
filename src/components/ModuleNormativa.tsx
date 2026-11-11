import React, { useState } from 'react';
import { NORMATIVA_REGULATION, CASE_STUDIES } from '../data/senaData';
import { 
  Scale, 
  ShieldCheck, 
  FileText, 
  GraduationCap, 
  AlertTriangle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ModuleNormativaProps {
  onCompleteModule: (moduleId: string) => void;
  isCompleted: boolean;
  onNavigateToQuiz: (quizId: string) => void;
  resolvedCases: string[];
  onResolveCase: (caseId: string) => void;
}

export const ModuleNormativa: React.FC<ModuleNormativaProps> = ({
  onCompleteModule,
  isCompleted,
  onNavigateToQuiz,
  resolvedCases,
  onResolveCase
}) => {
  const [subTab, setSubTab] = useState<'derechos' | 'deberes' | 'faltas' | 'debidoProceso' | 'simulador'>('derechos');
  const [ambitoFiltro, setAmbitoFiltro] = useState<string>('todos');
  const [activeStep, setActiveStep] = useState<number>(0);
  
  // Case simulator states
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasEvaluated, setHasEvaluated] = useState<boolean>(false);

  const currentCase = CASE_STUDIES[selectedCaseIdx];

  const handleEvaluateCase = () => {
    if (!selectedOptionId) return;
    setHasEvaluated(true);
    onResolveCase(currentCase.id);
  };

  const handleNextCase = () => {
    setHasEvaluated(false);
    setSelectedOptionId(null);
    setSelectedCaseIdx((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const filteredDerechos = ambitoFiltro === 'todos' 
    ? NORMATIVA_REGULATION.derechos 
    : NORMATIVA_REGULATION.derechos.filter(d => d.ambito.toLowerCase() === ambitoFiltro.toLowerCase());

  const filteredDeberes = ambitoFiltro === 'todos' 
    ? NORMATIVA_REGULATION.deberes 
    : NORMATIVA_REGULATION.deberes.filter(d => d.ambito.toLowerCase() === ambitoFiltro.toLowerCase());

  return (
    <div className="space-y-8 pb-12 transition-colors duration-300">
      {/* Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors">
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#00324D] to-[#0A4B6E] dark:from-slate-900 dark:to-[#002438] text-white">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 mb-2">
            <span>Módulo 02</span>
            <span>·</span>
            <span>Normativa & Convivencia</span>
            <span>·</span>
            <span>Acuerdo 007 de 2012</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-2xl text-balance">
            Reglamento del Aprendiz SENA y Debido Proceso
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-2xl">
            Conoce el marco ético y jurídico que salvaguarda tu formación profesional integral: derechos inalienables, deberes de excelencia y la ruta de justicia restaurativa.
          </p>
        </div>

        {/* Sub-tabs */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 px-4 sm:px-6 flex items-center gap-1 sm:gap-2 overflow-x-auto py-2">
          <button
            onClick={() => { setSubTab('derechos'); setAmbitoFiltro('todos'); }}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              subTab === 'derechos' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#39A900]" />
            <span>Derechos</span>
          </button>
          <button
            onClick={() => { setSubTab('deberes'); setAmbitoFiltro('todos'); }}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              subTab === 'deberes' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4 text-[#00324D] dark:text-sky-400" />
            <span>Deberes & Prohibiciones</span>
          </button>
          <button
            onClick={() => setSubTab('faltas')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              subTab === 'faltas' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Faltas y Sanciones</span>
          </button>
          <button
            onClick={() => setSubTab('debidoProceso')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              subTab === 'debidoProceso' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Scale className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Ruta del Debido Proceso</span>
          </button>
          <button
            onClick={() => setSubTab('simulador')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              subTab === 'simulador' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            <span>Simulador de Comités</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Derechos */}
      {subTab === 'derechos' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Catálogo de Derechos del Aprendiz SENA</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Estipulados en el Artículo 7 del Reglamento.</p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg shrink-0">
              {['todos', 'académico', 'jurídico', 'bienestar', 'institucional'].map((ambito) => (
                <button
                  key={ambito}
                  onClick={() => setAmbitoFiltro(ambito)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md capitalize transition-colors ${
                    ambitoFiltro === ambito 
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {ambito}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDerechos.map((der) => (
              <div 
                key={der.id} 
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 mb-2">
                    <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">{der.articulo}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{der.ambito}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">{der.titulo}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{der.descripcion}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-[#39A900]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Garantía institucional</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Deberes y Prohibiciones */}
      {subTab === 'deberes' && (
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Deberes del Aprendiz SENA</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Artículo 9 del Reglamento del Aprendiz (Acuerdo 007 de 2012).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDeberes.map((deb) => (
                <div key={deb.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 transition-colors">
                  <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                    <span className="font-mono text-blue-800 dark:text-blue-400 font-semibold">{deb.articulo}</span>
                    <span className="text-slate-500 dark:text-slate-400">{deb.ambito}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">{deb.titulo}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{deb.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prohibiciones */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Prohibiciones Expresas (Artículo 10)</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Conductas no permitidas que ponen en riesgo la integridad colectiva o acarrean sanciones disciplinarias:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {NORMATIVA_REGULATION.prohibiciones.map((proh, pIdx) => (
                <div key={pIdx} className="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 flex items-start gap-3 text-xs text-slate-800 dark:text-slate-200">
                  <span className="w-5 h-5 rounded-full bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-300 flex items-center justify-center font-bold shrink-0 text-[10px]">
                    ✕
                  </span>
                  <span className="leading-relaxed">{proh}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Faltas y Sanciones */}
      {subTab === 'faltas' && (
        <div className="space-y-8">
          {/* Tipos de Faltas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-[#00324D] dark:text-blue-400 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Falta Académica</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Está relacionada directamente con el compromiso del aprendiz frente a la apropiación y transferencia de conocimientos, desarrollo de competencias, entrega de evidencias y asistencia a sesiones presenciales o virtuales.
              </p>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                <strong className="text-slate-900 dark:text-white">Ejemplos comunes:</strong> No entrega reiterada de evidencias de aprendizaje, inasistencia injustificada de más de 3 días consecutivos, plagio de código o documentos.
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 flex items-center justify-center font-bold">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Falta Disciplinaria</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Está relacionada con el comportamiento del aprendiz, la convivencia armónica, el respeto mutuo, el cuidado de los recursos institucionales y las normas de seguridad y salud en el trabajo.
              </p>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                <strong className="text-slate-900 dark:text-white">Ejemplos comunes:</strong> Agresiones verbales o físicas, daño doloso a maquinaria o instalaciones, suplantación en plataformas, ingreso bajo efectos de alcohol.
              </div>
            </div>
          </div>

          {/* Grados de las faltas */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-colors">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Grados de Calificación de las Faltas</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">El Comité evalúa atenuantes (confesión, buen récord) y agravantes (premeditación, reincidencia).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NORMATIVA_REGULATION.clasificacionFaltas.grados.map((g, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">Nivel 0{idx + 1}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                      idx === 0 
                        ? 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300' 
                        : idx === 1 
                        ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300' 
                        : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                    }`}>
                      {g.grado}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Falta {g.grado}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{g.descripcion}</p>
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                    <strong className="block text-slate-900 dark:text-white mb-1">Medida aplicada:</strong>
                    {g.medidaSugerida}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Ruta del Debido Proceso */}
      {subTab === 'debidoProceso' && (
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 transition-colors">
          <div>
            <span className="text-xs font-semibold text-[#00324D] dark:text-sky-400 uppercase tracking-wider">Garantía Constitucional</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">Ruta del Debido Proceso en el SENA</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Nadie puede ser sancionado en el SENA sin antes ser citado, escuchado en descargos y evaluadas sus pruebas por el Comité de Evaluación y Seguimiento.
            </p>
          </div>

          {/* Sequential Step Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {NORMATIVA_REGULATION.debidoProcesoPasos.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  activeStep === idx 
                    ? 'border-[#39A900] bg-emerald-50/60 dark:bg-emerald-950/40 ring-2 ring-[#39A900]/20' 
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono text-[#39A900] font-bold">Paso 0{p.paso}</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1 truncate">{p.titulo}</div>
              </button>
            ))}
          </div>

          {/* Active step spotlight */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#39A900] text-white text-xs font-bold">
                  Paso 0{NORMATIVA_REGULATION.debidoProcesoPasos[activeStep].paso} de 06
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Responsable: {NORMATIVA_REGULATION.debidoProcesoPasos[activeStep].actor}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {NORMATIVA_REGULATION.debidoProcesoPasos[activeStep].titulo}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                {NORMATIVA_REGULATION.debidoProcesoPasos[activeStep].descripcion}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                className="px-3 py-1.5 text-xs font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg disabled:opacity-40 hover:bg-white dark:hover:bg-slate-700"
              >
                Anterior
              </button>
              <button
                disabled={activeStep === NORMATIVA_REGULATION.debidoProcesoPasos.length - 1}
                onClick={() => setActiveStep(prev => Math.min(NORMATIVA_REGULATION.debidoProcesoPasos.length - 1, prev + 1))}
                className="px-3 py-1.5 text-xs font-medium text-white bg-[#00324D] dark:bg-emerald-600 rounded-lg disabled:opacity-40 hover:bg-[#002438] dark:hover:bg-emerald-500"
              >
                Siguiente Paso
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Simulador de Casos */}
      {subTab === 'simulador' && (
        <div className="space-y-6">
          {/* Header & Case Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <div>
              <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Taller de Rol</span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">Simulador de Comité de Evaluación y Seguimiento</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Asume el papel de miembro del comité. Analiza los hechos, califica la falta y dictamina la medida correcta.
              </p>
            </div>

            {/* Case selector buttons */}
            <div className="flex items-center gap-2 shrink-0">
              {CASE_STUDIES.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCaseIdx(i);
                    setSelectedOptionId(null);
                    setHasEvaluated(false);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                    selectedCaseIdx === i
                      ? 'border-[#39A900] bg-emerald-50 dark:bg-emerald-950/40 text-slate-900 dark:text-white font-bold'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  Caso {i + 1}
                  {resolvedCases.includes(c.id) && ' ✓'}
                </button>
              ))}
            </div>
          </div>

          {/* Current Case Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Case Dossier */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-colors">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">Expediente Disciplinario</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{currentCase.titulo}</h3>
                </div>
                <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {currentCase.tipoFaltaCandidata}
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl space-y-1">
                  <div className="text-slate-400 dark:text-slate-500">Aprendiz Imputado:</div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">{currentCase.aprendizInvolucrado}</div>
                  <div className="text-slate-600 dark:text-slate-400">{currentCase.programa}</div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Descripción de los hechos:</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm bg-slate-50/50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    "{currentCase.descripcionCaso}"
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Antecedentes formativos:</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs">{currentCase.antecedentes}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Pruebas aportadas al expediente:</h4>
                  <ul className="space-y-1.5">
                    {currentCase.pruebasAportadas.map((p, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <span className="text-[#39A900] font-bold">›</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Committee Verdict Choice */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 transition-colors">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Scale className="w-5 h-5 text-[#00324D] dark:text-sky-400" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Voto y Deliberación del Comité</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  Selecciona la decisión que mejor responde a la proporcionalidad del reglamento y los principios formativos del SENA:
                </p>

                <div className="space-y-3">
                  {currentCase.opcionesSancion.map((opt) => (
                    <button
                      key={opt.id}
                      disabled={hasEvaluated}
                      onClick={() => setSelectedOptionId(opt.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all ${
                        selectedOptionId === opt.id
                          ? 'border-[#00324D] dark:border-sky-400 bg-slate-50 dark:bg-slate-800 ring-2 ring-[#00324D]/10 dark:ring-sky-400/20'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Calificación: {opt.calificacionFalta}</span>
                        <span className="font-mono text-slate-500 dark:text-slate-400">{opt.medida}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">{opt.decision}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback Section */}
              {hasEvaluated && selectedOptionId && (
                <div className="space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  {(() => {
                    const chosen = currentCase.opcionesSancion.find(o => o.id === selectedOptionId);
                    if (!chosen) return null;
                    return (
                      <>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                            chosen.esCorrecta 
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' 
                              : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                          }`}>
                            {chosen.esCorrecta ? 'Decisión Conforme al Reglamento ✓' : 'Decisión Incorrecta ✕'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {chosen.argumentacionJuridica}
                        </p>
                      </>
                    );
                  })()}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                {!hasEvaluated ? (
                  <button
                    disabled={!selectedOptionId}
                    onClick={handleEvaluateCase}
                    className="w-full py-2.5 text-xs font-semibold text-white bg-[#00324D] dark:bg-emerald-600 hover:bg-[#002438] dark:hover:bg-emerald-500 disabled:opacity-40 rounded-xl transition-all shadow-sm"
                  >
                    Emitir Dictamen del Comité
                  </button>
                ) : (
                  <button
                    onClick={handleNextCase}
                    className="w-full py-2.5 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Siguiente Caso del Simulador</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Module complete footer */}
      <div className="p-6 bg-slate-900 dark:bg-slate-900 border border-slate-800 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-white">¿Conoces tus derechos y deberes?</h4>
          <p className="text-xs text-slate-300 mt-0.5">
            Presenta el Quiz de Normativa y Reglamento para validar este módulo.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {!isCompleted && (
            <button
              onClick={() => onCompleteModule('mod-normativa')}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-colors whitespace-nowrap"
            >
              Marcar lectura completada
            </button>
          )}

          <button
            onClick={() => onNavigateToQuiz('quiz-normativa')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Presentar Quiz de Normativa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
