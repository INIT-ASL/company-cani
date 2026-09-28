// src/pages/about/BoardPage.jsx
import { useState } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import { commissioners, directors } from '../../data/board';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronDown, User, ShieldCheck } from 'lucide-react';

function BoardCard({ member, servingSinceLabel, language }) {
  const [expanded, setExpanded] = useState(false);

  const titleText =
    typeof member.title === 'object' && member.title !== null
      ? member.title[language] || member.title.en
      : member.title;

  const bioText =
    typeof member.bio === 'object' && member.bio !== null
      ? member.bio[language] || member.bio.en
      : member.bio;

  return (
    <div className="bg-white border border-slate-200 rounded-[3px] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#C0392B]/40 transition-all duration-200 group">
      <div>
        {/* Executive Portrait Frame (Consistent 4:5 Aspect Ratio) */}
        <div className="relative aspect-[4/5] bg-gradient-to-b from-[#2C3E50] to-[#121A24] overflow-hidden flex items-end justify-center">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-3 border border-white/20">
                <User className="w-10 h-10 text-slate-300 stroke-1" />
              </div>
              <span className="font-mono text-xs font-bold text-white/70 tracking-widest uppercase">
                {member.initial}
              </span>
            </div>
          )}

          {/* Subdued Identity Initial Emblem Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#121A24]/90 via-[#121A24]/50 to-transparent p-4 flex items-center justify-between z-10">
            <span className="font-mono text-xs font-bold text-white/90 tracking-widest uppercase">
              {member.initial}
            </span>
            <span className="font-mono text-[10px] text-white/70 uppercase">
              {servingSinceLabel} {member.since}
            </span>
          </div>
        </div>

        {/* Info Body */}
        <div className="p-5">
          <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#C0392B] mb-1">
            {titleText}
          </div>
          <h3 className="font-display font-bold text-base text-[#1E2A3A] tracking-tight mb-3 group-hover:text-[#C0392B] transition-colors">
            {member.name}
          </h3>

          <div className="text-xs text-slate-600 leading-relaxed font-sans">
            <p className={expanded ? '' : 'line-clamp-3'}>{bioText}</p>
          </div>
        </div>
      </div>

      {/* Expand Bio Action */}
      <div className="px-5 pb-5 pt-0">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1E2A3A] hover:text-[#C0392B] transition-colors focus-visible:outline-none"
        >
          <span>
            {expanded
              ? language === 'en'
                ? 'Collapse Profile'
                : 'Sembunyikan Riwayat'
              : language === 'en'
              ? 'Read Full Profile'
              : 'Baca Riwayat Lengkap'}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-150 ${
              expanded ? 'rotate-180 text-[#C0392B]' : ''
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export function BoardCommissioners() {
  const { language, t } = useLanguage();

  return (
    <>
      <SEO
        title={t('about.commissioners.headerTitle')}
        description={t('about.commissioners.headerDesc')}
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.aboutUs'), to: '/about/profile' },
          { label: t('about.commissioners.headerTitle') },
        ]}
        kicker={language === 'en' ? 'CORPORATE GOVERNANCE' : 'TATA KELOLA PERUSAHAAN'}
        title={t('about.commissioners.headerTitle')}
        description={t('about.commissioners.headerDesc')}
      />

      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-[#C0392B]" />
              <span>
                {language === 'en'
                  ? 'Fiduciary Supervisory Board'
                  : 'Fungsi Pengawasan & Tata Kelola Emiten'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'en'
                ? 'The Board of Commissioners provides strategic guidance and exercises independent oversight over corporate actions, risk management frameworks, and financial disclosures in compliance with OJK and BEI standards.'
                : 'Dewan Komisaris menjalankan fungsi pengawasan independen dan memberikan arahan strategis terhadap pengelolaan perseroan, kepatuhan tata kelola (GCG), serta manajemen risiko sesuai regulasi OJK dan BEI.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commissioners.map((m) => (
              <BoardCard
                key={m.id}
                member={m}
                servingSinceLabel={t('about.commissioners.servingSince')}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function BoardDirectors() {
  const { language, t } = useLanguage();

  return (
    <>
      <SEO
        title={t('about.directors.headerTitle')}
        description={t('about.directors.headerDesc')}
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.aboutUs'), to: '/about/profile' },
          { label: t('about.directors.headerTitle') },
        ]}
        kicker={language === 'en' ? 'EXECUTIVE MANAGEMENT' : 'DIREKSI PERSEROAN'}
        title={t('about.directors.headerTitle')}
        description={t('about.directors.headerDesc')}
      />

      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-[#C0392B]" />
              <span>
                {language === 'en'
                  ? 'Operational & Fleet Leadership'
                  : 'Kepemimpinan Operasional & Manajemen Armada'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'en'
                ? 'The Board of Directors manages day-to-day operations, marine engineering execution, commercial chartering contracts, and financial transparency across Indonesian waters.'
                : 'Direksi bertanggung jawab penuh atas pelaksanaan kegiatan operasional harian, keselamatan armada kapal, negosiasi sewa kapal, serta kinerja keuangan perseroan.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directors.map((m) => (
              <BoardCard
                key={m.id}
                member={m}
                servingSinceLabel={t('about.directors.servingSince')}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
