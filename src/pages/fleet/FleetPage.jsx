// src/pages/fleet/FleetPage.jsx
import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import ComingSoon from '../../components/common/ComingSoon';
import { fleetCategories, fleetData, charterTypes } from '../../data/fleet';
import {
  Info,
  ShieldCheck,
  X,
  ArrowRight,
  Maximize2,
  Table,
  LayoutGrid,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const charterBadgeStyles = {
  TC: 'bg-blue-50 text-blue-700 border-blue-200',
  FC: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  VC: 'bg-amber-50 text-amber-700 border-amber-200',
  BC: 'bg-purple-50 text-purple-700 border-purple-200',
};

// Unit Technical Detail Modal
function UnitDetailModal({ unit, category, isOpen, onClose, language }) {
  if (!isOpen || !unit) return null;

  const typeText =
    typeof unit.type === 'object' && unit.type !== null
      ? unit.type[language] || unit.type.en
      : unit.type || category?.toUpperCase();

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
    >
      <div className="bg-white rounded-[3px] border border-slate-200 shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#121A24] text-white p-5 flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] px-2 py-0.5 bg-[#C0392B] text-white font-bold uppercase rounded-[2px]">
                {unit.classification || 'BKI CLASS'}
              </span>
              <span className="text-slate-400 text-xs font-mono">
                {unit.flag} • Reg: {unit.registry || 'Samarinda'}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight text-white">
              {unit.name}
            </h3>
            <p className="text-xs text-slate-300 font-sans mt-0.5">{typeText}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white transition-colors rounded-[2px]"
            aria-label="Close specification dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Technical Data Grid */}
        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C0392B]" />
              <span>{language === 'en' ? 'Principal Particulars' : 'Spesifikasi Utama Kapal'}</span>
            </h4>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-slate-100">
                <span className="text-slate-400 block font-mono text-[10px] uppercase">
                  {language === 'en' ? 'Main Engine / Power' : 'Kekuatan Mesin / Daya'}
                </span>
                <span className="font-bold text-[#1E2A3A] text-sm font-mono mt-0.5 block">
                  {unit.hp || unit.capacity || unit.dwt || '-'}
                </span>
              </div>

              <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-slate-100">
                <span className="text-slate-400 block font-mono text-[10px] uppercase">
                  {language === 'en' ? 'Bollard Pull / Boom' : 'Bollard Pull / Panjang Boom'}
                </span>
                <span className="font-bold text-[#1E2A3A] text-sm font-mono mt-0.5 block">
                  {unit.bollardPull || unit.boom || unit.deckLoad || '-'}
                </span>
              </div>

              <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-slate-100">
                <span className="text-slate-400 block font-mono text-[10px] uppercase">
                  {language === 'en' ? 'Length Overall (LOA)' : 'Panjang Kapal (LOA)'}
                </span>
                <span className="font-semibold text-[#1E2A3A] text-xs font-mono mt-0.5 block">
                  {unit.loa || '-'}
                </span>
              </div>

              <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-slate-100">
                <span className="text-slate-400 block font-mono text-[10px] uppercase">
                  {language === 'en' ? 'Breadth x Depth' : 'Lebar & Sarat (B x D)'}
                </span>
                <span className="font-semibold text-[#1E2A3A] text-xs font-mono mt-0.5 block">
                  {unit.breadth && unit.depth ? `${unit.breadth} x ${unit.depth}` : '-'}
                </span>
              </div>

              <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-slate-100">
                <span className="text-slate-400 block font-mono text-[10px] uppercase">
                  {language === 'en' ? 'Year Built' : 'Tahun Pembuatan'}
                </span>
                <span className="font-semibold text-[#1E2A3A] text-xs font-mono mt-0.5 block">
                  {unit.year}
                </span>
              </div>

              <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-slate-100">
                <span className="text-slate-400 block font-mono text-[10px] uppercase">
                  {language === 'en' ? 'Deck Area / Speed' : 'Luas Dek / Kecepatan'}
                </span>
                <span className="font-semibold text-[#1E2A3A] text-xs font-mono mt-0.5 block">
                  {unit.deckArea || unit.speed || unit.cargoType || '-'}
                </span>
              </div>
            </div>
          </div>

          {/* Charter Terms */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400 mb-2">
              {language === 'en' ? 'Eligible Charter Terms' : 'Opsi Skema Penyewaan'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {unit.charter?.map((c) => (
                <span
                  key={c}
                  className={`text-xs font-mono font-bold px-2.5 py-1 rounded-[2px] border ${charterBadgeStyles[c] || 'bg-slate-100 text-slate-700'}`}
                >
                  {c} — {charterTypes.find((t) => t.code === c)?.label}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-500 font-mono">
              Ref: {unit.name} • CNI Commercial Desk
            </span>
            <Link
              to="/contact/info"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#96281B] text-white px-5 py-2.5 rounded-[3px] text-xs font-semibold tracking-wide uppercase transition-colors"
            >
              <span>{language === 'en' ? 'Contact Commercial Desk' : 'Hubungi Tim Komersial'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FleetPage() {
  const { language, t } = useLanguage();
  const { category: paramCategory } = useParams();
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState('table'); // 'table' | 'grid'
  const [selectedUnit, setSelectedUnit] = useState(null);

  const activeId =
    fleetCategories.find((c) => c.id === paramCategory)?.id || fleetCategories[0].id;
  const activeCategory = fleetCategories.find((c) => c.id === activeId);
  const data = fleetData[activeId] || [];

  const fullCategoryTitle =
    typeof activeCategory?.fullLabel === 'object'
      ? activeCategory.fullLabel[language] || activeCategory.fullLabel.en
      : activeCategory?.fullLabel;

  const categoryDesc =
    typeof activeCategory?.description === 'object'
      ? activeCategory.description[language] || activeCategory.description.en
      : '';

  const isCrane = activeId === 'crane';
  const isBarge = activeId === 'barge';
  const isHeavy = activeId === 'heavy';

  return (
    <>
      <SEO
        title={`${fullCategoryTitle} — ${t('nav.fleet')}${isHeavy ? ' (Coming Soon)' : ''}`}
        description={
          isHeavy
            ? language === 'en'
              ? 'Heavy equipment specifications are currently under development.'
              : 'Informasi spesifikasi alat berat sedang dalam tahap pengembangan.'
            : categoryDesc
        }
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.fleet'), to: '/fleet/aht' },
          { label: fullCategoryTitle },
        ]}
        kicker={
          isHeavy
            ? 'COMING SOON'
            : language === 'en'
            ? 'VESSEL SPECIFICATIONS'
            : 'SPESIFIKASI TEKNIS ARMADA'
        }
        title={fullCategoryTitle}
        description={
          isHeavy
            ? language === 'en'
              ? 'This page is currently under development. For equipment inquiries, please contact our office directly.'
              : 'Halaman ini sedang dalam tahap pengembangan. Untuk kebutuhan alat berat, silakan hubungi tim kami secara langsung.'
            : categoryDesc
        }
      />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs & View Switcher */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
            <div className="flex flex-wrap gap-1.5" role="tablist">
              {fleetCategories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeId === cat.id}
                  onClick={() => navigate(`/fleet/${cat.id}`)}
                  className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all flex items-center gap-1.5 ${
                    activeId === cat.id
                      ? 'bg-[#1E2A3A] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#C0392B] hover:bg-slate-100'
                  }`}
                >
                  <span>{cat.label}</span>
                  {cat.id === 'heavy' && (
                    <span className="text-[9px] font-mono font-bold px-1 py-0.2 rounded-[2px] bg-[#C0392B]/15 text-[#C0392B]">
                      SOON
                    </span>
                  )}
                </button>
              ))}
            </div>

            {!isHeavy && (
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500">
                  {data.length} {t('fleet.unitsAvailable')}
                </span>
                <div className="inline-flex items-center border border-slate-200 rounded-[2px] p-0.5 bg-slate-50">
                  <button
                    type="button"
                    onClick={() => setViewMode('table')}
                    className={`p-1.5 rounded-[2px] transition-colors ${
                      viewMode === 'table' ? 'bg-white shadow-xs text-[#1E2A3A]' : 'text-slate-400 hover:text-slate-600'
                    }`}
                    aria-label="Table view"
                    title="Table view"
                  >
                    <Table className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-[2px] transition-colors ${
                      viewMode === 'grid' ? 'bg-white shadow-xs text-[#1E2A3A]' : 'text-slate-400 hover:text-slate-600'
                    }`}
                    aria-label="Grid view"
                    title="Grid view"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Conditional Rendering: Heavy Equipment is Coming Soon; Marine Vessels have full data */}
          {isHeavy ? (
            <ComingSoon
              sectionName={
                language === 'en'
                  ? 'Heavy Equipment & Earthmoving Assets'
                  : 'Alat Berat Proyek & Kelautan'
              }
              title="COMING SOON"
              description={
                language === 'en'
                  ? 'Heavy equipment specifications are currently under development. For machinery availability, project equipment rentals, or technical consultations, please contact our operational desks in Jakarta or Samarinda.'
                  : 'Halaman spesifikasi alat berat sedang dalam tahap pengembangan. Untuk informasi ketersediaan alat berat dan konsultasi kebutuhan proyek, silakan hubungi kantor kami di Jakarta atau Samarinda.'
              }
              showContact={true}
              backTo="/fleet/aht"
              backLabel={language === 'en' ? 'View Marine Fleet' : 'Lihat Armada Kapal'}
            />
          ) : viewMode === 'table' ? (
            /* Table View for Marine Vessels */
            <div className="border border-slate-200 rounded-[3px] overflow-hidden shadow-xs mb-10">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="bg-[#F4F6F8] border-b border-slate-200 font-mono text-[11px] text-slate-600 uppercase tracking-wider">
                      <th className="px-5 py-3.5">{t('fleet.tableHeaders.unitName')}</th>
                      <th className="px-4 py-3.5">
                        {language === 'en' ? 'Class' : 'Klasifikasi'}
                      </th>
                      {isCrane && (
                        <>
                          <th className="px-4 py-3.5">{t('fleet.tableHeaders.capacity')}</th>
                          <th className="px-4 py-3.5">{t('fleet.tableHeaders.boomLength')}</th>
                        </>
                      )}
                      {isBarge && (
                        <>
                          <th className="px-4 py-3.5">{t('fleet.tableHeaders.dwt')}</th>
                          <th className="px-4 py-3.5">{t('fleet.tableHeaders.loa')}</th>
                        </>
                      )}
                      {!isCrane && !isBarge && (
                        <>
                          <th className="px-4 py-3.5">{t('fleet.tableHeaders.power')}</th>
                          <th className="px-4 py-3.5">{t('fleet.tableHeaders.bollardPull')}</th>
                        </>
                      )}
                      <th className="px-4 py-3.5">{t('fleet.tableHeaders.year')}</th>
                      <th className="px-4 py-3.5">{t('fleet.tableHeaders.charter')}</th>
                      <th className="px-4 py-3.5 text-right">
                        {language === 'en' ? 'Particulars' : 'Spesifikasi'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {data.map((unit) => {
                      return (
                        <tr
                          key={unit.name}
                          onClick={() => setSelectedUnit(unit)}
                          className="hover:bg-slate-50 transition-colors cursor-pointer group"
                        >
                          <td className="px-5 py-3.5 font-bold font-mono text-[#1E2A3A] group-hover:text-[#C0392B] transition-colors">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] opacity-0 group-hover:opacity-100 transition-opacity" />
                              <span>{unit.name}</span>
                            </div>
                          </td>

                          <td className="px-4 py-3.5 font-mono text-slate-600">
                            <span className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded-[2px] text-[10px] font-bold">
                              {unit.classification || 'BKI'}
                            </span>
                          </td>

                          {isCrane && (
                            <>
                              <td className="px-4 py-3.5 font-mono font-bold text-[#1E2A3A]">
                                {unit.capacity}
                              </td>
                              <td className="px-4 py-3.5 font-mono text-slate-600">
                                {unit.boom}
                              </td>
                            </>
                          )}

                          {isBarge && (
                            <>
                              <td className="px-4 py-3.5 font-mono font-bold text-[#1E2A3A]">
                                {unit.dwt}
                              </td>
                              <td className="px-4 py-3.5 font-mono text-slate-600">
                                {unit.loa}
                              </td>
                            </>
                          )}

                          {!isCrane && !isBarge && (
                            <>
                              <td className="px-4 py-3.5 font-mono font-bold text-[#1E2A3A]">
                                {unit.hp}
                              </td>
                              <td className="px-4 py-3.5 font-mono text-slate-600">
                                {unit.bollardPull}
                              </td>
                            </>
                          )}

                          <td className="px-4 py-3.5 font-mono text-slate-500">{unit.year}</td>

                          <td className="px-4 py-3.5">
                            <div className="flex gap-1 flex-wrap">
                              {unit.charter?.map((c) => (
                                <span
                                  key={c}
                                  className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-[2px] border ${charterBadgeStyles[c] || 'bg-slate-100 text-slate-600'}`}
                                >
                                  {c}
                                </span>
                              ))}
                            </div>
                          </td>

                          <td className="px-4 py-3.5 text-right">
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C0392B] group-hover:underline">
                              <span>Spec Sheet</span>
                              <Maximize2 className="w-3 h-3" />
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Grid View for Marine Vessels */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {data.map((unit) => {
                const typeText =
                  typeof unit.type === 'object' && unit.type !== null
                    ? unit.type[language] || unit.type.en
                    : unit.type;

                return (
                  <div
                    key={unit.name}
                    onClick={() => setSelectedUnit(unit)}
                    className="bg-white border border-slate-200 rounded-[3px] p-5 hover:border-slate-300 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[10px]">
                        <span className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded-[2px] font-bold text-[#1E2A3A]">
                          {unit.classification || 'BKI CLASS'}
                        </span>
                        <span className="text-slate-400">BUILT {unit.year}</span>
                      </div>

                      <h3 className="font-display font-bold text-base text-[#1E2A3A] group-hover:text-[#C0392B] transition-colors mb-1">
                        {unit.name}
                      </h3>
                      {typeText && <p className="text-xs text-slate-500 mb-3">{typeText}</p>}

                      <div className="grid grid-cols-2 gap-2 my-4 p-3 bg-[#F4F6F8] rounded-[2px] text-xs font-mono">
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase">
                            {isCrane ? 'Capacity' : isBarge ? 'DWT' : 'BHP'}
                          </span>
                          <span className="font-bold text-[#1E2A3A]">
                            {unit.hp || unit.capacity || unit.dwt}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase">
                            {isCrane ? 'Boom' : isBarge ? 'LOA' : 'Bollard Pull'}
                          </span>
                          <span className="font-bold text-[#1E2A3A]">
                            {unit.bollardPull || unit.boom || unit.loa || 'Commercial'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex gap-1">
                        {unit.charter?.map((c) => (
                          <span
                            key={c}
                            className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-[2px] border ${charterBadgeStyles[c] || 'bg-slate-100 text-slate-600'}`}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-[#C0392B] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Charter Legend (Shown for Marine Vessels) */}
          {!isHeavy && (
            <div className="bg-[#F4F6F8] border border-slate-200 rounded-[3px] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-4 h-4 text-[#C0392B]" />
                <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-[#1E2A3A]">
                  {t('fleet.charterLegendTitle')}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                {charterTypes.map((ct) => {
                  const descText =
                    typeof ct.desc === 'object' && ct.desc !== null
                      ? ct.desc[language] || ct.desc.en
                      : ct.desc;

                  return (
                    <div key={ct.code} className="border-l-2 border-[#C0392B] pl-3 py-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-[2px] border ${charterBadgeStyles[ct.code]}`}
                        >
                          {ct.code}
                        </span>
                        <span className="font-bold text-[#1E2A3A] text-xs">{ct.label}</span>
                      </div>
                      <p className="text-slate-500 text-[11px] leading-relaxed">{descText}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Unit Detail Modal */}
      <UnitDetailModal
        unit={selectedUnit}
        category={activeCategory?.label}
        isOpen={!!selectedUnit}
        onClose={() => setSelectedUnit(null)}
        language={language}
      />
    </>
  );
}
