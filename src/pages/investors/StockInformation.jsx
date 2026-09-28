// src/pages/investors/StockInformation.jsx
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import { useLanguage } from '../../context/LanguageContext';
import {
  TrendingUp,
  Building2,
  Calendar,
  Layers,
  ExternalLink,
  ShieldCheck,
  FileText,
  Mail,
  Phone,
  PieChart,
} from 'lucide-react';

export default function StockInformation() {
  const { language, t } = useLanguage();

  const keyMetrics = [
    {
      label: language === 'en' ? 'Stock Code (Ticker)' : 'Kode Saham (Ticker)',
      value: 'CANI',
      sub: 'Bursa Efek Indonesia (IDX)',
      icon: TrendingUp,
      highlight: true,
    },
    {
      label: language === 'en' ? 'Listing Date' : 'Tanggal Pencatatan',
      value: '16 Jan 2014',
      sub: language === 'en' ? 'Initial Public Offering' : 'Pencatatan Perdana (IPO)',
      icon: Calendar,
    },
    {
      label: language === 'en' ? 'Listed Shares' : 'Jumlah Saham Dicatatkan',
      value: '833,400,000',
      sub: language === 'en' ? 'Ordinary Shares (Common Stock)' : 'Saham Biasa atas Nama',
      icon: Layers,
    },
    {
      label: language === 'en' ? 'Nominal Value' : 'Nilai Nominal Saham',
      value: 'Rp 100,-',
      sub: language === 'en' ? 'Per Share' : 'Per Lembar Saham',
      icon: FileText,
    },
    {
      label: language === 'en' ? 'Listing Board' : 'Papan Pencatatan',
      value: language === 'en' ? 'Development Board' : 'Papan Pengembangan',
      sub: 'Indonesia Stock Exchange',
      icon: Building2,
    },
    {
      label: language === 'en' ? 'ISIN Code' : 'Kode ISIN Internasional',
      value: 'ID1000130605',
      sub: 'KSEI Securities Registry',
      icon: ShieldCheck,
    },
  ];

  const shareholders = [
    {
      name: 'PT Anugerah Semesta Langgeng',
      status: language === 'en' ? 'Controlling Shareholder' : 'Pemegang Saham Pengendali',
      shares: '458,370,000',
      percentage: '55.00%',
      color: 'bg-[#C0392B]',
    },
    {
      name: 'ASL Marine Holdings Ltd',
      status: language === 'en' ? 'Strategic Institutional Investor (Singapore)' : 'Investor Strategis Korporasi (Singapura)',
      shares: '166,680,000',
      percentage: '20.00%',
      color: 'bg-[#1E2A3A]',
    },
    {
      name: language === 'en' ? 'Public Shareholders (< 5%)' : 'Masyarakat / Publik (< 5%)',
      status: language === 'en' ? 'Public Float' : 'Kepemilikan Publik',
      shares: '208,350,000',
      percentage: '25.00%',
      color: 'bg-[#5A6A7E]',
    },
  ];

  const ipoDetails = [
    {
      label: language === 'en' ? 'Effective Date' : 'Tanggal Efektif OJK',
      value: '30 Desember 2013',
    },
    {
      label: language === 'en' ? 'Offering Period' : 'Masa Penawaran Umum',
      value: '7 – 9 Januari 2014',
    },
    {
      label: language === 'en' ? 'IPO Share Price' : 'Harga Penawaran Saham Perdana',
      value: 'Rp 200,- per lembar',
    },
    {
      label: language === 'en' ? 'New Shares Offered' : 'Jumlah Saham Penawaran',
      value: '208,350,000 lembar (25.00%)',
    },
    {
      label: language === 'en' ? 'Total Proceeds' : 'Total Dana Hasil IPO',
      value: 'Rp 41,670,000,000,-',
    },
    {
      label: language === 'en' ? 'Lead Underwriter' : 'Penjamin Pelaksana Emisi Efek',
      value: 'PT Valbury Asia Securities',
    },
  ];

  return (
    <>
      <SEO
        title={t('investors.stock.headerTitle')}
        description={t('investors.stock.headerDesc')}
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.investors'), to: '/investors/stock' },
          { label: t('nav.stockInformation') },
        ]}
        kicker={t('investors.stock.kicker')}
        title={t('investors.stock.headerTitle')}
        description={t('investors.stock.headerDesc')}
      />

      {/* Main Section */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Metrics Grid */}
          <div className="mb-14">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-slate-500 mb-4">
              <TrendingUp className="w-4 h-4 text-[#C0392B]" />
              <span>{t('investors.stock.profileTitle')}</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {keyMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className={`border rounded-[3px] p-5 flex flex-col justify-between transition-colors shadow-xs ${
                      metric.highlight
                        ? 'bg-[#121A24] border-[#1E2A3A] text-white'
                        : 'bg-[#F4F6F8] border-slate-200 text-[#1E2A3A] hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Icon
                          className={`w-4 h-4 ${
                            metric.highlight ? 'text-[#C0392B]' : 'text-slate-400'
                          }`}
                        />
                        {metric.highlight && (
                          <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 bg-[#C0392B] text-white font-bold rounded-[2px]">
                            IDX
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${
                          metric.highlight ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        {metric.label}
                      </span>
                      <div
                        className={`font-display font-bold text-lg sm:text-xl tracking-tight ${
                          metric.highlight ? 'text-white' : 'text-[#1E2A3A]'
                        }`}
                      >
                        {metric.value}
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-mono mt-3 pt-2 border-t block truncate ${
                        metric.highlight
                          ? 'border-white/10 text-slate-400'
                          : 'border-slate-200 text-slate-400'
                      }`}
                    >
                      {metric.sub}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2-Column: Shareholding Structure & IPO Milestone */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
            {/* Shareholder Breakdown (7 cols) */}
            <div className="lg:col-span-7 bg-[#F4F6F8] border border-slate-200 rounded-[3px] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-[#C0392B]" />
                    <h3 className="font-display font-bold text-lg text-[#1E2A3A]">
                      {t('investors.stock.shareholdersTitle')}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-slate-400 uppercase">
                    {language === 'en' ? 'As of Latest Filings' : 'Posisi Per Keterbukaan Terakhir'}
                  </span>
                </div>

                {/* Segmented Percentage Bar */}
                <div className="h-4 w-full bg-slate-200 rounded-[2px] overflow-hidden flex mb-6">
                  <div className="bg-[#C0392B] h-full" style={{ width: '55%' }} title="PT Anugerah Semesta Langgeng (55%)" />
                  <div className="bg-[#1E2A3A] h-full" style={{ width: '20%' }} title="ASL Marine Holdings Ltd (20%)" />
                  <div className="bg-[#5A6A7E] h-full" style={{ width: '25%' }} title="Public / Masyarakat (25%)" />
                </div>

                {/* Detailed Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-sans">
                    <thead>
                      <tr className="border-b border-slate-300 text-[11px] font-mono uppercase tracking-wider text-slate-500">
                        <th className="pb-3 font-semibold">{language === 'en' ? 'Shareholder Name' : 'Nama Pemegang Saham'}</th>
                        <th className="pb-3 font-semibold text-right">{language === 'en' ? 'Total Shares' : 'Jumlah Saham'}</th>
                        <th className="pb-3 font-semibold text-right">{language === 'en' ? 'Ownership (%)' : 'Persentase (%)'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {shareholders.map((sh) => (
                        <tr key={sh.name} className="hover:bg-white/60 transition-colors">
                          <td className="py-3 pr-4">
                            <div className="flex items-center gap-2.5">
                              <span className={`w-2.5 h-2.5 rounded-[2px] shrink-0 ${sh.color}`} />
                              <div>
                                <span className="font-bold text-slate-800 block">{sh.name}</span>
                                <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">{sh.status}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-2 text-right font-mono font-semibold text-slate-700">
                            {sh.shares}
                          </td>
                          <td className="py-3 pl-2 text-right font-mono font-bold text-[#1E2A3A]">
                            {sh.percentage}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-slate-300 font-bold text-slate-800">
                        <td className="pt-3">{language === 'en' ? 'Total Issued Capital' : 'Total Modal Ditempatkan & Disetor'}</td>
                        <td className="pt-3 text-right font-mono">833,400,000</td>
                        <td className="pt-3 text-right font-mono text-[#C0392B]">100.00%</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{language === 'en' ? 'Authorized Capital:' : 'Modal Dasar:'} 3,000,000,000 {language === 'en' ? 'shares' : 'lembar'} (Rp 300,000,000,000)</span>
                <span>{language === 'en' ? 'Par Value:' : 'Nilai Nominal:'} Rp 100,- / {language === 'en' ? 'share' : 'saham'}</span>
              </div>
            </div>

            {/* IPO Factsheet Card (5 cols) */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-[3px] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-4 bg-[#C0392B]" />
                  <h3 className="font-display font-bold text-lg text-[#1E2A3A]">
                    {language === 'en' ? 'IPO Milestone Summary' : 'Riwayat Penawaran Umum (IPO)'}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {language === 'en'
                    ? 'PT Capitol Nusantara Indonesia Tbk conducted its Initial Public Offering on the Indonesia Stock Exchange in January 2014, raising gross proceeds to expand high-BHP fleet capacity and support offshore operations.'
                    : 'PT Capitol Nusantara Indonesia Tbk melaksanakan Penawaran Umum Perdana Saham (IPO) di Bursa Efek Indonesia pada Januari 2014 untuk memperkuat kapasitas armada laut dan mendukung operasional lepas pantai.'}
                </p>

                <div className="space-y-3 font-mono text-xs">
                  {ipoDetails.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0"
                    >
                      <span className="text-slate-500">{item.label}</span>
                      <span className="font-semibold text-slate-800 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="https://www.idx.co.id/id/perusahaan-tercatat/profil-perusahaan-tercatat/CANI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#121A24] text-white py-2.5 px-4 rounded-[3px] text-xs font-semibold hover:bg-[#C0392B] transition-colors"
                >
                  <span>{t('investors.stock.viewOnIdx')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Share Registrar & Corporate Secretary Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Share Registrar (BAE) */}
            <div className="bg-[#F4F6F8] border border-slate-200 rounded-[3px] p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-[#C0392B]" />
                <h4 className="font-display font-bold text-sm text-[#1E2A3A]">
                  {t('investors.stock.registrarTitle')}
                </h4>
              </div>
              <div className="text-xs text-slate-700 space-y-1.5 font-sans leading-relaxed">
                <div className="font-bold text-slate-900">PT Raya Saham Registra</div>
                <div>Gedung Plaza Sentral Lt. 2, Jl. Jend. Sudirman Kav. 47–48, Jakarta 12930</div>
                <div className="font-mono text-slate-600">P. +62 (21) 252 5665 | F. +62 (21) 252 5028</div>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                  {language === 'en'
                    ? 'Handles share registration, shareholder registry maintenance, and transfer services.'
                    : 'Melayani administrasi saham, pencatatan daftar pemegang saham, dan layanan efek emiten.'}
                </div>
              </div>
            </div>

            {/* Investor Relations Contact Desk */}
            <div className="bg-[#F4F6F8] border border-slate-200 rounded-[3px] p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-[#C0392B]" />
                <h4 className="font-display font-bold text-sm text-[#1E2A3A]">
                  {language === 'en' ? 'Investor Relations & Corporate Secretary' : 'Sekretariat Perusahaan & Hubungan Investor'}
                </h4>
              </div>
              <div className="text-xs text-slate-700 space-y-1.5 font-sans leading-relaxed">
                <div className="font-bold text-slate-900">PT Capitol Nusantara Indonesia Tbk</div>
                <div>Perkantoran Permata Eksekutif Blok R.1/3-2/3, Jl. Raya Pos Pengumben Kebun Jeruk, West Jakarta 11550</div>
                <div className="flex items-center gap-2 font-mono text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-[#C0392B]" />
                  <span>+62 (21) 5307340</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[#C0392B]">
                  <Mail className="w-3.5 h-3.5 text-[#C0392B]" />
                  <a href="mailto:Enquiry@ptcni.co.id" className="hover:underline">
                    Enquiry@ptcni.co.id
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Statutory Regulatory Disclaimer */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-[3px] text-xs text-slate-500 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#C0392B] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {t('investors.disclaimerTitle')}: {t('investors.disclaimerText')}{' '}
              <a
                href="https://www.idx.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0392B] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>www.idx.co.id</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
