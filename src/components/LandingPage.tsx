import React, { useState } from 'react';
import { ApprenticeProgress } from '../types/induction';
import { 
  SenaLogo 
} from './SenaLogo';
import { 
  SenaEscudo 
} from './SenaEscudo';
import { 
  SENA_CAMPUS_IMAGE 
} from '../data/senaData';
import { 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  Scale, 
  Laptop, 
  Award, 
  BookOpen, 
  Sun, 
  Moon, 
  UserPlus, 
  Check, 
  FileText,
  Clock,
  Compass,
  Edit3,
  Save,
  LogIn,
  KeyRound,
  Lock,
  User,
  Film
} from 'lucide-react';

interface LandingPageProps {
  cohortList: ApprenticeProgress[];
  activeApprentice: ApprenticeProgress;
  onSelectApprenticeAndEnter: (apprentice: ApprenticeProgress) => void;
  onSelectInstructorAndEnter: () => void;
  onRegisterNewApprentice: (newApprentice: ApprenticeProgress) => void;
  onOpenGlossary: () => void;
  onOpenVideoManual: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  cohortList,
  activeApprentice,
  onSelectApprenticeAndEnter,
  onSelectInstructorAndEnter,
  onRegisterNewApprentice,
  onOpenGlossary,
  onOpenVideoManual,
  theme,
  onToggleTheme
}) => {
  // Apprentice portal auth mode
  const [apprenticeMode, setApprenticeMode] = useState<'login_card' | 'register_form'>('login_card');
  const [loginDoc, setLoginDoc] = useState('');
  const [loginError, setLoginError] = useState('');

  // Instructor portal auth state (generic user: instructor, pass: sena2026)
  const [instructorUser, setInstructorUser] = useState('');
  const [instructorPass, setInstructorPass] = useState('');
  const [instructorError, setInstructorError] = useState('');

  // Clean registration form state with guidance hints
  const [formData, setFormData] = useState<ApprenticeProgress>({
    id: '',
    nombre: '',
    documento: '',
    email: '',
    ficha: '',
    programa: '',
    centro: 'Centro de Servicios Financieros',
    regional: 'Regional Distrito Capital',
    fechaInicio: new Date().toLocaleDateString('es-CO'),
    ultimoAcceso: 'Recién registrado',
    progresoGlobal: 0,
    modulosCompletados: [],
    quizzesCompletados: {},
    casosCompletados: [],
    insignias: [],
    estado: 'En Progreso',
    observacionesInstructor: ['Inicia proceso de inducción institucional.']
  });

  const handleLoginByDocument = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const trimmed = loginDoc.trim();
    if (!trimmed) {
      setLoginError('Por favor ingresa tu número de documento de identidad.');
      return;
    }

    const found = cohortList.find(a => a.documento === trimmed);
    if (found) {
      onSelectApprenticeAndEnter(found);
    } else {
      setLoginError('No se encontró un aprendiz registrado con este documento. Por favor usa "Nuevo Registro Limpio" para crear tus datos.');
    }
  };

  const handleInstructorLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setInstructorError('');

    const u = instructorUser.trim().toLowerCase();
    const p = instructorPass.trim();

    if ((u === 'instructor' || u === 'clara.duarte') && p === 'sena2026') {
      onSelectInstructorAndEnter();
    } else {
      setInstructorError('Credenciales incorrectas. Usa Usuario: instructor | Contraseña: sena2026');
    }
  };

  const handleQuickFillInstructor = () => {
    setInstructorUser('instructor');
    setInstructorPass('sena2026');
    setInstructorError('');
  };

  const handleStartCleanRegistration = () => {
    setFormData({
      id: `apr-${Date.now()}`,
      nombre: '',
      documento: '',
      email: '',
      ficha: '',
      programa: '',
      centro: 'Centro de Servicios Financieros',
      regional: 'Regional Distrito Capital',
      fechaInicio: new Date().toLocaleDateString('es-CO'),
      ultimoAcceso: 'Nuevo registro',
      progresoGlobal: 0,
      modulosCompletados: [],
      quizzesCompletados: {},
      casosCompletados: [],
      insignias: [],
      estado: 'En Progreso',
      observacionesInstructor: ['Inicia proceso de inducción institucional.']
    });
    setLoginError('');
    setApprenticeMode('register_form');
  };

  const handleFormChange = (field: keyof ApprenticeProgress, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveProfileAndEnter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.documento.trim()) return;

    onRegisterNewApprentice(formData);
    onSelectApprenticeAndEnter(formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SenaLogo className="w-8 h-8 sm:w-9 sm:h-9 shrink-0" />
            <div>
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white block leading-tight">
                SENA Inducción
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                Formación Profesional Integral · República de Colombia
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenGlossary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#39A900]" />
              <span className="hidden sm:inline">Glosario Institucional</span>
            </button>

            <button
              onClick={onOpenVideoManual}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900 border border-emerald-200 dark:border-emerald-800 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <Film className="w-4 h-4 text-[#39A900]" />
              <span className="hidden sm:inline">Video Manual</span>
            </button>

            {/* Dark Mode toggle button with blur transition */}
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
      </header>

      {/* Main Landing Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white overflow-hidden py-14 sm:py-20 border-b border-slate-200 dark:border-slate-800">
          <img 
            src={SENA_CAMPUS_IMAGE} 
            alt="Campus SENA" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center gap-3">
              <SenaEscudo className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0 drop-shadow-md" alt="Escudo SENA" />
              <div className="text-xs text-emerald-400 font-medium">
                <span>Servicio Nacional de Aprendizaje</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Ministerio del Trabajo</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Ficha 2829104 ADSO</span>
              </div>
            </div>

            <div className="max-w-3xl space-y-3">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Portal Integral de Inducción Institucional
              </h1>
              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed">
                Herramienta oficial interactiva para el seguimiento del aprendizaje, conocimiento exhaustivo de la normativa (Acuerdo 007 de 2012) y apropiación de los símbolos e identidad del SENA.
              </p>
            </div>

            {/* Unboxed Metadata Stats */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-300 pt-2 border-t border-white/10">
              <span>Ficha 2829104 ADSO</span>
              <span aria-hidden="true">·</span>
              <span>1 Instructor Encargado</span>
              <span aria-hidden="true">·</span>
              <span>4 Módulos Normativos</span>
              <span aria-hidden="true">·</span>
              <span>Acreditación Digital Oficial</span>
            </div>
          </div>
        </section>

        {/* Dual Portal Selection Section */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider">
              Control de Acceso Institucional Privado
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Selecciona tu Rol de Ingreso al Prototipo
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Acceso seguro y autenticado. El aprendiz ingresa con su documento y el instructor utiliza el usuario y contraseña genéricos asignados.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* PORTAL 1: APRENDIZ (ACCESO PRIVADO E INDIVIDUAL) */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-6 transition-all hover:border-[#39A900]/50">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-[#39A900]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#39A900] uppercase tracking-wider block">
                      Acceso Confidencial Individual
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Portal del Aprendiz
                    </h3>
                  </div>
                </div>

                {apprenticeMode === 'login_card' && (
                  <button
                    type="button"
                    onClick={handleStartCleanRegistration}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800 rounded-xl transition-colors cursor-pointer"
                    title="Registrar nuevo perfil con campos limpios"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Nuevo Registro Limpio</span>
                  </button>
                )}
              </div>

              {apprenticeMode === 'login_card' ? (
                /* SECURE LOGIN BY DOCUMENT */
                <div className="space-y-6">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Ingresa con tu número de documento de identidad para recuperar tu progreso guardado, o crea un nuevo perfil de aprendiz con campos limpios.
                  </p>

                  <form onSubmit={handleLoginByDocument} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Número de Documento de Identidad (C.C. / T.I.)
                      </label>
                      <div className="relative">
                        <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={loginDoc}
                          onChange={(e) => {
                            setLoginDoc(e.target.value);
                            setLoginError('');
                          }}
                          placeholder="Ej. 1098765432"
                          className="w-full pl-10 pr-3 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#39A900]/30 font-mono"
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        Pista: Para pruebas puedes usar <strong className="font-mono text-emerald-600 dark:text-emerald-400">1098765432</strong> (Wilfren Ortega) o registrar uno nuevo.
                      </span>
                    </div>

                    {loginError && (
                      <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 leading-relaxed">
                        {loginError}
                      </div>
                    )}

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={handleStartCleanRegistration}
                        className="text-xs font-medium text-[#39A900] hover:underline cursor-pointer"
                      >
                        ¿No estás registrado? Crea tu perfil limpio aquí
                      </button>

                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#39A900] hover:bg-[#329600] active:scale-98 transition-all shadow-sm cursor-pointer"
                      >
                        <LogIn className="w-4 h-4" />
                        <span>Iniciar Sesión como Aprendiz</span>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* CLEAN REGISTRATION FORM WITH GUIDANCE HINTS */
                <form onSubmit={handleSaveProfileAndEnter} className="space-y-4 pt-2">
                  <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/50 p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-300">
                    <div>
                      <strong className="block font-bold text-sm">Registro de Perfil de Aprendiz</strong>
                      <span>Llena los campos limpios con tus datos de interés para identificar tu progreso y continuar al prototipo.</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setApprenticeMode('login_card')}
                      className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline shrink-0 ml-2"
                    >
                      ← Volver a inicio de sesión
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => handleFormChange('nombre', e.target.value)}
                        placeholder="Ej. Ana Sofía Ramírez Gómez"
                        className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#39A900]/30"
                      />
                      <span className="text-[10px] text-slate-400 mt-0.5 block">Pista: Escribe tus nombres y apellidos completos.</span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Documento de Identidad *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.documento}
                        onChange={(e) => handleFormChange('documento', e.target.value)}
                        placeholder="Ej. 1098765432"
                        className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#39A900]/30 font-mono"
                      />
                      <span className="text-[10px] text-slate-400 mt-0.5 block">Pista: Tu número de cédula o tarjeta sin puntos.</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Correo Electrónico Institucional *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleFormChange('email', e.target.value)}
                        placeholder="Ej. asramirez@misena.edu.co"
                        className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#39A900]/30"
                      />
                      <span className="text-[10px] text-slate-400 mt-0.5 block">Pista: Tu correo oficial @misena.edu.co</span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Ficha de Caracterización *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.ficha}
                        onChange={(e) => handleFormChange('ficha', e.target.value)}
                        placeholder="Ej. 2829104"
                        className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#39A900]/30 font-mono"
                      />
                      <span className="text-[10px] text-slate-400 mt-0.5 block">Pista: Código numérico de 7 cifras.</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Programa de Formación *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.programa}
                      onChange={(e) => handleFormChange('programa', e.target.value)}
                      placeholder="Ej. Tecnólogo en Análisis y Desarrollo de Software (ADSO)"
                      className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#39A900]/30"
                    />
                    <span className="text-[10px] text-slate-400 mt-0.5 block">Pista: Nombre oficial del tecnólogo o técnico.</span>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setApprenticeMode('login_card')}
                      className="px-4 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#39A900] hover:bg-[#329600] active:scale-98 transition-all shadow-sm cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>Guardar Perfil y Continuar al Prototipo</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* PORTAL 2: INSTRUCTOR (CON USUARIO Y CONTRASEÑA GENÉRICOS) */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-6 transition-all hover:border-[#00324D]/50 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-800 flex items-center justify-center text-[#00324D] dark:text-sky-400">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-[#00324D] dark:text-sky-400 uppercase tracking-wider block">
                        Acceso Autorizado Docente
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Portal del Instructor
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleQuickFillInstructor}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200 dark:border-sky-800 rounded-lg transition-colors cursor-pointer"
                    title="Rellenar con credenciales genéricas"
                  >
                    <span>Autocompletar</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ingresa con el usuario y la contraseña genéricos asignados a la coordinación de la ficha para auditar los resultados de la cohorte.
                </p>

                {/* Instructor Login Form */}
                <form onSubmit={handleInstructorLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Usuario Genérico
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={instructorUser}
                        onChange={(e) => {
                          setInstructorUser(e.target.value);
                          setInstructorError('');
                        }}
                        placeholder="ej. instructor"
                        className="w-full pl-10 pr-3 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00324D]/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Contraseña Genérica
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="password"
                        required
                        value={instructorPass}
                        onChange={(e) => {
                          setInstructorPass(e.target.value);
                          setInstructorError('');
                        }}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-3 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00324D]/30"
                      />
                    </div>
                  </div>


                  {instructorError && (
                    <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 leading-relaxed">
                      {instructorError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#00324D] hover:bg-[#002438] active:scale-98 transition-all shadow-sm cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Iniciar Sesión como Instructor</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </form>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 text-center">
                Supervisión oficial Ficha 2829104 · Ing. Clara Inés Duarte
              </div>
            </div>

          </div>
        </section>

        {/* Platform Pillars Section */}
        <section className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-semibold text-[#39A900] uppercase tracking-wider">
                Ejes de la Inducción SENA
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Contenidos y Recursos de la Herramienta
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Diseñado para garantizar la formación profesional integral y el pleno conocimiento institucional desde el primer día.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-[#39A900] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Identidad & Símbolos
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Explorador interactivo del escudo oficial con sus tres sectores, bandera de paz, logosímbolo e himno oficial con sintetizador de melodía y locución.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-[#00324D] dark:text-sky-400 flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Reglamento del Aprendiz
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Compendio del Acuerdo 007 de 2012: catálogo de derechos, deberes, prohibiciones, tipificación de faltas y simulador de casos reales con comités.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Ecosistema Tecnológico
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Guías de apropiación del LMS ZAJUNA, SOFIA Plus, semilleros Sennova, alternativas de etapa productiva y programas de Bienestar al Aprendiz.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-[#39A900] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Evaluación & Constancia
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Cuestionarios interactivos con retroalimentación inmediata, insignias digitales de mérito y generación de Constancia Oficial con verificación y código QR.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <SenaLogo className="w-5 h-5 shrink-0" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">Servicio Nacional de Aprendizaje - SENA</span>
            <span aria-hidden="true">·</span>
            <span>República de Colombia</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenGlossary}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Glosario Institucional
            </button>
            <span aria-hidden="true">·</span>
            <span>Ficha 2829104 ADSO</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
