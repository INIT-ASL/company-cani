// src/pages/fleet/FleetPage.jsx
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';
import { fleetCategories, fleetData, charterTypes } from '../../data/fleet';
import { Ship, Anchor, Info } from 'lucide-react';

const charterColors = {
  TC: 'bg-blue-50 text-blue-700 border-blue-200',
  FC: 'bg-green-50 text-green-700 border-green-200',
  VC: 'bg-amber-50 text-amber-700 border-amber-200',
  BC: 'bg-purple-50 text-purple-700 border-purple-200',
};

function FleetTable({ data, category }) {
  const isCrane = category === 'crane';
  const isBarge = category === 'barge';
  const isHeavy = category === 'heavy';

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F4F6F8] border-b border-slate-100">
              <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Nama Unit
              </th>
              {isCrane && (
                <>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Kapasitas</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Panjang Boom</th>
                </>
              )}
              {isBarge && (
                <>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">DWT</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">LOA</th>
                </>
              )}
              {isHeavy && (
                <>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tipe</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Kapasitas</th>
                </>
              )}
              {!isCrane && !isBarge && !isHeavy && (
                <>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tenaga (BHP)</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Bollard Pull</th>
                </>
              )}
              <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tahun</th>
              <th className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Charter</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((unit, i) => (
              <motion.tr
                key={unit.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.04 }}
                className="hover:bg-[#FEF9F9] transition-colors"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                      <Ship className="w-4 h-4 text-[#C0392B]" />
                    </div>
                    <span className="font-semibold text-[#1E2A3A] text-sm">{unit.name}</span>
                  </div>
                </td>
                {isCrane && (
                  <>
                    <td className="px-5 py-4 text-sm text-slate-600">{unit.capacity}</td>
                    <td className="px-5 py-4 text-sm text-slate-600">{unit.boom}</td>
                  </>
                )}
                {isBarge && (
                  <>
                    <td className="px-5 py-4 text-sm text-slate-600">{unit.dwt}</td>
                    <td className="px-5 py-4 text-sm text-slate-600">{unit.loa}</td>
                  </>
                )}
                {isHeavy && (
                  <>
                    <td className="px-5 py-4 text-sm text-slate-600">{unit.type}</td>
                    <td className="px-5 py-4 text-sm text-slate-600">{unit.capacity}</td>
                  </>
                )}
                {!isCrane && !isBarge && !isHeavy && (
                  <>
                    <td className="px-5 py-4 text-sm text-slate-600">{unit.hp}</td>
                    <td className="px-5 py-4 text-sm text-slate-600">{unit.bollardPull}</td>
                  </>
                )}
                <td className="px-5 py-4 text-sm text-slate-500">{unit.year}</td>
                <td className="px-5 py-4">
                  <div className="flex gap-1.5 flex-wrap">
                    {unit.charter.map((c) => (
                      <span
                        key={c}
                        className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${charterColors[c]}`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function FleetPage() {
  const { category: paramCategory } = useParams();
  const navigate = useNavigate();
  const activeId = fleetCategories.find((c) => c.id === paramCategory)?.id || fleetCategories[0].id;
  const activeCategory = fleetCategories.find((c) => c.id === activeId);
  const data = fleetData[activeId] || [];

  return (
    <>
      <PageHeader
        breadcrumb="Fleet"
        title="Armada Kami"
        description="CNI mengoperasikan armada modern yang memenuhi standar keselamatan internasional untuk mendukung industri maritim dan energi."
      />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-100 pb-4">
            {fleetCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/fleet/${cat.id}`)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeId === cat.id
                    ? 'bg-[#C0392B] text-white shadow-sm'
                    : 'text-slate-500 hover:text-[#C0392B] hover:bg-red-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Section title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
              <Anchor className="w-5 h-5 text-[#C0392B]" />
            </div>
            <div>
              <h2 className="font-bold text-[#1E2A3A] text-xl">{activeCategory?.fullLabel}</h2>
              <p className="text-slate-400 text-sm">{data.length} unit tersedia</p>
            </div>
          </div>

          {/* Table */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <FleetTable data={data} category={activeId} />
            </motion.div>
          </AnimatePresence>

          {/* Charter Types Legend */}
          <div className="mt-10 bg-[#F4F6F8] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-4 h-4 text-slate-400" />
              <h3 className="font-semibold text-[#1E2A3A] text-sm">Keterangan Tipe Charter</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {charterTypes.map((ct) => (
                <div key={ct.code} className="flex items-start gap-3">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-md border shrink-0 ${charterColors[ct.code]}`}
                  >
                    {ct.code}
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-[#1E2A3A]">{ct.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{ct.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
