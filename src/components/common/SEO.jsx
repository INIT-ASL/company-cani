// src/components/common/SEO.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function SEO({ title, description, type = 'website' }) {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const siteName = 'PT Capitol Nusantara Indonesia Tbk';
    const ticker = 'IDX: CANI';
    const fullTitle = title ? `${title} — ${siteName} (${ticker})` : `${siteName} — ${ticker}`;

    document.title = fullTitle;
    document.documentElement.lang = language;

    // Update meta tags dynamically
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    if (description) {
      metaDesc.setAttribute('content', description);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) ogDesc.setAttribute('content', description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

    let ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute('content', type);
  }, [title, description, type, language, location.pathname]);

  return null;
}
