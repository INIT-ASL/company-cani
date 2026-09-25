// src/components/home/NewsSection.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { newsData } from '../../data/news';

export default function NewsSection() {
  const latest = newsData.slice(0, 3);

  return (
    <section className="py-20 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Media Center"
          title="Berita & Pengumuman Terbaru"
          description="Ikuti perkembangan terkini PT Capitol Nusantara Indonesia Tbk — mulai dari kegiatan korporat, kemitraan strategis, hingga laporan operasional."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((news, i) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="h-44 overflow-hidden bg-slate-200">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs text-[#C0392B] font-semibold bg-red-50 px-2 py-0.5 rounded-md">
                    <Tag className="w-3 h-3" />
                    {news.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                    <Calendar className="w-3 h-3" />
                    {news.date}
                  </span>
                </div>
                <h3 className="font-bold text-[#1E2A3A] text-sm leading-snug line-clamp-2 mb-3">
                  {news.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">
                  {news.excerpt}
                </p>
                <Link
                  to="/media"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C0392B] hover:gap-2.5 transition-all"
                >
                  Selengkapnya <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/media"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C0392B] hover:text-[#922B21] transition-colors"
          >
            Lihat Semua Berita <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
