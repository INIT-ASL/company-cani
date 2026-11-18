// src/pages/investors/FinancialStatements.jsx
import { useState, useMemo } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import {
  financialStatements,
  annualReports,
  corporateDisclosures,
} from '../../data/financials';
import { COMPANY } from '../../data/company';
import { FileText, Download, ExternalLink, TrendingUp, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalized } from '../../utils/i18n';
import YearFilter from '../../components/common/YearFilter';

export default function FinancialStatements() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('ALL'); // 'ALL' | 'FS' | 'AR' | 'DISC'
  const [selectedYear, setSelectedYear] = useState('ALL');
  const en = language === 'en';

  // Normalize all documents into a unified, queryable dataset
  const allDocs = useMemo(() => {
    const fs = financialStatements.map((item) => ({
      ...item,
      docType: 'FS',
      categoryLabel: en ? 'Financial Statement' : 'Laporan Keuangan',
      displayTitle: item.title
        ? getLocalized(item.title, language)
        : `${getLocalized(item.type, language)} — ${getLocalized(item.period, language)}`,
    }));

    const ar = annualReports.map((item) => ({
      ...item,
      docType: 'AR',
      categoryLabel: en ? 'Annual Report' : 'Laporan Tahunan',
      displayTitle: getLocalized(item.title, language),
    }));

    const disc = corporateDisclosures.map((item) => ({
      ...item,
      docType: 'DISC',
      categoryLabel: en ? 'Corporate Disclosure' : 'Keterbukaan Informasi',
      displayTitle: getLocalized(item.title, language),
    }));

    return [...fs, ...ar, ...disc];
  }, [language, en]);

  // Available unique years
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(allDocs.map((d) => d.year))).filter(Boolean);
    years.sort((a, b) => Number(b) - Number(a));
    return ['ALL', ...years];
  }, [allDocs]);

  // Filtered documents
  const filteredDocs = useMemo(() => {
    return allDocs.filter((doc) => {
      const matchCat = selectedCategory === 'ALL' || doc.docType === selectedCategory;
      const matchYear = selectedYear === 'ALL' || doc.year === selectedYear;
      return matchCat && matchYear;
    });
  }, [allDocs, selectedCategory, selectedYear]);

  const categories = [
    { id: 'ALL', label: en ? 'All Filings' : 'Semua Laporan' },
    { id: 'FS', label: en ? 'Financial Statements' : 'Laporan Keuangan' },
    { id: 'AR', label: en ? 'Annual Reports' : 'Laporan Tahunan' },
    { id: 'DISC', label: en ? 'Disclosures & AGMS' : 'Keterbukaan & RUPS' },
  ];

  return (
    <>
      <SEO
        title={t('investors.headerTitle')}
        description={t('investors.headerDesc')}
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.investors'), to: '/investors/stock' },
          { label: t('nav.financialStatements') },
        ]}
        kicker={en ? 'INVESTOR RELATIONS' : 'HUBUNGAN INVESTOR'}
        title={t('nav.financialStatements')}
        description={t('investors.headerDesc')}
      />

      <section className="py-12 bg-white border-b border-slate-200 min-h-[65vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* IDX Regulatory Banner */}
          <div className="bg-[#121A24] border border-slate-800 text-white rounded-[3px] p-5 sm:p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#C0392B] rounded-[2px] flex items-center justify-center shrink-0 mt-0.5">
                <TrendingUp className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-white/10 rounded-[2px] text-white">
                    {COMPANY.fullTicker}
                  </span>
                  <span className="text-slate-400 text-xs font-mono">
                    {en ? 'Board: Development' : 'Papan: Pengembangan'}
                  </span>
                </div>
                <h2 className="font-display font-bold text-sm sm:text-base text-white">
                  {en
                    ? 'Please check the latest updated information of CANI at :'
                    : 'Silakan periksa informasi terbaru dan terlengkap CANI pada :'}
                </h2>
                <p className="text-slate-400 text-xs mt-0.5 max-w-xl font-sans">
                  {t('investors.idxCardSubtitle')}
                </p>
              </div>
            </div>

            <a
              href={COMPANY.idxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#C0392B] hover:bg-[#96281B] text-white text-xs font-semibold tracking-wide uppercase rounded-[2px] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>PT Bursa Efek Indonesia (idx.co.id)</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Filtering Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Document Categories">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={selectedCategory === tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] ${
                    selectedCategory === tab.id
                      ? 'bg-[#1E2A3A] text-white'
                      : 'text-slate-600 hover:text-[#C0392B] hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Reusable Year Filter */}
            <YearFilter
              years={availableYears}
              selectedYear={selectedYear}
              onChange={setSelectedYear}
              language={language}
            />
          </div>

          {/* Institutional Document Table */}
          <div className="border border-slate-200 rounded-[3px] overflow-hidden shadow-xs mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="bg-[#F4F6F8] border-b border-slate-200 font-mono text-[11px] text-slate-600 uppercase tracking-wider">
                    <th className="px-5 py-3.5">
                      {en ? 'Filing Title & Document Scope' : 'Nama Dokumen & Periode'}
                    </th>
                    <th className="px-4 py-3.5 text-center">
                      {en ? 'Category' : 'Klasifikasi'}
                    </th>
                    <th className="px-4 py-3.5">
                      {en ? 'Filing Date' : 'Tanggal Rilis'}
                    </th>
                    <th className="px-4 py-3.5">
                      {en ? 'Format & Size' : 'Format / Ukuran'}
                    </th>
                    <th className="px-5 py-3.5 text-right">
                      {en ? 'Download' : 'Unduh Dokumen'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {filteredDocs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-5 py-12 text-center text-slate-400 font-mono">
                        {en
                          ? 'No documents found for selected category and period.'
                          : 'Tidak ada dokumen yang sesuai dengan kategori dan tahun terpilih.'}
                      </td>
                    </tr>
                  ) : (
                    filteredDocs.map((doc) => (
                      <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4">
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 bg-red-50 text-[#C0392B] rounded-[2px] flex items-center justify-center shrink-0 mt-0.5">
                              <FileText className="w-4 h-4" aria-hidden="true" />
                            </div>
                            <div>
                              <div className="font-bold font-display text-sm text-[#1E2A3A]">
                                {doc.displayTitle}
                              </div>
                              <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                                PT Capitol Nusantara Indonesia Tbk ({COMPANY.fullTicker})
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-center">
                          <span
                            className={`inline-block px-2 py-0.5 rounded-[2px] font-mono text-[10px] font-bold uppercase tracking-wider border ${
                              doc.docType === 'FS'
                                ? 'bg-blue-50 text-blue-700 border-blue-200'
                                : doc.docType === 'AR'
                                ? 'bg-amber-50 text-amber-700 border-amber-200'
                                : 'bg-red-50 text-[#C0392B] border-red-200'
                            }`}
                          >
                            {doc.categoryLabel}
                          </span>
                        </td>

                        <td className="px-4 py-4 font-mono text-slate-600">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                            <span>{getLocalized(doc.date, language)}</span>
                          </div>
                        </td>

                        <td className="px-4 py-4 font-mono text-slate-500">
                          <span className="uppercase font-bold text-slate-700">{doc.format}</span>
                          <span className="mx-1">•</span>
                          <span>{doc.size}</span>
                        </td>

                        <td className="px-5 py-4 text-right">
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C0392B] hover:bg-[#96281B] text-white text-xs font-semibold rounded-[2px] transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B]"
                            title={en ? `Download ${doc.displayTitle}` : `Unduh ${doc.displayTitle}`}
                          >
                            <Download className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>PDF</span>
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
