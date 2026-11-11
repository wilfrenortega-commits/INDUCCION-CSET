import React from 'react';
import { ApprenticeProgress } from '../types/induction';
import { Printer, Download, X, Award, CheckCircle2, Shield } from 'lucide-react';
import { SenaLogo } from './SenaLogo';
import { SenaEscudo } from './SenaEscudo';

interface CertificateModalProps {
  apprentice: ApprenticeProgress;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  apprentice,
  onClose
}) => {
  const handlePrint = () => {
    window.print();
  };

  const verificationCode = `SENA-IND-2026-${apprentice.ficha}-${apprentice.documento.slice(-4)}`;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-300 max-w-3xl w-full overflow-hidden my-8">
        {/* Modal bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-900 text-white print:hidden">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Documento Oficial Acreditado · SENA</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
              aria-label="Cerrar certificado"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Certificate Body */}
        <div className="p-8 sm:p-12 bg-white relative print:p-6 print:m-0" id="certificate-print-area">
          {/* Subtle decorative security border */}
          <div className="border-4 border-double border-[#39A900]/30 rounded-2xl p-6 sm:p-10 relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/10 to-white">
            
            {/* Watermark in background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
              <SenaLogo className="w-80 h-80" fill="#00324D" />
            </div>

            {/* Certificate Header */}
            <div className="text-center space-y-2 relative z-10">
              <div className="flex items-center justify-center gap-6 sm:gap-10 drop-shadow-sm mb-1">
                <SenaLogo className="w-14 h-14 shrink-0" />
                <div className="h-10 w-px bg-slate-200" />
                <SenaEscudo className="w-14 h-14 shrink-0 object-contain" alt="Escudo Oficial del SENA" />
              </div>
              <div className="space-y-0.5 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#00324D]">
                  República de Colombia · Ministerio del Trabajo
                </h4>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  SERVICIO NACIONAL DE APRENDIZAJE - SENA
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  {apprentice.regional} · {apprentice.centro}
                </p>
              </div>
            </div>

            {/* Certificate Title */}
            <div className="text-center my-8 relative z-10 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#39A900] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                CONSTANCIA DE ACREDITACIÓN
              </span>
              <h3 className="text-lg sm:text-xl font-serif italic text-slate-800 pt-2">
                Hace constar que el (la) aprendiz:
              </h3>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#00324D] tracking-tight uppercase pt-1">
                {apprentice.nombre}
              </h1>
              <p className="text-xs font-mono text-slate-600">
                Identificado(a) con Cédula de Ciudadanía No. {apprentice.documento}
              </p>
            </div>

            {/* Body paragraph */}
            <div className="text-center text-xs sm:text-sm text-slate-700 leading-relaxed max-w-xl mx-auto space-y-3 relative z-10">
              <p>
                Ha cursado y aprobado a satisfacción la totalidad del <strong>Programa de Inducción Institucional</strong>, adquiriendo las competencias ciudadanas, conocimiento riguroso del <strong>Reglamento del Aprendiz (Acuerdo 007 de 2012)</strong>, apropiación de la identidad y símbolos patrios, y manejo del ecosistema tecnológico (SOFIA Plus y ZAJUNA).
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 inline-block text-left w-full max-w-md mx-auto">
                <div><strong>Programa:</strong> {apprentice.programa}</div>
                <div><strong>Ficha de Caracterización:</strong> {apprentice.ficha}</div>
                <div><strong>Fecha de Culminación:</strong> {new Date().toLocaleDateString('es-CO')}</div>
              </div>
            </div>

            {/* Signatures & QR block */}
            <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end relative z-10 text-center">
              {/* Signature 1 */}
              <div className="space-y-1">
                <div className="h-10 flex items-center justify-center font-serif italic text-slate-400 text-sm border-b border-slate-400 max-w-[160px] mx-auto pb-1">
                  Dr. Jorge Mario Rivas
                </div>
                <div className="text-[11px] font-bold text-slate-900">Subdirector de Centro</div>
                <div className="text-[10px] text-slate-500">SENA - Dirección General</div>
              </div>

              {/* QR Verification block */}
              <div className="space-y-1">
                <div className="w-16 h-16 mx-auto bg-slate-100 border border-slate-300 rounded-lg p-1.5 flex flex-col items-center justify-center">
                  <div className="w-full h-full border border-dashed border-slate-400 flex items-center justify-center text-[9px] font-mono text-slate-500 font-bold">
                    [QR VALID]
                  </div>
                </div>
                <div className="text-[9px] font-mono text-slate-400 truncate">
                  {verificationCode}
                </div>
              </div>

              {/* Signature 2 */}
              <div className="space-y-1">
                <div className="h-10 flex items-center justify-center font-serif italic text-slate-400 text-sm border-b border-slate-400 max-w-[160px] mx-auto pb-1">
                  Ing. Clara Inés Duarte
                </div>
                <div className="text-[11px] font-bold text-slate-900">Coordinadora Académica</div>
                <div className="text-[10px] text-slate-500">Equipo de Inducción</div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer info in modal */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 print:hidden">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#39A900]" />
            <span>Verificación digital registrada en base de datos institucional.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
