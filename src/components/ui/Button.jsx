// src/components/ui/Button.jsx
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none rounded-[3px] select-none';

  const variants = {
    primary:
      'bg-[#C0392B] text-white hover:bg-[#96281B] active:bg-[#782015] focus-visible:ring-[#C0392B] shadow-xs',
    secondary:
      'bg-[#1E2A3A] text-white hover:bg-[#121A24] focus-visible:ring-[#1E2A3A]',
    outline:
      'border border-[#C0392B] text-[#C0392B] hover:bg-[#C0392B] hover:text-white focus-visible:ring-[#C0392B]',
    'outline-navy':
      'border border-[#1E2A3A] text-[#1E2A3A] hover:bg-[#1E2A3A] hover:text-white focus-visible:ring-[#1E2A3A]',
    'outline-white':
      'border border-white/70 text-white hover:bg-white hover:text-[#1E2A3A] focus-visible:ring-white',
    ghost:
      'text-[#1E2A3A] hover:text-[#C0392B] hover:bg-slate-100 focus-visible:ring-[#C0392B]',
    'ghost-white':
      'text-white/80 hover:text-white hover:bg-white/10 focus-visible:ring-white',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-sm font-semibold',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
