// src/pages/fleet/FleetPage.jsx
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import ComingSoon from '../../components/common/ComingSoon';
import { useLanguage } from '../../context/LanguageContext';

export default function FleetPage() {
  const { language } = useLanguage();

  return (
    <>
      <SEO
        title={
          language === 'en'
            ? 'Fleet Marine & Earthmoving Heavy Equipment (Coming Soon)'
            : 'Armada Maritim & Alat Berat (Coming Soon)'
        }
        description={
          language === 'en'
            ? 'Fleet Marine & Earthmoving Heavy Equipment information is currently under development.'
            : 'Informasi Armada Maritim & Alat Berat sedang dalam tahap pengembangan.'
        }
      />
      <PageHeader
        breadcrumbs={[
          { label: language === 'en' ? 'Fleet & Equipment' : 'Armada & Alat Berat', to: '/fleet' },
          { label: language === 'en' ? 'Marine & Earthmoving Fleet' : 'Armada Maritim & Alat Berat' },
        ]}
        title={
          language === 'en'
            ? 'Fleet Marine & Earthmoving Heavy Equipment'
            : 'Armada Maritim & Alat Berat'
        }
        description={
          language === 'en'
            ? 'This page is currently under development. For vessel charter inquiries and technical fleet availability, please contact our team directly.'
            : 'Halaman ini sedang dalam tahap pengembangan. Untuk informasi ketersediaan armada dan penawaran sewa kapal, silakan hubungi tim kami secara langsung.'
        }
      />

      <section className="py-12 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComingSoon
            sectionName={
              language === 'en'
                ? 'Fleet Marine & Earthmoving Heavy Equipment'
                : 'Armada Maritim & Alat Berat'
            }
            title="COMING SOON"
            description={
              language === 'en'
                ? 'This page is currently under development. For urgent fleet availability, vessel charter quotations, or technical inquiries, please contact our dispatch desks in Jakarta or Samarinda.'
                : 'Halaman ini sedang dalam tahap pengembangan. Untuk informasi ketersediaan unit, penawaran sewa kapal, atau konsultasi teknis, silakan hubungi kantor kami di Jakarta atau Samarinda.'
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
