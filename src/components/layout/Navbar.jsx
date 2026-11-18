// src/components/layout/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY } from '../../data/company';
import UtilityBar from './UtilityBar';
import DesktopNav from './DesktopNav';
import MobileDrawer from './MobileDrawer';
import LanguageSwitcher from './LanguageSwitcher';
import logoCani from '../../assets/images/logo-cani.png';

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  const navLinks = [
    { label: t('nav.home'), to: '/' },
    {
      label: t('nav.aboutUs'),
      children: [
        { label: t('nav.companyHistory'), to: '/about/history' },
        { label: t('nav.boardOfCommissioners'), to: '/about/commissioners' },
        { label: t('nav.boardOfDirectors'), to: '/about/directors' },
      ],
    },
    {
      label: t('nav.fleet'),
      children: [
        { label: t('nav.aht'), to: '/fleet/aht' },
        { label: t('nav.tugBoat'), to: '/fleet/tug' },
        { label: t('nav.floatingCrane'), to: '/fleet/crane' },
        { label: t('nav.barge'), to: '/fleet/barge' },
        { label: t('nav.heavyEquipment'), to: '/fleet/heavy' },
      ],
    },
    {
      label: t('nav.mediaCenter'),
      children: [
        { label: t('nav.pressRelease'), to: '/media/press-release' },
        { label: t('nav.news'), to: '/media/news' },
      ],
    },
    {
      label: t('nav.investors'),
      children: [
        { label: t('nav.stockInformation'), to: '/investors/stock' },
        { label: t('nav.financialStatements'), to: '/investors/financials' },
      ],
    },
    {
      label: t('nav.contact'),
      to: '/contact/info',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  // Handle escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled && !mobileOpen;

  // Header height offset for drawer
  const drawerTop = 'top-16 sm:top-18 md:top-[calc(4.5rem+2rem)]';

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isTransparent
            ? 'bg-transparent text-white'
            : 'bg-white/95 backdrop-blur-md text-[#1E2A3A] shadow-xs border-b border-slate-200/80'
        }`}
      >
        {/* Top Utility Bar */}
        <UtilityBar isTransparent={isTransparent} />

        {/* Main Navbar Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] rounded-[3px]"
              aria-label={COMPANY.name}
            >
              <div
                className={`transition-all duration-200 flex items-center ${
                  isTransparent
                    ? 'px-2.5 py-1 sm:px-3 sm:py-1 rounded-[3px]'
                    : 'py-0.5'
                }`}
              >
                <img
                  src={logoCani}
                  alt={COMPANY.name}
                  width={140}
                  height={36}
                  className="h-8 sm:h-9 w-auto object-contain"
                  fetchPriority="high"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <DesktopNav
              navLinks={navLinks}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              isTransparent={isTransparent}
            />

            {/* Desktop Language Switcher */}
            <div className="hidden lg:flex items-center">
              <LanguageSwitcher isTransparent={isTransparent} />
            </div>

            {/* Mobile Bar: Language Switcher & Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher isTransparent={isTransparent} />

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 rounded-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] ${
                  isTransparent
                    ? 'text-white hover:bg-white/10'
                    : 'text-[#1E2A3A] hover:bg-slate-100'
                }`}
                aria-label={mobileOpen ? 'Tutup Menu / Close Menu' : 'Buka Menu / Open Menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (placed outside header for viewport backdrop blur) */}
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        mobileExpanded={mobileExpanded}
        setMobileExpanded={setMobileExpanded}
        drawerTop={drawerTop}
        t={t}
      />
    </>
  );
}
