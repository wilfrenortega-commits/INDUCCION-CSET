import React, { useState, useEffect } from 'react';
import { UserRole, ApprenticeProgress } from './types/induction';
import { 
  MOCK_APPRENTICE, 
  MOCK_COHORT_APPRENTICES 
} from './data/senaData';
import { Header } from './components/Header';
import { ApprenticeHome } from './components/ApprenticeHome';
import { ModuleSymbols } from './components/ModuleSymbols';
import { ModuleNormativa } from './components/ModuleNormativa';
import { ModuleEcosystem } from './components/ModuleEcosystem';
import { ModuleEvaluacion } from './components/ModuleEvaluacion';
import { QuizView } from './components/QuizView';
import { DashboardInstructor } from './components/DashboardInstructor';
import { CertificateModal } from './components/CertificateModal';
import { GlossaryModal } from './components/GlossaryModal';
import { VideoManualModal } from './components/VideoManualModal';
import { LandingPage } from './components/LandingPage';
import { Sun, Moon } from 'lucide-react';
import { SenaLogo } from './components/SenaLogo';

const STORAGE_KEY_APPRENTICE = 'sena_induction_apprentice_v1';
const STORAGE_KEY_COHORT = 'sena_induction_cohort_v1';
const STORAGE_KEY_THEME = 'sena_induction_theme_v1';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'portal'>('landing');
  const [userRole, setUserRole] = useState<UserRole>('aprendiz');
  const [currentTab, setCurrentTab] = useState<string>('inicio');
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);

  // Theme & blur transition state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_THEME);
      if (saved === 'dark' || saved === 'light') return saved;
      if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // fallback
    }
    return 'light';
  });

  const [isThemeTransitioning, setIsThemeTransitioning] = useState<boolean>(false);

  // Modals
  const [showCertificateModal, setShowCertificateModal] = useState<boolean>(false);
  const [certificateApprentice, setCertificateApprentice] = useState<ApprenticeProgress | null>(null);
  const [showGlossaryModal, setShowGlossaryModal] = useState<boolean>(false);
  const [showVideoManualModal, setShowVideoManualModal] = useState<boolean>(false);

  // Apprentice progress state (persisted in localStorage)
  const [progress, setProgress] = useState<ApprenticeProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_APPRENTICE);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return MOCK_APPRENTICE;
  });

  // Cohort list for instructor (persisted in localStorage)
  const [cohortList, setCohortList] = useState<ApprenticeProgress[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COHORT);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return MOCK_COHORT_APPRENTICES;
  });

  // Keep html class in sync with theme state
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem(STORAGE_KEY_THEME, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_APPRENTICE, JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COHORT, JSON.stringify(cohortList));
    } catch {
      // ignore
    }
  }, [cohortList]);

  // Recalculate progress global
  const recalculateProgress = (base: ApprenticeProgress): ApprenticeProgress => {
    const modScore = Math.min(4, base.modulosCompletados.length) * 10;
    const quizzesPassedCount = Object.values(base.quizzesCompletados).filter(q => q.aprobado).length;
    const quizScore = Math.min(3, quizzesPassedCount) * 10;
    const caseScore = Math.min(3, base.casosCompletados.length) * 10;

    const total = Math.min(100, modScore + quizScore + caseScore);
    const isCompleted = total >= 100 || Boolean(base.quizzesCompletados['quiz-final']?.aprobado);

    const updatedBadges = [...base.insignias];
    if (isCompleted && !updatedBadges.includes('badge-certificacion')) {
      updatedBadges.push('badge-certificacion');
    }

    return {
      ...base,
      progresoGlobal: total,
      estado: isCompleted ? 'Completado' : 'En Progreso',
      insignias: updatedBadges
    };
  };

  const handleCompleteModule = (moduleId: string) => {
    setProgress(prev => {
      if (prev.modulosCompletados.includes(moduleId)) return prev;
      const nextModules = [...prev.modulosCompletados, moduleId];
      return recalculateProgress({
        ...prev,
        modulosCompletados: nextModules
      });
    });
  };

  const handleResolveCase = (caseId: string) => {
    setProgress(prev => {
      const nextCases = prev.casosCompletados.includes(caseId)
        ? prev.casosCompletados
        : [...prev.casosCompletados, caseId];
      
      const nextBadges = [...prev.insignias];
      if (nextCases.length >= 2 && !nextBadges.includes('badge-simulador')) {
        nextBadges.push('badge-simulador');
      }

      return recalculateProgress({
        ...prev,
        casosCompletados: nextCases,
        insignias: nextBadges
      });
    });
  };

  const handleFinishQuiz = (quizId: string, score: number, passed: boolean) => {
    setProgress(prev => {
      const updatedQuizzes = {
        ...prev.quizzesCompletados,
        [quizId]: {
          puntaje: score,
          maxPuntaje: 100,
          aprobado: passed,
          fecha: new Date().toLocaleDateString('es-CO')
        }
      };

      const updatedBadges = [...prev.insignias];
      if (passed) {
        if (quizId === 'quiz-identidad' && !updatedBadges.includes('badge-identidad')) {
          updatedBadges.push('badge-identidad');
        }
        if (quizId === 'quiz-normativa' && !updatedBadges.includes('badge-normativa')) {
          updatedBadges.push('badge-normativa');
        }
        if (quizId === 'quiz-final') {
          if (!updatedBadges.includes('badge-certificacion')) {
            updatedBadges.push('badge-certificacion');
          }
          if (!prev.modulosCompletados.includes('mod-evaluacion')) {
            prev.modulosCompletados.push('mod-evaluacion');
          }
        }
      }

      const updated = recalculateProgress({
        ...prev,
        quizzesCompletados: updatedQuizzes,
        insignias: updatedBadges
      });

      setCohortList(list => list.map(item => item.id === updated.id ? updated : item));
      return updated;
    });
  };

  const handleUpdateCohortApprentice = (updatedApprentice: ApprenticeProgress) => {
    setCohortList(list => list.map(item => item.id === updatedApprentice.id ? updatedApprentice : item));
    if (updatedApprentice.id === progress.id) {
      setProgress(updatedApprentice);
    }
  };

  const handleToggleRole = () => {
    if (userRole === 'aprendiz') {
      setUserRole('instructor');
      setCurrentTab('seguimiento');
      setActiveQuizId(null);
    } else {
      setUserRole('aprendiz');
      setCurrentTab('inicio');
    }
  };

  // Theme switch handler with blur effect transition
  const handleToggleTheme = () => {
    // 1. Trigger blur transition on the screen
    setIsThemeTransitioning(true);

    // 2. Midway through blur (180ms), switch class and theme
    window.setTimeout(() => {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      setTheme(nextTheme);
    }, 180);

    // 3. Smoothly fade out the blur and return to crisp focus
    window.setTimeout(() => {
      setIsThemeTransitioning(false);
    }, 550);
  };

  const handleNavigateToQuiz = (quizId: string) => {
    setActiveQuizId(quizId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToModules = () => {
    setActiveQuizId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCertificate = () => {
    setCertificateApprentice(progress);
    setShowCertificateModal(true);
  };

  const handleOpenCohortCertificate = (app: ApprenticeProgress) => {
    setCertificateApprentice(app);
    setShowCertificateModal(true);
  };

  const handleSelectApprenticeAndEnter = (apprentice: ApprenticeProgress) => {
    setProgress(apprentice);
    setUserRole('aprendiz');
    setCurrentTab('inicio');
    setActiveQuizId(null);
    setCurrentView('portal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectInstructorAndEnter = () => {
    setUserRole('instructor');
    setCurrentTab('seguimiento');
    setActiveQuizId(null);
    setCurrentView('portal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRegisterNewApprentice = (newApprentice: ApprenticeProgress) => {
    setCohortList(prev => [newApprentice, ...prev]);
    setProgress(newApprentice);
  };

  const handleReturnToLanding = () => {
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasCertificate = Boolean(
    progress.estado === 'Completado' || 
    progress.quizzesCompletados['quiz-final']?.aprobado
  );

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-300 screen-blur-container ${
      isThemeTransitioning ? 'theme-transitioning' : ''
    }`}>
      {/* Visual atmospheric blur veil during transition */}
      {isThemeTransitioning && (
        <div 
          aria-hidden="true"
          className="fixed inset-0 z-50 pointer-events-none backdrop-blur-md bg-black/5 dark:bg-white/5 transition-opacity duration-300"
        />
      )}

      {currentView === 'landing' ? (
        <LandingPage
          cohortList={cohortList}
          activeApprentice={progress}
          onSelectApprenticeAndEnter={handleSelectApprenticeAndEnter}
          onSelectInstructorAndEnter={handleSelectInstructorAndEnter}
          onRegisterNewApprentice={handleRegisterNewApprentice}
          onOpenGlossary={() => setShowGlossaryModal(true)}
          onOpenVideoManual={() => setShowVideoManualModal(true)}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />
      ) : (
        <>
          {/* Top Bar Header with Dark Mode Toggle in top right */}
          <Header
            currentTab={activeQuizId ? 'evaluacion' : currentTab}
            onSelectTab={(tab) => {
              setActiveQuizId(null);
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            userRole={userRole}
            onToggleRole={handleToggleRole}
            progressPercentage={progress.progresoGlobal}
            onOpenCertificate={handleOpenCertificate}
            onOpenGlossary={() => setShowGlossaryModal(true)}
            onOpenVideoManual={() => setShowVideoManualModal(true)}
            hasCertificate={hasCertificate}
            theme={theme}
            onToggleTheme={handleToggleTheme}
            currentUserName={progress.nombre}
            onReturnToLanding={handleReturnToLanding}
          />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        
        {/* If Active Quiz is running */}
        {activeQuizId ? (
          <QuizView
            quizId={activeQuizId}
            onFinishQuiz={handleFinishQuiz}
            onBackToModules={handleBackToModules}
            onOpenCertificate={handleOpenCertificate}
          />
        ) : (
          <>
            {/* Tab 1: Apprentice Home */}
            {currentTab === 'inicio' && (
              <ApprenticeHome
                progress={progress}
                onSelectTab={(tab) => {
                  setCurrentTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenCertificate={handleOpenCertificate}
                onNavigateToQuiz={handleNavigateToQuiz}
              />
            )}

            {/* Tab 2: Identidad & Símbolos */}
            {currentTab === 'identidad' && (
              <ModuleSymbols
                onCompleteModule={handleCompleteModule}
                isCompleted={progress.modulosCompletados.includes('mod-identidad')}
                onNavigateToQuiz={handleNavigateToQuiz}
              />
            )}

            {/* Tab 3: Normativa & Reglamento */}
            {currentTab === 'normativa' && (
              <ModuleNormativa
                onCompleteModule={handleCompleteModule}
                isCompleted={progress.modulosCompletados.includes('mod-normativa')}
                onNavigateToQuiz={handleNavigateToQuiz}
                resolvedCases={progress.casosCompletados}
                onResolveCase={handleResolveCase}
              />
            )}

            {/* Tab 4: Ecosistema Tecnológico */}
            {currentTab === 'ecosistema' && (
              <ModuleEcosystem
                onCompleteModule={handleCompleteModule}
                isCompleted={progress.modulosCompletados.includes('mod-ecosistema')}
                onNavigateToQuiz={handleNavigateToQuiz}
              />
            )}

            {/* Tab 5: Evaluación & Retos */}
            {currentTab === 'evaluacion' && (
              <ModuleEvaluacion
                progress={progress}
                onNavigateToQuiz={handleNavigateToQuiz}
                onOpenCertificate={handleOpenCertificate}
              />
            )}

            {/* Tab 6: Seguimiento Ficha (Instructor View) */}
            {currentTab === 'seguimiento' && (
              <DashboardInstructor
                apprentices={cohortList}
                onUpdateApprentice={handleUpdateCohortApprentice}
                onOpenApprenticeCertificate={handleOpenCohortCertificate}
              />
            )}
          </>
        )}
      </main>

      {/* Official Certificate Modal */}
      {showCertificateModal && certificateApprentice && (
        <CertificateModal
          apprentice={certificateApprentice}
          onClose={() => {
            setShowCertificateModal(false);
            setCertificateApprentice(null);
          }}
        />
      )}

      {/* Glossary Modal */}
      {showGlossaryModal && (
        <GlossaryModal onClose={() => setShowGlossaryModal(false)} />
      )}

      {/* Video Manual Modal */}
      {showVideoManualModal && (
        <VideoManualModal onClose={() => setShowVideoManualModal(false)} />
      )}

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto py-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <SenaLogo className="w-5 h-5 shrink-0" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">Servicio Nacional de Aprendizaje - SENA</span>
            <span>·</span>
            <span>Formación Profesional Integral</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowGlossaryModal(true)}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Glosario Institucional
            </button>
            <span>·</span>
            <button
              onClick={handleReturnToLanding}
              className="text-[#39A900] dark:text-emerald-400 font-semibold hover:underline cursor-pointer"
            >
              Cambiar Rol / Portada
            </button>
            <span>·</span>
            <button
              onClick={handleToggleRole}
              className="text-[#00324D] dark:text-sky-400 font-medium hover:underline cursor-pointer"
            >
              {userRole === 'aprendiz' ? 'Acceso Instructor' : 'Acceso Aprendiz'}
            </button>
          </div>
        </div>
      </footer>
        </>
      )}

      {/* Auxiliary Floating Dark Mode Toggle */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={handleToggleTheme}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full shadow-xl border transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
            theme === 'dark'
              ? 'bg-slate-900 text-amber-300 border-amber-400/40 ring-2 ring-amber-400/20'
              : 'bg-slate-900 text-white border-slate-700 ring-2 ring-slate-900/10'
          }`}
          title={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
          aria-label="Alternar tema de la aplicación"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-semibold">Modo Claro</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span className="text-xs font-semibold">Modo Oscuro</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
