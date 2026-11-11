import React, { useState } from 'react';
import { ApprenticeProgress } from '../types/induction';
import { 
  Users, 
  Search, 
  Download, 
  Award,
  Eye,
  X
} from 'lucide-react';

interface DashboardInstructorProps {
  apprentices: ApprenticeProgress[];
  onUpdateApprentice: (apprentice: ApprenticeProgress) => void;
  onOpenApprenticeCertificate: (apprentice: ApprenticeProgress) => void;
}

export const DashboardInstructor: React.FC<DashboardInstructorProps> = ({
  apprentices,
  onUpdateApprentice,
  onOpenApprenticeCertificate
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'Todos' | 'Completado' | 'En Progreso' | 'En Riesgo'>('Todos');
  const [selectedApprentice, setSelectedApprentice] = useState<ApprenticeProgress | null>(null);
  const [newObservation, setNewObservation] = useState('');

  // Calculations
  const total = apprentices.length;
  const completed = apprentices.filter(a => a.estado === 'Completado').length;
  const inProgress = apprentices.filter(a => a.estado === 'En Progreso').length;
  const atRisk = apprentices.filter(a => a.estado === 'En Riesgo').length;

  // Filtered list
  const filteredList = apprentices.filter(a => {
    const matchesSearch = 
      a.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.documento.includes(searchTerm) ||
      a.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'Todos' || a.estado === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleExportCSV = () => {
    const headers = ['Nombre', 'Documento', 'Email', 'Ficha', 'Progreso %', 'Estado', 'Quiz Identidad', 'Quiz Normativa', 'Examen Final', 'Ultimo Acceso'];
    const rows = apprentices.map(a => [
      `"${a.nombre}"`,
      `"${a.documento}"`,
      `"${a.email}"`,
      `"${a.ficha}"`,
      a.progresoGlobal,
      `"${a.estado}"`,
      a.quizzesCompletados['quiz-identidad']?.puntaje ?? 'Pendiente',
      a.quizzesCompletados['quiz-normativa']?.puntaje ?? 'Pendiente',
      a.quizzesCompletados['quiz-final']?.puntaje ?? 'Pendiente',
      `"${a.ultimoAcceso}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `SENA_Reporte_Induccion_Ficha_${apprentices[0]?.ficha || '2829104'}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddObservation = () => {
    if (!selectedApprentice || !newObservation.trim()) return;
    const updated: ApprenticeProgress = {
      ...selectedApprentice,
      observacionesInstructor: [
        ...(selectedApprentice.observacionesInstructor || []),
        `${new Date().toLocaleDateString('es-CO')}: ${newObservation.trim()}`
      ]
    };
    onUpdateApprentice(updated);
    setSelectedApprentice(updated);
    setNewObservation('');
  };

  return (
    <div className="space-y-8 pb-12 transition-colors duration-300">
      {/* Dashboard Top Banner */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
            <span>Coordinación de Formación Integral</span>
            <span>·</span>
            <span>Ficha 2829104</span>
            <span>·</span>
            <span>ADSO</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Panel de Seguimiento y Cierre de Inducción
          </h1>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
            Supervisa el avance de los aprendices en normativa, símbolos y aprobación del examen final para habilitar actas de inicio de formación.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-xl transition-all shadow-sm"
          >
            <Download className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <span>Exportar Reporte (CSV)</span>
          </button>
        </div>
      </div>

      {/* Cohort KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1 transition-colors">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Total Aprendices</span>
          <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
            {total}
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">Matriculados en la ficha</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1 transition-colors">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Inducción Aprobada</span>
          <div className="text-2xl font-bold font-mono text-[#39A900] tabular-nums">
            {completed} <span className="text-xs font-normal text-slate-400 dark:text-slate-500">({Math.round((completed / total) * 100)}%)</span>
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">Examen integral superado</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1 transition-colors">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">En Progreso</span>
          <div className="text-2xl font-bold font-mono text-blue-700 dark:text-sky-400 tabular-nums">
            {inProgress}
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">Completando módulos</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1 transition-colors">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Alerta Temprana (En Riesgo)</span>
          <div className="text-2xl font-bold font-mono text-rose-600 dark:text-rose-400 tabular-nums">
            {atRisk}
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">Inactivos o sin evidencia</span>
        </div>
      </div>

      {/* Cohort Search & Filter Controls */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nombre, documento o correo..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39A900]/30 focus:border-[#39A900]"
          />
        </div>

        {/* Status segmented filters */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg shrink-0">
          {(['Todos', 'Completado', 'En Progreso', 'En Riesgo'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setStatusFilter(filter)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                statusFilter === filter
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Cohort Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 uppercase font-semibold tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Aprendiz</th>
                <th className="py-3.5 px-4">Estado & Avance</th>
                <th className="py-3.5 px-4 text-center">Quiz Símbolos</th>
                <th className="py-3.5 px-4 text-center">Quiz Normativa</th>
                <th className="py-3.5 px-4 text-center">Examen Final</th>
                <th className="py-3.5 px-4">Último Acceso</th>
                <th className="py-3.5 px-4 sm:px-6 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {filteredList.map((apprentice) => {
                const qIden = apprentice.quizzesCompletados['quiz-identidad'];
                const qNorm = apprentice.quizzesCompletados['quiz-normativa'];
                const qFin = apprentice.quizzesCompletados['quiz-final'];

                return (
                  <tr key={apprentice.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                    {/* Name & Document */}
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-bold text-slate-900 dark:text-white text-sm">{apprentice.nombre}</div>
                      <div className="text-slate-500 dark:text-slate-400 text-[11px] font-mono">
                        C.C. {apprentice.documento} · {apprentice.email}
                      </div>
                    </td>

                    {/* Progress */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              apprentice.estado === 'Completado' 
                                ? 'bg-[#39A900]' 
                                : apprentice.estado === 'En Riesgo'
                                ? 'bg-rose-500'
                                : 'bg-blue-600'
                            }`}
                            style={{ width: `${apprentice.progresoGlobal}%` }}
                          />
                        </div>
                        <span className="font-mono tabular-nums text-xs font-semibold text-slate-800 dark:text-slate-200">
                          {apprentice.progresoGlobal}%
                        </span>
                      </div>
                      <span className={`inline-block mt-1 text-[10px] font-medium px-2 py-0.5 rounded ${
                        apprentice.estado === 'Completado'
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                          : apprentice.estado === 'En Riesgo'
                          ? 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                          : 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300'
                      }`}>
                        {apprentice.estado}
                      </span>
                    </td>

                    {/* Quiz Identidad */}
                    <td className="py-4 px-4 text-center font-mono tabular-nums">
                      {qIden ? (
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{qIden.puntaje} / 100</span>
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">-</span>
                      )}
                    </td>

                    {/* Quiz Normativa */}
                    <td className="py-4 px-4 text-center font-mono tabular-nums">
                      {qNorm ? (
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{qNorm.puntaje} / 100</span>
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">-</span>
                      )}
                    </td>

                    {/* Quiz Final */}
                    <td className="py-4 px-4 text-center font-mono tabular-nums">
                      {qFin ? (
                        <span className="text-[#39A900] font-bold text-xs">{qFin.puntaje}% Aprobado</span>
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">Pendiente</span>
                      )}
                    </td>

                    {/* Last active */}
                    <td className="py-4 px-4 text-slate-500 dark:text-slate-400 text-xs">
                      {apprentice.ultimoAcceso}
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedApprentice(apprentice)}
                          className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                          title="Ver expediente del aprendiz"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {apprentice.estado === 'Completado' && (
                          <button
                            onClick={() => onOpenApprenticeCertificate(apprentice)}
                            className="p-1.5 text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 rounded-lg transition-colors"
                            title="Constancia de Inducción"
                          >
                            <Award className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Apprentice Details Drawer / Modal */}
      {selectedApprentice && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl max-w-xl w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">Expediente de Inducción</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{selectedApprentice.nombre}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">C.C. {selectedApprentice.documento} · Ficha {selectedApprentice.ficha}</p>
              </div>
              <button
                onClick={() => setSelectedApprentice(null)}
                className="p-1.5 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress summary */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <span className="text-slate-400 dark:text-slate-500 block mb-0.5">Avance Global:</span>
                <span className="font-bold font-mono text-base text-slate-900 dark:text-white">{selectedApprentice.progresoGlobal}%</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <span className="text-slate-400 dark:text-slate-500 block mb-0.5">Estado:</span>
                <span className="font-bold text-base text-slate-900 dark:text-white">{selectedApprentice.estado}</span>
              </div>
            </div>

            {/* Observations History */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Bitácora de Seguimiento Formativo
              </h4>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {(selectedApprentice.observacionesInstructor || []).length > 0 ? (
                  selectedApprentice.observacionesInstructor?.map((obs, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                      {obs}
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 dark:text-slate-500 italic">No hay observaciones registradas aún.</p>
                )}
              </div>
            </div>

            {/* Add new observation */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block">
                Agregar nota o plan de acompañamiento del instructor:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newObservation}
                  onChange={(e) => setNewObservation(e.target.value)}
                  placeholder="Ej. Se concertó refuerzo del reglamento..."
                  className="flex-1 px-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39A900]/30"
                />
                <button
                  onClick={handleAddObservation}
                  disabled={!newObservation.trim()}
                  className="px-4 py-2 text-xs font-medium text-white bg-[#00324D] dark:bg-emerald-600 hover:bg-[#002438] dark:hover:bg-emerald-500 disabled:opacity-40 rounded-xl whitespace-nowrap"
                >
                  Guardar
                </button>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedApprentice(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Cerrar Expediente
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
