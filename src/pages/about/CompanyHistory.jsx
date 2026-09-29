// src/pages/about/CompanyHistory.jsx
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import { historyData } from '../../data/history';
import { useLanguage } from '../../context/LanguageContext';
import { Anchor, Award } from 'lucide-react';

export default function CompanyHistory() {
  const { language, t } = useLanguage();

  return (
    <>
      <SEO
        title={t('about.history.headerTitle')}
        description={t('about.history.headerDesc')}
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.aboutUs'), to: '/about/history' },
          { label: t('about.history.headerTitle') },
        ]}
        kicker={language === 'en' ? 'MILESTONES & HERITAGE' : 'SEJARAH & TONGGAK PERJALANAN'}
        title={t('about.history.headerTitle')}
        description={t('about.history.headerDesc')}
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executive Summary */}
          <div className="max-w-3xl mb-16 border-b border-slate-200 pb-10">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#1E2A3A] mb-3">
              {language === 'en'
                ? 'Two Decades of Dedicated Offshore Support & Marine Logistics'
                : 'Dua Dekade Dedikasi di Sektor Pelayaran dan Penunjang Migas Lepas Pantai'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t('about.history.intro')}
            </p>
          </div>

          {/* Chronological Timeline with Large Typography */}
          <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
            {historyData.map((item) => {
              const periodText =
                typeof item.period === 'object' && item.period !== null
                  ? item.period[language] || item.period.en
                  : item.period || item.year;

              const titleText =
                typeof item.title === 'object' && item.title !== null
                  ? item.title[language] || item.title.en
                  : item.title;

              const descText =
                typeof item.description === 'object' && item.description !== null
                  ? item.description[language] || item.description.en
                  : item.description;

              const isIpo = item.year === '2013';

              return (
                <div key={item.period?.en || item.year} className="relative group">
                  {/* Pin Dot on timeline */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 bg-white transition-colors ${
                      isIpo
                        ? 'border-[#C0392B] bg-[#C0392B]'
                        : 'border-slate-400 group-hover:border-[#C0392B]'
                    }`}
                  />

                  {/* Year / Period Heading */}
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#1E2A3A] tracking-tight">
                      {periodText}
                    </span>
                    {isIpo && (
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-[#C0392B] text-white px-2 py-0.5 rounded-[2px]">
                        {language === 'en' ? 'IPO MILESTONE' : 'KEPUTUSAN IPO'}
                      </span>
                    )}
                  </div>

                  {/* Content Box */}
                  <div className="bg-[#F4F6F8] border border-slate-200 rounded-[3px] p-5 sm:p-6 max-w-3xl hover:border-slate-300 transition-colors shadow-xs">
                    <h3 className="font-display font-bold text-base text-[#1E2A3A] mb-2 flex items-center gap-2">
                      {isIpo ? (
                        <Award className="w-4 h-4 text-[#C0392B] shrink-0" />
                      ) : (
                        <Anchor className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                      <span>{titleText}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {descText}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
