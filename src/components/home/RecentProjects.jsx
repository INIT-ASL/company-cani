// src/components/home/RecentProjects.jsx
import { ArrowRight, MapPin, Anchor, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function RecentProjects() {
  const { language, t } = useLanguage();

  const operations = [
    {
      id: 'op-1',
      title:
        language === 'en'
          ? 'Deepwater Exploration Rig Tow & Anchor Handling'
          : 'Pemanduan & Anchor Handling Rig Eksplorasi Lepas Pantai',
      location: language === 'en' ? 'Makassar Strait Basin' : 'Wilayah Kerja Selat Makassar',
      clientSector: language === 'en' ? 'Upstream Oil & Gas' : 'Minyak & Gas Bumi Hulu',
      vessels: 'CNI COMMANDER (6,000 BHP) + CNI WARRIOR (6,400 BHP)',
      scope:
        language === 'en'
          ? 'Deploying 8-point heavy mooring spread, rig repositioning, and 24/7 supply standby in deepwater conditions.'
          : 'Pemasangan sistem tambat 8 titik, reposisi rig pengeboran, dan siaga logistik 24 jam di perairan laut dalam.',
      badge: 'OFFSHORE E&P',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    },
    {
      id: 'op-2',
      title:
        language === 'en'
          ? 'Offshore Transshipment & Heavy Lifting Campaign'
          : 'Bongkar Muat Transshipment Lepas Pantai & Heavy Lift',
      location: language === 'en' ? 'Muara Berau Anchorage, East Kalimantan' : 'Perairan Muara Berau, Kalimantan Timur',
      clientSector: language === 'en' ? 'Bulk Energy & Commodities' : 'Energi & Batubara Nasional',
      vessels: 'CNI CRANE II (500T Capacity, 60m Boom) + CNI BARGE 8000',
      scope:
        language === 'en'
          ? 'Continuous ship-to-ship high-volume loading operations adhering to international environmental and safety standards.'
          : 'Operasi transfer muatan antar kapal (ship-to-ship) volume tinggi dengan kepatuhan penuh standar keselamatan kerja.',
      badge: 'HEAVY LIFT',
      image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=80',
    },
    {
      id: 'op-3',
      title:
        language === 'en'
          ? 'Archipelagic Fuel & Industrial Cargo Barge Transport'
          : 'Pengangkutan BBM & Logistik Industri Antar Pulau',
      location: language === 'en' ? 'Balikpapan – Surabaya – Eastern Corridor' : 'Koridor Balikpapan – Surabaya – Indonesia Timur',
      clientSector: language === 'en' ? 'Refinery Logistics & Infrastructure' : 'Logistik Kilang & Infrastruktur',
      vessels: 'CNI ASSIST 3 (2,800 BHP Tug) + CNI OIL BARGE 1 (2,500 DWT)',
      scope:
        language === 'en'
          ? 'Scheduled coastal haulage of refined petroleum products with strict zero-spill protocols under ISM code guidelines.'
          : 'Pengangkutan terjadwal produk bahan bakar dengan protokol zero-spill sesuai standar manajemen ISM code.',
      badge: 'SEA TRANSPORT',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker={language === 'en' ? 'OPERATIONAL RECORD' : 'REKAM JEJAK PENUGASAN'}
          title={
            language === 'en'
              ? 'Proven Offshore Operations & Energy Transport'
              : 'Rekam Jejak Operasi Maritim & Pengangkutan Energi'
          }
          description={
            language === 'en'
              ? 'Selected marine deployments supporting major national oil & gas exploration, offshore transshipment, and coastal logistics.'
              : 'Dokumentasi penugasan armada kapal dalam mendukung eksplorasi migas nasional, transshipment lepas pantai, dan transportasi laut.'
          }
          action={
            <Link
              to="/fleet/aht"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C0392B] hover:text-[#96281B] transition-colors"
            >
              <span>{t('recentProjects.viewAllFleet')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          }
        />

        {/* Varied Asymmetrical Layout: 1 Primary Card (60%) + 2 Secondary Cards (40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Primary Featured Operation (7 cols) */}
          <div className="lg:col-span-7 bg-[#F4F6F8] border border-slate-200 rounded-[3px] overflow-hidden flex flex-col justify-between group">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src={operations[0].image}
                alt={operations[0].title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                width={800}
                height={500}
              />
              <div className="absolute top-3 left-3 bg-[#121A24] text-white font-mono text-[10px] font-bold px-2 py-1 tracking-wider uppercase border border-white/20">
                {operations[0].badge}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2 font-mono">
                  <span className="flex items-center gap-1 text-[#C0392B] font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    {operations[0].location}
                  </span>
                  <span>•</span>
                  <span>{operations[0].clientSector}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#1E2A3A] mb-3 font-display">
                  {operations[0].title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {operations[0].scope}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 font-mono text-slate-700">
                  <Anchor className="w-3.5 h-3.5 text-[#C0392B]" />
                  <span className="font-semibold text-[11px]">{operations[0].vessels}</span>
                </div>
                <Link
                  to="/fleet/aht"
                  className="font-semibold text-xs text-[#C0392B] hover:text-[#96281B] inline-flex items-center gap-1"
                >
                  <span>{language === 'en' ? 'Vessel Specs' : 'Spesifikasi Unit'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary Stacked Operations (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {operations.slice(1).map((op) => (
              <div
                key={op.id}
                className="bg-[#F4F6F8] border border-slate-200 rounded-[3px] p-5 flex flex-col justify-between flex-1 group hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-slate-500 mb-2">
                    <span className="text-[#C0392B] font-bold uppercase">{op.badge}</span>
                    <span className="truncate">{op.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#1E2A3A] mb-2 font-display">
                    {op.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {op.scope}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2 text-xs font-mono text-slate-700">
                  <span className="text-[11px] truncate">{op.vessels}</span>
                  <Link
                    to="/fleet/crane"
                    className="text-[#C0392B] hover:text-[#96281B] shrink-0 font-sans font-semibold text-[11px]"
                  >
                    {language === 'en' ? 'Details →' : 'Detail →'}
                  </Link>
                </div>
              </div>
            ))}

            {/* Quality Standard Note */}
            <div className="p-4 bg-[#1E2A3A] text-white rounded-[3px] text-xs flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C0392B] shrink-0" />
              <div className="text-slate-300 leading-snug">
                {language === 'en'
                  ? 'All operations governed under certified ISM Code safety management protocols and zero-accident target.'
                  : 'Seluruh operasional diawasi berdasarkan sertifikasi ISM Code dengan target nihil kecelakaan kerja (zero incident).'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
