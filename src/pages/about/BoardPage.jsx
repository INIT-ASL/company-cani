// src/pages/about/BoardPage.jsx
// Shared component for Board of Commissioners and Board of Directors
import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';
import { commissioners, directors } from '../../data/board';

function BoardCard({ member, index }) {
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
        <p className="text-[#C0392B] text-xs font-semibold mb-3">{member.title}</p>
        <p className="text-slate-500 text-xs leading-relaxed mb-3">{member.bio}</p>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          Menjabat sejak {member.since}
        </div>
      </div>
    </motion.div>
  );
}

export function BoardCommissioners() {
  return (
    <>
      <PageHeader
        breadcrumb="About Us"
        title="Board of Commissioners"
        description="Dewan Komisaris PT Capitol Nusantara Indonesia Tbk bertugas mengawasi jalannya perusahaan dan memberikan arahan strategis."
      />
      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {commissioners.map((m, i) => (
              <BoardCard key={m.id} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function BoardDirectors() {
  return (
    <>
      <PageHeader
        breadcrumb="About Us"
        title="Board of Directors"
        description="Direksi PT Capitol Nusantara Indonesia Tbk bertanggung jawab atas pengelolaan operasional dan pencapaian tujuan strategis perusahaan."
      />
      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directors.map((m, i) => (
              <BoardCard key={m.id} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
