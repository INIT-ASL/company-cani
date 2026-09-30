// src/components/home/FleetOverviewSection.jsx
import { Link } from 'react-router-dom';
import { ArrowRight, Anchor, Navigation, Shield, Layers } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';
import defaultFleetImg from '../../assets/images/hero.jpg';

export default function FleetOverviewSection() {
  const { language } = useLanguage();

  const categories = [
    {
      id: 'aht',
      title: 'Anchor Handling Tug (AHT)',
      units: '5 Units',
      unitsId: '5 Unit Armada',
      spec: language === 'en' ? 'Up to 3,800 HP • Heavy Mooring' : 'Hingga 3.800 HP • Heavy Mooring Spread',
      desc:
        language === 'en'
          ? 'High-bollard pull vessels engineered for deepwater oil & gas rig moves, anchor placement, and emergency rescue standby.'
          : 'Kapal berdaya mesin tinggi untuk penanganan jangkar anjungan lepas pantai (rig), reposisi eksplorasi migas, dan penundaan samudra.',
      link: '/fleet/aht',
      badge: 'OFFSHORE E&P',
      icon: Anchor,
    },
    {
      id: 'tug',
      title: language === 'en' ? 'Tug Boat Fleet' : 'Armada Kapal Tunda (Tug Boat)',
      units: '19 Units',
      unitsId: '19 Unit Armada',
      spec: language === 'en' ? 'Twin Screw • 1,200 – 3,200 HP' : 'Twin Screw • Daya 1.200 – 3.200 HP',
      desc:
        language === 'en'
          ? 'Versatile coastal and harbor tugs providing barge towage, oil terminal berthing, escort, and industrial cargo haulage.'
          : 'Armada kapal tunda lincah untuk penundaan tongkang pesisir, pemanduan kapal di terminal energi, dan pengangkutan kargo logistik.',
      link: '/fleet/tug',
      badge: 'COASTAL TOWAGE',
      icon: Navigation,
    },
    {
      id: 'crane',
      title: language === 'en' ? 'Floating Crane & Transshipment' : 'Derek Terapung (Floating Crane)',
      units: '8 Units',
      unitsId: '8 Unit Armada',
      spec: language === 'en' ? 'Up to 250T & 30T Grab (10,000 MT/day)' : 'Hingga 250 Ton & Grab 30T (10.000 MT/hari)',
      desc:
        language === 'en'
          ? 'Heavy-lift floating cranes for offshore ship-to-ship bulk cargo transshipment, jetty construction, and salvage operations.'
          : 'Derek terapung kapasitas berat untuk alih muat kargo curah lepas pantai (ship-to-ship), konstruksi dermaga, dan instalasi laut.',
      link: '/fleet/crane',
      badge: 'HEAVY LIFT',
      icon: Shield,
    },
    {
      id: 'barge',
      title: language === 'en' ? 'Deck Cargo & Split Barges' : 'Tongkang Dek & Kargo Curah',
      units: 'Flat Top & Hopper',
      unitsId: 'Flat Top & Hopper',
      spec: language === 'en' ? 'Up to 330 ft • Bulk & Project Cargo' : 'Ukuran hingga 330 ft • Kargo Curah & Proyek',
      desc:
        language === 'en'
          ? 'Flat-top deck cargo barges and hopper barges from associates for inter-island coal, aggregate, and heavy equipment transport.'
          : 'Tongkang geladak datar kapasitas besar dan hopper barge mitra untuk distribusi batubara, material tambang, dan alat berat antar pulau.',
      link: '/fleet/barge',
      badge: 'CARGO HAULAGE',
      icon: Layers,
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker={language === 'en' ? 'FLEET PORTFOLIO' : 'PORTOPOLIO ARMADA'}
          title={
            language === 'en'
              ? 'Comprehensive Marine Fleet for Indonesian Waters'
              : 'Komposisi Armada Terpadu di Perairan Indonesia'
          }
          description={
            language === 'en'
              ? 'Over 35 specialized marine vessels operating under full Indonesian cabotage compliance, ready for diverse commercial charter configurations.'
              : 'Lebih dari 35 unit armada kapal penunjang lepas pantai dan logistik maritim berbendera Indonesia, siap beroperasi dengan skema sewa fleksibel.'
          }
          action={
            <Link
              to="/fleet/aht"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C0392B] hover:text-[#96281B] transition-colors"
            >
              <span>{language === 'en' ? 'Explore Full Fleet Specs' : 'Lihat Seluruh Armada & Dokumen'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-[#F4F6F8] border border-slate-200 rounded-[3px] p-6 flex flex-col justify-between group hover:border-[#C0392B]/50 hover:bg-white transition-all duration-300 shadow-2xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="p-2 rounded-[2px] bg-[#1E2A3A] text-[#E74C3C] group-hover:bg-[#C0392B] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 bg-slate-200 text-slate-700 rounded-[2px]">
                      {cat.badge}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono font-bold text-[#C0392B] uppercase tracking-wider mb-1">
                    {language === 'en' ? cat.units : cat.unitsId}
                  </div>

                  <h3 className="text-base font-bold text-[#1E2A3A] font-display mb-2 group-hover:text-[#C0392B] transition-colors">
                    {cat.title}
                  </h3>

                  <div className="text-[11px] font-mono text-slate-500 mb-3 bg-white group-hover:bg-slate-50 border border-slate-200/80 px-2 py-1 rounded-[2px]">
                    {cat.spec}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans mb-6">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    to={cat.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C0392B] hover:text-[#96281B] uppercase tracking-wide"
                  >
                    <span>{language === 'en' ? 'Particulars & PDF' : 'Spesifikasi & PDF'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
