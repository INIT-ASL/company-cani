// src/pages/about/CompanyProfile.jsx
import PageHeader from '../../components/ui/PageHeader';
import SectionTitle from '../../components/ui/SectionTitle';
import SEO from '../../components/common/SEO';
import { CheckCircle2, ShieldCheck, Anchor, Compass, Building, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function CompanyProfile() {
  const { language, t } = useLanguage();

  const strengths = t('about.profile.strengths') || [];
  const areas = t('about.profile.areas') || [];
  const missionItems = t('about.profile.missionItems') || [];

  return (
    <>
      <SEO
        title={t('about.profile.headerTitle')}
        description={t('about.profile.headerDesc')}
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.aboutUs'), to: '/about/profile' },
          { label: t('about.profile.headerTitle') },
        ]}
        kicker={language === 'en' ? 'CORPORATE PROFILE' : 'PROFIL PERSEROAN'}
        title={t('about.profile.headerTitle')}
        description={t('about.profile.headerDesc')}
      />

      {/* Main Narrative & Credentials */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-xs bg-[#C0392B]" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#C0392B]">
                  {t('about.profile.sectionSubtitle')}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#1E2A3A] mb-6 leading-tight">
                {t('about.profile.mainHeading')}
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>{t('about.profile.p1')}</p>
                <p>{t('about.profile.p2')}</p>
                <p>{t('about.profile.p3')}</p>
              </div>

              <div className="mt-8 p-4 bg-[#F4F6F8] border border-slate-200 rounded-[3px] text-xs font-mono text-slate-600 space-y-1">
                <div className="font-bold text-[#1E2A3A] uppercase">
                  {language === 'en' ? 'Statutory Summary' : 'Ringkasan Legalitas & Statutori'}
                </div>
                <div>Entity: PT Capitol Nusantara Indonesia Tbk • IDX Ticker: CANI</div>
                <div>Establishment: 2004 • IPO: January 2013</div>
                <div>Headquarters: Samarinda, East Kalimantan • Representative: Jakarta Pusat</div>
              </div>
            </div>

            {/* Right Strengths List (5 cols) */}
            <div className="lg:col-span-5 bg-[#F4F6F8] border border-slate-200 rounded-[3px] p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-[#C0392B]" />
                <h3 className="font-display font-bold text-base text-[#1E2A3A]">
                  {t('about.profile.strengthsTitle')}
                </h3>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                {strengths.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C0392B] mt-0.5 shrink-0" />
                    <span className="leading-snug">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Sectors */}
      <section className="py-16 sm:py-20 bg-[#F4F6F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker={t('about.profile.businessAreasTitle')}
            title={t('about.profile.businessAreasSubtitle')}
            description={t('about.profile.businessAreasDesc')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {areas.map((area, i) => {
              const icons = [Anchor, Compass, Building, TrendingUp];
              const Icon = icons[i % icons.length];

              return (
                <div
                  key={area.title}
                  className="bg-white border border-slate-200 rounded-[3px] p-6 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 bg-[#1E2A3A] text-white rounded-[2px] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#C0392B]" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#1E2A3A] mb-2">
                      {area.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">{area.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-[#121A24] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Vision (5 cols) */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-[3px] p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#C0392B] mb-2 block">
                  {t('about.profile.visionTitle')}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-4 leading-tight">
                  {language === 'en'
                    ? 'Regional Standard in Maritime Reliability & Safety'
                    : 'Penyedia Layanan Maritim Tepercaya & Berstandar Keselamatan Tinggi'}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {t('about.profile.visionText')}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 text-xs font-mono text-slate-400">
                PT Capitol Nusantara Indonesia Tbk
              </div>
            </div>

            {/* Mission (7 cols) */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-[3px] p-8">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#C0392B] mb-2 block">
                {t('about.profile.missionTitle')}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6 leading-tight">
                {language === 'en'
                  ? 'Strategic Operational Principles'
                  : 'Prinsip Eksekusi & Kinerja Operasional'}
              </h3>

              <div className="space-y-4">
                {missionItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="font-mono font-bold text-xs text-[#C0392B] px-1.5 py-0.5 bg-white/10 rounded-[2px] shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
