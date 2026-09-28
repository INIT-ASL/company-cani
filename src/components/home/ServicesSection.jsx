// src/components/home/ServicesSection.jsx
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function ServicesSection() {
  const { language, t } = useLanguage();
  const serviceItems = t('services.items') || [];

  const charterModels = [
    { code: 'TC', name: 'Time Charter', desc: language === 'en' ? 'Full crew & technical maintenance' : 'Lengkap awak kapal & pemeliharaan teknis' },
    { code: 'BC', name: 'Bareboat Charter', desc: language === 'en' ? 'Vessel hull lease without operational crew' : 'Sewa fisik kapal tanpa awak operasional' },
    { code: 'VC', name: 'Voyage Charter', desc: language === 'en' ? 'Single point-to-point transit cargo voyage' : 'Sewa satu rute pengangkutan kargo' },
    { code: 'FC', name: 'Freight Charter', desc: language === 'en' ? 'Rate structured on volume / metric tonnage' : 'Tarif berbasis volume atau metrik tonase' },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#1E2A3A] text-white border-b border-slate-700/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Scope & Chartering Structure (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#C0392B]" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#E74C3C]">
                {t('services.subtitle')}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 font-display">
              {t('services.title')}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              {t('services.description')}
            </p>

            {/* Chartering Framework Card */}
            <div className="bg-[#121A24] border border-slate-700 p-5 rounded-[3px] mb-6">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <span className="w-1 h-3 bg-[#C0392B]" />
                {language === 'en' ? 'Chartering Schemes Available' : 'Skema Sewa & Kontrak Armada'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {charterModels.map((cm) => (
                  <div key={cm.code} className="border-l-2 border-[#C0392B] pl-2.5 py-0.5">
                    <span className="font-bold text-white font-mono">{cm.code}</span> —{' '}
                    <span className="text-slate-300 font-medium">{cm.name}</span>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{cm.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cabotage & Standards Notice */}
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C0392B] shrink-0" />
                <span>
                  {language === 'en'
                    ? '100% Indonesian crew and Master Mariner officers'
                    : '100% awak kapal berkewarganegaraan Indonesia & perwira tersertifikasi'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C0392B] shrink-0" />
                <span>
                  {language === 'en'
                    ? 'Certified under ISM Code & ISPS security regulations'
                    : 'Sertifikasi kepatuhan ISM Code & standar keamanan maritim ISPS'}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/fleet/aht"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E74C3C] hover:text-white transition-colors"
              >
                <span>{language === 'en' ? 'Review fleet technical units' : 'Lihat spesifikasi lengkap armada'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Structured Engineering Services (7 cols) */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-slate-700/80 border-y border-slate-700/80">
              {serviceItems.map((svc, index) => {
                const stepNumber = String(index + 1).padStart(2, '0');

                return (
                  <div
                    key={svc.title}
                    className="py-5 sm:py-6 group transition-colors hover:bg-white/[0.02]"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#C0392B] tracking-wider shrink-0 mt-0.5">
                        {stepNumber}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1.5 font-display">
                          {svc.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {svc.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
