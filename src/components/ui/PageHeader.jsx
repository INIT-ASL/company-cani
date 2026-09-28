// src/components/ui/PageHeader.jsx
import Breadcrumbs from './Breadcrumbs';

export default function PageHeader({ kicker, title, description, breadcrumbs = [] }) {
  return (
    <section className="relative bg-[#1E2A3A] text-white pt-28 pb-14 md:pt-32 md:pb-16 border-b border-slate-700/50">
      {/* Precision hairline grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}

        <div className="max-w-3xl">
          {kicker && (
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#C0392B]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E74C3C]">
                {kicker}
              </span>
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            {title}
          </h1>

          {description && (
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
