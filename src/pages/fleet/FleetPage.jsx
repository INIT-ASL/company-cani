// src/pages/fleet/FleetPage.jsx
import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import NotFound from '../NotFound';
import { fleetCategories, fleetData } from '../../data/fleet';
import FleetPdfButton from '../../components/fleet/FleetPdfButton';
import FleetEmptyState from '../../components/fleet/FleetEmptyState';
import { getLocalized } from '../../utils/i18n';
import {
  Table,
  LayoutGrid,
  Search,
  Building2,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function FleetPage() {
  const { category: paramCategory } = useParams();
  const activeCategory = fleetCategories.find((c) => c.id === paramCategory);

  if (!activeCategory) {
    return <NotFound />;
  }

  return <FleetPageContent activeCategory={activeCategory} />;
}

function FleetPageContent({ activeCategory }) {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState('table'); // 'table' | 'grid'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('all');

  const activeId = activeCategory.id;
  const rawData = useMemo(() => fleetData[activeId] || [], [activeId]);

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
      default:
        return getLocalized(activeCategory.fullLabel, language) || 'Fleet';
    }
  }, [activeId, activeCategory, language, t]);

  const categoryDesc = getLocalized(activeCategory.description, language);

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
        title={`${fullCategoryTitle} — ${t('nav.fleet')}`}
        description={categoryDesc}
      />

      <PageHeader
        breadcrumbs={[
          { label: t('nav.fleet'), to: '/fleet/aht' },
          { label: fullCategoryTitle },
        ]}
        kicker={language === 'en' ? 'VESSEL SPECIFICATIONS & FLEET' : 'SPESIFIKASI KAPAL & ARMADA'}
        title={fullCategoryTitle}
        description={categoryDesc}
      />

      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Category Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div
              role="tablist"
              aria-label="Kategori Armada / Fleet Categories"
              className="flex flex-wrap gap-2"
            >
              {fleetCategories.map((cat) => {
                const isActive = cat.id === activeId;
                const count = fleetData[cat.id]?.length;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    id={`fleet-cat-${cat.id}`}
                    aria-selected={isActive}
                    type="button"
                    onClick={() => {
                      navigate(`/fleet/${cat.id}`);
                      setSearchQuery('');
                      setSelectedGroup('all');
                    }}
                    className={`px-3 sm:px-4 py-2 rounded-[3px] text-xs font-semibold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] min-h-[36px] flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#1E2A3A] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#1E2A3A]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    {typeof count === 'number' && count > 0 && (
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle & Counter */}
            <div className="flex items-center gap-3 self-end md:self-auto">
              <span className="text-xs font-mono text-slate-500">
                {filteredData.length} {language === 'en' ? 'units shown' : 'unit terdaftar'}
              </span>

              <div
                role="group"
                aria-label="Tampilan / View Mode"
                className="flex items-center bg-slate-100 p-0.5 rounded-[3px] border border-slate-200"
              >
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  aria-pressed={viewMode === 'table'}
                  aria-label="Table view"
                  className={`p-1.5 rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C0392B] ${
                    viewMode === 'table'
                      ? 'bg-white text-[#C0392B] shadow-2xs'
                      : 'text-slate-500 hover:text-[#1E2A3A]'
                  }`}
                >
                  <Table className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  aria-pressed={viewMode === 'grid'}
                  aria-label="Grid view"
                  className={`p-1.5 rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C0392B] ${
                    viewMode === 'grid'
                      ? 'bg-white text-[#C0392B] shadow-2xs'
                      : 'text-slate-500 hover:text-[#1E2A3A]'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 bg-[#F4F6F8] min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Group Sub-Tabs (if category has multiple associates) & Quick Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
                {availableGroups.length > 1 ? (
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
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
                  <label htmlFor="fleet-search" className="sr-only">
                    {language === 'en' ? 'Search unit by name' : 'Cari nama armada'}
                  </label>
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
                  <input
                    id="fleet-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={language === 'en' ? 'Search unit by name...' : 'Cari nama armada...'}
                    className="w-full pl-9 pr-8 py-1.5 text-xs bg-white border border-slate-200 rounded-[2px] focus:outline-none focus:border-[#C0392B] font-sans"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label={language === 'en' ? 'Clear search query' : 'Hapus pencarian'}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
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
                          <FleetEmptyState language={language} colSpan={5} isTable={true} />
                        ) : (
                          filteredData.map((unit, idx) => (
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
                                <FleetPdfButton
                                  pdfUrl={unit.pdfUrl}
                                  unitName={unit.name}
                                  language={language}
                                  variant="table"
                                />
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                /* Grid View */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                  {filteredData.length === 0 ? (
                    <FleetEmptyState language={language} isTable={false} />
                  ) : (
                    filteredData.map((unit) => (
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
                          <FleetPdfButton
                            pdfUrl={unit.pdfUrl}
                            unitName={unit.name}
                            language={language}
                            variant="grid"
                          />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
        </div>
      </section>
    </>
  );
}
