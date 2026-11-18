// src/pages/about/BoardPage.jsx
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import { commissioners, directors } from '../../data/board';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalized } from '../../utils/i18n';
import { User, ShieldCheck } from 'lucide-react';

function BoardCard({ member, language }) {
  const titleText = getLocalized(member.title, language);

  return (
    <div className="bg-white border border-slate-200 rounded-[3px] p-6 flex flex-col items-center text-center shadow-xs hover:border-[#C0392B]/40 hover:shadow-sm transition-all duration-200 group">
      {/* Executive Portrait Frame (Compact & Crisp) */}
      <div className="w-40 h-40 sm:w-36 sm:h-44 mb-4 rounded-[3px] overflow-hidden bg-slate-100 border border-slate-200 shadow-2xs relative shrink-0">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            width={160}
            height={176}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-100">
            <User className="w-10 h-10 text-slate-400 stroke-1" aria-hidden="true" />
          </div>
        )}
      </div>

      {/* Info Body */}
      <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#C0392B] mb-1">
        {titleText}
      </div>
      <h3 className="font-display font-bold text-base text-[#1E2A3A] tracking-tight group-hover:text-[#C0392B] transition-colors">
        {member.name}
      </h3>
    </div>
  );
}

export function BoardPage({ type = 'commissioners' }) {
  const { language, t } = useLanguage();
  const isCommissioners = type === 'commissioners';
  const members = isCommissioners ? commissioners : directors;

  const headerTitle = isCommissioners
    ? t('about.commissioners.headerTitle')
    : t('about.directors.headerTitle');
  const headerDesc = isCommissioners
    ? t('about.commissioners.headerDesc')
    : t('about.directors.headerDesc');
  const breadcrumbLabel = isCommissioners
    ? t('nav.boardOfCommissioners')
    : t('nav.boardOfDirectors');
  const kicker = isCommissioners
    ? (language === 'en' ? 'CORPORATE GOVERNANCE' : 'TATA KELOLA PERUSAHAAN')
    : (language === 'en' ? 'EXECUTIVE MANAGEMENT' : 'DIREKSI PERSEROAN');
  const sectionSubtitle = isCommissioners
    ? (language === 'en' ? 'Fiduciary Supervisory Board' : 'Fungsi Pengawasan & Tata Kelola Emiten')
    : (language === 'en' ? 'Operational & Fleet Leadership' : 'Kepemimpinan Operasional & Manajemen Armada');
  const sectionDesc = isCommissioners
    ? (language === 'en'
        ? 'The Board of Commissioners provides strategic guidance and exercises independent oversight over corporate actions, risk management frameworks, and financial disclosures in compliance with OJK and BEI standards.'
        : 'Dewan Komisaris menjalankan fungsi pengawasan independen dan memberikan arahan strategis terhadap pengelolaan perseroan, kepatuhan tata kelola (GCG), serta manajemen risiko sesuai regulasi OJK dan BEI.')
    : (language === 'en'
        ? 'The Board of Directors manages day-to-day operations, marine engineering execution, commercial chartering contracts, and financial transparency across Indonesian waters.'
        : 'Direksi bertanggung jawab penuh atas pelaksanaan kegiatan operasional harian, keselamatan armada kapal, negosiasi sewa kapal, serta kinerja keuangan perseroan.');

  return (
    <>
      <SEO title={headerTitle} description={headerDesc} />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.aboutUs'), to: '/about/history' },
          { label: breadcrumbLabel },
        ]}
        kicker={kicker}
        title={breadcrumbLabel}
        description={headerDesc}
      />

      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-[#C0392B]" aria-hidden="true" />
              <span>{sectionSubtitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {sectionDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((m) => (
              <BoardCard key={m.id} member={m} language={language} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function BoardCommissioners() {
  return <BoardPage type="commissioners" />;
}

export function BoardDirectors() {
  return <BoardPage type="directors" />;
}

export default BoardPage;
