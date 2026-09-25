// src/components/ui/SectionTitle.jsx
export default function SectionTitle({ subtitle, title, description, align = 'center', light = false }) {
  const alignClass = {
    center: 'text-center mx-auto',
    left: 'text-left',
  }[align];

  return (
    <div className={`max-w-2xl mb-12 ${alignClass}`}>
      {subtitle && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C0392B] mb-3">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-[#1E2A3A]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${light ? 'text-white/75' : 'text-slate-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
