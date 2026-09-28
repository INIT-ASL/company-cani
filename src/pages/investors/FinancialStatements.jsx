// src/pages/investors/FinancialStatements.jsx
import { useState, useMemo, useCallback } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import {
  financialStatements,
  annualReports,
  corporateDisclosures,
} from '../../data/financials';
import { FileText, Download, ExternalLink, TrendingUp, Calendar, Filter } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function FinancialStatements() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('ALL'); // 'ALL' | 'FS' | 'AR' | 'DISC'
  const [selectedYear, setSelectedYear] = useState('ALL');

  const getLocalized = useCallback((field) => {
    return typeof field === 'object' && field !== null
      ? field[language] || field.en
      : field;
  }, [language]);

  // Normalize all documents into a unified, queryable dataset
  const allDocs = useMemo(() => {
    const fs = financialStatements.map((item) => ({
      ...item,
      docType: 'FS',
      categoryLabel: language === 'en' ? 'Financial Statements' : 'Laporan Keuangan',
      displayTitle: `${getLocalized(item.type)} — ${getLocalized(item.period)}`,
    }));

    const ar = annualReports.map((item) => ({
      ...item,
      docType: 'AR',
      categoryLabel: language === 'en' ? 'Annual Report' : 'Laporan Tahunan',
      displayTitle: getLocalized(item.title),
    }));

    const disc = corporateDisclosures.map((item) => ({
      ...item,
      docType: 'DISC',
      categoryLabel: language === 'en' ? 'Corporate Disclosure' : 'Keterbukaan Informasi',
      displayTitle: getLocalized(item.title),
    }));

    return [...fs, ...ar, ...disc];
  }, [language, getLocalized]);

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

  return (
    <>
      <SEO
        title={t('investors.headerTitle')}
        description={t('investors.headerDesc')}
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.investors'), to: '/investors/financials' },
          { label: t('investors.headerTitle') },
        ]}
        kicker={language === 'en' ? 'INVESTOR RELATIONS' : 'HUBUNGAN INVESTOR'}
        title={t('investors.headerTitle')}
        description={t('investors.headerDesc')}
      />

      <section className="py-12 bg-white border-b border-slate-200 min-h-[65vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* IDX Regulatory Banner */}
          <div className="bg-[#121A24] border border-slate-800 text-white rounded-[3px] p-5 sm:p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#C0392B] rounded-[2px] flex items-center justify-center shrink-0 mt-0.5">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-white/10 rounded-[2px] text-white">
                    IDX: CANI
                  </span>
                  <span className="text-slate-400 text-xs font-mono">
                    {language === 'en' ? 'Board: Development' : 'Papan: Pengembangan'}
                  </span>
                </div>
                <h2 className="font-display font-bold text-sm sm:text-base text-white">
                  {t('investors.idxCardTitle')}
                </h2>
                <p className="text-slate-400 text-xs mt-0.5 max-w-xl font-sans">
                  {t('investors.idxCardSubtitle')}
                </p>
              </div>
            </div>

            <a
              href="https://www.idx.co.id/id/perusahaan-tercatat/laporan-keuangan-dan-tahunan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#C0392B] hover:bg-[#96281B] text-white text-xs font-semibold tracking-wide uppercase rounded-[2px] transition-colors shrink-0"
            >
              <span>{t('investors.idxCardBtn')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Filtering Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1.5" role="tablist">
              {[
                { id: 'ALL', label: language === 'en' ? 'All Filings' : 'Semua Laporan' },
                { id: 'FS', label: language === 'en' ? 'Financial Statements' : 'Laporan Keuangan' },
                { id: 'AR', label: language === 'en' ? 'Annual Reports' : 'Laporan Tahunan' },
                { id: 'DISC', label: language === 'en' ? 'Disclosures & AGMS' : 'Keterbukaan & RUPS' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={selectedCategory === tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors ${
                    selectedCategory === tab.id
                      ? 'bg-[#1E2A3A] text-white'
                      : 'text-slate-600 hover:text-[#C0392B] hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Year Filter Pill List */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                <Filter className="w-3 h-3 text-slate-400" />
                <span>{language === 'en' ? 'Year:' : 'Tahun:'}</span>
              </span>
              <div className="flex flex-wrap gap-1">
                {availableYears.map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-2 py-1 text-[11px] font-mono rounded-[2px] transition-colors ${
                      selectedYear === yr
                        ? 'bg-[#C0392B] text-white font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {yr === 'ALL' ? (language === 'en' ? 'All' : 'Semua') : yr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Institutional Document Table */}
          <div className="border border-slate-200 rounded-[3px] overflow-hidden shadow-xs mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="bg-[#F4F6F8] border-b border-slate-200 font-mono text-[11px] text-slate-600 uppercase tracking-wider">
                    <th className="px-5 py-3.5">
                      {language === 'en' ? 'Filing Title & Document Scope' : 'Nama Dokumen & Periode'}
                    </th>
                    <th className="px-4 py-3.5">
                      {language === 'en' ? 'Category' : 'Klasifikasi'}
                    </th>
                    <th className="px-4 py-3.5">
                      {language === 'en' ? 'Filing Date' : 'Tanggal Rilis'}
                    </th>
                    <th className="px-4 py-3.5">
                      {language === 'en' ? 'Format & Size' : 'Format / Ukuran'}
                    </th>
                    <th className="px-5 py-3.5 text-right">
                      {language === 'en' ? 'Download' : 'Unduh Dokumen'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {filteredDocs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-5 py-12 text-center text-slate-400 font-mono">
                        {language === 'en'
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
                              <FileText className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-bold font-display text-sm text-[#1E2A3A]">
                                {doc.displayTitle}
                              </div>
                              <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                                PT Capitol Nusantara Indonesia Tbk • {doc.year}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4">
                          <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 bg-slate-100 border border-slate-200 rounded-[2px] text-slate-700">
                            {doc.categoryLabel}
                          </span>
                        </td>

                        <td className="px-4 py-4 font-mono text-slate-600">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            <span>{getLocalized(doc.date)}</span>
                          </div>
                        </td>

                        <td className="px-4 py-4 font-mono text-slate-500">
                          <span>{doc.format || 'PDF'}</span> • <span>{doc.size}</span>
                        </td>

                        <td className="px-5 py-4 text-right">
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-[#C0392B] hover:bg-[#96281B] text-white rounded-[2px] transition-colors"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>{language === 'en' ? 'Download PDF' : 'Unduh PDF'}</span>
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Statutory Disclaimer */}
          <div className="p-4 bg-[#F4F6F8] border border-slate-200 rounded-[3px] text-xs text-slate-600 leading-relaxed font-sans">
            <strong className="text-[#1E2A3A] font-bold">
              {t('investors.disclaimerTitle')}:
            </strong>{' '}
            {t('investors.disclaimerText')}{' '}
            <a
              href="https://www.idx.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C0392B] font-semibold underline"
            >
              www.idx.co.id
            </a>
            .
          </div>
        </div>
      </section>
    </>
  );
}
