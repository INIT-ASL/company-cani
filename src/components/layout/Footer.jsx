// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { Anchor, MapPin, Phone, Mail, MessageCircle, Share2, Camera, AtSign } from 'lucide-react';

const footerLinks = [
  {
    title: 'Perusahaan',
    links: [
      { label: 'Company Profile', to: '/about/profile' },
      { label: 'Company History', to: '/about/history' },
      { label: 'Board of Directors', to: '/about/directors' },
    ],
  },
  {
    title: 'Layanan',
    links: [
      { label: 'Anchor Handling Tug', to: '/fleet/aht' },
      { label: 'Tug Boat', to: '/fleet/tug' },
      { label: 'Floating Crane', to: '/fleet/crane' },
      { label: 'Barge', to: '/fleet/barge' },
    ],
  },
  {
    title: 'Investor & Media',
    links: [
      { label: 'Laporan Keuangan', to: '/investors/financials' },
      { label: 'Berita & Pengumuman', to: '/media' },
      { label: 'Hubungi Kami', to: '/contact/info' },
      { label: 'Inquiry', to: '/contact/inquiry' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1E2A3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#C0392B] rounded-lg flex items-center justify-center">
                <Anchor className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">PT Capitol Nusantara</div>
                <div className="text-xs text-white/50">Indonesia Tbk — CANI</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Perusahaan pelayaran dan jasa pendukung minyak & gas terkemuka di Indonesia. 
              Berdiri sejak 2004, terdaftar di Bursa Efek Indonesia sejak 2013.
            </p>

            {/* Contact Quick Info */}
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C0392B] mt-0.5 shrink-0" />
                <span>Jl. Jend. Sudirman No. 123, Jakarta Pusat 10220</span>
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
            &copy; {year} PT Capitol Nusantara Indonesia Tbk. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <span>Kode Emiten: CANI</span>
            <span>•</span>
            <a
              href="https://www.idx.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              Bursa Efek Indonesia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
