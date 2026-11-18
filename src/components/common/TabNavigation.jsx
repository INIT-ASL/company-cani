// src/components/common/TabNavigation.jsx

export default function TabNavigation({
  tabs = [],
  activeTab,
  onChange,
  ariaLabel = 'Categories',
  className = '',
}) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={`inline-flex flex-wrap p-1 bg-slate-100 rounded-[3px] gap-1 ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0392B] min-h-[36px] sm:min-h-[32px] flex items-center gap-1.5 ${
              isActive
                ? 'bg-[#1E2A3A] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#C0392B] hover:bg-slate-200/60'
            }`}
          >
            <span>{tab.label}</span>
            {typeof tab.count === 'number' && (
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
