// src/components/fleet/FleetPdfButton.jsx
import { FileText, FileQuestion, ExternalLink } from 'lucide-react';

export default function FleetPdfButton({ pdfUrl, unitName = 'Vessel', language = 'en', variant = 'table' }) {
  const isEn = language === 'en';
  const noPdfLabel = isEn ? 'No PDF Available' : 'PDF belum tersedia';

  if (!pdfUrl) {
    return (
      <span
        className={`inline-flex items-center gap-1 font-mono text-slate-400 ${
          variant === 'grid'
            ? 'text-[11px] italic'
            : 'px-2.5 py-1 rounded-[2px] bg-slate-100 text-[10px] font-medium border border-slate-200'
        }`}
      >
        <FileQuestion className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
        <span>{noPdfLabel}</span>
      </span>
    );
  }

  const encodedUrl = encodeURI(pdfUrl);

  if (variant === 'grid') {
    return (
      <a
        href={encodedUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open technical PDF specification for ${unitName}`}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#C0392B] text-white hover:bg-[#96281B] transition-colors text-xs font-semibold shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B]"
      >
        <FileText className="w-3.5 h-3.5" aria-hidden="true" />
        <span>PDF Spec</span>
        <ExternalLink className="w-3 h-3 opacity-80" aria-hidden="true" />
      </a>
    );
  }

  return (
    <a
      href={encodedUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open technical PDF specification for ${unitName}`}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#C0392B]/10 hover:bg-[#C0392B] text-[#C0392B] hover:text-white transition-all font-mono text-[11px] font-bold border border-[#C0392B]/20 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B]"
    >
      <FileText className="w-3.5 h-3.5" aria-hidden="true" />
      <span>PDF Spec</span>
      <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
    </a>
  );
}
