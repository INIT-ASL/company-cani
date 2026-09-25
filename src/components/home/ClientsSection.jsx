// src/components/home/ClientsSection.jsx
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const clients = [
  { name: 'PT Pertamina', abbr: 'PRT', color: '#C0392B', sub: 'Energi Nasional' },
  { name: 'PT Adaro Energy', abbr: 'ADR', color: '#1E2A3A', sub: 'Pertambangan' },
  { name: 'Chevron Pacific Indonesia', abbr: 'CVX', color: '#2980B9', sub: 'Oil & Gas' },
  { name: 'PT Kideco Jaya Agung', abbr: 'KJA', color: '#16A085', sub: 'Pertambangan' },
  { name: 'PT PLN (Persero)', abbr: 'PLN', color: '#F39C12', sub: 'Energi Listrik' },
  { name: 'Total E&P Indonesie', abbr: 'TOT', color: '#8E44AD', sub: 'Oil & Gas' },
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Klien Kami"
          title="Dipercaya oleh Perusahaan Terkemuka"
          description="CNI telah menjalin kemitraan jangka panjang dengan perusahaan-perusahaan energi dan pertambangan terbesar di Indonesia."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 group"
            >
              {/* Placeholder Logo */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform"
                style={{ backgroundColor: client.color + '15' }}
              >
                <span
                  className="text-lg font-bold"
                  style={{ color: client.color }}
                >
                  {client.abbr}
                </span>
              </div>
              <span className="text-xs font-semibold text-[#1E2A3A] text-center leading-tight">
                {client.name}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">{client.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
