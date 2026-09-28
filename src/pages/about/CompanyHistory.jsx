// src/pages/about/CompanyHistory.jsx
import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';
import { historyData } from '../../data/history';
import { useLanguage } from '../../context/LanguageContext';

export default function CompanyHistory() {
  const { language, t } = useLanguage();

  return (
    <>
      <PageHeader
        breadcrumb={t('about.history.breadcrumb')}
        title={t('about.history.headerTitle')}
        description={t('about.history.headerDesc')}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="text-center mb-16">
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mx-auto">
              {t('about.history.intro')}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C0392B] to-[#1E2A3A]/20 -translate-x-1/2 hidden md:block" />

            <div className="space-y-10">
              {historyData.map((item, index) => {
                const isLeft = index % 2 === 0;
                const titleText = typeof item.title === 'object' ? item.title[language] : item.title;
                const descText = typeof item.description === 'object' ? item.description[language] : item.description;

                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, delay: 0.05 }}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Card */}
                    <div className={`w-full md:w-[calc(50%-28px)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-[#C0392B] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-bold text-[#1E2A3A] text-base mb-2">{titleText}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{descText}</p>
                      </div>
                    </div>

                    {/* Center dot (desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-[#C0392B] rounded-full items-center justify-center shadow-md z-10">
                      <span className="text-[#C0392B] font-bold text-xs leading-none text-center">
                        {item.year.slice(2)}
                      </span>
                    </div>

                    {/* Empty spacer for opposite side */}
                    <div className="hidden md:block w-[calc(50%-28px)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
