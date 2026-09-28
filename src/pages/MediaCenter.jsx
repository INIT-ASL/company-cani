// src/pages/MediaCenter.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import { newsData } from '../data/news';
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MediaCenter() {
  const { language, t } = useLanguage();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  // Extract unique categories based on current language
  const categoriesMap = {
    ALL: t('common.all'),
  };

  newsData.forEach((item) => {
    const catEn = typeof item.category === 'object' ? item.category.en : item.category;
    const catLocalized = typeof item.category === 'object' ? item.category[language] : item.category;
    categoriesMap[catEn] = catLocalized;
  });

  const categoryKeys = Object.keys(categoriesMap);

  const filtered = newsData.filter((n) => {
    const catEn = typeof n.category === 'object' ? n.category.en : n.category;
    const matchCat = activeCategory === 'ALL' || catEn === activeCategory;

    const titleText = typeof n.title === 'object' ? n.title[language] : n.title;
    const excerptText = typeof n.excerpt === 'object' ? n.excerpt[language] : n.excerpt;

    const matchSearch =
      titleText.toLowerCase().includes(search.toLowerCase()) ||
      excerptText.toLowerCase().includes(search.toLowerCase());

    return matchCat && matchSearch;
  });

  return (
    <>
      <PageHeader
        breadcrumb={t('media.breadcrumb')}
        title={t('media.headerTitle')}
        description={t('media.headerDesc')}
      />

      <section className="py-12 bg-[#F4F6F8] min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder={t('common.searchPlaceholder')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0392B]/20 focus:border-[#C0392B]"
              />
            </div>
            {/* Category filter */}
            <div className="flex gap-2 flex-wrap">
              {categoryKeys.map((catKey) => (
                <button
                  key={catKey}
                  onClick={() => setActiveCategory(catKey)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    activeCategory === catKey
                      ? 'bg-[#C0392B] text-white shadow-sm'
                      : 'bg-white text-slate-500 border border-slate-200 hover:border-[#C0392B] hover:text-[#C0392B]'
                  }`}
                >
                  {categoriesMap[catKey]}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p className="text-sm">{t('common.noResults')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((news, i) => {
                const categoryText = typeof news.category === 'object' ? news.category[language] : news.category;
                const titleText = typeof news.title === 'object' ? news.title[language] : news.title;
                const excerptText = typeof news.excerpt === 'object' ? news.excerpt[language] : news.excerpt;
                const dateText = typeof news.date === 'object' ? news.date[language] : news.date;

                return (
                  <motion.article
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                    className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="h-48 overflow-hidden bg-slate-200">
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
                      <h3 className="font-bold text-[#1E2A3A] text-sm leading-snug mb-2 line-clamp-2">
                        {titleText}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">
                        {excerptText}
                      </p>
                      <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C0392B] hover:gap-2.5 transition-all">
                        {t('common.readMore')} <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
