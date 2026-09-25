// src/pages/about/CompanyProfile.jsx
import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';
import SectionTitle from '../../components/ui/SectionTitle';
import { CheckCircle2, Building2, Globe, TrendingUp, Award } from 'lucide-react';

const businessAreas = [
  { icon: Globe, title: 'Pelayaran Domestik', desc: 'Transportasi muatan laut antar pelabuhan di Indonesia sesuai regulasi asas cabotage.' },
  { icon: Building2, title: 'Keagenan Kapal', desc: 'Layanan keagenan untuk kapal-kapal asing dan domestik di pelabuhan-pelabuhan strategis Indonesia.' },
  { icon: TrendingUp, title: 'Transportasi Minyak & Gas', desc: 'Angkutan BBM, LPG, dan produk kilang minyak untuk kebutuhan industri dan distribusi nasional.' },
  { icon: Award, title: 'Sewa Kapal (Chartering)', desc: 'Layanan sewa kapal dalam format Time Charter, Bareboat Charter, Voyage Charter, dan Freight Charter.' },
];

const highlights = [
  'Berdiri sejak 2004 sebagai joint venture dengan mitra internasional',
  'Tercatat di Bursa Efek Indonesia (BEI) sejak tahun 2013 — kode emiten: CANI',
  'Armada lebih dari 35 unit tersebar di perairan Indonesia',
  'Memenuhi standar ISM Code, ISPS Code, dan ISO 45001:2018',
  'Layanan 24/7 dengan dukungan teknis dan operasional penuh',
  'Pengalaman lebih dari 20 tahun di industri maritim & migas',
];

export default function CompanyProfile() {
  return (
    <>
      <PageHeader
        breadcrumb="About Us"
        title="Company Profile"
        description="Mengenal lebih dalam PT Capitol Nusantara Indonesia Tbk — komitmen kami terhadap keunggulan layanan maritim."
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
                Tentang Perusahaan
              </span>
              <h2 className="text-3xl font-bold text-[#1E2A3A] mb-5 leading-tight">
                Solusi Maritim Terpercaya untuk Industri Energi Indonesia
              </h2>
              <div className="w-12 h-1 bg-[#C0392B] rounded-full mb-6" />
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  PT Capitol Nusantara Indonesia Tbk (CANI) adalah perusahaan pelayaran dan jasa pendukung 
                  industri minyak & gas yang didirikan pada tahun 2004 sebagai perusahaan patungan antara 
                  <strong className="text-[#1E2A3A]"> PT Anugerah Semesta Langgeng</strong> dari Samarinda, 
                  Kalimantan Timur, dan <strong className="text-[#1E2A3A]">ASL Marine Holdings Ltd</strong> 
                  dari Singapura — salah satu perusahaan pelayaran terkemuka di Asia Tenggara.
                </p>
                <p>
                  Berkantor pusat di Samarinda dengan kantor perwakilan di Jakarta, CNI mengoperasikan armada 
                  modern yang terdiri dari Anchor Handling Tug (AHT), Tug Boat, Floating Crane, Barge, 
                  dan Heavy Equipment — melayani kebutuhan maritim klien di seluruh perairan Indonesia.
                </p>
                <p>
                  Pada tahun 2013, CNI mencatat babak baru dengan mencatatkan sahamnya di 
                  <strong className="text-[#1E2A3A]"> Bursa Efek Indonesia (BEI)</strong> dengan kode emiten 
                  <strong className="text-[#C0392B]"> CANI</strong>, menegaskan komitmen perusahaan terhadap 
                  transparansi, tata kelola yang baik, dan pertumbuhan berkelanjutan.
                </p>
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
                <h3 className="font-bold text-[#1E2A3A] mb-4 text-sm">Keunggulan Perusahaan</h3>
                <ul className="space-y-3">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-slate-600">
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
            subtitle="Bidang Usaha"
            title="Layanan yang Kami Tawarkan"
            description="CNI menyediakan solusi maritim terintegrasi dari hulu ke hilir untuk industri energi dan pertambangan."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {businessAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <area.icon className="w-5 h-5 text-[#C0392B]" />
                </div>
                <h3 className="font-bold text-[#1E2A3A] mb-2 text-sm">{area.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-16 bg-[#1E2A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: 'Visi',
                text: 'Menjadi perusahaan pelayaran dan jasa maritime terkemuka di Asia Tenggara yang diakui atas keandalan, keselamatan, dan komitmen terhadap kepuasan klien.',
              },
              {
                label: 'Misi',
                items: [
                  'Menyediakan armada modern dan terpelihara dengan standar keselamatan internasional tertinggi.',
                  'Memberikan layanan prima yang responsif dan efisien kepada seluruh mitra bisnis.',
                  'Mengembangkan sumber daya manusia maritim yang kompeten dan berdedikasi.',
                  'Menciptakan nilai jangka panjang bagi pemegang saham dan masyarakat sekitar.',
                ],
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <div className="w-10 h-1 bg-[#C0392B] rounded-full mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{item.label}</h3>
                {item.text && <p className="text-white/65 leading-relaxed">{item.text}</p>}
                {item.items && (
                  <ul className="space-y-3">
                    {item.items.map((li) => (
                      <li key={li} className="flex items-start gap-2.5 text-white/65 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] mt-1.5 shrink-0" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
