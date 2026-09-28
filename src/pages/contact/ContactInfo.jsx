// src/pages/contact/ContactInfo.jsx
import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';
import { MapPin, Phone, Printer, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ContactInfo() {
  const { language, t } = useLanguage();

  const offices = [
    {
      label: t('contact.info.headOffice'),
      city: 'Samarinda, East Kalimantan',
      type: 'Head Office',
      address: 'Jl. Pangeran Diponegoro No. 45, Samarinda Ulu, Samarinda 75122, Kalimantan Timur, Indonesia',
      phone: '+62 541 741 234',
      fax: '+62 541 741 235',
      email: 'samarinda@cani.co.id',
      mapSrc: 'https://maps.google.com/maps?q=Samarinda,+Kalimantan+Timur&output=embed',
      color: '#C0392B',
    },
    {
      label: t('contact.info.representativeOffice'),
      city: 'Jakarta Pusat',
      type: 'Representative Office',
      address: 'Wisma Sudirman Building 12th Floor, Jl. Jend. Sudirman No. 123, Jakarta Pusat 10220, Indonesia',
      phone: '+62 21 5790 1234',
      fax: '+62 21 5790 1235',
      email: 'jakarta@cani.co.id',
      mapSrc: 'https://maps.google.com/maps?q=Jl+Jend+Sudirman,+Jakarta+Pusat&output=embed',
      color: '#1E2A3A',
    },
  ];

  const whatsappContacts = [
    {
      dept: 'Chartering',
      number: '+62 812 0001 2345',
      desc: {
        en: 'Vessel chartering & technical specifications',
        id: 'Pertanyaan sewa kapal & spesifikasi teknis armada',
      },
    },
    {
      dept: 'General Enquiry',
      number: '+62 812 0001 2346',
      desc: {
        en: 'Corporate, media & general partnerships',
        id: 'Pertanyaan umum korporat & kemitraan',
      },
    },
  ];

  return (
    <>
      <PageHeader
        breadcrumb={t('contact.info.breadcrumb')}
        title={t('contact.info.headerTitle')}
        description={t('contact.info.headerDesc')}
      />

      <section className="py-12 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Office Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {offices.map((office, i) => (
              <motion.div
                key={office.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                {/* Header */}
                <div
                  className="px-6 py-4 flex items-center gap-3"
                  style={{ backgroundColor: office.color }}
                >
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{office.label}</div>
                    <div className="text-white/70 text-xs">{office.type} — {office.city}</div>
                  </div>
                </div>

                {/* Map Embed */}
                <div className="h-52 bg-slate-100">
                  <iframe
                    title={`Map ${office.city}`}
                    src={office.mapSrc}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C0392B] mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600 leading-relaxed">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C0392B] shrink-0" />
                    <span className="text-sm text-slate-600">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Printer className="w-4 h-4 text-[#C0392B] shrink-0" />
                    <span className="text-sm text-slate-600">{office.fax}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#C0392B] shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-sm text-[#C0392B] hover:underline"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp Section */}
          <div>
            <h2 className="text-xl font-bold text-[#1E2A3A] mb-5 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#C0392B]" />
              {t('contact.info.waTitle')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {whatsappContacts.map((wa, i) => (
                <motion.a
                  key={wa.dept}
                  href={`https://wa.me/${wa.number.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-5 hover:border-green-300 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 bg-green-500 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1E2A3A] text-sm">{wa.dept}</div>
                    <div className="text-green-600 font-semibold text-xs">{wa.number}</div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      {typeof wa.desc === 'object' ? wa.desc[language] : wa.desc}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
