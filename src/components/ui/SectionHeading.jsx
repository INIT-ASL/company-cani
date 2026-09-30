// src/components/ui/SectionHeading.jsx
// Pengganti SectionTitle: props sama (kicker, title, description, action) + `light` untuk latar gelap.
import Reveal from './Reveal';

export default function SectionHeading({ kicker, title, description, action, light = false }) {
  return (
    <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <Reveal className="max-w-2xl">
        <span className="mb-5 block h-[2px] w-10 bg-[#C0392B]" />
        {kicker && (
          <p className={`mb-3 text-sm font-semibold tracking-wide ${light ? 'text-[#B8975A]' : 'text-[#C0392B]'}`}>
            {kicker}
          </p>
        )}
        <h2 className={`font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] ${light ? 'text-white' : 'text-[#1E2A3A]'}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-4 max-w-xl text-base leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
            {description}
          </p>
        )}
      </Reveal>
      {action && (
        <Reveal delay={0.15} className="shrink-0">
          {action}
        </Reveal>
      )}
    </div>
  );
}
