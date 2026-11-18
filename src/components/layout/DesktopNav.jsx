// src/components/layout/DesktopNav.jsx
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function DesktopNav({
  navLinks,
  openDropdown,
  setOpenDropdown,
  isTransparent,
}) {
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);

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
                className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold tracking-wide uppercase transition-colors rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] ${
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
                  aria-hidden="true"
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
                        onClick={() => setOpenDropdown(null)}
                        className={`block px-4 py-2.5 text-xs font-medium transition-colors border-l-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C0392B] ${
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
            className={`px-3 py-2 text-xs font-semibold tracking-wide uppercase transition-colors rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] ${
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
    </nav>
  );
}
