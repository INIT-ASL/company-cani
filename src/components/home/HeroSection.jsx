// src/components/home/HeroSection.jsx
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A3A]/90 via-[#1E2A3A]/70 to-[#1E2A3A]/30" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#C0392B]/20 border border-[#C0392B]/40 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] animate-pulse" />
            <span className="text-xs font-semibold text-[#E74C3C] tracking-wider uppercase">
              Tbk — Bursa Efek Indonesia: CANI
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            PT. Capitol Nusantara
            <span className="block text-[#E74C3C] mt-1">Indonesia Tbk</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-white/75 leading-relaxed mb-8 max-w-2xl"
          >
            Didirikan sebagai joint venture antara PT Anugerah Semesta Langgeng (Samarinda) dan 
            ASL Marine Holdings Ltd (Singapura). Bergerak di bidang jasa pelayaran domestik, 
            transportasi minyak & gas, serta keagenan kapal.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-6 mb-10"
          >
            {[
              { value: '20+', label: 'Tahun Beroperasi' },
              { value: '35+', label: 'Unit Armada' },
              { value: '50+', label: 'Klien Korporat' },
              { value: '2013', label: 'IPO di BEI' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#E74C3C]">{stat.value}</div>
                <div className="text-xs text-white/55 mt-0.5 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/about/profile"
              className="inline-flex items-center gap-2 bg-[#C0392B] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#922B21] transition-colors text-sm"
            >
              Tentang Kami
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact/inquiry"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-[#C0392B] transition-colors text-sm"
            >
              Hubungi Kami
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
