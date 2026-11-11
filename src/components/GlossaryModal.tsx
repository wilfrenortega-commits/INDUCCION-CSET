import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/senaData';
import { Search, BookOpen, X } from 'lucide-react';
import { SenaEscudo } from './SenaEscudo';
import { SenaLogo } from './SenaLogo';

interface GlossaryModalProps {
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ onClose }) => {
  const [termQuery, setTermQuery] = useState('');

  const filtered = GLOSSARY_TERMS.filter(
    t => t.termino.toLowerCase().includes(termQuery.toLowerCase()) ||
         t.significado.toLowerCase().includes(termQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl max-w-xl w-full p-6 space-y-4 max-h-[85vh] flex flex-col transition-colors">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#39A900]" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Glosario Institucional SENA</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-white rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            value={termQuery}
            onChange={(e) => setTermQuery(e.target.value)}
            placeholder="Buscar término (ej. RAP, Zajuna, Ficha, Comité)..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#39A900]/30"
          />
        </div>

        {/* List */}
        <div className="space-y-3 overflow-y-auto flex-1 pr-1">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 space-y-1.5 text-xs">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-bold text-[#00324D] dark:text-sky-400 text-sm">{item.termino}</h4>
                  {item.termino.includes('Escudo') && (
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-0.5 shrink-0 flex items-center justify-center">
                      <SenaEscudo className="w-7 h-7 object-contain" alt="Escudo SENA" />
                    </div>
                  )}
                  {item.termino.includes('Logosímbolo') && (
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-1 shrink-0 flex items-center justify-center">
                      <SenaLogo className="w-6 h-6" />
                    </div>
                  )}
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.significado}</p>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-xs text-slate-400 dark:text-slate-500">
              No se encontraron términos para "{termQuery}".
            </div>
          )}
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-[#00324D] dark:bg-emerald-600 rounded-lg hover:bg-[#002438] dark:hover:bg-emerald-500"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
