// src/pages/fleet/FleetPage.jsx
import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import ComingSoon from '../../components/common/ComingSoon';
import { fleetCategories, fleetData } from '../../data/fleet';
import {
  Table,
  LayoutGrid,
  FileText,
  FileQuestion,
  ExternalLink,
  Search,
  Building2,
  Anchor,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function FleetPage() {
  const { language, t } = useLanguage();
  const { category: paramCategory } = useParams();
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState('table'); // 'table' | 'grid'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('all');

  const activeId =
    fleetCategories.find((c) => c.id === paramCategory)?.id || fleetCategories[0].id;
  const activeCategory = fleetCategories.find((c) => c.id === activeId);
  const rawData = useMemo(() => fleetData[activeId] || [], [activeId]);

  const isHeavy = activeId === 'heavy';

  const fullCategoryTitle = useMemo(() => {
    switch (activeId) {
      case 'aht':
        return t('nav.aht');
      case 'tug':
        return t('nav.tugBoat');
      case 'crane':
        return t('nav.floatingCrane');
      case 'barge':
        return t('nav.barge');
      case 'heavy':
        return t('nav.heavyEquipment');
      default:
        return typeof activeCategory?.fullLabel === 'object'
          ? activeCategory.fullLabel[language] || activeCategory.fullLabel.en
          : activeCategory?.fullLabel || 'Fleet';
    }
  }, [activeId, activeCategory, language, t]);

  const categoryDesc =
    typeof activeCategory?.description === 'object'
      ? activeCategory.description[language] || activeCategory.description.en
      : '';

  const categoryIntro =
    typeof activeCategory?.intro === 'object'
      ? activeCategory.intro[language] || activeCategory.intro.en
      : '';

  // Extract distinct groups in current category for filter tabs
  const availableGroups = useMemo(() => {
    const set = new Set();
    rawData.forEach((item) => {
      if (item.group) set.add(item.group);
    });
    return Array.from(set);
  }, [rawData]);

  // Filtered dataset
  const filteredData = useMemo(() => {
    return rawData.filter((item) => {
      const matchesGroup =
        selectedGroup === 'all' || item.group === selectedGroup;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.power && item.power.toLowerCase().includes(q)) ||
        (item.dimension && item.dimension.toLowerCase().includes(q)) ||
        (item.capacity && item.capacity.toLowerCase().includes(q)) ||
        (item.type && item.type.toLowerCase().includes(q));
      return matchesGroup && matchesSearch;
    });
  }, [rawData, selectedGroup, searchQuery]);

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
            ? 'OFFSHORE & MARINE FLEET'
            : 'ARMADA KAPAL & LOGISTIK MARITIM'
        }
        title={fullCategoryTitle}
        description={
          isHeavy
            ? language === 'en'
              ? 'This page is currently under development. For machinery inquiries, please contact our office directly.'
              : 'Halaman ini sedang dalam tahap pengembangan. Untuk kebutuhan alat berat, silakan hubungi tim kami secara langsung.'
            : categoryDesc
        }
      />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Category Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
            <div className="flex flex-wrap gap-1.5" role="tablist">
              {fleetCategories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeId === cat.id}
                  onClick={() => {
                    setSelectedGroup('all');
                    setSearchQuery('');
                    navigate(`/fleet/${cat.id}`);
                  }}
                  className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all flex items-center gap-1.5 ${
                    activeId === cat.id
                      ? 'bg-[#1E2A3A] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#C0392B] hover:bg-slate-100'
                  }`}
                >
                  <span>{cat.label}</span>
                  {cat.id === 'heavy' ? (
                    <span className="text-[9px] font-mono font-bold px-1 py-0.2 rounded-[2px] bg-[#C0392B]/15 text-[#C0392B]">
                      SOON
                    </span>
                  ) : (
                    <span className={`text-[10px] font-mono ${activeId === cat.id ? 'text-slate-300' : 'text-slate-400'}`}>
                      ({fleetData[cat.id]?.length || 0})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* View Switcher & Unit Count */}
            {!isHeavy && (
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500">
                  {filteredData.length} {language === 'en' ? 'units shown' : 'unit terdaftar'}
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

          {/* Conditional Rendering: Heavy Equipment vs Marine Vessels */}
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
          ) : (
            <>
              {/* Group Sub-Tabs (if category has multiple associates) & Quick Search */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
                {availableGroups.length > 1 ? (
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Ownership:' : 'Kepemilikan:'}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedGroup('all')}
                      className={`px-2.5 py-1 text-xs font-mono rounded-[2px] border transition-colors ${
                        selectedGroup === 'all'
                          ? 'bg-[#1E2A3A] text-white border-[#1E2A3A] font-bold'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {language === 'en' ? 'All Groups' : 'Semua Unit'} ({rawData.length})
                    </button>
                    {availableGroups.map((grp) => {
                      const count = rawData.filter((i) => i.group === grp).length;
                      return (
                        <button
                          key={grp}
                          type="button"
                          onClick={() => setSelectedGroup(grp)}
                          className={`px-2.5 py-1 text-xs font-mono rounded-[2px] border transition-colors ${
                            selectedGroup === grp
                              ? 'bg-[#1E2A3A] text-white border-[#1E2A3A] font-bold'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {grp.replace(' (Associate)', '')} ({count})
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div />
                )}

                {/* Search Bar */}
                <div className="relative max-w-xs w-full">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={language === 'en' ? 'Search unit by name...' : 'Cari nama armada...'}
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-[2px] focus:outline-none focus:border-[#C0392B] font-sans"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Table View */}
              {viewMode === 'table' ? (
                <div className="border border-slate-200 rounded-[3px] overflow-hidden shadow-xs mb-10 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-sans">
                      <thead>
                        <tr className="bg-[#F4F6F8] border-b border-slate-200 font-mono text-[11px] text-slate-600 uppercase tracking-wider">
                          <th className="px-4 py-3.5 w-12 text-center">#</th>
                          <th className="px-5 py-3.5">{t('fleet.tableHeaders.unitName')}</th>
                          <th className="px-4 py-3.5">
                            {activeId === 'crane'
                              ? language === 'en' ? 'Type / Capacity' : 'Tipe / Kapasitas'
                              : activeId === 'barge'
                              ? language === 'en' ? 'Dimensions & Deck Load' : 'Dimensi & Beban Geladak'
                              : language === 'en' ? 'Engine Power' : 'Daya Mesin'}
                          </th>
                          <th className="px-4 py-3.5">
                            {language === 'en' ? 'Group / Affiliation' : 'Afiliasi / Pemilik'}
                          </th>
                          <th className="px-4 py-3.5 text-right font-mono">
                            {language === 'en' ? 'Ship Particulars' : 'Spesifikasi PDF'}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredData.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="px-6 py-12 text-center text-slate-400 text-xs font-mono">
                              {language === 'en' ? 'No vessels found matching your filter.' : 'Tidak ada kapal yang sesuai dengan filter.'}
                            </td>
                          </tr>
                        ) : (
                          filteredData.map((unit, idx) => {
                            return (
                              <tr
                                key={unit.name}
                                className="hover:bg-slate-50/80 transition-colors group"
                              >
                                <td className="px-4 py-3.5 font-mono text-slate-400 text-center">
                                  {idx + 1}
                                </td>

                                <td className="px-5 py-3.5 font-bold font-mono text-[#1E2A3A] group-hover:text-[#C0392B] transition-colors">
                                  <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span>{unit.name}</span>
                                  </div>
                                </td>

                                <td className="px-4 py-3.5 font-mono text-slate-700">
                                  {unit.power && (
                                    <span className="font-bold text-[#1E2A3A]">{unit.power}</span>
                                  )}
                                  {unit.dimension && (
                                    <span>
                                      {unit.dimension}
                                      {unit.deckLoad && (
                                        <span className="text-slate-500 ml-1.5 font-normal">
                                          (Deck: {unit.deckLoad})
                                        </span>
                                      )}
                                    </span>
                                  )}
                                  {unit.capacity && !unit.dimension && (
                                    <span className="font-bold text-[#1E2A3A]">{unit.capacity}</span>
                                  )}
                                  {unit.type && (
                                    <span className="text-slate-500 block text-[11px] font-sans">
                                      {unit.type}
                                    </span>
                                  )}
                                </td>

                                <td className="px-4 py-3.5 text-slate-500 font-sans text-xs">
                                  {unit.group || 'PT Capitol Nusantara Indonesia Tbk'}
                                </td>

                                <td className="px-4 py-3.5 text-right">
                                  {unit.pdfUrl ? (
                                    <a
                                      href={encodeURI(unit.pdfUrl)}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#C0392B]/10 hover:bg-[#C0392B] text-[#C0392B] hover:text-white transition-all font-mono text-[11px] font-bold border border-[#C0392B]/20 shadow-2xs"
                                      title="Open Official PDF"
                                    >
                                      <FileText className="w-3.5 h-3.5" />
                                      <span>PDF Spec</span>
                                      <ExternalLink className="w-3 h-3 opacity-60" />
                                    </a>
                                  ) : (
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[2px] bg-slate-100 text-slate-400 font-mono text-[10px] font-medium border border-slate-200">
                                      <FileQuestion className="w-3 h-3 text-slate-400" />
                                      <span>{language === 'en' ? 'No PDF' : 'PDF Kosong'}</span>
                                    </span>
                                  )}
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                /* Grid View */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                  {filteredData.length === 0 ? (
                    <div className="col-span-full py-12 text-center text-slate-400 text-xs font-mono">
                      {language === 'en' ? 'No vessels found matching your filter.' : 'Tidak ada kapal yang sesuai dengan filter.'}
                    </div>
                  ) : (
                    filteredData.map((unit) => {
                      return (
                        <div
                          key={unit.name}
                          className="bg-white border border-slate-200 rounded-[3px] p-5 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[10px]">
                              <span className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded-[2px] font-bold text-[#1E2A3A]">
                                {unit.flag || 'INDONESIA'}
                              </span>
                              <span className="text-slate-400 truncate max-w-[150px]">
                                {unit.group?.replace(' (Associate)', '')}
                              </span>
                            </div>

                            <h3 className="font-display font-bold text-base text-[#1E2A3A] group-hover:text-[#C0392B] transition-colors mb-1">
                              {unit.name}
                            </h3>

                            {unit.type && (
                              <p className="text-xs text-slate-500 mb-3">{unit.type}</p>
                            )}

                            <div className="my-3 p-3 bg-[#F4F6F8] rounded-[2px] text-xs font-mono space-y-1">
                              {unit.power && (
                                <div className="flex justify-between">
                                  <span className="text-slate-400 uppercase text-[10px]">Power:</span>
                                  <span className="font-bold text-[#1E2A3A]">{unit.power}</span>
                                </div>
                              )}
                              {unit.capacity && (
                                <div className="flex justify-between">
                                  <span className="text-slate-400 uppercase text-[10px]">Capacity:</span>
                                  <span className="font-bold text-[#1E2A3A]">{unit.capacity}</span>
                                </div>
                              )}
                              {unit.dimension && (
                                <div className="flex justify-between">
                                  <span className="text-slate-400 uppercase text-[10px]">Dimension:</span>
                                  <span className="font-semibold text-[#1E2A3A]">{unit.dimension}</span>
                                </div>
                              )}
                              {unit.deckLoad && (
                                <div className="flex justify-between">
                                  <span className="text-slate-400 uppercase text-[10px]">Deck Load:</span>
                                  <span className="font-bold text-[#1E2A3A]">{unit.deckLoad}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                            {unit.pdfUrl ? (
                              <a
                                href={encodeURI(unit.pdfUrl)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#C0392B] text-white hover:bg-[#96281B] transition-colors text-xs font-semibold shadow-2xs"
                              >
                                <FileText className="w-3.5 h-3.5" />
                                <span>PDF Spec</span>
                                <ExternalLink className="w-3 h-3 opacity-80" />
                              </a>
                            ) : (
                              <span className="text-[11px] font-mono text-slate-400 italic flex items-center gap-1">
                                <FileQuestion className="w-3.5 h-3.5 text-slate-400" />
                                <span>{language === 'en' ? 'No PDF' : 'PDF Kosong'}</span>
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
