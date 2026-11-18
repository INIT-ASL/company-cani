// src/components/media/MediaArticleModal.jsx
import { useEffect, useRef } from 'react';
import { Calendar, Tag, ExternalLink, Download, X } from 'lucide-react';
import { getLocalized, getSecondaryLocalized } from '../../utils/i18n';

export default function MediaArticleModal({
  article,
  onClose,
  triggerRef,
  language = 'en',
  idxUrl,
}) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Body scroll lock & Escape key & focus management
  useEffect(() => {
    if (!article) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button initially
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }

      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const triggerEl = triggerRef?.current;
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      // Restore focus to opener element
      triggerEl?.focus();
    };
  }, [article, onClose, triggerRef]);

  if (!article) return null;

  const titlePrimary = getLocalized(article.title, language);
  const titleSecondary = getSecondaryLocalized(article.title, language);
  const excerptPrimary = getLocalized(article.excerpt, language);
  const excerptSecondary = getSecondaryLocalized(article.excerpt, language);
  const dateText = getLocalized(article.date, language);
  const categoryText = getLocalized(article.category, language);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-article-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[4px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative flex flex-col justify-between"
      >
        <div>
          {/* Modal Header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[2px] bg-red-50 text-[#C0392B] font-mono text-[11px] font-bold uppercase tracking-wider">
                <Tag className="w-3 h-3" aria-hidden="true" />
                <span>{categoryText}</span>
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-500">
                <Calendar className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                <span>{dateText}</span>
              </span>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={language === 'en' ? 'Close document view' : 'Tutup tampilan dokumen'}
              className="p-1 rounded-[3px] text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B]"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Titles */}
          <h2
            id="modal-article-title"
            className="text-lg sm:text-xl font-bold font-display text-[#1E2A3A] leading-snug mb-2"
          >
            {titlePrimary}
          </h2>

          {titleSecondary && (
            <div className="text-xs sm:text-sm text-slate-500 font-sans italic mb-5 pb-4 border-b border-slate-100">
              {titleSecondary}
            </div>
          )}

          {/* Body Content */}
          <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-4 mb-8 font-sans">
            <p>{excerptPrimary}</p>
            {excerptSecondary && (
              <p className="text-slate-500 italic border-l-2 border-slate-200 pl-3">
                {excerptSecondary}
              </p>
            )}

            <div className="p-4 bg-[#F4F6F8] rounded-[3px] border border-slate-200 text-xs text-slate-600 font-mono space-y-1">
              <div>
                <strong>Issuer:</strong> PT Capitol Nusantara Indonesia Tbk
              </div>
              <div>
                <strong>Ticker:</strong> IDX: CANI
              </div>
              <div>
                <strong>Filing Period:</strong> {article.year}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {article.pdfUrl ? (
              <a
                href={article.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[3px] bg-[#C0392B] text-white text-xs font-semibold hover:bg-[#96281B] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B]"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{language === 'en' ? 'Download Filing PDF' : 'Unduh Dokumen PDF'}</span>
              </a>
            ) : (
              <a
                href={idxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[3px] bg-[#1E2A3A] text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B]"
              >
                <span>{language === 'en' ? 'Verify on IDX' : 'Verifikasi di BEI'}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-[3px] hover:bg-slate-50 transition-colors"
          >
            {language === 'en' ? 'Close' : 'Tutup'}
          </button>
        </div>
      </div>
    </div>
  );
}
