// src/components/home/OperationsSection.jsx
import { MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY } from '../../data/company';
import { MAP_VIEWBOX, INDONESIA_PATH, NEIGHBORS_PATH, MAP_POINTS } from '../../data/indonesiaMap';

// Titik lokasi berdenyut. Posisi diambil dari MAP_POINTS (src/data/indonesiaMap.js).
function MapDot({ cx, cy, delay = 0 }) {
  return (
    <g>
      <circle
        className="cni-pulse"
        cx={cx}
        cy={cy}
        r="6"
        fill="none"
        stroke="#E74C3C"
        strokeWidth="1.5"
        style={{ animationDelay: `${delay}s` }}
      />
      <circle cx={cx} cy={cy} r="4.5" fill="#C0392B" />
    </g>
  );
}

export default function OperationsSection() {
  const { language } = useLanguage();
  const en = language === 'en';

  const offices = [
    {
      type: 'head',
      name: {
        id: COMPANY.headOffice.city,
        en: COMPANY.headOffice.city,
      },
      badge: {
        id: COMPANY.headOffice.type.id,
        en: COMPANY.headOffice.type.en,
      },
      address: {
        id: COMPANY.headOffice.address,
        en: COMPANY.headOffice.address,
      },
    },
    {
      type: 'branch',
      name: {
        id: COMPANY.branchOffice.city,
        en: COMPANY.branchOffice.city,
      },
      badge: {
        id: COMPANY.branchOffice.type.id,
        en: COMPANY.branchOffice.type.en,
      },
      address: {
        id: COMPANY.branchOffice.address,
        en: COMPANY.branchOffice.address,
      },
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            kicker={en ? 'Office Locations' : 'Lokasi Kantor'}
            title={en ? 'Present in Strategic Centers' : 'Hadir di Pusat Kegiatan Strategis'}
            description={
              en
                ? 'Headquartered in West Jakarta with a branch office in Samarinda, supporting seamless marine coordination and client services.'
                : 'Berkantor pusat di Jakarta Barat dengan kantor cabang di Samarinda, mendukung koordinasi maritim dan layanan klien secara optimal.'
            }
          />
          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {offices.map((office, i) => (
              <Reveal as="li" key={office.type} delay={0.06 * i} className="flex items-start gap-3 py-4">
                <MapPin className="h-4 w-4 shrink-0 text-[#C0392B] mt-1" aria-hidden="true" />
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-display text-base font-semibold text-[#1E2A3A] leading-tight">
                      {en ? office.name.en : office.name.id}
                    </span>
                    <span
                      className={`inline-block text-[10px] font-mono font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-[2px] leading-none ${
                        office.type === 'head'
                          ? 'bg-[#C0392B] text-white'
                          : 'bg-[#1E2A3A] text-white'
                      }`}
                    >
                      {en ? office.badge.en : office.badge.id}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 leading-relaxed">
                    {en ? office.address.en : office.address.id}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Kartu peta: tampil langsung (tanpa animasi scroll) agar selalu terlihat */}
        <div className="min-h-[240px] rounded-[6px] bg-[#1E2A3A] p-6 shadow-xl sm:p-10">
          <svg
            viewBox={MAP_VIEWBOX}
            role="img"
            aria-label={en ? 'Map of Indonesia showing corporate office locations' : 'Peta Indonesia lokasi kantor perusahaan'}
            className="block h-auto w-full"
          >
            <path d={NEIGHBORS_PATH} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
            <path d={INDONESIA_PATH} fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" strokeLinejoin="round" />
            {Object.values(MAP_POINTS).map(([x, y], i) => (
              <MapDot key={i} cx={x} cy={y} delay={i * 0.4} />
            ))}
          </svg>
          <p className="mt-4 text-center text-xs text-slate-400">
            {en
              ? 'West Jakarta — Head Office · Samarinda — Branch Office'
              : 'Jakarta Barat — Kantor Pusat · Samarinda — Kantor Cabang'}
          </p>
        </div>
      </div>
    </section>
  );
}
