// src/components/layout/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import logoCani from '../../assets/images/logo-cani.png';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

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
      children: [
        { label: t('nav.contactInfo'), to: '/contact/info' },
        { label: t('nav.contactInquiry'), to: '/contact/inquiry' },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleMouseEnter = (label) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled && !mobileOpen;

  const isLinkActive = (item) => {
    if (item.to) {
      return location.pathname === item.to;
    }
    if (item.children) {
      return item.children.some((child) => location.pathname === child.to);
    }
    return false;
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-white/95 backdrop-blur-md text-[#1E2A3A] shadow-xs border-b border-slate-200/80'
      }`}
    >
      {/* Top Utility Bar for Corporate Legitimacy */}
      <div
        className={`hidden md:block text-[11px] border-b transition-colors ${
          isTransparent
            ? 'border-white/10 text-white/70 bg-black/10'
            : 'border-slate-100 text-slate-500 bg-[#F4F6F8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold tracking-wider text-[#C0392B] uppercase">
              {t('common.ticker')}
            </span>
            <span className="opacity-40">|</span>
            <span className="truncate">
              {language === 'en'
                ? 'Indonesian Public Maritime & Offshore Support Logistics'
                : 'Emiten Jasa Pelayaran & Pendukung Maritim Lepas Pantai Indonesia'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/investors/financials"
              className="hover:text-[#C0392B] transition-colors"
            >
              {t('nav.financialStatements')}
            </Link>
            <span className="opacity-40">•</span>
            <Link to="/contact/info" className="hover:text-[#C0392B] transition-colors">
              {t('nav.contactInfo')}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] rounded-[3px]"
            aria-label="PT Capitol Nusantara Indonesia Tbk"
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
                alt="PT Capitol Nusantara Indonesia Tbk"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isLinkActive(link);

              if (link.children) {
                const isOpen = openDropdown === link.label;

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                      className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold tracking-wide uppercase transition-colors rounded-[2px] ${
                        isTransparent
                          ? 'text-white/90 hover:text-white hover:bg-white/10'
                          : 'text-[#1E2A3A] hover:text-[#C0392B] hover:bg-slate-50'
                      } ${active ? (isTransparent ? 'text-white font-bold' : 'text-[#C0392B] font-bold') : ''}`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-150 ${
                          isOpen ? 'rotate-180 text-[#C0392B]' : 'opacity-60'
                        }`}
                      />
                    </button>

                    {/* Submenu Dropdown */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-[3px] shadow-lg border border-slate-200 py-1 z-50 text-[#1E2A3A]"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className={`block px-4 py-2.5 text-xs font-medium transition-colors border-l-2 ${
                                location.pathname === child.to
                                  ? 'border-[#C0392B] text-[#C0392B] bg-slate-50 font-semibold'
                                  : 'border-transparent text-slate-700 hover:text-[#C0392B] hover:bg-slate-50 hover:border-[#C0392B]'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-xs font-semibold tracking-wide uppercase transition-colors rounded-[2px] ${
                    isTransparent
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-[#1E2A3A] hover:text-[#C0392B] hover:bg-slate-50'
                  } ${
                    active
                      ? isTransparent
                        ? 'text-white font-bold border-b-2 border-[#C0392B]'
                        : 'text-[#C0392B] font-bold border-b-2 border-[#C0392B]'
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Desktop Language Switcher */}
            <div className="ml-3 pl-3 border-l border-slate-200/50 flex items-center">
              <div
                className={`inline-flex items-center p-0.5 rounded-[3px] border text-[11px] font-semibold ${
                  isTransparent
                    ? 'border-white/30 bg-black/20 text-white'
                    : 'border-slate-200 bg-slate-100 text-[#1E2A3A]'
                }`}
                role="group"
                aria-label="Language selection"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded-[2px] transition-all ${
                    language === 'en'
                      ? 'bg-[#C0392B] text-white'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-pressed={language === 'en'}
                  aria-label="Switch language to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('id')}
                  className={`px-2 py-0.5 rounded-[2px] transition-all ${
                    language === 'id'
                      ? 'bg-[#C0392B] text-white'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-pressed={language === 'id'}
                  aria-label="Ganti bahasa ke Bahasa Indonesia"
                >
                  ID
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Right Bar: Language Switcher & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <div
              className={`inline-flex items-center p-0.5 rounded-[3px] border text-[11px] font-semibold ${
                isTransparent
                  ? 'border-white/30 bg-black/30 text-white'
                  : 'border-slate-200 bg-slate-100 text-[#1E2A3A]'
              }`}
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-[2px] transition-all ${
                  language === 'en' ? 'bg-[#C0392B] text-white' : 'opacity-70'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('id')}
                className={`px-2 py-0.5 rounded-[2px] transition-all ${
                  language === 'id' ? 'bg-[#C0392B] text-white' : 'opacity-70'
                }`}
              >
                ID
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] ${
                isTransparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-[#1E2A3A] hover:bg-slate-100'
              }`}
              aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 top-16 bg-black/50 z-40 lg:hidden"
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] bg-white text-[#1E2A3A] z-50 border-l border-slate-200 overflow-y-auto p-5 shadow-2xl lg:hidden flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="pb-3 mb-3 border-b border-slate-100 flex items-center justify-between">
                  <img
                    src={logoCani}
                    alt="PT Capitol Nusantara Indonesia Tbk"
                    className="h-7 w-auto object-contain"
                  />
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#C0392B] bg-slate-100 px-2 py-0.5 rounded-[2px]">
                    {t('common.ticker')}
                  </span>
                </div>

                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label} className="border-b border-slate-50 pb-1">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                        }
                        className="w-full flex items-center justify-between py-2.5 px-2 text-xs font-semibold tracking-wide uppercase text-[#1E2A3A] hover:text-[#C0392B]"
                        aria-expanded={mobileExpanded === link.label}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-150 text-slate-400 ${
                            mobileExpanded === link.label ? 'rotate-180 text-[#C0392B]' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="overflow-hidden pl-3 space-y-1 my-1 border-l-2 border-[#C0392B]/30"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.to}
                                to={child.to}
                                className={`block py-1.5 px-2 text-xs font-medium rounded-[2px] transition-colors ${
                                  location.pathname === child.to
                                    ? 'text-[#C0392B] font-semibold bg-red-50/60'
                                    : 'text-slate-600 hover:text-[#C0392B]'
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block py-2.5 px-2 text-xs font-semibold tracking-wide uppercase border-b border-slate-50 transition-colors ${
                        location.pathname === link.to
                          ? 'text-[#C0392B] font-bold'
                          : 'text-[#1E2A3A] hover:text-[#C0392B]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-slate-400">
                <p>Samarinda • Jakarta</p>
                <p className="mt-1">info@cani.co.id</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
