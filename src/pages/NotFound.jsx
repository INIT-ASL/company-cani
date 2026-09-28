// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/common/SEO';
import logoCani from '../assets/images/logo-cani.png';

export default function NotFound() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#F4F6F8] px-4 py-20">
      <SEO
        title={language === 'en' ? '404 Page Not Found' : '404 Halaman Tidak Ditemukan'}
        description="The requested page could not be located on the CANI server."
      />
      <div className="max-w-lg w-full bg-white border border-slate-200 rounded-[4px] p-8 sm:p-12 text-center shadow-xs">
        <div className="mb-6 flex justify-center">
          <img
            src={logoCani}
            alt="PT Capitol Nusantara Indonesia Tbk"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </div>

        <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#C0392B] mb-2">
          404 — {language === 'en' ? 'PAGE NOT FOUND' : 'HALAMAN TIDAK DITEMUKAN'}
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#1E2A3A] mb-3">
          {language === 'en' ? 'Out of Navigable Waters' : 'Halaman Tidak Tersedia'}
        </h1>

        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          {language === 'en'
            ? 'The requested URL could not be located on the PT Capitol Nusantara Indonesia Tbk server. The link may be expired or the route may have moved.'
            : 'Tautan yang Anda cari tidak ditemukan pada server PT Capitol Nusantara Indonesia Tbk. Halaman mungkin telah dipindahkan atau alamat URL keliru.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C0392B] text-white px-5 py-2.5 rounded-[3px] text-xs font-semibold hover:bg-[#96281B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('common.backToHome')}</span>
          </Link>
          <Link
            to="/fleet/aht"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 text-[#1E2A3A] px-5 py-2.5 rounded-[3px] text-xs font-semibold hover:bg-slate-50 transition-colors"
          >
            <Search className="w-4 h-4 text-slate-400" />
            <span>{language === 'en' ? 'Explore Fleet' : 'Lihat Armada'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
