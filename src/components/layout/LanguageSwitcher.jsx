// src/components/layout/LanguageSwitcher.jsx
import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSwitcher({ isTransparent = false, isMobile = false }) {
  const { language, setLanguage } = useLanguage();

  if (isMobile) {
    return (
      <div
        className="flex items-center gap-1 bg-slate-100 p-1 rounded-[3px] border border-slate-200"
        role="group"
        aria-label="Pilih Bahasa / Select Language"
      >
        <button
          type="button"
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          aria-label="Switch language to English"
          className={`flex-1 py-2 text-xs font-mono font-bold rounded-[2px] transition-colors ${
            language === 'en'
              ? 'bg-[#1E2A3A] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLanguage('id')}
          aria-pressed={language === 'id'}
          aria-label="Ganti bahasa ke Bahasa Indonesia"
          className={`flex-1 py-2 text-xs font-mono font-bold rounded-[2px] transition-colors ${
            language === 'id'
              ? 'bg-[#1E2A3A] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          ID
        </button>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center text-xs font-mono font-semibold rounded-[3px] p-0.5 border transition-colors ${
        isTransparent
          ? 'border-white/20 bg-white/10 text-white'
          : 'border-slate-200 bg-slate-100 text-slate-700'
      }`}
      role="group"
      aria-label="Pilih Bahasa / Select Language"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        aria-label="Switch language to English"
        className={`px-2 py-1 rounded-[2px] transition-all ${
          language === 'en'
            ? 'bg-[#C0392B] text-white font-bold shadow-xs'
            : isTransparent
              ? 'hover:text-white'
              : 'hover:text-[#1E2A3A]'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('id')}
        aria-pressed={language === 'id'}
        aria-label="Ganti bahasa ke Bahasa Indonesia"
        className={`px-2 py-1 rounded-[2px] transition-all ${
          language === 'id'
            ? 'bg-[#C0392B] text-white font-bold shadow-xs'
            : isTransparent
              ? 'hover:text-white'
              : 'hover:text-[#1E2A3A]'
        }`}
      >
        ID
      </button>
    </div>
  );
}
