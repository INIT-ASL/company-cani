// src/components/home/ServicesSection.jsx
import { motion } from 'framer-motion';
import { Ship, Anchor, Waves, Package, Wrench } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const icons = [Anchor, Ship, Waves, Package, Wrench];

export default function ServicesSection() {
  const { t } = useLanguage();
  const serviceItems = t('services.items') || [];

  return (
    <section className="py-20 bg-[#1E2A3A] relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C0392B]/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C0392B] mb-3">
            {t('services.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {serviceItems.map((svc, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-[#C0392B]/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C0392B]/25 transition-colors">
                  <Icon className="w-5 h-5 text-[#E74C3C]" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{svc.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed">{svc.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
