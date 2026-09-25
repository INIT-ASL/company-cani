// src/pages/Home.jsx
import HeroSection from '../components/home/HeroSection';
import RecentProjects from '../components/home/RecentProjects';
import ServicesSection from '../components/home/ServicesSection';
import NewsSection from '../components/home/NewsSection';
import ClientsSection from '../components/home/ClientsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <RecentProjects />
      <NewsSection />
      <ClientsSection />
    </main>
  );
}
