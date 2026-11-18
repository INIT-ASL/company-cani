// src/components/media/MediaArticleCard.jsx
import { Calendar, Tag, Download, ExternalLink, FileText } from 'lucide-react';
import { getLocalized, getSecondaryLocalized } from '../../utils/i18n';

export default function MediaArticleCard({
  item,
  language = 'en',
  t,
  idxUrl,
  onSelect,
}) {
  const titleText = getLocalized(item.title, language);
  const secondaryTitle = getSecondaryLocalized(item.title, language);
  const dateText = getLocalized(item.date, language);
  const categoryText = getLocalized(item.category, language);

  return (
    <article className="bg-white border border-slate-200 hover:border-slate-300 rounded-[3px] p-5 sm:p-6 transition-all shadow-2xs hover:shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-5">
      <div className="space-y-2 flex-1">
        {/* Meta: Category & Date */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="inline-flex items-center gap-1 font-bold uppercase text-[10px] px-2 py-0.5 bg-red-50 text-[#C0392B] border border-red-100 rounded-[2px]">
            <Tag className="w-3 h-3" aria-hidden="true" />
            <span>{categoryText}</span>
          </span>
          <span className="text-slate-300" aria-hidden="true">•</span>
          <span className="flex items-center gap-1.5 text-slate-500 font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#C0392B]" aria-hidden="true" />
            <time dateTime={item.year}>{dateText}</time>
          </span>
          <span className="text-slate-300" aria-hidden="true">•</span>
          <span className="text-slate-400">
            PT Capitol Nusantara Indonesia Tbk
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-base sm:text-lg text-[#1E2A3A] leading-snug">
          {titleText}
        </h3>

        {/* Secondary Title / Subtitle */}
        {secondaryTitle && secondaryTitle !== titleText && (
          <p className="text-xs text-slate-500 italic font-sans leading-relaxed">
            {secondaryTitle}
          </p>
        )}
      </div>

      {/* PDF Download Links & Modal Trigger */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
        {item.links && item.links.length > 0 ? (
          item.links.map((link, lIdx) => (
            <a
              key={lIdx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#C0392B] hover:bg-[#96281B] text-white text-xs font-bold uppercase tracking-wider rounded-[2px] transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B]"
              title={link.label || 'Download Document'}
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>
                {item.links.length === 1
                  ? t('media.downloadPdf')
                  : `${t('media.downloadPdf')} (${lIdx + 1})`}
              </span>
            </a>
          ))
        ) : (
          <a
            href={idxUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#1E2A3A] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B]"
          >
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            <span>IDX Link</span>
          </a>
        )}

        <button
          type="button"
          onClick={() => onSelect(item)}
          className="inline-flex items-center gap-1 px-3 py-2 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-[#1E2A3A] bg-slate-50 hover:bg-slate-100 text-xs font-semibold rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B]"
        >
          <FileText className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
          <span>{t('media.viewDetails')}</span>
        </button>
      </div>
    </article>
  );
}
