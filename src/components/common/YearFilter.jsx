// src/components/common/YearFilter.jsx
import { Filter } from 'lucide-react';

export default function YearFilter({
  years = [],
  selectedYear = 'ALL',
  onChange,
  language = 'en',
  label,
  className = '',
}) {
  const filterLabel = label || (language === 'en' ? 'Year:' : 'Tahun:');
  const allLabel = language === 'en' ? 'All' : 'Semua';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-xs font-mono text-slate-500 flex items-center gap-1 shrink-0">
        <Filter className="w-3 h-3 text-slate-400" aria-hidden="true" />
        <span>{filterLabel}</span>
      </span>
      <div className="flex flex-wrap gap-1" role="group" aria-label={filterLabel}>
        {years.map((yr) => {
          const isSelected = selectedYear === yr;
          return (
            <button
              key={yr}
              type="button"
              onClick={() => onChange(yr)}
              aria-pressed={isSelected}
              className={`px-2.5 py-1 text-[11px] font-mono rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] min-h-[32px] sm:min-h-[28px] ${
                isSelected
                  ? 'bg-[#C0392B] text-white font-bold shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {yr === 'ALL' ? allLabel : yr}
            </button>
          );
        })}
      </div>
    </div>
  );
}
