import React, { useState } from 'react';
import { SENA_COLLAB_IMAGE } from '../data/senaData';
import { 
  Laptop, 
  Layers, 
  Heart, 
  Briefcase, 
  Rocket, 
  BookOpen, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface ModuleEcosystemProps {
  onCompleteModule: (moduleId: string) => void;
  isCompleted: boolean;
  onNavigateToQuiz: (quizId: string) => void;
}

export const ModuleEcosystem: React.FC<ModuleEcosystemProps> = ({
  onCompleteModule,
  isCompleted,
  onNavigateToQuiz
}) => {
  const [activeTab, setActiveTab] = useState<'plataformas' | 'etapas' | 'bienestar' | 'emprendimiento'>('plataformas');

  return (
    <div className="space-y-8 pb-12 transition-colors duration-300">
      {/* Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors">
        <div className="relative h-48 md:h-60 bg-slate-900">
          <img 
            src={SENA_COLLAB_IMAGE} 
            alt="Aprendices colaborando en laboratorio SENA" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 mb-2">
              <span>Módulo 03</span>
              <span>·</span>
              <span>Ecosistema Tecnológico & Servicios</span>
              <span>·</span>
              <span>35 min</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-2xl text-balance">
              Herramientas Digitales, Etapas Formativas y Bienestar SENA
            </h1>
            <p className="text-sm text-slate-200 mt-1 max-w-xl">
              Familiarízate con las plataformas donde consultarás notas y guías, las fases de tu proyecto y los beneficios integrales a los que tienes derecho.
            </p>
          </div>
        </div>

        {/* Sub-nav tabs */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 px-4 sm:px-6 flex items-center gap-1 sm:gap-2 overflow-x-auto py-2">
          <button
            onClick={() => setActiveTab('plataformas')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'plataformas' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Laptop className="w-4 h-4 text-[#39A900]" />
            <span>Plataformas Digitales</span>
          </button>
          <button
            onClick={() => setActiveTab('etapas')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'etapas' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4 text-[#00324D] dark:text-sky-400" />
            <span>Etapas Lectiva & Productiva</span>
          </button>
          <button
            onClick={() => setActiveTab('bienestar')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'bienestar' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Heart className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            <span>Bienestar al Aprendiz</span>
          </button>
          <button
            onClick={() => setActiveTab('emprendimiento')}
            className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'emprendimiento' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Rocket className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Sennova & Empleo</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Plataformas Digitales */}
      {activeTab === 'plataformas' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider">Campus Virtual</span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">Ecosistema Digital del Aprendiz SENA</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Las tres llaves tecnológicas que utilizarás durante toda tu estancia formativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ZAJUNA */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-[#39A900] flex items-center justify-center font-bold">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">ZAJUNA (LMS)</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                El Ambiente Virtual de Aprendizaje donde accedes a tus guías de aprendizaje, foros de discusión técnica, entrega de evidencias y sesiones sincrónicas con instructores.
              </p>
              <div className="pt-2 text-xs font-medium text-slate-700 dark:text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subida de evidencias y proyectos</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Calificaciones y retroalimentaciones</span>
                </div>
              </div>
            </div>

            {/* SOFIA PLUS */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-[#00324D] dark:text-blue-400 flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">SOFIA Plus</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Sistema de Gestión Académica donde consultas el estado formal de tu matrícula, descargas certificados de estudio oficiales, revisas juicios evaluativos (Aprobado / No Aprobado) y gestionas traslados.
              </p>
              <div className="pt-2 text-xs font-medium text-slate-700 dark:text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 text-blue-800 dark:text-blue-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Constancias y certificados con QR</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-800 dark:text-blue-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Consulta de Resultados de Aprendizaje (RAP)</span>
                </div>
              </div>
            </div>

            {/* Correo y Biblioteca */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Correo SoySENA & SBS</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Tu cuenta oficial de correo (@misena.edu.co / @soysena) con almacenamiento en la nube, herramientas ofimáticas y acceso irrestricto al Sistema de Bibliotecas del SENA con miles de libros científicos.
              </p>
              <div className="pt-2 text-xs font-medium text-slate-700 dark:text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Comunicaciones formales de Centro</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Bases de datos bibliográficas Scopus/eBook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Etapas Formativas */}
      {activeTab === 'etapas' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Estructura Secuencial de la Formación</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Tu proceso se divide en dos fases indispensables para obtener tu título de Técnico o Tecnólogo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950 text-[#39A900] text-xs font-bold">Fase 1</span>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">Aulas y Talleres</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Etapa Lectiva</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Periodo durante el cual el aprendiz adquiere y apropia los conocimientos teóricos, metodológicos y prácticos mediante el desarrollo de proyectos formativos guiados por los instructores.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                <div><strong>Enfoque pedagógico:</strong> Formación por proyectos e investigación aplicada.</div>
                <div><strong>Evaluación:</strong> Juicios valorativos de Resultados de Aprendizaje (Aprobado / Por Mejorar).</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-950 text-[#00324D] dark:text-blue-400 text-xs font-bold">Fase 2</span>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">Sector Empresarial</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Etapa Productiva</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Momento en el que el aprendiz aplica, complementa y consolida sus competencias laborales en un escenario real de trabajo productivo.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                <div><strong>Modalidades válidas:</strong> Contrato de Aprendizaje, Pasantía, Vínculo Laboral, Proyecto Productivo Empresarial o Monitoría.</div>
                <div><strong>Seguimiento:</strong> Visitas periódicas y concertación de bitácoras con el instructor de seguimiento.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Bienestar al Aprendiz */}
      {activeTab === 'bienestar' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">Acompañamiento Integral</span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">Servicios de Bienestar al Aprendiz</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              El SENA no solo forma técnicos y tecnólogos, sino seres humanos íntegros, saludables y líderes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                titulo: 'Salud Integral',
                desc: 'Primeros auxilios en Centro, talleres de salud mental, prevención y estilos de vida saludables.',
                color: 'text-emerald-700 dark:text-emerald-400'
              },
              {
                titulo: 'Deporte y Recreación',
                desc: 'Torneos deportivos intercentros (fútbol, baloncesto, voleibol, atletismo) y acondicionamiento físico.',
                color: 'text-blue-700 dark:text-blue-400'
              },
              {
                titulo: 'Cultura y Arte',
                desc: 'Grupos de danzas, música, teatro y expresiones artísticas para celebrar la identidad colombiana.',
                color: 'text-amber-700 dark:text-amber-400'
              },
              {
                titulo: 'Apoyos de Sostenimiento',
                desc: 'Convocatorias semestrales para aprendices en condición de vulnerabilidad socioeconómica y monitorías.',
                color: 'text-rose-700 dark:text-rose-400'
              }
            ].map((b, i) => (
              <div key={i} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-2 transition-colors">
                <h4 className={`text-sm font-bold ${b.color}`}>{b.titulo}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Sennova y Empleo */}
      {activeTab === 'emprendimiento' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 transition-colors">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-[#39A900]" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">SENNOVA (Investigación & Desarrollo)</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                El Sistema de Investigación, Desarrollo Tecnológico e Innovación del SENA. Permite a los aprendices participar en semilleros de investigación aplicada, TecnoParques y laboratorios de vanguardia para patentar y crear soluciones técnicas para el país.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 transition-colors">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#00324D] dark:text-sky-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Fondo Emprender & APE</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                La Agencia Pública de Empleo (APE) conecta a los aprendices y egresados con miles de vacantes laborales certificadas. Además, Fondo Emprender otorga capital semilla no reembolsable para crear empresas de alto impacto.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Module Complete Action */}
      <div className="p-6 bg-slate-900 dark:bg-slate-900 border border-slate-800 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-white">¿Listo para la evaluación final?</h4>
          <p className="text-xs text-slate-300 mt-0.5">
            Has recorrido la identidad, normativa y ecosistema. Realiza el examen final para obtener tu constancia oficial.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {!isCompleted && (
            <button
              onClick={() => onCompleteModule('mod-ecosistema')}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-colors whitespace-nowrap"
            >
              Marcar completado
            </button>
          )}

          <button
            onClick={() => onNavigateToQuiz('quiz-final')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Ir al Examen Final de Inducción</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
