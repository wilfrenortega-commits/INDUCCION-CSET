import React from 'react';
import { X, Film } from 'lucide-react';
import { SenaLogo } from './SenaLogo';

interface VideoManualModalProps {
  onClose: () => void;
}

export const VideoManualModal: React.FC<VideoManualModalProps> = ({ onClose }) => {
  const videoSrc = '/assets/aistudio/2026__5_17_p.m._7ed25355.mp4';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#39A900]/20 flex items-center justify-center text-[#39A900]">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Video Manual de la Plataforma</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono font-semibold">Oficial SENA</span>
              </h3>
              <p className="text-xs text-slate-400">Guía audiovisual interactiva del Portal de Inducción Institucional</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Video Player */}
        <div className="p-6 bg-slate-950 flex flex-col items-center justify-center space-y-4">
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner border border-slate-800 relative flex items-center justify-center">
            <video
              src={videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            >
              Tu navegador no soporta la reproducción de video HTML5.
            </video>
          </div>

          <div className="w-full flex items-center justify-between text-xs text-slate-400 px-2">
            <span>Ficha 2829104 ADSO · Formación Profesional Integral SENA</span>
            <span className="text-emerald-400 font-medium">Usa los controles del reproductor para pausar, adelantar o ajustar volumen.</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <SenaLogo className="w-5 h-5 shrink-0" />
            <span>Servicio Nacional de Aprendizaje - SENA</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#39A900] hover:bg-[#329600] rounded-xl transition-colors cursor-pointer shadow-sm"
          >
            Entendido, Cerrar Manual
          </button>
        </div>
      </div>
    </div>
  );
};
