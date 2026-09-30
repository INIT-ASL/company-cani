// src/components/home/HeroSection.jsx
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useInView } from 'framer-motion';
import { ArrowRight, FileText, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import heroImage from '../../assets/images/hero.jpg';

export default function HeroSection() {
  const { language, t } = useLanguage();
  const en = language === 'en';
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const videoRef = useRef(null);

  const [allowVideo, setAllowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const inView = useInView(ref, { amount: 0.1 });

  // Izinkan video berjalan di mobile (hanya blokir jika reduce-motion aktif atau koneksi 2G/data-saver)
  useEffect(() => {
    const conn = navigator.connection;
    const slow = conn && (conn.saveData || /2g/.test(conn.effectiveType || ''));
    setAllowVideo(!reduce && !slow);
  }, [reduce]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView, allowVideo]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  const fade = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      ref={ref}
      className="relative flex min-h-dvh w-full flex-col justify-center overflow-hidden bg-[#121A24] pt-20 pb-12 lg:pt-32 lg:pb-16"
    >
      {/* Background Media Fullscreen */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
        <motion.div className="relative h-full w-full scale-105" style={reduce ? undefined : { y: mediaY }}>
          {/* Foto Cover */}
          <img
            src={heroImage}
            alt={en ? 'PT Capitol Nusantara Indonesia Tbk vessel fleet in operation' : 'Armada kapal operasi PT Capitol Nusantara Indonesia Tbk'}
            className="h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />

          {/* Video Cover */}
          {allowVideo && (
            <video
              ref={videoRef}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={heroImage}
              aria-hidden="true"
              onCanPlay={() => setVideoReady(true)}
            >
              <source src="/videos/hero.webm" type="video/webm" />
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          )}
        </motion.div>

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D141D] via-[#121A24]/85 to-[#121A24]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D141D] via-transparent to-[#0D141D]/50" />
      </div>

      {/* Konten Hero */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div {...fade(0)} className="mb-4 flex items-center gap-3 sm:mb-7">
            <span className="h-px w-10 bg-[#B8975A]" />
            <span className="text-xs font-medium tracking-wide text-white/85 sm:text-sm">
              {en ? 'Indonesia Stock Exchange: CANI  |  Since 2004' : 'Bursa Efek Indonesia: CANI  |  Sejak 2004'}
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.1)}
            className="mb-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            {en ? (
              <>Offshore marine logistics and vessel fleet operator</>
            ) : (
              <>Penyedia armada dan logistik maritim lepas pantai</>
            )}
          </motion.h1>

          <motion.p {...fade(0.2)} className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
            {t('hero.description')}
          </motion.p>

          <motion.div {...fade(0.3)} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              to="/fleet/aht"
              className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#C0392B] px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-[#96281B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Anchor className="h-4 w-4" />
              <span>{en ? 'Inspect fleet' : 'Lihat spesifikasi armada'}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/investors/financials"
              className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-xs transition-all hover:bg-white hover:text-[#121A24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FileText className="h-4 w-4" />
              <span>{en ? 'Investor relations' : 'Keterbukaan informasi'}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}