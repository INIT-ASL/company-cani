// src/components/home/NewsSection.jsx
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { newsData } from '../../data/news';
import { useLanguage } from '../../context/LanguageContext';

export default function NewsSection() {
  const { language, t } = useLanguage();
  const leadNews = newsData[0];
  const secondaryNews = newsData.slice(1, 3);

  const getLocalized = (field) => {
    return typeof field === 'object' && field !== null ? field[language] || field.en : field;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker={language === 'en' ? 'MEDIA & DISCLOSURE' : 'MEDIA & KETERBUKAAN INFORMASI'}
          title={t('newsSection.title')}
          description={t('newsSection.description')}
          action={
            <Link
              to="/media"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C0392B] hover:text-[#96281B] transition-colors"
            >
              <span>{t('newsSection.viewAllNews')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          }
        />

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Lead Article (7 cols) */}
          {leadNews && (
            <article className="lg:col-span-7 bg-[#F4F6F8] border border-slate-200 rounded-[3px] overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src={leadNews.image}
                  alt={getLocalized(leadNews.title)}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  width={700}
                  height={394}
                />
                <div className="absolute top-3 left-3 bg-[#C0392B] text-white font-mono text-[10px] font-bold px-2 py-0.5 tracking-wider uppercase">
                  {getLocalized(leadNews.category)}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#C0392B]" />
                    <span>{getLocalized(leadNews.date)}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#1E2A3A] mb-3 font-display leading-tight group-hover:text-[#C0392B] transition-colors">
                    <Link to="/media">{getLocalized(leadNews.title)}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                    {getLocalized(leadNews.excerpt)}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    to="/media"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C0392B] hover:text-[#96281B]"
                  >
                    <span>{t('common.readMore')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Secondary Stacked Articles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {secondaryNews.map((item) => (
              <article
                key={item.id}
                className="bg-[#F4F6F8] border border-slate-200 rounded-[3px] p-5 flex flex-col justify-between flex-1 group hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 mb-2">
                    <span className="text-[#C0392B] font-semibold uppercase flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {getLocalized(item.category)}
                    </span>
                    <span>•</span>
                    <span>{getLocalized(item.date)}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#1E2A3A] mb-2 font-display leading-snug group-hover:text-[#C0392B] transition-colors">
                    <Link to="/media">{getLocalized(item.title)}</Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {getLocalized(item.excerpt)}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <Link
                    to="/media"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#C0392B] hover:text-[#96281B]"
                  >
                    <span>{t('common.readMore')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}

            {/* Investor Relations Notice Link */}
            <div className="p-4 bg-[#1E2A3A] text-white rounded-[3px] text-xs flex items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[#E74C3C] font-bold block text-[10px] uppercase">
                  IDX Public Filings
                </span>
                <span className="text-slate-300">
                  {language === 'en'
                    ? 'Quarterly financials & corporate action disclosures.'
                    : 'Laporan keuangan berkala & keterbukaan aksi korporasi.'}
                </span>
              </div>
              <Link
                to="/investors/financials"
                className="shrink-0 px-3 py-1.5 bg-[#C0392B] hover:bg-[#96281B] text-white text-[11px] font-bold rounded-[2px] tracking-wide uppercase transition-colors"
              >
                {language === 'en' ? 'View Filings' : 'Lihat Laporan'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
