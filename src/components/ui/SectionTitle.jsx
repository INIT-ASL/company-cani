// src/components/ui/SectionTitle.jsx
export default function SectionTitle({
  kicker,
  title,
  description,
  align = 'left',
  light = false,
  action,
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 md:mb-12 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'}`}>
      {kicker && (
        <div className={`inline-flex items-center gap-2 mb-2.5 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-xs bg-[#C0392B]" />
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#C0392B]">
            {kicker}
          </span>
        </div>
      )}

      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 ${isCenter ? 'items-center' : ''}`}>
        <div>
          <h2
            className={`text-2xl sm:text-3xl font-bold tracking-tight leading-tight ${
              light ? 'text-white' : 'text-[#1E2A3A]'
            }`}
          >
            {title}
          </h2>

          {description && (
            <p
              className={`mt-2.5 text-sm sm:text-base leading-relaxed ${
                light ? 'text-slate-300' : 'text-[#5A6A7E]'
              } max-w-2xl`}
            >
              {description}
            </p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}
