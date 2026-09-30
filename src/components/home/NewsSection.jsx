// src/components/home/NewsSection.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { newsData, pressReleaseData, IDX_CANI_URL } from '../../data/news';
import { useLanguage } from '../../context/LanguageContext';
import testImage from '../../assets/images/test.jpg';

const leadImage = testImage;

export default function NewsSection() {
  const { language, t } = useLanguage();
  const en = language === 'en';
  const [activeTab, setActiveTab] = useState('announcement'); // 'announcement' | 'corporate'

  const getLocalized = (field) =>
    typeof field === 'object' && field !== null ? field[language] || field.en || field.id : field;

  const isAnnouncement = activeTab === 'announcement';
  const currentDataset = isAnnouncement ? pressReleaseData : newsData;
  const leadItem = currentDataset[0];
  const secondaryItems = currentDataset.slice(1, 4);

  const viewAllLink = isAnnouncement ? '/media/press-release' : '/media/news';
  const viewAllText = isAnnouncement
    ? (en ? 'All disclosures & announcements' : 'Semua keterbukaan & pengumuman')
    : (en ? 'All corporate news' : 'Semua berita korporat');

  const tabs = [
    { id: 'announcement', label: en ? 'Announcements & Disclosures' : 'Pengumuman & Keterbukaan', count: pressReleaseData.length },
    { id: 'corporate', label: en ? 'Corporate News' : 'Berita Korporat', count: newsData.length },
  ];

  return (
    <section className="bg-white py-24 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={en ? 'Public media & disclosures' : 'Media & keterbukaan informasi'}
          title={en ? 'Corporate disclosures and press announcements' : 'Pengumuman & berita korporat'}
          description={
            en
              ? 'Official corporate releases, shareholder meeting convocations, and operational updates from PT Capitol Nusantara Indonesia Tbk.'
              : 'Publikasi resmi, keterbukaan informasi emiten, risalah RUPS, dan berita korporat terkini PT Capitol Nusantara Indonesia Tbk.'
          }
          action={
            <Link to={viewAllLink} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C0392B] transition-colors hover:text-[#96281B]">
              <span>{viewAllText}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        {/* Tabs (underline) */}
        <div role="tablist" className="mb-10 flex flex-wrap gap-x-8 gap-y-2 border-b border-slate-200">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(tab.id)}
                className={`relative cursor-pointer pb-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] ${active ? 'text-[#1E2A3A]' : 'text-slate-500 hover:text-[#1E2A3A]'}`}
              >
                {tab.label}
                <span className="ml-2 font-mono text-xs text-slate-400">{tab.count}</span>
                {active && (
                  <motion.span layoutId="news-tab-underline" className="absolute inset-x-0 -bottom-px h-[2px] bg-[#C0392B]" />
                )}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Lead */}
          {leadItem && (
            <article className="group lg:col-span-7">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[6px] bg-slate-900">
                <img
                  src={leadImage}
                  alt={getLocalized(leadItem.title)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  width={700}
                  height={394}
                />
                <span className="absolute left-4 top-4 rounded-[4px] bg-[#C0392B] px-3 py-1 text-xs font-semibold text-white">
                  {getLocalized(leadItem.category)}
                </span>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                  <Calendar className="h-4 w-4 text-[#C0392B]" />
                  <span>{getLocalized(leadItem.date)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{en ? 'Year' : 'Tahun'} {leadItem.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{isAnnouncement ? (en ? 'Official disclosure' : 'Keterbukaan resmi') : (en ? 'Company news' : 'Berita emiten')}</span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-[#1E2A3A] transition-colors group-hover:text-[#C0392B] sm:text-3xl">
                  <Link to={viewAllLink}>{getLocalized(leadItem.title)}</Link>
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">{getLocalized(leadItem.excerpt)}</p>

                <div className="mt-6 flex items-center gap-6">
                  <Link to={viewAllLink} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C0392B] hover:text-[#96281B]">
                    <span>{en ? 'Read full document' : 'Lihat dokumen & detail'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {leadItem.links && leadItem.links.length > 0 && (
                    <span className="text-sm text-slate-500">
                      {leadItem.links.length} {en ? 'PDF attachments' : 'lampiran PDF'}
                    </span>
                  )}
                </div>
              </div>
            </article>
          )}

          {/* Secondary list */}
          <div className="lg:col-span-5">
            <ul className="divide-y divide-slate-200 border-y border-slate-200">
              {secondaryItems.map((item) => (
                <li key={item.id} className="group py-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="font-semibold text-[#C0392B]">{getLocalized(item.category)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{getLocalized(item.date)}</span>
                  </div>
                  <h3 className="mt-2 line-clamp-2 font-display text-lg font-semibold leading-snug text-[#1E2A3A] transition-colors group-hover:text-[#C0392B]">
                    <Link to={viewAllLink}>{getLocalized(item.title)}</Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">{getLocalized(item.excerpt)}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <Link to={viewAllLink} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C0392B] hover:text-[#96281B]">
                      <span>{t('common.readMore')}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    {item.links && item.links.length > 0 && <span className="text-xs text-slate-500">PDF</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* IDX filings strip */}
        <Reveal className="mt-14">
          <div className="flex flex-col gap-5 rounded-[6px] bg-[#1E2A3A] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-display text-lg font-semibold">IDX Public Filings (CANI)</p>
              <p className="mt-1 text-sm text-slate-300">
                {en ? 'Quarterly financials and corporate action disclosures.' : 'Laporan keuangan berkala & keterbukaan informasi emiten.'}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={IDX_CANI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-white"
              >
                <span>{en ? 'IDX: CANI Issuer Profile' : 'IDX: CANI Profil Emiten'}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                to="/investors/financials"
                className="rounded-[4px] bg-[#C0392B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#96281B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {en ? 'View filings' : 'Lihat laporan'}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}