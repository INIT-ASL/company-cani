// src/pages/MediaCenter.jsx
import { useState, useMemo, useCallback } from 'react';
import PageHeader from '../components/ui/PageHeader';
import SEO from '../components/common/SEO';
import { newsData } from '../data/news';
import { Calendar, Search, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MediaCenter() {
  const { language, t } = useLanguage();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const getLocalized = useCallback((field) => {
    return typeof field === 'object' && field !== null
      ? field[language] || field.en
      : field;
  }, [language]);

  // Build category list dynamically
  const categories = useMemo(() => {
    const set = new Set();
    newsData.forEach((item) => {
      const enCat = typeof item.category === 'object' ? item.category.en : item.category;
      if (enCat) set.add(enCat);
    });
    return ['ALL', ...Array.from(set)];
  }, []);

  // Filtered dataset
  const filtered = useMemo(() => {
    return newsData.filter((item) => {
      const enCat = typeof item.category === 'object' ? item.category.en : item.category;
      const matchCat = activeCategory === 'ALL' || enCat === activeCategory;

      const title = getLocalized(item.title).toLowerCase();
      const excerpt = getLocalized(item.excerpt).toLowerCase();
      const query = search.toLowerCase().trim();

      const matchSearch = !query || title.includes(query) || excerpt.includes(query);

      return matchCat && matchSearch;
    });
  }, [activeCategory, search, getLocalized]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <>
      <SEO
        title={t('media.headerTitle')}
        description={t('media.headerDesc')}
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.mediaCenter'), to: '/media' },
          { label: t('media.headerTitle') },
        ]}
        kicker={language === 'en' ? 'MEDIA & PRESS' : 'MEDIA & PUSAT INFORMASI'}
        title={t('media.headerTitle')}
        description={t('media.headerDesc')}
      />

      <section className="py-12 bg-white border-b border-slate-200 min-h-[65vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar: Search & Category Chips */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center pb-6 mb-8 border-b border-slate-200">
            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-1.5" role="tablist">
              {categories.map((catKey) => {
                const sampleItem = newsData.find(
                  (n) => (typeof n.category === 'object' ? n.category.en : n.category) === catKey
                );
                const label =
                  catKey === 'ALL'
                    ? t('common.all')
                    : sampleItem
                    ? getLocalized(sampleItem.category)
                    : catKey;

                return (
                  <button
                    key={catKey}
                    role="tab"
                    aria-selected={activeCategory === catKey}
                    onClick={() => handleCategoryChange(catKey)}
                    className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors ${
                      activeCategory === catKey
                        ? 'bg-[#1E2A3A] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:text-[#C0392B] hover:bg-slate-200'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder={t('common.searchPlaceholder')}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-9 pr-4 py-2 bg-[#F4F6F8] border border-slate-200 rounded-[2px] text-xs focus:outline-none focus:ring-1 focus:ring-[#C0392B] focus:border-[#C0392B]"
              />
            </div>
          </div>

          {/* Articles Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400 font-mono text-xs">
              <Search className="w-8 h-8 mx-auto mb-3 opacity-40" />
              <p>{t('common.noResults')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedArticles.map((item) => {
                const titleText = getLocalized(item.title);
                const excerptText = getLocalized(item.excerpt);
                const dateText = getLocalized(item.date);
                const categoryText = getLocalized(item.category);

                return (
                  <article
                    key={item.id}
                    onClick={() => setSelectedArticle(item)}
                    className="bg-[#F4F6F8] border border-slate-200 rounded-[3px] overflow-hidden flex flex-col justify-between group hover:border-slate-300 transition-colors cursor-pointer"
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                        <img
                          src={item.image}
                          alt={titleText}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          loading="lazy"
                          width={600}
                          height={375}
                        />
                        <div className="absolute top-2.5 left-2.5 bg-[#C0392B] text-white font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                          {categoryText}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 mb-2">
                          <Calendar className="w-3.5 h-3.5 text-[#C0392B]" />
                          <span>{dateText}</span>
                        </div>

                        <h3 className="font-display font-bold text-base text-[#1E2A3A] group-hover:text-[#C0392B] transition-colors leading-snug mb-2.5 line-clamp-2">
                          {titleText}
                        </h3>

                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-sans">
                          {excerptText}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-0">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#C0392B] group-hover:underline">
                        <span>{t('common.readMore')}</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-6 border-t border-slate-200">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="p-2 border border-slate-200 rounded-[2px] text-slate-600 disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-50"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono text-slate-600 px-3">
                {language === 'en'
                  ? `Page ${currentPage} of ${totalPages}`
                  : `Halaman ${currentPage} dari ${totalPages}`}
              </span>

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="p-2 border border-slate-200 rounded-[2px] text-slate-600 disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-50"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Article Detail View Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        >
          <div className="bg-white rounded-[3px] border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                  <span className="px-2 py-0.5 bg-[#C0392B] text-white font-bold uppercase rounded-[2px]">
                    {getLocalized(selectedArticle.category)}
                  </span>
                  <span>•</span>
                  <span>{getLocalized(selectedArticle.date)}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-[#1E2A3A] leading-tight">
                  {getLocalized(selectedArticle.title)}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="p-1 text-slate-400 hover:text-[#1E2A3A] transition-colors"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
              <img
                src={selectedArticle.image}
                alt={getLocalized(selectedArticle.title)}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              <p className="font-semibold text-slate-800">
                {getLocalized(selectedArticle.excerpt)}
              </p>
              <p>
                {language === 'en'
                  ? 'PT Capitol Nusantara Indonesia Tbk continues to uphold strict marine safety management and operational discipline across all active fleet deployments. For investor disclosures or commercial inquiries regarding this announcement, please contact the Corporate Secretary or Commercial Chartering Division.'
                  : 'PT Capitol Nusantara Indonesia Tbk senantiasa berkomitmen menjalankan tata kelola maritim profesional dan keselamatan kerja di setiap penugasan armada. Untuk klarifikasi keterbukaan informasi emiten atau pertanyaan komersial, silakan menghubungi Sekretaris Perusahaan atau Divisi Chartering.'}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#F4F6F8] border-t border-slate-100 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-500">
                PT Capitol Nusantara Indonesia Tbk (CANI)
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-[#1E2A3A] text-white text-xs font-semibold uppercase tracking-wider rounded-[2px]"
              >
                {language === 'en' ? 'Close' : 'Tutup'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
