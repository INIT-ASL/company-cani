// src/components/home/ClientsSection.jsx
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';
import { Handshake } from 'lucide-react';

import logoPertamina from '../../assets/clients/1280px-Pertamina_Logo_svg.webp';
import logoChevron from '../../assets/clients/1200px-Chevron_Logo_svg.webp';
import logoBP from '../../assets/clients/BP-Emblem.webp';
import logoTotal from '../../assets/clients/client-total_edited.webp';
import logoAdaro from '../../assets/clients/logo-adaro-head.webp';
import logoElnusa from '../../assets/clients/logo-ELSA-800x252.webp';

export default function ClientsSection() {
  const { language } = useLanguage();

  const clientPartners = [
    {
      name: 'PT Pertamina (Persero)',
      sector: language === 'en' ? 'National Energy & Oil/Gas' : 'Badan Usaha Milik Negara Energi & Migas',
      logo: logoPertamina,
      scale: 'max-h-10 sm:max-h-11',
    },
    {
      name: 'Chevron Indonesia',
      sector: language === 'en' ? 'Offshore Exploration & Production' : 'Eksplorasi & Produksi Migas Lepas Pantai',
      logo: logoChevron,
      scale: 'max-h-11 sm:max-h-12',
    },
    {
      name: 'BP Indonesia',
      sector: language === 'en' ? 'Integrated Energy & LNG Operations' : 'Operasi LNG & Energi Terintegrasi',
      logo: logoBP,
      scale: 'max-h-11 sm:max-h-12',
    },
    {
      name: 'Total E&P Indonesie',
      sector: language === 'en' ? 'Offshore Marine Logistics' : 'Dukungan Logistik Maritim Lepas Pantai',
      logo: logoTotal,
      scale: 'max-h-10 sm:max-h-11',
    },
    {
      name: 'PT Adaro Energy Tbk',
      sector: language === 'en' ? 'Bulk Energy & Mining Supply Chain' : 'Rantai Pasok Batubara & Energi Terpadu',
      logo: logoAdaro,
      scale: 'max-h-10 sm:max-h-11',
    },
    {
      name: 'PT Elnusa Tbk',
      sector: language === 'en' ? 'Upstream Oil & Gas Services' : 'Jasa Hulu Minyak & Gas Nasional',
      logo: logoElnusa,
      scale: 'max-h-10 sm:max-h-11',
    },
  ];

  return (
    <section className="py-20 bg-[#F4F6F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker={language === 'en' ? 'STRATEGIC PARTNERS' : 'KEMITRAAN & REPUTASI'}
          title={
            language === 'en'
              ? 'Key Industry Clients & Energy Counterparties'
              : 'Mitra Sektor Energi, Migas & Pertambangan'
          }
          description={
            language === 'en'
              ? 'Trusted marine logistics and offshore vessel support for Indonesia’s leading energy operators and mining enterprises.'
              : 'Pengalaman mendukung operasi maritim pelaku industri minyak & gas bumi, komoditas curah, dan energi terkemuka di perairan Indonesia.'
          }
        />

        {/* Client & Partner Corporate Grid */}
        <div className="mt-8">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <Handshake className="w-4 h-4 text-[#C0392B]" />
            <span>{language === 'en' ? 'Selected Corporate Clients & Partners' : 'Daftar Klien & Rekanan Korporat'}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientPartners.map((client) => (
              <div
                key={client.name}
                className="bg-white border border-slate-200 rounded-[3px] p-5 flex flex-col justify-between items-center text-center group hover:border-[#C0392B]/50 hover:shadow-md transition-all duration-300"
              >
                <div className="h-14 w-full flex items-center justify-center mb-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`${client.scale} w-auto object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300`}
                    loading="lazy"
                  />
                </div>
                <div className="w-full pt-3 border-t border-slate-100">
                  <h4 className="font-display font-bold text-xs sm:text-[13px] text-[#1E2A3A] tracking-tight group-hover:text-[#C0392B] transition-colors line-clamp-1">
                    {client.name}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400 mt-1 block line-clamp-1">
                    {client.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

