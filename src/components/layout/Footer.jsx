// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import logoCani from '../../assets/images/logo-cani.png';

export default function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  function WhatsAppIcon({ className }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    );
  }

  return (
    <footer className="bg-[#121A24] text-white border-t border-slate-800">
      {/* Top Credentials Bar */}
      <div className="border-b border-slate-800/80 bg-[#16202C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#C0392B] text-white font-mono font-bold text-[11px] rounded-[2px]">
                IDX: CANI
              </span>
              <span className="text-slate-300 font-medium">
                {language === 'en'
                  ? 'Publicly Listed on the Indonesia Stock Exchange since 2013'
                  : 'Emiten Terbuka di Bursa Efek Indonesia sejak 2013'}
              </span>
            </div>

            <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C0392B]" />
                ISM CODE CERTIFIED
              </span>
              <span>•</span>
              <span>ISPS COMPLIANT</span>
              <span>•</span>
              <span>ISO 45001:2018</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Corporate Profile (4 cols) */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="inline-block mb-4 group"
              aria-label="PT Capitol Nusantara Indonesia Tbk"
            >
              <div className="p-2 rounded-[3px] inline-flex items-center shadow-xs">
                <img
                  src={logoCani}
                  alt="PT Capitol Nusantara Indonesia Tbk"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              {t('footer.description')}
            </p>

            <div className="p-3 bg-white/5 rounded-[3px] border border-white/10 text-xs text-slate-300 space-y-1 font-mono">
              <div className="text-slate-400 uppercase text-[10px]">Head Office / Kantor Pusat:</div>
              <div className="text-white font-sans text-xs">Kebun Jeruk, West Jakarta, Indonesia</div>
              <div className="text-slate-400 uppercase text-[10px] pt-1.5 border-t border-white/10">Branch Office / Kantor Cabang:</div>
              <div className="text-white font-sans text-xs">Samarinda, Kalimantan Timur, Indonesia</div>
            </div>
          </div>

          {/* Col 2: Fleet & Operations (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-3 bg-[#C0392B]" />
              {t('footer.col2Title')}
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/fleet/aht" className="hover:text-white transition-colors">
                  Anchor Handling Tug (AHT)
                </Link>
              </li>
              <li>
                <Link to="/fleet/tug" className="hover:text-white transition-colors">
                  Tug Boat
                </Link>
              </li>
              <li>
                <Link to="/fleet/crane" className="hover:text-white transition-colors">
                  Floating Crane
                </Link>
              </li>
              <li>
                <Link to="/fleet/barge" className="hover:text-white transition-colors">
                  Flat Top & Oil Barge
                </Link>
              </li>
              <li>
                <Link to="/fleet/heavy" className="hover:text-white transition-colors">
                  Heavy Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Governance & Investors (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-3 bg-[#C0392B]" />
              {t('footer.col3Title')}
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/about/history" className="hover:text-white transition-colors">
                  {t('nav.companyHistory')}
                </Link>
              </li>
              <li>
                <Link to="/about/commissioners" className="hover:text-white transition-colors">
                  {t('nav.boardOfCommissioners')}
                </Link>
              </li>
              <li>
                <Link to="/about/directors" className="hover:text-white transition-colors">
                  {t('nav.boardOfDirectors')}
                </Link>
              </li>
              <li>
                <Link to="/investors/stock" className="hover:text-white transition-colors">
                  {t('nav.stockInformation')}
                </Link>
              </li>
              <li>
                <Link to="/investors/financials" className="hover:text-white transition-colors">
                  {t('nav.financialStatements')}
                </Link>
              </li>
              <li>
                <Link to="/media/press-release" className="hover:text-white transition-colors">
                  {t('nav.pressRelease')}
                </Link>
              </li>
              <li>
                <Link to="/media/news" className="hover:text-white transition-colors">
                  {t('nav.news')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-3 bg-[#C0392B]" />
              {language === 'en' ? 'Direct Inquiries' : 'Kontak Resmi'}
            </h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Perkantoran Permata Eksekutif Blok R.1/3-2/3, Jl. Raya Pos Pengumben Kebun Jeruk, Jakarta Barat 11550
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C0392B] shrink-0" />
                <span>+62 (21) 5307340</span>
              </div>
              <div className="flex items-start gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href="https://wa.me/628119695939"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    +62-811 9695 5939 <span className="text-slate-500">(Chartering)</span>
                  </a>
                  <a
                    href="https://wa.me/6282125926877"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    +62-821 2592 6877 <span className="text-slate-500">(Others)</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C0392B] shrink-0" />
                <a href="mailto:Enquiry@ptcni.co.id" className="hover:text-white transition-colors">
                  Enquiry@ptcni.co.id
                </a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact/inquiry"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C0392B] hover:text-white transition-colors"
                >
                  <span>{t('nav.contactInquiry')}</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-slate-800 bg-[#0E151E] py-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} {t('footer.copyright')}</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="https://www.idx.co.id/id/perusahaan-tercatat/profil-perusahaan-tercatat/CANI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              <span>{t('footer.idxLink')}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <Link to="/about/history" className="hover:text-slate-300 transition-colors">
              Cabotage Law & Governance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
