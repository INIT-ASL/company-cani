// src/components/layout/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Anchor, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

function DropdownMenu({ items, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50"
        >
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-4 py-3 text-sm text-[#1E2A3A] hover:bg-[#FEF2F1] hover:text-[#C0392B] transition-colors border-b border-slate-50 last:border-0"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
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
        { label: t('nav.companyProfile'), to: '/about/profile' },
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
        { label: t('nav.newsAnnouncements'), to: '/media' },
      ],
    },
    {
      label: t('nav.investors'),
      children: [
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#C0392B] rounded-lg flex items-center justify-center shadow-sm group-hover:bg-[#922B21] transition-colors shrink-0">
              <Anchor className="w-5 h-5 text-white" />
            </div>
            <div>
              <div
                className={`font-bold text-sm leading-tight transition-colors ${
                  transparent ? 'text-white' : 'text-[#1E2A3A]'
                }`}
              >
                {t('common.companyName')}
              </div>
              <div
                className={`text-xs transition-colors ${
                  transparent ? 'text-white/70' : 'text-slate-400'
                }`}
              >
                {t('common.companySuffix')}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      transparent
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-[#1E2A3A] hover:text-[#C0392B] hover:bg-red-50'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        openDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <DropdownMenu items={link.children} isOpen={openDropdown === link.label} />
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    transparent
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-[#1E2A3A] hover:text-[#C0392B] hover:bg-red-50'
                  } ${
                    location.pathname === link.to
                      ? transparent
                        ? 'text-white font-bold'
                        : 'text-[#C0392B] font-bold'
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Language Switcher Desktop */}
            <div className="ml-4 pl-4 border-l border-slate-200/40 flex items-center">
              <div
                className={`inline-flex items-center p-0.5 rounded-full border text-xs font-semibold ${
                  transparent
                    ? 'border-white/30 bg-black/20 text-white'
                    : 'border-slate-200 bg-slate-100 text-[#1E2A3A]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded-full transition-all ${
                    language === 'en'
                      ? 'bg-[#C0392B] text-white shadow-xs'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('id')}
                  className={`px-2.5 py-1 rounded-full transition-all ${
                    language === 'id'
                      ? 'bg-[#C0392B] text-white shadow-xs'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label="Switch to Indonesian"
                >
                  ID
                </button>
              </div>
            </div>
          </nav>

          {/* Right Mobile: Language Switcher + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="inline-flex items-center p-0.5 rounded-full border text-xs font-semibold border-slate-200 bg-slate-100">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === 'en' ? 'bg-[#C0392B] text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('id')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === 'id' ? 'bg-[#C0392B] text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                ID
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg transition-colors ${
                transparent ? 'text-white hover:bg-white/10' : 'text-[#1E2A3A] hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                      }
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#1E2A3A] hover:bg-slate-50"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform text-slate-400 ${
                          mobileExpanded === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden ml-3 mt-1 border-l-2 border-[#C0392B]/20 pl-3"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="block px-3 py-2 text-sm text-slate-600 hover:text-[#C0392B] hover:bg-red-50 rounded-lg"
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
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#1E2A3A] hover:bg-slate-50 hover:text-[#C0392B]"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
