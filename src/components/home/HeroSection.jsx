// src/components/home/HeroSection.jsx
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import heroImage from '../../assets/images/hero.jpg';

export default function HeroSection() {
  const { language, t } = useLanguage();

  const stats = [
    {
      value: '35+',
      label: language === 'en' ? 'Fleet Vessels' : 'Unit Armada Kapal',
      sub: language === 'en' ? 'AHT, Tugs, Barges & Cranes' : 'AHT, Tug, Tongkang & Crane',
    },
    {
      value: '2004',
      label: language === 'en' ? 'Established' : 'Tahun Berdiri',
      sub: language === 'en' ? 'Joint Venture Pedigree' : 'Kemitraan Strategis',
    },
    {
      value: '2013',
      label: language === 'en' ? 'Public Listed' : 'Emiten Terbuka',
      sub: language === 'en' ? 'Ticker: CANI (IDX)' : 'Kode Saham: CANI (BEI)',
    },
    {
      value: '100%',
      label: language === 'en' ? 'Cabotage Compliant' : 'Kepatuhan Asas Kabotase',
      sub: language === 'en' ? 'Indonesian Flagged' : 'Armada Bendera Indonesia',
    },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between bg-[#121A24] overflow-hidden pt-28 lg:pt-32">
      {/* Background Image Container with Fixed Aspect / Position */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroImage}
          alt="Armada Kapal Operasi PT Capitol Nusantara Indonesia Tbk"
          className="w-full h-full object-cover object-center scale-100"
          loading="eager"
          fetchPriority="high"
        />
        {/* Navy Gradient Overlay for High Contrast Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121A24]/95 via-[#121A24]/85 to-[#121A24]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121A24] via-transparent to-[#121A24]/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 md:py-16">
        <div className="max-w-3xl">
          {/* Regulatory Kicker Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 border border-white/20 rounded-[2px] mb-6 backdrop-blur-xs"
          >
            <span className="w-2 h-2 rounded-[1px] bg-[#C0392B]" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-white/90">
              {language === 'en'
                ? 'INDONESIA STOCK EXCHANGE: CANI • EST. 2004'
                : 'BURSA EFEK INDONESIA: CANI • DIDIRIKAN 2004'}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-display"
          >
            {language === 'en' ? (
              <>
                Offshore Marine Logistics & <span className="text-[#E74C3C]">Vessel Fleet</span> Operator
              </>
            ) : (
              <>
                Penyedia Armada & <span className="text-[#E74C3C]">Logistik Maritim</span> Lepas Pantai
              </>
            )}
          </motion.h1>

          {/* Lead Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal"
          >
            {t('hero.description')}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              to="/fleet/aht"
              className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#96281B] text-white px-6 py-3.5 rounded-[3px] font-semibold text-xs sm:text-sm tracking-wide uppercase transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Anchor className="w-4 h-4" />
              <span>{language === 'en' ? 'Inspect Fleet' : 'Lihat Spesifikasi Armada'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/investors/financials"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-[#121A24] text-white border border-white/30 px-6 py-3.5 rounded-[3px] font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all backdrop-blur-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FileText className="w-4 h-4" />
              <span>{language === 'en' ? 'Investor Relations' : 'Keterbukaan Informasi'}</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Integrated Technical Stat Band */}
      <div className="relative z-10 border-t border-white/15 bg-[#0D141D]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col ${
                  i !== 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''
                }`}
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" />
                </div>
                <div className="text-xs font-semibold text-white/90 mt-0.5 tracking-wide uppercase font-mono">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 truncate">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
