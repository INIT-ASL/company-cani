// src/components/home/ClientsSection.jsx
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '../../context/LanguageContext';

export default function ClientsSection() {
  const { language, t } = useLanguage();

  const clients = [
    {
      name: 'PT Pertamina',
      abbr: 'PRT',
      color: '#C0392B',
      sub: { en: 'National Energy', id: 'Energi Nasional' },
    },
    {
      name: 'PT Adaro Energy',
      abbr: 'ADR',
      color: '#1E2A3A',
      sub: { en: 'Mining & Power', id: 'Pertambangan' },
    },
    {
      name: 'Chevron Pacific Indonesia',
      abbr: 'CVX',
      color: '#2980B9',
      sub: { en: 'Oil & Gas Exploration', id: 'Oil & Gas' },
    },
    {
      name: 'PT Kideco Jaya Agung',
      abbr: 'KJA',
      color: '#16A085',
      sub: { en: 'Mineral Mining', id: 'Pertambangan' },
    },
    {
      name: 'PT PLN (Persero)',
      abbr: 'PLN',
      color: '#F39C12',
      sub: { en: 'State Electricity', id: 'Energi Listrik' },
    },
    {
      name: 'Total E&P Indonesie',
      abbr: 'TOT',
      color: '#8E44AD',
      sub: { en: 'Offshore Energy', id: 'Oil & Gas' },
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle={t('clientsSection.subtitle')}
          title={t('clientsSection.title')}
          description={t('clientsSection.description')}
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
              <span className="text-xs text-slate-400 mt-0.5">
                {typeof client.sub === 'object' ? client.sub[language] : client.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
