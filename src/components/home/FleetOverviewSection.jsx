// src/components/home/FleetOverviewSection.jsx
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Anchor, Navigation, Shield, Layers } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { useLanguage } from '../../context/LanguageContext';
import { fleetData } from '../../data/fleet';
import aslSentosaImage from '../../assets/images/asl-sentosa.webp';
import capitolImage from '../../assets/images/capitol-t2002.webp';
import aslVictoryImage from '../../assets/images/asl-victory.webp';
import nusantaraImage from '../../assets/images/nusantara-abadi-1.webp';

function FleetCard({ cat, en }) {
  const Icon = cat.icon;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <article
      className="group relative aspect-[3/4] overflow-hidden rounded-[6px] bg-[#1E2A3A] shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Clean Drone Image (Zero Watermarks) */}
      <img
        src={cat.image}
        alt={cat.title}
        width={320}
        height={426}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
        loading="lazy"
      />

      {/* Video loops smoothly on hover without sound */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      >
        <source src={cat.video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0D141D] via-[#0D141D]/60 to-[#0D141D]/5" />

      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
        <span className="rounded-[4px] bg-[#1E2A3A]/80 p-2 text-[#E74C3C] backdrop-blur-xs transition-colors group-hover:bg-[#C0392B] group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-xs">
          {cat.badge}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
        <p className="text-sm font-semibold text-[#B8975A]">{en ? cat.units : cat.unitsId}</p>
        <h3 className="mt-1 font-display text-xl font-semibold leading-snug">{cat.title}</h3>
        <p className="mt-2 text-sm text-slate-300">{cat.spec}</p>

        {/* Desktop: deskripsi muncul saat hover/fokus. Mobile: selalu tampil. */}
        <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out lg:grid-rows-[0fr] lg:group-focus-within:grid-rows-[1fr] lg:group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-4 text-sm leading-relaxed text-slate-200">{cat.desc}</p>
            <Link
              to={cat.link}
              className="mt-4 inline-flex items-center gap-1.5 border-b border-[#E74C3C] pb-0.5 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>{en ? 'Particulars & PDF' : 'Spesifikasi & PDF'}</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FleetOverviewSection() {
  const { language } = useLanguage();
  const en = language === 'en';

  const ahtCount = fleetData.aht?.length || 5;
  const tugCount = fleetData.tug?.length || 19;
  const craneCount = fleetData.crane?.length || 8;
  const bargeCount = fleetData.barge?.length || 21;

  const categories = [
    {
      id: 'aht',
      title: 'Anchor Handling Tug (AHT)',
      units: `${ahtCount} Units`,
      unitsId: `${ahtCount} Unit Armada`,
      spec: en ? 'Up to 3,800 HP • Heavy Mooring' : 'Hingga 3.800 HP • Heavy Mooring Spread',
      desc: en
        ? 'High-bollard pull vessels engineered for deepwater oil & gas rig moves, anchor placement, and emergency rescue standby.'
        : 'Kapal berdaya mesin tinggi untuk penanganan jangkar anjungan lepas pantai (rig), reposisi eksplorasi migas, dan penundaan samudra.',
      link: '/fleet/aht',
      badge: 'Offshore E&P',
      icon: Anchor,
      image: aslSentosaImage,
      video: '/videos/fleet-aht.mp4',
    },
    {
      id: 'tug',
      title: en ? 'Tug Boat Fleet' : 'Armada Kapal Tunda (Tug Boat)',
      units: `${tugCount} Units`,
      unitsId: `${tugCount} Unit Armada`,
      spec: en ? 'Twin Screw • 1,200 – 3,200 HP' : 'Twin Screw • Daya 1.200 – 3.200 HP',
      desc: en
        ? 'Versatile coastal and harbor tugs providing barge towage, oil terminal berthing, escort, and industrial cargo haulage.'
        : 'Armada kapal tunda lincah untuk penundaan tongkang pesisir, pemanduan kapal di terminal energi, dan pengangkutan kargo logistik.',
      link: '/fleet/tug',
      badge: en ? 'Coastal towage' : 'Penundaan pesisir',
      icon: Navigation,
      image: capitolImage,
      video: '/videos/fleet-tug.mp4',
    },
    {
      id: 'crane',
      title: en ? 'Floating Crane & Transshipment' : 'Derek Terapung (Floating Crane)',
      units: `${craneCount} Units`,
      unitsId: `${craneCount} Unit Armada`,
      spec: en ? 'Up to 250T & 30T Grab (10,000 MT/day)' : 'Hingga 250 Ton & Grab 30T (10.000 MT/hari)',
      desc: en
        ? 'Heavy-lift floating cranes for offshore ship-to-ship bulk cargo transshipment, jetty construction, and salvage operations.'
        : 'Derek terapung kapasitas berat untuk alih muat kargo curah lepas pantai (ship-to-ship), konstruksi dermaga, dan instalasi laut.',
      link: '/fleet/crane',
      badge: en ? 'Heavy lift' : 'Angkat berat',
      icon: Shield,
      image: aslVictoryImage,
      video: '/videos/fleet-crane.mp4',
    },
    {
      id: 'barge',
      title: en ? 'Deck Cargo & Split Barges' : 'Tongkang Dek & Kargo Curah',
      units: `${bargeCount} Units`,
      unitsId: `${bargeCount} Unit Armada`,
      spec: en ? 'Up to 330 ft • Bulk & Project Cargo' : 'Ukuran hingga 330 ft • Kargo Curah & Proyek',
      desc: en
        ? 'Flat-top deck cargo barges and hopper barges from associates for inter-island coal, aggregate, and heavy equipment transport.'
        : 'Tongkang geladak datar kapasitas besar dan hopper barge mitra untuk distribusi batubara, material tambang, dan alat berat antar pulau.',
      link: '/fleet/barge',
      badge: en ? 'Cargo haulage' : 'Angkutan kargo',
      icon: Layers,
      image: nusantaraImage,
      video: '/videos/fleet-barge.mp4',
    },
  ];

  return (
    <section className="bg-[#F4F6F8] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={en ? 'Fleet portfolio' : 'Portofolio armada'}
          title={en ? 'A comprehensive marine fleet for Indonesian waters' : 'Komposisi armada terpadu di perairan Indonesia'}
          description={
            en
              ? 'Over 35 specialized marine vessels operating under full Indonesian cabotage compliance, ready for diverse commercial charter configurations.'
              : 'Lebih dari 35 unit armada kapal penunjang lepas pantai dan logistik maritim berbendera Indonesia, siap beroperasi dengan skema sewa fleksibel.'
          }
          action={
            <Link
              to="/fleet/aht"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C0392B] transition-colors hover:text-[#96281B]"
            >
              <span>{en ? 'Explore full fleet specs' : 'Lihat seluruh armada & dokumen'}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={0.08 * i}>
              <FleetCard cat={cat} en={en} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
