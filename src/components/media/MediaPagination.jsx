// src/components/media/MediaPagination.jsx
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MediaPagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  startIndex,
  endIndex,
  language = 'en',
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
      <div className="text-xs font-mono text-slate-500">
        {language === 'en'
          ? `Showing ${startIndex + 1}–${Math.min(endIndex, totalItems)} of ${totalItems} records`
          : `Menampilkan ${startIndex + 1}–${Math.min(endIndex, totalItems)} dari ${totalItems} dokumen`}
      </div>

      <div className="flex items-center gap-1.5" role="navigation" aria-label="Pagination">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          aria-label={language === 'en' ? 'Previous page' : 'Halaman sebelumnya'}
          className="p-1.5 rounded-[2px] border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        </button>

        <span className="px-3 py-1 text-xs font-mono font-bold text-[#1E2A3A]">
          {currentPage} / {totalPages}
        </span>

        <button
          type="button"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          aria-label={language === 'en' ? 'Next page' : 'Halaman berikutnya'}
          className="p-1.5 rounded-[2px] border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
