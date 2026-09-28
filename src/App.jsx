// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import CompanyProfile from './pages/about/CompanyProfile';
import CompanyHistory from './pages/about/CompanyHistory';
import { BoardCommissioners, BoardDirectors } from './pages/about/BoardPage';
import FleetPage from './pages/fleet/FleetPage';
import MediaCenter from './pages/MediaCenter';
import FinancialStatements from './pages/investors/FinancialStatements';
import ContactInfo from './pages/contact/ContactInfo';
import ContactInquiry from './pages/contact/ContactInquiry';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* About */}
            <Route path="/about/profile" element={<CompanyProfile />} />
            <Route path="/about/history" element={<CompanyHistory />} />
            <Route path="/about/commissioners" element={<BoardCommissioners />} />
            <Route path="/about/directors" element={<BoardDirectors />} />
            <Route path="/about" element={<Navigate to="/about/profile" replace />} />

            {/* Fleet */}
            <Route path="/fleet/:category" element={<FleetPage />} />
            <Route path="/fleet" element={<Navigate to="/fleet/aht" replace />} />

            {/* Media Center */}
            <Route path="/media" element={<MediaCenter />} />

            {/* Investors */}
            <Route path="/investors/financials" element={<FinancialStatements />} />
            <Route path="/investors" element={<Navigate to="/investors/financials" replace />} />

            {/* Contact */}
            <Route path="/contact/info" element={<ContactInfo />} />
            <Route path="/contact/inquiry" element={<ContactInquiry />} />
            <Route path="/contact" element={<Navigate to="/contact/info" replace />} />

            {/* 404 catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
