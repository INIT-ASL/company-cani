// src/components/layout/MobileDrawer.jsx
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Mail, Phone } from 'lucide-react';
import { COMPANY } from '../../data/company';
import LanguageSwitcher from './LanguageSwitcher';
import logoCani from '../../assets/images/logo-cani.png';

export default function MobileDrawer({
  isOpen,
  onClose,
  navLinks,
  mobileExpanded,
  setMobileExpanded,
  drawerTop,
}) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`fixed inset-x-0 bottom-0 ${drawerTop} bg-black/50 z-40 lg:hidden`}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`fixed right-0 bottom-0 ${drawerTop} w-80 max-w-[85vw] bg-white text-[#1E2A3A] z-50 border-l border-slate-200 overflow-y-auto p-5 shadow-2xl lg:hidden flex flex-col justify-between`}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div className="space-y-1">
              {/* Header inside drawer */}
              <div className="pb-3 mb-3 border-b border-slate-100 flex items-center justify-between">
                <img
                  src={logoCani}
                  alt={COMPANY.name}
                  width={112}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#C0392B] bg-slate-100 px-2 py-0.5 rounded-[2px]">
                  {COMPANY.fullTicker}
                </span>
              </div>

              {/* Language Switcher inside drawer */}
              <div className="mb-4">
                <LanguageSwitcher isMobile />
              </div>

              {/* Nav links */}
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="border-b border-slate-50 pb-1">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                      }
                      className="w-full flex items-center justify-between py-2.5 px-2 text-sm font-semibold tracking-wide uppercase text-[#1E2A3A] hover:text-[#C0392B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C0392B]"
                      aria-expanded={mobileExpanded === link.label}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-150 text-slate-400 ${
                          mobileExpanded === link.label ? 'rotate-180 text-[#C0392B]' : ''
                        }`}
                        aria-hidden="true"
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
                              onClick={onClose}
                              className={`block py-2 px-2 text-sm font-medium rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C0392B] ${
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
                    onClick={onClose}
                    className={`block py-2.5 px-2 text-sm font-semibold tracking-wide uppercase border-b border-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C0392B] ${
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

            {/* Corporate contact footer inside drawer */}
            <div className="pt-5 mt-6 border-t border-slate-200 text-xs text-slate-500 space-y-2 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C0392B] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-tight">{COMPANY.headOffice.shortAddress}</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-3.5 h-3.5 text-[#C0392B] shrink-0" aria-hidden="true" />
                <a href={`tel:${COMPANY.headOffice.phoneTel}`} className="hover:text-[#C0392B]">
                  {COMPANY.headOffice.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Mail className="w-3.5 h-3.5 text-[#C0392B] shrink-0" aria-hidden="true" />
                <a href={`mailto:${COMPANY.emails.primary}`} className="text-[#C0392B] hover:underline">
                  {COMPANY.emails.primary}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
