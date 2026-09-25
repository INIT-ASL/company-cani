// src/components/layout/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Anchor } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'Company Profile', to: '/about/profile' },
      { label: 'Company History', to: '/about/history' },
      { label: 'Board of Commissioners', to: '/about/commissioners' },
      { label: 'Board of Directors', to: '/about/directors' },
    ],
  },
  {
    label: 'Fleet',
    children: [
      { label: 'Anchor Handling Tug (AHT)', to: '/fleet/aht' },
      { label: 'Tug Boat', to: '/fleet/tug' },
      { label: 'Floating Crane', to: '/fleet/crane' },
      { label: 'Barge', to: '/fleet/barge' },
      { label: 'Heavy Equipment', to: '/fleet/heavy' },
    ],
  },
  {
    label: 'Media Center',
    children: [
      { label: 'Berita & Pengumuman', to: '/media' },
    ],
  },
  {
    label: 'Investors',
    children: [
      { label: 'Laporan Keuangan', to: '/investors/financials' },
    ],
  },
  {
    label: 'Contact',
    children: [
      { label: 'Informasi Kontak', to: '/contact/info' },
      { label: 'Inquiry / Pertanyaan', to: '/contact/inquiry' },
    ],
  },
];

function DropdownMenu({ items, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50"
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

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
        transparent
          ? 'bg-transparent'
          : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#C0392B] rounded-lg flex items-center justify-center shadow-sm group-hover:bg-[#922B21] transition-colors">
              <Anchor className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className={`font-bold text-sm leading-tight transition-colors ${transparent ? 'text-white' : 'text-[#1E2A3A]'}`}>
                PT Capitol Nusantara
              </div>
              <div className={`text-xs transition-colors ${transparent ? 'text-white/70' : 'text-slate-400'}`}>
                Indonesia Tbk
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
                      className={`w-3.5 h-3.5 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}
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
                  } ${location.pathname === link.to ? (transparent ? 'text-white' : 'text-[#C0392B]') : ''}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              transparent ? 'text-white hover:bg-white/10' : 'text-[#1E2A3A] hover:bg-slate-100'
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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
