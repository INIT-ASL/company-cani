// src/components/ui/Breadcrumbs.jsx
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Breadcrumbs({ items = [] }) {
  const { t } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-xs text-white/60 mb-4 flex-wrap gap-1.5 font-medium">
      <Link
        to="/"
        className="inline-flex items-center gap-1 hover:text-white transition-colors text-white/70"
      >
        <Home className="w-3.5 h-3.5" />
        <span>{t('nav.home')}</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="inline-flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-white/40 shrink-0" />
            {isLast || !item.to ? (
              <span className="text-white font-semibold" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.to} className="hover:text-white transition-colors text-white/70">
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
