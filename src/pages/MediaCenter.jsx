// src/pages/MediaCenter.jsx
import { useState, useMemo, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import SEO from '../components/common/SEO';
import { pressReleaseData, newsData } from '../data/news';
import { COMPANY } from '../data/company';
import { Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalized } from '../utils/i18n';
import YearFilter from '../components/common/YearFilter';
import MediaArticleModal from '../components/media/MediaArticleModal';
import MediaArticleCard from '../components/media/MediaArticleCard';
import MediaPagination from '../components/media/MediaPagination';

export default function MediaCenter() {
  const { language, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  // Active tab derived from URL
  const isNews = location.pathname.includes('/news');
  const activeTab = isNews ? 'news' : 'press-release';

  const [search, setSearch] = useState('');
  const [selectedYear, setSelectedYear] = useState('ALL');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const triggerRef = useRef(null);
  const itemsPerPage = 8;

  const currentDataset = useMemo(() => {
    return activeTab === 'news' ? newsData : pressReleaseData;
  }, [activeTab]);

  // Available unique years in current dataset
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(currentDataset.map((d) => d.year))).filter(Boolean);
    years.sort((a, b) => Number(b) - Number(a));
    return ['ALL', ...years];
  }, [currentDataset]);

  // Filtered dataset
  const filtered = useMemo(() => {
    return currentDataset.filter((item) => {
      const matchYear = selectedYear === 'ALL' || item.year === selectedYear;

      const titleEn = item.title?.en?.toLowerCase() || '';
      const titleId = item.title?.id?.toLowerCase() || '';
      const excerptEn = item.excerpt?.en?.toLowerCase() || '';
      const excerptId = item.excerpt?.id?.toLowerCase() || '';
      const categoryEn = item.category?.en?.toLowerCase() || '';
      const categoryId = item.category?.id?.toLowerCase() || '';
      const dateText = getLocalized(item.date, language).toLowerCase();

      const query = search.toLowerCase().trim();
      const matchSearch =
        !query ||
        titleEn.includes(query) ||
        titleId.includes(query) ||
        excerptEn.includes(query) ||
        excerptId.includes(query) ||
        categoryEn.includes(query) ||
        categoryId.includes(query) ||
        dateText.includes(query);

      return matchYear && matchSearch;
    });
  }, [currentDataset, selectedYear, search, language]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = useMemo(() => {
    return filtered.slice(startIndex, startIndex + itemsPerPage);
  }, [filtered, startIndex, itemsPerPage]);

  const handleTabSwitch = (tab) => {
    navigate(tab === 'news' ? '/media/news' : '/media/press-release');
  };

  const handleYearFilter = (yr) => {
    setSelectedYear(yr);
    setCurrentPage(1);
  };

  const activeMenuLabel =
    activeTab === 'news' ? t('nav.news') : t('nav.pressRelease');

  // Page title without double company name (SEO component adds brand suffix)
  const pageTitle = activeMenuLabel;
  const pageDesc =
    activeTab === 'news'
      ? t('media.newsDesc')
      : t('media.pressReleaseDesc');

  return (
    <>
      <SEO title={pageTitle} description={pageDesc} />

      <PageHeader
        breadcrumbs={[
          { label: t('nav.mediaCenter'), to: '/media/press-release' },
          { label: activeMenuLabel },
        ]}
        kicker={language === 'en' ? 'MEDIA CENTER & DISCLOSURES' : 'PUSAT MEDIA & KETERBUKAAN'}
        title={activeMenuLabel}
        description={pageDesc}
      />

      <section className="py-12 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Category Tabs */}
          <div
            role="tablist"
            aria-label="Media Center Navigation"
            className="flex items-center gap-2 border-b border-slate-200 mb-8"
          >
            <button
              type="button"
              role="tab"
              id="tab-press-release"
              aria-selected={activeTab === 'press-release'}
              aria-controls="media-content-panel"
              onClick={() => handleTabSwitch('press-release')}
              className={`px-5 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors border-b-2 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] ${
                activeTab === 'press-release'
                  ? 'border-[#C0392B] text-[#C0392B] bg-slate-50/50'
                  : 'border-transparent text-slate-500 hover:text-[#1E2A3A] hover:border-slate-300'
              }`}
            >
              <span>{t('nav.pressRelease')}</span>
              <span className="font-mono text-[11px] px-1.5 py-0.2 bg-slate-200 text-slate-700 rounded-[2px]">
                {pressReleaseData.length}
              </span>
            </button>

            <button
              type="button"
              role="tab"
              id="tab-news"
              aria-selected={activeTab === 'news'}
              aria-controls="media-content-panel"
              onClick={() => handleTabSwitch('news')}
              className={`px-5 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors border-b-2 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] ${
                activeTab === 'news'
                  ? 'border-[#C0392B] text-[#C0392B] bg-slate-50/50'
                  : 'border-transparent text-slate-500 hover:text-[#1E2A3A] hover:border-slate-300'
              }`}
            >
              <span>{t('nav.news')}</span>
              <span className="font-mono text-[11px] px-1.5 py-0.2 bg-slate-200 text-slate-700 rounded-[2px]">
                {newsData.length}
              </span>
            </button>
          </div>

          <div id="media-content-panel" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
            {/* Filtering Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
              {/* Reusable Year Filter */}
              <YearFilter
                years={availableYears}
                selectedYear={selectedYear}
                onChange={handleYearFilter}
                language={language}
                label={t('media.filterYear')}
              />

              {/* Keyword Search Input */}
              <div className="relative w-full md:w-80">
                <label htmlFor="media-search" className="sr-only">
                  {t('media.searchPlaceholder')}
                </label>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
                <input
                  id="media-search"
                  type="search"
                  placeholder={t('media.searchPlaceholder')}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-8 py-2 bg-[#F4F6F8] border border-slate-200 rounded-[2px] text-xs focus:outline-none focus:ring-1 focus:ring-[#C0392B] focus:border-[#C0392B] font-sans"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearch('');
                      setCurrentPage(1);
                    }}
                    aria-label={language === 'en' ? 'Clear search query' : 'Hapus pencarian'}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Announcements & Documents List */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-slate-400 font-mono text-xs border border-dashed border-slate-200 rounded-[3px] bg-slate-50/50">
                <Search className="w-8 h-8 mx-auto mb-3 opacity-40 text-slate-400" aria-hidden="true" />
                <p>{t('media.noDocs')}</p>
              </div>
            ) : (
              <div className="space-y-4 mb-10">
                {paginatedItems.map((item, index) => (
                  <MediaArticleCard
                    key={item.id || index}
                    item={item}
                    language={language}
                    t={t}
                    idxUrl={COMPANY.idxUrl}
                    onSelect={(article) => {
                      triggerRef.current = document.activeElement;
                      setSelectedArticle(article);
                    }}
                  />
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            <MediaPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filtered.length}
              startIndex={startIndex}
              endIndex={startIndex + itemsPerPage}
              language={language}
            />
          </div>
        </div>
      </section>

      {/* Accessible Document Preview Modal */}
      <MediaArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        triggerRef={triggerRef}
        language={language}
        idxUrl={COMPANY.idxUrl}
      />
    </>
  );
}
