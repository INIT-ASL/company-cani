// src/components/home/RecentProjects.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import { Ship, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function RecentProjects() {
  const { language, t } = useLanguage();

  const projects = [
    {
      name: 'CNI Commander',
      type: { en: 'Anchor Handling Tug', id: 'Anchor Handling Tug' },
      specs: '6,000 BHP • Bollard Pull 80 Ton',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
      category: 'AHT',
      to: '/fleet/aht',
    },
    {
      name: 'CNI Crane II',
      type: { en: 'Floating Crane', id: 'Floating Crane' },
      specs: language === 'en' ? '500 Ton Capacity • 60m Boom' : 'Kapasitas 500 Ton • Boom 60m',
      image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80',
      category: 'Crane',
      to: '/fleet/crane',
    },
    {
      name: 'CNI Barge 8000',
      type: { en: 'Flat Top Barge', id: 'Tongkang / Barge' },
      specs: '8,000 DWT • 120m LOA',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80',
      category: 'Barge',
      to: '/fleet/barge',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle={t('recentProjects.subtitle')}
          title={t('recentProjects.title')}
          description={t('recentProjects.description')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#C0392B] text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Ship className="w-4 h-4 text-[#C0392B]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E2A3A] text-base leading-tight">{p.name}</h3>
                    <p className="text-slate-500 text-sm mt-0.5">
                      {typeof p.type === 'object' ? p.type[language] : p.type}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mb-4 font-medium">{p.specs}</p>
                <Link
                  to={p.to}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C0392B] hover:gap-2.5 transition-all"
                >
                  {t('common.viewDetails')} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/fleet/aht"
            className="inline-flex items-center gap-2 border-2 border-[#C0392B] text-[#C0392B] px-7 py-3 rounded-lg font-semibold text-sm hover:bg-[#C0392B] hover:text-white transition-colors"
          >
            {t('recentProjects.viewAllFleet')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
