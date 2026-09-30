// src/components/home/ClientsSection.jsx
import SectionHeading from '../ui/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';

import logoPertamina from '../../assets/clients/1280px-Pertamina_Logo_svg.webp';
import logoChevron from '../../assets/clients/1200px-Chevron_Logo_svg.webp';
import logoBP from '../../assets/clients/BP-Emblem.webp';
import logoTotal from '../../assets/clients/client-total_edited.webp';
import logoAdaro from '../../assets/clients/logo-adaro-head.webp';
import logoElnusa from '../../assets/clients/logo-ELSA-800x252.webp';

export default function ClientsSection() {
  const { language } = useLanguage();
  const en = language === 'en';

  const clientPartners = [
    { name: 'PT Pertamina (Persero)', sector: en ? 'National Energy & Oil/Gas' : 'BUMN Energi & Migas', logo: logoPertamina, scale: 'max-h-11' },
    { name: 'Chevron Indonesia', sector: en ? 'Offshore Exploration & Production' : 'Eksplorasi & Produksi Migas Lepas Pantai', logo: logoChevron, scale: 'max-h-12' },
    { name: 'BP Indonesia', sector: en ? 'Integrated Energy & LNG Operations' : 'Operasi LNG & Energi Terintegrasi', logo: logoBP, scale: 'max-h-12' },
    { name: 'Total E&P Indonesie', sector: en ? 'Offshore Marine Logistics' : 'Logistik Maritim Lepas Pantai', logo: logoTotal, scale: 'max-h-11' },
    { name: 'PT Adaro Energy Tbk', sector: en ? 'Bulk Energy & Mining Supply Chain' : 'Rantai Pasok Batubara & Energi', logo: logoAdaro, scale: 'max-h-11' },
    { name: 'PT Elnusa Tbk', sector: en ? 'Upstream Oil & Gas Services' : 'Jasa Hulu Minyak & Gas', logo: logoElnusa, scale: 'max-h-11' },
  ];

  const Card = ({ client, dup }) => (
    <div
      className={`group mr-6 flex w-60 shrink-0 flex-col items-center rounded-[6px] border border-slate-200 bg-white p-6 text-center transition-colors hover:border-[#C0392B]/50 ${dup ? 'cni-dup' : ''}`}
      aria-hidden={dup ? 'true' : undefined}
    >
      <div className="flex h-16 w-full items-center justify-center">
        <img
          src={client.logo}
          alt={dup ? '' : client.name}
          className={`${client.scale} w-auto object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0`}
          loading="lazy"
        />
      </div>
      <div className="mt-4 w-full border-t border-slate-100 pt-4">
        <h3 className="font-display text-base font-semibold text-[#1E2A3A]">{client.name}</h3>
        <p className="mt-1 text-xs leading-snug text-slate-500">{client.sector}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-[#F4F6F8] py-24 lg:py-32">
      <style>{`
        @keyframes cni-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .cni-marquee { overflow: hidden; -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent); mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent); }
        .cni-track { display: flex; width: max-content; animation: cni-marquee 50s linear infinite; }
        .cni-marquee:hover .cni-track, .cni-marquee:focus-within .cni-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .cni-track { animation: none; }
          .cni-dup { display: none; }
          .cni-marquee { overflow-x: auto; -webkit-mask-image: none; mask-image: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={en ? 'Strategic partners' : 'Kemitraan & reputasi'}
          title={en ? 'Trusted by leading energy and mining operators' : 'Dipercaya pelaku utama energi, migas, dan tambang'}
          description={
            en
              ? 'Marine logistics and offshore vessel support for Indonesia’s leading energy operators and mining enterprises.'
              : 'Pengalaman mendukung operasi maritim pelaku industri minyak & gas bumi, komoditas curah, dan energi terkemuka di perairan Indonesia.'
          }
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="cni-marquee" role="list" aria-label={en ? 'Client list' : 'Daftar klien'}>
          <div className="cni-track">
            {clientPartners.map((c) => <Card key={c.name} client={c} />)}
            {clientPartners.map((c) => <Card key={`${c.name}-dup`} client={c} dup />)}
          </div>
        </div>
      </div>
    </section>
  );
}
