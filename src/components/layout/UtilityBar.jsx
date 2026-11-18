// src/components/layout/UtilityBar.jsx
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY } from '../../data/company';

export default function UtilityBar({ isTransparent = false }) {
  const { language, t } = useLanguage();
  const en = language === 'en';

  return (
    <div
      className={`hidden md:block text-[11px] border-b transition-colors ${
        isTransparent
          ? 'border-white/10 text-white/70 bg-black/10'
          : 'border-slate-100 text-slate-500 bg-[#F4F6F8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-semibold tracking-wider text-[#C0392B] uppercase">
            {COMPANY.fullTicker}
          </span>
          <span className="opacity-40" aria-hidden="true">|</span>
          <span className="truncate">
            {en
              ? 'Indonesian Public Maritime & Offshore Support Logistics'
              : 'Emiten Jasa Pelayaran & Pendukung Maritim Lepas Pantai Indonesia'}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/investors/financials"
            className="hover:text-[#C0392B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C0392B]"
          >
            {t('nav.financialStatements')}
          </Link>
          <span className="opacity-40" aria-hidden="true">•</span>
          <Link
            to="/contact/info"
            className="hover:text-[#C0392B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C0392B]"
          >
            {t('nav.contactInfo')}
          </Link>
        </div>
      </div>
    </div>
  );
}
