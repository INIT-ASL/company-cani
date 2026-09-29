// src/App.jsx
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Route-level code splitting
const Home = lazy(() => import('./pages/Home'));
const CompanyHistory = lazy(() => import('./pages/about/CompanyHistory'));
const BoardCommissioners = lazy(() =>
  import('./pages/about/BoardPage').then((module) => ({ default: module.BoardCommissioners }))
);
const BoardDirectors = lazy(() =>
  import('./pages/about/BoardPage').then((module) => ({ default: module.BoardDirectors }))
);
const FleetPage = lazy(() => import('./pages/fleet/FleetPage'));
const MediaCenter = lazy(() => import('./pages/MediaCenter'));
const FinancialStatements = lazy(() => import('./pages/investors/FinancialStatements'));
const StockInformation = lazy(() => import('./pages/investors/StockInformation'));
const ContactInfo = lazy(() => import('./pages/contact/ContactInfo'));
const ContactInquiry = lazy(() => import('./pages/contact/ContactInquiry'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'instant' : 'smooth',
    });
  }, [pathname]);
  return null;
}

// Minimalist corporate route loader
function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-white" aria-busy="true">
      <div className="flex flex-col items-center gap-3">
        <div className="w-6 h-6 border-2 border-[#C0392B] border-t-transparent rounded-full animate-spin" />
        <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
          Loading Page...
        </span>
      </div>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-[#1E2A3A]">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* About */}
              <Route path="/about/history" element={<CompanyHistory />} />
              <Route path="/about/commissioners" element={<BoardCommissioners />} />
              <Route path="/about/directors" element={<BoardDirectors />} />
              <Route path="/about/profile" element={<Navigate to="/about/history" replace />} />
              <Route path="/about" element={<Navigate to="/about/history" replace />} />

              {/* Fleet */}
              <Route path="/fleet/:category" element={<FleetPage />} />
              <Route path="/fleet" element={<Navigate to="/fleet/aht" replace />} />

              {/* Media Center */}
              <Route path="/media/press-release" element={<MediaCenter />} />
              <Route path="/media/news" element={<MediaCenter />} />
              <Route path="/media" element={<Navigate to="/media/press-release" replace />} />

              {/* Investors */}
              <Route path="/investors/stock" element={<StockInformation />} />
              <Route path="/investors/financials" element={<FinancialStatements />} />
              <Route path="/investors" element={<Navigate to="/investors/stock" replace />} />

              {/* Contact */}
              <Route path="/contact/info" element={<ContactInfo />} />
              <Route path="/contact/inquiry" element={<ContactInquiry />} />
              <Route path="/contact" element={<Navigate to="/contact/info" replace />} />

              {/* 404 page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
