// src/components/home/StatsBandSection.jsx
import Reveal from '../ui/Reveal';
import CountUp from '../ui/CountUp';
import { useLanguage } from '../../context/LanguageContext';
import heroBg from '../../assets/images/hero.jpg';

export default function StatsBandSection() {
  const { language } = useLanguage();
  const en = language === 'en';

  const stats = [
    { to: 35, suffix: '+', label: en ? 'Fleet vessels' : 'Unit armada' },
    { to: 20, suffix: '+', label: en ? 'Years of experience' : 'Tahun pengalaman' },
    { to: 100, suffix: '%', label: en ? 'Cabotage compliance' : 'Kepatuhan kabotase' },
    { text: 'CANI', label: en ? 'Listed on IDX' : 'Tercatat di BEI' },
  ];

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-24 bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay gelap untuk keterbacaan teks angka dan statistik */}
      <div
        className="absolute inset-0 bg-[#0A121C]/80"
        aria-hidden="true"
      />

      {/* Subtle diagonal pattern overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 22px)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
        <dl className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={0.08 * i}
              className={`px-4 text-center ${i !== 0 ? 'lg:border-l lg:border-white/10' : ''} ${i === 2 ? 'border-l border-white/10 lg:border-l' : ''} ${i === 1 ? 'border-l border-white/10 lg:border-l' : ''}`}
            >
              <dd className="font-display text-5xl font-semibold tracking-tight text-white lg:text-6xl">
                {s.text ? s.text : <CountUp to={s.to} suffix={s.suffix} />}
              </dd>
              <span className="mx-auto mt-4 block h-px w-8 bg-[#B8975A]" />
              <dt className="mt-4 text-sm text-slate-300">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
