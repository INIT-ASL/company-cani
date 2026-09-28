// src/components/home/NewsSection.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { newsData } from '../../data/news';
import { useLanguage } from '../../context/LanguageContext';

export default function NewsSection() {
  const { language, t } = useLanguage();
  const latest = newsData.slice(0, 3);

  return (
    <section className="py-20 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle={t('newsSection.subtitle')}
          title={t('newsSection.title')}
          description={t('newsSection.description')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((news, i) => {
            const categoryText = typeof news.category === 'object' ? news.category[language] : news.category;
            const titleText = typeof news.title === 'object' ? news.title[language] : news.title;
            const excerptText = typeof news.excerpt === 'object' ? news.excerpt[language] : news.excerpt;
            const dateText = typeof news.date === 'object' ? news.date[language] : news.date;

            return (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
              >
                {/* Image */}
                <div className="h-44 overflow-hidden bg-slate-200">
                  <img
                    src={news.image}
                    alt={titleText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs text-[#C0392B] font-semibold bg-red-50 px-2 py-0.5 rounded-md">
                      <Tag className="w-3 h-3" />
                      {categoryText}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                      <Calendar className="w-3 h-3" />
                      {dateText}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#1E2A3A] text-sm leading-snug line-clamp-2 mb-3">
                    {titleText}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">
                    {excerptText}
                  </p>
                  <Link
                    to="/media"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C0392B] hover:gap-2.5 transition-all"
                  >
                    {t('common.readMore')} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/media"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C0392B] hover:text-[#922B21] transition-colors"
          >
            {t('newsSection.viewAllNews')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
