// src/components/ui/Button.jsx
import { Link } from 'react-router-dom';

export default function Button({ children, to, href, onClick, variant = 'primary', size = 'md', className = '' }) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-[#C0392B] text-white hover:bg-[#922B21] focus:ring-[#C0392B]',
    outline: 'border-2 border-[#C0392B] text-[#C0392B] hover:bg-[#C0392B] hover:text-white focus:ring-[#C0392B]',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-[#C0392B] focus:ring-white',
    ghost: 'text-[#C0392B] hover:bg-red-50 focus:ring-[#C0392B]',
    navy: 'bg-[#1E2A3A] text-white hover:bg-[#2C3E50] focus:ring-[#1E2A3A]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) return <Link to={to} className={classes}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>;
  return <button onClick={onClick} className={classes}>{children}</button>;
}
