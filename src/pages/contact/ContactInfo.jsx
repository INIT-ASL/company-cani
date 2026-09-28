// src/pages/contact/ContactInfo.jsx
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Printer } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ContactInfo() {
  const { language, t } = useLanguage();

  const offices = [
    {
      label: t('contact.info.headOffice'),
      city: 'Jakarta Barat, DKI Jakarta',
      type: language === 'en' ? 'Head Office' : 'Kantor Pusat',
      address:
        'Perkantoran Permata Eksekutif Blok R.1/3-2/3, Jl. Raya Pos Pengumben Kebun Jeruk, West Jakarta 11550, DKI Jakarta, Indonesia',
      phone: '+62 (21) 5307340',
      fax: '+62 (21) 2933-9372, 9373',
      email: 'Enquiry@ptcni.co.id',
      hours: language === 'en' ? 'Mon – Fri: 08:30 – 17:30 WIB' : 'Senin – Jumat: 08.30 – 17.30 WIB',
      mapSrc:
        'https://maps.google.com/maps?q=Apartment+Permata+Eksekutif,+Jl.+Raya+Pos+Pengumben+No.51,+Jakarta+Barat&t=&z=16&ie=UTF8&iwloc=B&output=embed',
    },
    {
      label: t('contact.info.branchOffice'),
      city: 'Samarinda, Kalimantan Timur',
      type: language === 'en' ? 'Branch Office' : 'Kantor Cabang',
      address:
        'Pangeran Suriansyah No. 30-34, Samarinda 75113, East Kalimantan, Indonesia',
      phone: '+62-541-732893, 732897, 741921, 731898',
      fax: '+62-541-732891, 738324',
      email: 'Enquiry@ptcni.co.id',
      hours: language === 'en' ? 'Mon – Fri: 08:30 – 17:30 WITA' : 'Senin – Jumat: 08.30 – 17.30 WITA',
      mapSrc: 
        'https://maps.google.com/maps?cid=16979330801030424824&hl=en&z=16&output=embed',
    },
  ];

  const directContacts = [
    {
      dept: language === 'en' ? 'Commercial & Vessel Chartering' : 'Komersial & Sewa Armada (Chartering)',
      contact: '+62 (21) 5307340',
      email: 'Enquiry@ptcni.co.id',
      desc:
        language === 'en'
          ? 'Anchor handling, tug assist, and project barge quotations.'
          : 'Pertanyaan teknis sewa unit AHT, tug boat, crane barge, dan tongkang.',
    },
    {
      dept: language === 'en' ? 'Corporate Secretary & Investor Relations' : 'Sekretaris Perusahaan & Hubungan Investor',
      contact: '+62 (21) 5307340',
      email: 'Enquiry@ptcni.co.id',
      desc:
        language === 'en'
          ? 'Public company disclosures, share registrar inquiries, and AGMS information.'
          : 'Keterbukaan informasi emiten, administrasi saham, dan jadwal RUPS.',
    },
  ];

  return (
    <>
      <SEO
        title={t('contact.info.headerTitle')}
        description={t('contact.info.headerDesc')}
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.contact'), to: '/contact/info' },
          { label: t('contact.info.headerTitle') },
        ]}
        kicker={language === 'en' ? 'OFFICE DIRECTORY' : 'DIREKTORI KANTOR'}
        title={t('contact.info.headerTitle')}
        description={t('contact.info.headerDesc')}
      />

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                  {/* Interactive Map Embed */}
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
                      <MapPin className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{office.address}</span>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs">
                      <Phone className="w-4 h-4 text-[#C0392B] shrink-0" />
                      <span>{office.phone}</span>
                      <span className="text-slate-300">•</span>
                      <Printer className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{office.fax}</span>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs">
                      <Mail className="w-4 h-4 text-[#C0392B] shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-[#C0392B] hover:underline">
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs text-slate-500 pt-2 border-t border-slate-200">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
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
                <span className="w-1.5 h-4 bg-[#C0392B]" />
                <span>
                  {language === 'en'
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
                    <div className="text-xs font-bold text-[#1E2A3A] font-display">{c.dept}</div>
                    <div className="font-mono text-xs font-bold text-[#C0392B]">{c.contact}</div>
                    <div className="font-mono text-xs text-slate-600">{c.email}</div>
                    <p className="text-[11px] text-slate-500 leading-snug pt-1">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#121A24] text-white p-6 rounded-[3px] space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C0392B]" />
                <h4 className="font-display font-bold text-sm">
                  {language === 'en' ? '24/7 Operational Dispatch' : 'Siaga Operasional Armada 24 Jam'}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {language === 'en'
                  ? 'Active vessel coordinates, emergency towing, and offshore voyage clearances are monitored round-the-clock by CNI marine operations.'
                  : 'Pemantauan koordinat armada, pemanduan darurat, dan koordinasi agen pelabuhan dipantau tanpa henti selama 24/7 oleh tim operasi maritim CNI.'}
              </p>
              <div className="font-mono text-xs text-[#E74C3C] pt-2 border-t border-slate-800">
                Hotline: +62 812 0001 2345
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
