// src/pages/MediaCenter.jsx
import { useState, useMemo, useCallback } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import SEO from '../components/common/SEO';
import { pressReleaseData, newsData, IDX_CANI_URL } from '../data/news';
import {
  Calendar,
  Search,
  FileText,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Tag,
  X,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
  const itemsPerPage = 8;

  const currentDataset = useMemo(() => {
    return activeTab === 'news' ? newsData : pressReleaseData;
  }, [activeTab]);

  const getLocalized = useCallback(
    (field) => {
      return typeof field === 'object' && field !== null
        ? field[language] || field.en || field.id
        : field;
    },
    [language]
  );

  const getSecondary = useCallback(
    (field) => {
      if (typeof field === 'object' && field !== null) {
        return language === 'en' ? field.id : field.en;
      }
      return '';
    },
    [language]
  );

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
      const dateText = getLocalized(item.date).toLowerCase();

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
  }, [currentDataset, selectedYear, search, getLocalized]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  const handleTabSwitch = (tab) => {
    navigate(tab === 'news' ? '/media/news' : '/media/press-release');
    setSearch('');
    setSelectedYear('ALL');
    setCurrentPage(1);
  };

  const handleYearFilter = (yr) => {
    setSelectedYear(yr);
    setCurrentPage(1);
  };

  const activeMenuLabel =
    activeTab === 'news' ? t('nav.news') : t('nav.pressRelease');

  const pageTitle = `${activeMenuLabel} | PT Capitol Nusantara Indonesia Tbk`;

  const pageDesc =
    activeTab === 'news' ? t('media.newsDesc') : t('media.pressReleaseDesc');

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

      <section className="py-10 bg-white border-b border-slate-200 min-h-[65vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Tab Switcher */}
          <div className="flex border-b border-slate-200 mb-8" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'press-release'}
              onClick={() => handleTabSwitch('press-release')}
              className={`px-5 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors border-b-2 flex items-center gap-2 ${
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
              aria-selected={activeTab === 'news'}
              onClick={() => handleTabSwitch('news')}
              className={`px-5 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors border-b-2 flex items-center gap-2 ${
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

          {/* Filtering Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
            {/* Year Filter Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-slate-500 uppercase font-semibold">
                {t('media.filterYear')}
              </span>
              <div className="flex flex-wrap gap-1">
                {availableYears.map((yr) => (
                  <button
                    key={yr}
                    onClick={() => handleYearFilter(yr)}
                    className={`px-2.5 py-1 text-xs font-mono rounded-[2px] transition-colors ${
                      selectedYear === yr
                        ? 'bg-[#1E2A3A] text-white font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {yr === 'ALL' ? t('media.allYears') : yr}
                  </button>
                ))}
              </div>
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder={t('media.searchPlaceholder')}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-9 pr-4 py-2 bg-[#F4F6F8] border border-slate-200 rounded-[2px] text-xs focus:outline-none focus:ring-1 focus:ring-[#C0392B] focus:border-[#C0392B]"
              />
            </div>
          </div>

          {/* Announcements & Documents List */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400 font-mono text-xs border border-dashed border-slate-200 rounded-[3px] bg-slate-50/50">
              <Search className="w-8 h-8 mx-auto mb-3 opacity-40 text-slate-400" />
              <p>{t('media.noDocs')}</p>
            </div>
          ) : (
            <div className="space-y-4 mb-10">
              {paginatedItems.map((item, index) => {
                const titleText = getLocalized(item.title);
                const secondaryTitle = getSecondary(item.title);
                const dateText = getLocalized(item.date);
                const categoryText = getLocalized(item.category);

                return (
                  <div
                    key={item.id || index}
                    className="bg-white border border-slate-200 hover:border-slate-300 rounded-[3px] p-5 sm:p-6 transition-all shadow-2xs hover:shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-5"
                  >
                    <div className="space-y-2 flex-1">
                      {/* Meta: Category & Date */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        <span className="inline-flex items-center gap-1 font-bold uppercase text-[10px] px-2 py-0.5 bg-red-50 text-[#C0392B] border border-red-100 rounded-[2px]">
                          <Tag className="w-3 h-3" />
                          <span>{categoryText}</span>
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-[#C0392B]" />
                          <span>{dateText}</span>
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-400">
                          PT Capitol Nusantara Indonesia Tbk
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-base sm:text-lg text-[#1E2A3A] leading-snug">
                        {titleText}
                      </h3>

                      {/* Secondary Title / English Subtitle if different */}
                      {secondaryTitle && secondaryTitle !== titleText && (
                        <p className="text-xs text-slate-500 italic font-sans leading-relaxed">
                          {secondaryTitle}
                        </p>
                      )}
                    </div>

                    {/* PDF Download Links and Details */}
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                      {item.links && item.links.length > 0 ? (
                        item.links.map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#C0392B] hover:bg-[#96281B] text-white text-xs font-bold uppercase tracking-wider rounded-[2px] transition-colors shadow-2xs"
                            title={link.label || 'Download Document'}
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>
                              {item.links.length === 1
                                ? t('media.downloadPdf')
                                : `${t('media.downloadPdf')} (${lIdx + 1})`}
                            </span>
                          </a>
                        ))
                      ) : (
                        <a
                          href={IDX_CANI_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#1E2A3A] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-[2px] transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>IDX Link</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedArticle(item)}
                        className="inline-flex items-center gap-1 px-3 py-2 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-[#1E2A3A] bg-slate-50 hover:bg-slate-100 text-xs font-semibold rounded-[2px] transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5 text-slate-500" />
                        <span>{t('media.viewDetails')}</span>
                      </button>
                    </div>
                  </div>
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
                className="p-2 border border-slate-200 rounded-[2px] text-slate-600 disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-50 transition-colors"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono text-slate-600 px-3">
                {t('media.showingPage')
                  .replace('{current}', currentPage)
                  .replace('{total}', totalPages)}
              </span>

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="p-2 border border-slate-200 rounded-[2px] text-slate-600 disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-50 transition-colors"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Document Detail Modal */}
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
                {getSecondary(selectedArticle.title) && (
                  <p className="text-xs text-slate-500 italic mt-1">
                    {getSecondary(selectedArticle.title)}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="p-1 text-slate-400 hover:text-[#1E2A3A] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              <p className="font-medium text-slate-800">
                {getLocalized(selectedArticle.excerpt) || getLocalized(selectedArticle.title)}
              </p>

              <div className="p-4 bg-slate-50 rounded-[3px] border border-slate-200 space-y-3">
                <span className="font-mono text-xs font-bold text-[#1E2A3A] uppercase tracking-wider block">
                  {language === 'en' ? 'Official Documents / Files:' : 'Lampiran Dokumen Resmi:'}
                </span>

                <div className="space-y-2">
                  {selectedArticle.links && selectedArticle.links.length > 0 ? (
                    selectedArticle.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2.5 bg-white border border-slate-200 hover:border-[#C0392B] rounded-[2px] group transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#C0392B]" />
                          <span className="font-mono text-xs text-slate-700 group-hover:text-[#C0392B] font-medium">
                            {link.label || `Document ${idx + 1}`}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-bold text-[#C0392B] uppercase">
                          <span>{t('media.downloadPdf')}</span>
                          <Download className="w-3.5 h-3.5" />
                        </div>
                      </a>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500">
                      {language === 'en' ? 'No direct file attached.' : 'Tidak ada lampiran langsung.'}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-500">
                {language === 'en'
                  ? 'Official corporate announcements published in compliance with Indonesian Financial Services Authority (OJK) and Indonesia Stock Exchange (IDX) statutory disclosure standards.'
                  : 'Dokumen dan pengumuman resmi ini dipublikasikan dalam rangka memenuhi prinsip keterbukaan informasi Otoritas Jasa Keuangan (OJK) dan Bursa Efek Indonesia (BEI).'}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#F4F6F8] border-t border-slate-100 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-500">
                PT Capitol Nusantara Indonesia Tbk (IDX: CANI)
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-[#1E2A3A] text-white text-xs font-semibold uppercase tracking-wider rounded-[2px] hover:bg-slate-800 transition-colors"
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
