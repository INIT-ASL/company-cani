// src/pages/about/CompanyProfile.jsx
import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';
import SectionTitle from '../../components/ui/SectionTitle';
import { CheckCircle2, Building2, Globe, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const areaIcons = [Globe, Building2, TrendingUp, Award];

export default function CompanyProfile() {
  const { t } = useLanguage();

  const strengths = t('about.profile.strengths') || [];
  const areas = t('about.profile.areas') || [];
  const missionItems = t('about.profile.missionItems') || [];

  return (
    <>
      <PageHeader
        breadcrumb={t('about.profile.breadcrumb')}
        title={t('about.profile.headerTitle')}
        description={t('about.profile.headerDesc')}
      />

      {/* Main Profile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C0392B] mb-3 block">
                {t('about.profile.sectionSubtitle')}
              </span>
              <h2 className="text-3xl font-bold text-[#1E2A3A] mb-5 leading-tight">
                {t('about.profile.mainHeading')}
              </h2>
              <div className="w-12 h-1 bg-[#C0392B] rounded-full mb-6" />
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>{t('about.profile.p1')}</p>
                <p>{t('about.profile.p2')}</p>
                <p>{t('about.profile.p3')}</p>
              </div>
            </motion.div>

            {/* Image & Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=80"
                  alt="CNI Fleet Operations"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="bg-[#F4F6F8] rounded-2xl p-6">
                <h3 className="font-bold text-[#1E2A3A] mb-4 text-sm">
                  {t('about.profile.strengthsTitle')}
                </h3>
                <ul className="space-y-3">
                  {strengths.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#C0392B] mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle={t('about.profile.businessAreasTitle')}
            title={t('about.profile.businessAreasSubtitle')}
            description={t('about.profile.businessAreasDesc')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {areas.map((area, i) => {
              const Icon = areaIcons[i % areaIcons.length];
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#C0392B]" />
                  </div>
                  <h3 className="font-bold text-[#1E2A3A] mb-2 text-sm">{area.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{area.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-16 bg-[#1E2A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="w-10 h-1 bg-[#C0392B] rounded-full mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">
                {t('about.profile.visionTitle')}
              </h3>
              <p className="text-white/65 leading-relaxed">
                {t('about.profile.visionText')}
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="w-10 h-1 bg-[#C0392B] rounded-full mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">
                {t('about.profile.missionTitle')}
              </h3>
              <ul className="space-y-3">
                {missionItems.map((li, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-white/65 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] mt-1.5 shrink-0" />
                    {li}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
