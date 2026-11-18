// src/pages/contact/ContactInquiry.jsx
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import ComingSoon from '../../components/common/ComingSoon';
import { useLanguage } from '../../context/LanguageContext';

export default function ContactInquiry() {
  const { language, t } = useLanguage();

  return (
    <>
      <SEO
        title={language === 'en' ? 'Commercial Inquiry' : 'Pengajuan Sewa Armada'}
        description={
          language === 'en'
            ? 'Commercial inquiry portal and vessel chartering request desk for PT Capitol Nusantara Indonesia Tbk.'
            : 'Layanan pengajuan sewa kapal, konsultasi sewa armada, dan permohonan penawaran komersial PT Capitol Nusantara Indonesia Tbk.'
        }
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.contact'), to: '/contact/info' },
          { label: t('nav.contactInquiry') },
        ]}
        title={t('nav.contactInquiry')}
        description={
          language === 'en'
            ? 'This page is currently under development. Please contact our offices directly for immediate assistance.'
            : 'Halaman ini sedang dalam tahap pengembangan. Silakan hubungi kantor kami secara langsung untuk kebutuhan mendesak.'
        }
      />

      <section className="py-12 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComingSoon
            sectionName={language === 'en' ? 'Commercial & Vessel Inquiry' : 'Pengajuan Sewa Armada'}
            title="COMING SOON"
            description={
              language === 'en'
                ? 'This page is currently under development. For charter inquiries or immediate operational requirements, please contact our commercial desks in Jakarta or Samarinda.'
                : 'Halaman ini sedang dalam tahap pengembangan. Untuk permohonan sewa kapal atau informasi operasional mendesak, silakan hubungi kantor kami di Jakarta atau Samarinda.'
            }
            showContact={true}
            backTo="/"
            backLabel={language === 'en' ? 'Return to Home' : 'Kembali ke Beranda'}
          />
        </div>
      </section>
    </>
  );
}
