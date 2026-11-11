import React from 'react';
import { UserRole } from '../types/induction';
import { Award, BookOpen, Sun, Moon, LogOut, Film } from 'lucide-react';
import { SenaLogo } from './SenaLogo';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  userRole: UserRole;
  onToggleRole: () => void;
  progressPercentage: number;
  onOpenCertificate: () => void;
  onOpenGlossary: () => void;
  onOpenVideoManual: () => void;
  hasCertificate: boolean;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  currentUserName?: string;
  onReturnToLanding?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  userRole,
  onToggleRole,
  progressPercentage,
  onOpenCertificate,
  onOpenGlossary,
  onOpenVideoManual,
  hasCertificate,
  theme,
  onToggleTheme,
  currentUserName,
  onReturnToLanding
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-16">
          
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onSelectTab('inicio')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <SenaLogo className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 group-hover:scale-105 transition-transform" />
              <div>
                <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#39A900] dark:group-hover:text-[#39A900] transition-colors whitespace-nowrap">
                  SENA Inducción
                </span>
                <span className="hidden xl:inline-block ml-2 text-xs font-normal text-slate-400 dark:text-slate-500">
                  {userRole === 'instructor' 
                    ? '· Docente Encargado: Ing. Clara Inés Duarte'
                    : currentUserName ? `· Aprendiz: ${currentUserName}` : '· Formación Integral'}
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Nav links - visible on large screens (>= 1024px) so they don't crush Zone 3 */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => onSelectTab('inicio')}
              className={`hover:text-[#39A900] dark:hover:text-[#39A900] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'inicio' ? 'text-[#39A900] dark:text-[#39A900] font-semibold border-b-2 border-[#39A900]' : ''
              }`}
            >
              Inducción
            </button>
            <button
              onClick={() => onSelectTab('identidad')}
              className={`hover:text-[#39A900] dark:hover:text-[#39A900] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'identidad' ? 'text-[#39A900] dark:text-[#39A900] font-semibold border-b-2 border-[#39A900]' : ''
              }`}
            >
              Identidad & Símbolos
            </button>
            <button
              onClick={() => onSelectTab('normativa')}
              className={`hover:text-[#39A900] dark:hover:text-[#39A900] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'normativa' ? 'text-[#39A900] dark:text-[#39A900] font-semibold border-b-2 border-[#39A900]' : ''
              }`}
            >
              Normativa & Reglamento
            </button>
            <button
              onClick={() => onSelectTab('ecosistema')}
              className={`hover:text-[#39A900] dark:hover:text-[#39A900] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'ecosistema' ? 'text-[#39A900] dark:text-[#39A900] font-semibold border-b-2 border-[#39A900]' : ''
              }`}
            >
              Ecosistema SENA
            </button>
            <button
              onClick={() => onSelectTab('evaluacion')}
              className={`hover:text-[#39A900] dark:hover:text-[#39A900] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentTab === 'evaluacion' ? 'text-[#39A900] dark:text-[#39A900] font-semibold border-b-2 border-[#39A900]' : ''
              }`}
            >
              Evaluación & Retos
            </button>
            {userRole === 'instructor' && (
              <button
                onClick={() => onSelectTab('seguimiento')}
                className={`hover:text-[#39A900] dark:hover:text-[#39A900] transition-colors whitespace-nowrap shrink-0 py-1 ${
                  currentTab === 'seguimiento' ? 'text-[#39A900] dark:text-[#39A900] font-semibold border-b-2 border-[#39A900]' : ''
                }`}
              >
                Seguimiento Ficha
              </button>
            )}
          </nav>

          {/* Zone 3: Actions cluster (Always clearly visible and prioritized) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 ml-auto">
            {/* Glossary helper */}
            <button
              onClick={onOpenGlossary}
              className="p-1.5 sm:p-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors shrink-0"
              title="Glosario Institucional SENA"
              aria-label="Glosario SENA"
            >
              <BookOpen className="w-4 h-4" />
            </button>

            {/* Video Manual Button */}
            <button
              onClick={onOpenVideoManual}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900 border border-emerald-200 dark:border-emerald-800 rounded-lg transition-colors shrink-0 cursor-pointer"
              title="Ver Video Manual de la Plataforma"
              aria-label="Ver Video Manual"
            >
              <Film className="w-4 h-4 text-[#39A900]" />
              <span className="hidden sm:inline">Video Manual</span>
            </button>

            {/* Certificate badge if completed */}
            {hasCertificate ? (
              <button
                onClick={onOpenCertificate}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 hover:bg-emerald-200 dark:hover:bg-emerald-900 border border-emerald-300 dark:border-emerald-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Award className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                <span className="hidden sm:inline">Constancia</span>
              </button>
            ) : (
              <div className="hidden 2xl:flex items-center gap-1.5 text-xs font-mono tabular-nums text-slate-500 dark:text-slate-400 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md shrink-0">
                <span>Avance:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{progressPercentage}%</span>
              </div>
            )}

            {/* Role switch toggle */}
            <button
              onClick={onToggleRole}
              className="px-2.5 sm:px-3 py-1.5 text-xs font-medium text-white bg-[#00324D] hover:bg-[#002438] active:scale-95 transition-all rounded-lg whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
              title="Alternar entre vista de Aprendiz e Instructor"
            >
              {userRole === 'aprendiz' ? 'Instructor' : 'Aprendiz'}
            </button>

            {/* Return to Landing / Switch Role button */}
            {onReturnToLanding && (
              <button
                onClick={onReturnToLanding}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
                title="Cambiar de Rol o seleccionar otro aprendiz desde la Portada"
              >
                <LogOut className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span className="hidden lg:inline">Portada / Roles</span>
              </button>
            )}

            {/* HIGH-VISIBILITY DARK MODE TOGGLE BUTTON */}
            <button
              onClick={onToggleTheme}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-xs transition-all shadow-xs shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#39A900] ${
                theme === 'dark'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/50 hover:bg-amber-400/30'
                  : 'bg-slate-900 text-white border border-slate-700 hover:bg-slate-800'
              }`}
              title={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
              aria-label={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Modo Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-amber-300 fill-amber-300" />
                  <span className="hidden sm:inline">Modo Oscuro</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Sub-navigation bar on mobile & medium screens (< lg) */}
      <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto px-3 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 scrollbar-none">
        <button
          onClick={() => onSelectTab('inicio')}
          className={`px-3 py-1 text-xs rounded-md whitespace-nowrap transition-colors ${
            currentTab === 'inicio' ? 'bg-[#39A900] text-white font-medium shadow-xs' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
          }`}
        >
          Inducción
        </button>
        <button
          onClick={() => onSelectTab('identidad')}
          className={`px-3 py-1 text-xs rounded-md whitespace-nowrap transition-colors ${
            currentTab === 'identidad' ? 'bg-[#39A900] text-white font-medium shadow-xs' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
          }`}
        >
          Símbolos
        </button>
        <button
          onClick={() => onSelectTab('normativa')}
          className={`px-3 py-1 text-xs rounded-md whitespace-nowrap transition-colors ${
            currentTab === 'normativa' ? 'bg-[#39A900] text-white font-medium shadow-xs' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
          }`}
        >
          Normativa
        </button>
        <button
          onClick={() => onSelectTab('ecosistema')}
          className={`px-3 py-1 text-xs rounded-md whitespace-nowrap transition-colors ${
            currentTab === 'ecosistema' ? 'bg-[#39A900] text-white font-medium shadow-xs' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
          }`}
        >
          Ecosistema
        </button>
        <button
          onClick={() => onSelectTab('evaluacion')}
          className={`px-3 py-1 text-xs rounded-md whitespace-nowrap transition-colors ${
            currentTab === 'evaluacion' ? 'bg-[#39A900] text-white font-medium shadow-xs' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
          }`}
        >
          Retos
        </button>
        {userRole === 'instructor' && (
          <button
            onClick={() => onSelectTab('seguimiento')}
            className={`px-3 py-1 text-xs rounded-md whitespace-nowrap transition-colors ${
              currentTab === 'seguimiento' ? 'bg-[#39A900] text-white font-medium shadow-xs' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            Ficha
          </button>
        )}
      </div>
    </header>
  );
};
