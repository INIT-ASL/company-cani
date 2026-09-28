// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { Anchor, MapPin, Phone, Mail, MessageCircle, Share2, Camera, AtSign } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: t('footer.col1Title'),
      links: [
        { label: t('nav.companyProfile'), to: '/about/profile' },
        { label: t('nav.companyHistory'), to: '/about/history' },
        { label: t('nav.boardOfDirectors'), to: '/about/directors' },
      ],
    },
    {
      title: t('footer.col2Title'),
      links: [
        { label: t('nav.aht'), to: '/fleet/aht' },
        { label: t('nav.tugBoat'), to: '/fleet/tug' },
        { label: t('nav.floatingCrane'), to: '/fleet/crane' },
        { label: t('nav.barge'), to: '/fleet/barge' },
      ],
    },
    {
      title: t('footer.col3Title'),
      links: [
        { label: t('nav.financialStatements'), to: '/investors/financials' },
        { label: t('nav.newsAnnouncements'), to: '/media' },
        { label: t('nav.contactInfo'), to: '/contact/info' },
        { label: t('nav.contactInquiry'), to: '/contact/inquiry' },
      ],
    },
  ];

  return (
    <footer className="bg-[#1E2A3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#C0392B] rounded-lg flex items-center justify-center shrink-0">
                <Anchor className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">{t('common.companyName')}</div>
                <div className="text-xs text-white/50">{t('common.companySuffix')} — CANI</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>

            {/* Contact Quick Info */}
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C0392B] mt-0.5 shrink-0" />
                <span>Jl. Jend. Sudirman No. 123, Jakarta Pusat 10220, Indonesia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C0392B] shrink-0" />
                <span>+62 21 5790 1234</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C0392B] shrink-0" />
                <span>info@cani.co.id</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#C0392B] shrink-0" />
                <span>+62 812 0000 1234 (WhatsApp)</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#C0392B] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#C0392B] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#C0392B] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter/X"
              >
                <AtSign className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/55 hover:text-[#C0392B] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {year} {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <span>{t('footer.stockTicker')}</span>
            <span>•</span>
            <a
              href="https://www.idx.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              {t('footer.idxLink')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
