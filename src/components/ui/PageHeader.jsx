// src/components/ui/PageHeader.jsx
export default function PageHeader({ breadcrumb, title, description }) {
  return (
    <div className="bg-[#1E2A3A] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <p className="text-white/50 text-sm mb-3 tracking-wide">{breadcrumb}</p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
        {description && (
          <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">{description}</p>
        )}
        <div className="mt-6 w-16 h-1 bg-[#C0392B] rounded-full" />
      </div>
    </div>
  );
}
