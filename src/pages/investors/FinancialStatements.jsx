// src/pages/investors/FinancialStatements.jsx
import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';
import { financialStatements, annualReports } from '../../data/financials';
import { FileText, Download, ExternalLink, TrendingUp, Calendar } from 'lucide-react';

function DocumentRow({ doc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:border-[#C0392B]/20 hover:shadow-sm transition-all group"
    >
      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
        <FileText className="w-5 h-5 text-[#C0392B]" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-[#1E2A3A] text-sm truncate">{doc.type || doc.title}</div>
        <div className="flex items-center gap-3 mt-0.5">
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {doc.period || doc.year}
          </span>
          <span className="text-xs text-slate-300">•</span>
          <span className="text-xs text-slate-400">{doc.date}</span>
          <span className="text-xs text-slate-300">•</span>
          <span className="text-xs text-slate-400">{doc.size}</span>
        </div>
      </div>
      <a
        href={doc.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-semibold text-[#C0392B] bg-red-50 hover:bg-[#C0392B] hover:text-white px-3 py-2 rounded-lg transition-all shrink-0"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Unduh</span>
      </a>
    </motion.div>
  );
}

export default function FinancialStatements() {
  return (
    <>
      <PageHeader
        breadcrumb="Investors"
        title="Laporan Keuangan"
        description="Laporan keuangan dan tahunan PT Capitol Nusantara Indonesia Tbk tersedia untuk diunduh sesuai ketentuan Bursa Efek Indonesia."
      />

      <section className="py-12 bg-[#F4F6F8] min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* IDX Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1E2A3A] rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="w-10 h-10 bg-[#C0392B] rounded-lg flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-white text-sm">Emiten Bursa Efek Indonesia</div>
              <div className="text-white/55 text-xs mt-0.5">
                Kode Saham: <strong className="text-[#E74C3C]">CANI</strong> — Seluruh laporan keuangan juga tersedia di situs resmi IDX.
              </div>
            </div>
            <a
              href="https://www.idx.co.id/id/perusahaan-tercatat/laporan-keuangan-dan-tahunan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#C0392B] px-4 py-2 rounded-lg hover:bg-[#922B21] transition-colors shrink-0"
            >
              Kunjungi IDX <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Annual Reports */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-[#1E2A3A] mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#C0392B] rounded-full" />
              Laporan Tahunan (Annual Report)
            </h2>
            <div className="space-y-3">
              {annualReports.map((doc, i) => (
                <DocumentRow key={doc.id} doc={doc} index={i} />
              ))}
            </div>
          </div>

          {/* Financial Statements */}
          <div>
            <h2 className="text-lg font-bold text-[#1E2A3A] mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#C0392B] rounded-full" />
              Laporan Keuangan Periodik
            </h2>
            <div className="space-y-3">
              {financialStatements.map((doc, i) => (
                <DocumentRow key={doc.id} doc={doc} index={i} />
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700 leading-relaxed">
            <strong>Catatan:</strong> Dokumen di atas tersedia untuk tujuan informasi publik sesuai kewajiban keterbukaan informasi emiten. 
            Untuk laporan terbaru dan informasi resmi lainnya, kunjungi{' '}
            <a
              href="https://www.idx.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              www.idx.co.id
            </a>.
          </div>
        </div>
      </section>
    </>
  );
}
