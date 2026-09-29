// src/components/common/ComingSoon.jsx
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, Building2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ComingSoon({
  sectionName,
  title,
  description,
  showContact = true,
  externalLink,
  backTo = '/',
  backLabel,
}) {
  const { language } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto py-6 sm:py-10">
      <div className="bg-white border border-slate-200 rounded-[4px] p-8 sm:p-12 md:p-16 text-center shadow-xs">
        {/* Big, Unmistakable COMING SOON Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-[#121A24] tracking-tight uppercase mb-3">
          {title || 'COMING SOON'}
        </h2>

        {/* Section Target Name */}
        {sectionName && (
          <div className="text-sm sm:text-base font-mono font-semibold uppercase tracking-wider text-[#C0392B] mb-5">
            {sectionName}
          </div>
        )}

        {/* Discreet, Non-Revealing Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8 font-sans">
          {description ||
            (language === 'en'
              ? 'This page is currently under development. Please check back soon, or reach out to our team directly for any immediate inquiries.'
              : 'Halaman ini sedang dalam tahap pengembangan. Silakan kunjungi kembali nanti, atau hubungi tim kami secara langsung untuk kebutuhan mendesak.')}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 bg-[#C0392B] text-white px-5 py-2.5 rounded-[3px] text-xs font-semibold hover:bg-[#96281B] transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{backLabel || (language === 'en' ? 'Back to Home' : 'Kembali ke Beranda')}</span>
          </Link>

          {externalLink && (
            <a
              href={externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#121A24] text-white px-5 py-2.5 rounded-[3px] text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              <span>{externalLink.label}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <Link
            to="/contact/info"
            className="inline-flex items-center gap-2 border border-slate-300 text-[#1E2A3A] px-5 py-2.5 rounded-[3px] text-xs font-semibold hover:bg-slate-50 transition-colors"
          >
            <Building2 className="w-4 h-4 text-slate-500" />
            <span>{language === 'en' ? 'Contact Directory' : 'Direktori Kontak'}</span>
          </Link>
        </div>

        {/* Direct Contact Notice */}
        {showContact && (
          <div className="pt-8 border-t border-slate-200 max-w-xl mx-auto">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-3">
              {language === 'en'
                ? 'For immediate assistance, contact our corporate desk:'
                : 'Untuk kebutuhan mendesak, silakan hubungi narahubung perseroan:'}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C0392B]" />
                <span className="font-mono font-medium">+62 (21) 5307340 (Jakarta)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C0392B]" />
                <span className="font-mono font-medium">+62-541-732893 (Samarinda)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C0392B]" />
                <a href="mailto:Enquiry@ptcni.co.id" className="font-mono text-[#C0392B] hover:underline font-semibold">
                  Enquiry@ptcni.co.id
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
