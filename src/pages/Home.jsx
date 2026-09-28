// src/pages/Home.jsx
import HeroSection from '../components/home/HeroSection';
import RecentProjects from '../components/home/RecentProjects';
import ServicesSection from '../components/home/ServicesSection';
import NewsSection from '../components/home/NewsSection';
import ClientsSection from '../components/home/ClientsSection';
import SEO from '../components/common/SEO';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { language } = useLanguage();

  return (
    <main>
      <SEO
        title={
          language === 'en'
            ? 'Offshore Marine Logistics & Specialized Vessel Fleet'
            : 'Penyedia Armada Kapal & Logistik Maritim Lepas Pantai'
        }
        description={
          language === 'en'
            ? 'PT Capitol Nusantara Indonesia Tbk (IDX: CANI) provides Anchor Handling Tugs, barges, and floating cranes for offshore oil, gas, and energy logistics.'
            : 'PT Capitol Nusantara Indonesia Tbk (BEI: CANI) mengoperasikan armada kapal AHT, kapal tunda, tongkang, dan derek terapung untuk mendukung industri energi nasional.'
        }
      />
      <HeroSection />
      <ServicesSection />
      <RecentProjects />
      <NewsSection />
      <ClientsSection />
    </main>
  );
}
