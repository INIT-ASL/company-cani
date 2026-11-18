// src/pages/contact/ContactInfo.jsx
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Printer } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY } from '../../data/company';

export default function ContactInfo() {
  const { language, t } = useLanguage();
  const en = language === 'en';

  const offices = [
    {
      label: COMPANY.headOffice.title[language] || COMPANY.headOffice.title.en,
      type: COMPANY.headOffice.type[language] || COMPANY.headOffice.type.en,
      city: `${COMPANY.headOffice.city}, ${COMPANY.headOffice.province}`,
      address: COMPANY.headOffice.address,
      phone: COMPANY.headOffice.phone,
      phoneTel: COMPANY.headOffice.phoneTel,
      fax: COMPANY.headOffice.fax,
      email: COMPANY.headOffice.email,
      hours: COMPANY.headOffice.hours[language] || COMPANY.headOffice.hours.en,
      mapSrc: COMPANY.headOffice.mapSrc,
    },
    {
      label: COMPANY.branchOffice.title[language] || COMPANY.branchOffice.title.en,
      type: COMPANY.branchOffice.type[language] || COMPANY.branchOffice.type.en,
      city: `${COMPANY.branchOffice.city}, ${COMPANY.branchOffice.province}`,
      address: COMPANY.branchOffice.address,
      phone: `${COMPANY.branchOffice.phone}, ${COMPANY.branchOffice.phoneExtra}`,
      phoneTel: COMPANY.branchOffice.phoneTel,
      fax: COMPANY.branchOffice.fax,
      email: COMPANY.branchOffice.email,
      hours: COMPANY.branchOffice.hours[language] || COMPANY.branchOffice.hours.en,
      mapSrc: COMPANY.branchOffice.mapSrc,
    },
  ];

  const directContacts = [
    {
      dept: en ? 'Commercial & Vessel Chartering' : 'Komersial & Sewa Armada (Chartering)',
      contact: COMPANY.headOffice.phone,
      phoneTel: COMPANY.headOffice.phoneTel,
      email: COMPANY.emails.primary,
      desc: en
        ? 'Anchor handling, tug assist, and project barge quotations.'
        : 'Pertanyaan teknis sewa unit AHT, tug boat, crane barge, dan tongkang.',
    },
    {
      dept: en ? 'Corporate Secretary & Investor Relations' : 'Sekretaris Perusahaan & Hubungan Investor',
      contact: COMPANY.headOffice.phone,
      phoneTel: COMPANY.headOffice.phoneTel,
      email: COMPANY.emails.primary,
      desc: en
        ? 'Public company disclosures, share registrar inquiries, and AGMS information.'
        : 'Keterbukaan informasi emiten, administrasi saham, dan jadwal RUPS.',
    },
  ];

  const localBusinessSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `${COMPANY.name} - Jakarta Head Office`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.headOffice.address,
        addressLocality: COMPANY.headOffice.city,
        postalCode: COMPANY.headOffice.postalCode,
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: COMPANY.headOffice.geo.lat,
        longitude: COMPANY.headOffice.geo.lng,
      },
      telephone: COMPANY.headOffice.phone,
      openingHours: 'Mo-Fr 08:30-17:30',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `${COMPANY.name} - Samarinda Branch`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.branchOffice.address,
        addressLocality: COMPANY.branchOffice.city,
        postalCode: COMPANY.branchOffice.postalCode,
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: COMPANY.branchOffice.geo.lat,
        longitude: COMPANY.branchOffice.geo.lng,
      },
      telephone: COMPANY.branchOffice.phone,
      openingHours: 'Mo-Fr 08:30-17:30',
    },
  ];

  return (
    <>
      <SEO
        title={t('contact.info.headerTitle')}
        description={t('contact.info.headerDesc')}
        breadcrumbs={[
          { name: t('nav.contact'), url: '/contact/info' },
          { name: t('nav.contactInfo'), url: '/contact/info' },
        ]}
        schema={localBusinessSchemas}
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.contact'), to: '/contact/info' },
          { label: t('nav.contactInfo') },
        ]}
        kicker={en ? 'OFFICE DIRECTORY' : 'DIREKTORI KANTOR'}
        title={t('nav.contactInfo')}
        description={t('contact.info.headerDesc')}
      />

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">
            {en ? 'Offices and Operational Locations' : 'Kantor dan Lokasi Operasional'}
          </h2>

          {/* Office Cards with Maps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-[#F4F6F8] border border-slate-200 rounded-[3px] overflow-hidden flex flex-col justify-between shadow-xs"
              >
                <div>
                  {/* Card Header */}
                  <div className="bg-[#121A24] text-white p-5 border-b border-slate-800">
                    <div className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#C0392B] mb-1">
                      {office.type}
                    </div>
                    <h3 className="text-lg font-bold font-display text-white">
                      {office.label}
                    </h3>
                  </div>

                  {/* Google Maps Embed Direct */}
                  <div className="relative aspect-[16/9] w-full bg-slate-200">
                    <iframe
                      title={`Peta Lokasi ${office.label}`}
                      src={office.mapSrc}
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Office Info Details */}
                  <div className="p-6 space-y-3.5 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-relaxed">{office.address}</span>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs flex-wrap">
                      <Phone className="w-4 h-4 text-[#C0392B] shrink-0" aria-hidden="true" />
                      <a
                        href={`tel:${office.phoneTel}`}
                        className="hover:text-[#C0392B] hover:underline"
                      >
                        {office.phone}
                      </a>
                      <span className="text-slate-300" aria-hidden="true">•</span>
                      <Printer className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                      <span>{office.fax}</span>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs">
                      <Mail className="w-4 h-4 text-[#C0392B] shrink-0" aria-hidden="true" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-[#C0392B] hover:underline"
                      >
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs text-slate-500 pt-2 border-t border-slate-200">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Department Direct Contacts & 24/7 Operations Standby */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <h3 className="text-base font-bold font-display text-[#1E2A3A] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#C0392B]" aria-hidden="true" />
                <span>
                  {en
                    ? 'Department Contacts & Commercial Desk'
                    : 'Narahubung Divisi & Layanan Komersial'}
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {directContacts.map((c) => (
                  <div
                    key={c.dept}
                    className="p-5 bg-[#F4F6F8] border border-slate-200 rounded-[3px] space-y-2"
                  >
                    <h4 className="text-xs font-bold text-[#1E2A3A] font-display">{c.dept}</h4>
                    <div className="font-mono text-xs font-bold text-[#C0392B]">
                      <a href={`tel:${c.phoneTel}`} className="hover:underline">
                        {c.contact}
                      </a>
                    </div>
                    <div className="font-mono text-xs text-slate-600">
                      <a href={`mailto:${c.email}`} className="hover:underline">
                        {c.email}
                      </a>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug pt-1">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#121A24] text-white p-6 rounded-[3px] space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C0392B]" aria-hidden="true" />
                <h3 className="font-display font-bold text-sm">
                  {en ? '24/7 Operational Dispatch' : 'Siaga Operasional Armada 24 Jam'}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {en
                  ? 'Active vessel coordinates, emergency towing, and offshore voyage clearances are monitored round-the-clock by CNI marine operations.'
                  : 'Pemantauan koordinat armada, pemanduan darurat, dan koordinasi agen pelabuhan dipantau tanpa henti selama 24/7 oleh tim operasi maritim CNI.'}
              </p>
              <div className="font-mono text-xs text-[#E74C3C] pt-2 border-t border-slate-800">
                <a
                  href={`tel:${COMPANY.headOffice.phoneTel}`}
                  className="hover:underline"
                >
                  {COMPANY.headOffice.phone} (Jakarta Dispatch)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
