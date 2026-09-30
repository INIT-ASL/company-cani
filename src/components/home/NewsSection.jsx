// src/components/home/NewsSection.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag, ExternalLink, FileText, Newspaper } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { newsData, pressReleaseData, IDX_CANI_URL } from '../../data/news';
import { useLanguage } from '../../context/LanguageContext';
// Menggunakan gambar lokal dari src/assets/images/ sesuai permintaan pengguna
import defaultNewsImage from '../../assets/images/hero.jpg';

export default function NewsSection() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('announcement'); // 'announcement' | 'corporate'

  const getLocalized = (field) => {
    return typeof field === 'object' && field !== null ? field[language] || field.en || field.id : field;
  };

  const isAnnouncement = activeTab === 'announcement';
  const currentDataset = isAnnouncement ? pressReleaseData : newsData;

  const leadItem = currentDataset[0];
  const secondaryItems = currentDataset.slice(1, 4);

  const viewAllLink = isAnnouncement ? '/media/press-release' : '/media/news';
  const viewAllText = isAnnouncement
    ? (language === 'en' ? 'All Disclosures & Announcements' : 'Semua Keterbukaan & Pengumuman')
    : (language === 'en' ? 'All Corporate News' : 'Semua Berita Korporat');

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker={language === 'en' ? 'PUBLIC MEDIA & DISCLOSURES' : 'MEDIA & KETERBUKAAN INFORMASI'}
          title={
            language === 'en'
              ? 'Corporate Disclosures & Press Announcements'
              : 'Pengumuman & Berita Korporat'
          }
          description={
            language === 'en'
              ? 'Official corporate releases, shareholder meeting convocations, and operational updates from PT Capitol Nusantara Indonesia Tbk.'
              : 'Publikasi resmi, keterbukaan informasi emiten, risalah RUPS, dan berita korporat terkini PT Capitol Nusantara Indonesia Tbk.'
          }
          action={
            <Link
              to={viewAllLink}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C0392B] hover:text-[#96281B] transition-colors"
            >
              <span>{viewAllText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          }
        />

        {/* Tab Selection Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <div className="inline-flex p-1 bg-[#F4F6F8] border border-slate-200 rounded-[3px]">
            <button
              type="button"
              onClick={() => setActiveTab('announcement')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer ${
                isAnnouncement
                  ? 'bg-[#1E2A3A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#1E2A3A] hover:bg-slate-200/60'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#C0392B]" />
              <span>{language === 'en' ? 'Announcements & Disclosures' : 'Pengumuman & Keterbukaan'}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isAnnouncement ? 'bg-[#C0392B] text-white' : 'bg-slate-300 text-slate-700'}`}>
                {pressReleaseData.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('corporate')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer ${
                !isAnnouncement
                  ? 'bg-[#1E2A3A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#1E2A3A] hover:bg-slate-200/60'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5 text-[#C0392B]" />
              <span>{language === 'en' ? 'Corporate News' : 'Berita Korporat'}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${!isAnnouncement ? 'bg-[#C0392B] text-white' : 'bg-slate-300 text-slate-700'}`}>
                {newsData.length}
              </span>
            </button>
          </div>

          {/* IDX Quick Link */}
          <a
            href={IDX_CANI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-600 hover:text-[#C0392B] transition-colors"
          >
            <span>IDX: CANI Profil Emiten</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Content Display: 1 Lead Article (7 cols) + Secondary Articles (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Lead Article (7 cols) */}
          {leadItem && (
            <article className="lg:col-span-7 bg-[#F4F6F8] border border-slate-200 rounded-[3px] overflow-hidden flex flex-col justify-between group hover:border-slate-300 transition-colors">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src={defaultNewsImage}
                  alt={getLocalized(leadItem.title)}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  width={700}
                  height={394}
                />
                <div className="absolute top-3 left-3 bg-[#C0392B] text-white font-mono text-[10px] font-bold px-2.5 py-1 tracking-wider uppercase">
                  {getLocalized(leadItem.category)}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded-[2px]">
                  {isAnnouncement ? 'Keterbukaan Resmi' : 'Berita Emiten'}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C0392B]" />
                    <span>{getLocalized(leadItem.date)}</span>
                    <span>•</span>
                    <span className="font-semibold text-slate-700">Tahun {leadItem.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#1E2A3A] mb-3 font-display leading-snug group-hover:text-[#C0392B] transition-colors">
                    <Link to={viewAllLink}>{getLocalized(leadItem.title)}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                    {getLocalized(leadItem.excerpt)}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    to={viewAllLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C0392B] hover:text-[#96281B]"
                  >
                    <span>{language === 'en' ? 'Read Full Document' : 'Lihat Dokumen & Detail'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {leadItem.links && leadItem.links.length > 0 && (
                    <span className="text-[11px] font-mono text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-[2px]">
                      {leadItem.links.length} Lampiran PDF
                    </span>
                  )}
                </div>
              </div>
            </article>
          )}

          {/* Secondary Stacked Articles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {secondaryItems.map((item) => (
              <article
                key={item.id}
                className="bg-[#F4F6F8] border border-slate-200 rounded-[3px] p-5 flex flex-col justify-between flex-1 group hover:border-[#C0392B]/40 hover:bg-white transition-all shadow-2xs"
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

                  <h3 className="text-sm sm:text-base font-bold text-[#1E2A3A] mb-2 font-display leading-snug group-hover:text-[#C0392B] transition-colors line-clamp-2">
                    <Link to={viewAllLink}>{getLocalized(item.title)}</Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                    {getLocalized(item.excerpt)}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    to={viewAllLink}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#C0392B] hover:text-[#96281B]"
                  >
                    <span>{t('common.readMore')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  {item.links && item.links.length > 0 && (
                    <span className="text-[10px] font-mono text-slate-500">PDF File</span>
                  )}
                </div>
              </article>
            ))}

            {/* Investor Relations Notice Link */}
            <div className="p-4 bg-[#1E2A3A] text-white rounded-[3px] text-xs flex items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[#E74C3C] font-bold block text-[10px] uppercase">
                  IDX Public Filings (CANI)
                </span>
                <span className="text-slate-300 text-[11px]">
                  {language === 'en'
                    ? 'Quarterly financials & corporate action disclosures.'
                    : 'Laporan keuangan berkala & keterbukaan informasi emiten.'}
                </span>
              </div>
              <Link
                to="/investors/financials"
                className="shrink-0 px-3.5 py-1.5 bg-[#C0392B] hover:bg-[#96281B] text-white text-[11px] font-bold rounded-[2px] tracking-wide uppercase transition-colors"
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
