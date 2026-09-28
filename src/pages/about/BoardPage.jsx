// src/pages/about/BoardPage.jsx
import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';
import { commissioners, directors } from '../../data/board';
import { useLanguage } from '../../context/LanguageContext';

function BoardCard({ member, index, servingSinceLabel }) {
  const { language } = useLanguage();
  const titleText = typeof member.title === 'object' ? member.title[language] : member.title;
  const bioText = typeof member.bio === 'object' ? member.bio[language] : member.bio;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
    >
      {/* Avatar Area */}
      <div
        className="h-40 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: member.color + '12' }}
      >
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg"
          style={{ backgroundColor: member.color }}
        >
          {member.initial}
        </div>
        {/* Decorative circles */}
        <div
          className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10"
          style={{ backgroundColor: member.color }}
        />
        <div
          className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-10"
          style={{ backgroundColor: member.color }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="w-8 h-0.5 bg-[#C0392B] rounded-full mb-3" />
        <h3 className="font-bold text-[#1E2A3A] text-base leading-tight mb-1">{member.name}</h3>
        <p className="text-[#C0392B] text-xs font-semibold mb-3">{titleText}</p>
        <p className="text-slate-500 text-xs leading-relaxed mb-3">{bioText}</p>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          {servingSinceLabel} {member.since}
        </div>
      </div>
    </motion.div>
  );
}

export function BoardCommissioners() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        breadcrumb={t('about.commissioners.breadcrumb')}
        title={t('about.commissioners.headerTitle')}
        description={t('about.commissioners.headerDesc')}
      />
      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {commissioners.map((m, i) => (
              <BoardCard
                key={m.id}
                member={m}
                index={i}
                servingSinceLabel={t('about.commissioners.servingSince')}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function BoardDirectors() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        breadcrumb={t('about.directors.breadcrumb')}
        title={t('about.directors.headerTitle')}
        description={t('about.directors.headerDesc')}
      />
      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directors.map((m, i) => (
              <BoardCard
                key={m.id}
                member={m}
                index={i}
                servingSinceLabel={t('about.directors.servingSince')}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
