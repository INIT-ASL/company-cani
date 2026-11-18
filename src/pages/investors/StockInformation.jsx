// src/pages/investors/StockInformation.jsx
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import ComingSoon from '../../components/common/ComingSoon';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY } from '../../data/company';

export default function StockInformation() {
  const { language, t } = useLanguage();

  return (
    <>
      <SEO
        title={
          language === 'en'
            ? 'Stock Information — IDX: CANI'
            : 'Informasi Saham — BEI: CANI'
        }
        description={
          language === 'en'
            ? 'Stock information, market capitalization, and shareholder details for PT Capitol Nusantara Indonesia Tbk (IDX: CANI).'
            : 'Informasi perdagangan saham, kapitalisasi pasar, dan struktur kepemilikan efek PT Capitol Nusantara Indonesia Tbk (BEI: CANI).'
        }
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.investors'), to: '/investors/stock' },
          { label: t('nav.stockInformation') },
        ]}
        title={t('nav.stockInformation')}
        description={
          language === 'en'
            ? 'Real-time equity quotes, trading statistics, and statutory market disclosures for PT Capitol Nusantara Indonesia Tbk on the Indonesia Stock Exchange.'
            : 'Keterbukaan informasi dan data perdagangan efek dapat dipantau langsung melalui portal resmi Bursa Efek Indonesia (BEI).'
        }
      />

      <section className="py-12 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComingSoon
            sectionName={
              language === 'en'
                ? 'IDX: CANI Stock Information'
                : 'Informasi Saham BEI: CANI'
            }
            title="COMING SOON"
            description={
              language === 'en'
                ? 'This page is currently under development. For official equity prices, trading history, and regulatory disclosures, please visit the Indonesia Stock Exchange portal or contact our Investor Relations desk.'
                : 'Halaman ini sedang dalam tahap pengembangan. Untuk memantau pergerakan harga saham resmi dan pengumuman emiten terkini, silakan kunjungi portal Bursa Efek Indonesia atau hubungi kami.'
            }
            showContact={true}
            externalLink={{
              label: language === 'en' ? 'View CANI on IDX Portal' : 'Lihat CANI di Portal BEI',
              url: COMPANY.idxUrl,
            }}
            backTo="/"
            backLabel={language === 'en' ? 'Return to Home' : 'Kembali ke Beranda'}
          />
        </div>
      </section>
    </>
  );
}
