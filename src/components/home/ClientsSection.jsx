// src/components/home/ClientsSection.jsx
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, Anchor, Award } from 'lucide-react';

import logoPertamina from '../../assets/clients/1280px-Pertamina_Logo_svg.webp';
import logoChevron from '../../assets/clients/1200px-Chevron_Logo_svg.webp';
import logoBP from '../../assets/clients/BP-Emblem.webp';
import logoTotal from '../../assets/clients/client-total_edited.webp';
import logoAdaro from '../../assets/clients/logo-adaro-head.webp';
import logoElnusa from '../../assets/clients/logo-ELSA-800x252.webp';

export default function ClientsSection() {
  const { language } = useLanguage();

  const certifications = [
    {
      code: 'BKI CLASS',
      name: language === 'en' ? 'Biro Klasifikasi Indonesia' : 'Biro Klasifikasi Indonesia',
      desc: language === 'en' ? 'National vessel classification & survey' : 'Klasifikasi dan statutori kapal nasional',
    },
    {
      code: 'ISM CODE',
      name: language === 'en' ? 'International Safety Management' : 'Manajemen Keselamatan Internasional',
      desc: language === 'en' ? 'IMO standard for safe vessel operations' : 'Standar IMO untuk keselamatan pengoperasian kapal',
    },
    {
      code: 'ISPS CODE',
      name: language === 'en' ? 'Ship & Port Security' : 'Keamanan Fasilitas Kapal & Pelabuhan',
      desc: language === 'en' ? 'Maritime security compliance benchmark' : 'Kepatuhan pengamanan kapal maritim',
    },
    {
      code: 'ISO 45001',
      name: 'Occupational Health & Safety',
      desc: language === 'en' ? 'HSE management certification' : 'Sertifikasi sistem manajemen K3',
    },
  ];

  const clientPartners = [
    {
      name: 'PT Pertamina (Persero)',
      sector: language === 'en' ? 'National Energy & Oil/Gas' : 'Badan Usaha Milik Negara Energi & Migas',
      logo: logoPertamina,
      scale: 'max-h-9 sm:max-h-10',
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
      scale: 'max-h-9 sm:max-h-10',
    },
    {
      name: 'PT Elnusa Tbk',
      sector: language === 'en' ? 'Upstream Oil & Gas Services' : 'Jasa Hulu Minyak & Gas Nasional',
      logo: logoElnusa,
      scale: 'max-h-9 sm:max-h-10',
    },
  ];

  return (
    <section className="py-20 bg-[#F4F6F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker={language === 'en' ? 'CREDIBILITY & COMPLIANCE' : 'KREDIBILITAS & SERTIFIKASI'}
          title={
            language === 'en'
              ? 'Institutional Standards & Strategic Industry Relationships'
              : 'Standar Klasifikasi Maritim & Kemitraan Sektor Strategis'
          }
          description={
            language === 'en'
              ? 'Operating under rigorous national and international marine regulations, serving tier-one energy and mineral operators in Indonesia.'
              : 'Beroperasi sesuai kepatuhan regulasi maritim internasional dan melayani pelaku industri migas serta pertambangan terkemuka di tanah air.'
          }
        />

        {/* Tier A: Maritime Standards & Classification Grid */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C0392B]" />
            <span>{language === 'en' ? 'Classification & Regulatory Compliance' : 'Klasifikasi & Standar Statutori'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.code}
                className="bg-white border border-slate-200 rounded-[3px] p-5 hover:border-slate-300 transition-colors shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono font-bold text-xs px-2 py-0.5 bg-[#1E2A3A] text-white rounded-[2px]">
                    {cert.code}
                  </span>
                  <Award className="w-4 h-4 text-[#C0392B]" />
                </div>
                <h4 className="font-display font-bold text-sm text-[#1E2A3A] mb-1">
                  {cert.name}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tier B: Client & Partner Corporate Grid */}
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <Anchor className="w-4 h-4 text-[#C0392B]" />
            <span>{language === 'en' ? 'Key Industry Clients & Energy Counterparties' : 'Mitra Sektor Energi, Migas & Pertambangan'}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {clientPartners.map((client) => (
              <div
                key={client.name}
                className="bg-white border border-slate-200 rounded-[3px] p-4 sm:p-5 flex flex-col justify-between items-center text-center group hover:border-[#C0392B]/40 hover:shadow-xs transition-all"
              >
                <div className="h-12 sm:h-14 w-full flex items-center justify-center mb-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`${client.scale} w-auto object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200`}
                    loading="lazy"
                  />
                </div>
                <div className="w-full pt-2.5 border-t border-slate-100">
                  <h4 className="font-display font-bold text-[11px] sm:text-xs text-[#1E2A3A] tracking-tight group-hover:text-[#C0392B] transition-colors line-clamp-1">
                    {client.name}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400 mt-0.5 block line-clamp-1">
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
