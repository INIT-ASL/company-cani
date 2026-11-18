// src/components/common/SEO.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY } from '../../data/company';

/**
 * Enhanced SEO component using React 19 native metadata hoisting
 * and synchronized DOM attributes for canonical, open graph, twitter, and JSON-LD.
 */
export default function SEO({
  title,
  description,
  type = 'website',
  robots = 'index, follow',
  image = `${COMPANY.siteUrl}/og-image.jpg`,
  breadcrumbs = null,
  schema = null,
}) {
  const { language } = useLanguage();
  const location = useLocation();

  const siteName = COMPANY.name;
  const ticker = 'IDX: CANI';
  const fullTitle = title ? `${title} — ${siteName} (${ticker})` : `${siteName} — ${ticker}`;
  const defaultDesc =
    language === 'en'
      ? 'PT Capitol Nusantara Indonesia Tbk (IDX: CANI) operates offshore support vessels, AHT, tugboats, barges, and floating cranes across Indonesia.'
      : 'PT Capitol Nusantara Indonesia Tbk (IDX: CANI) menyediakan armada kapal tunda, AHT, tongkang, dan floating crane untuk operasional lepas pantai dan pelayaran domestik.';
  const metaDescription = description || defaultDesc;
  const canonicalUrl = `${COMPANY.siteUrl}${location.pathname}`;

  // Organization schema as base JSON-LD
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: COMPANY.name,
    alternateName: ['CANI', 'PT CNI', 'Capitol Nusantara Indonesia'],
    tickerSymbol: 'IDX:CANI',
    url: COMPANY.siteUrl,
    logo: `${COMPANY.siteUrl}/favicon-512x512.png`,
    foundingDate: '2004-08',
    email: COMPANY.emails?.primary || 'Enquiry@ptcni.co.id',
    telephone: COMPANY.headOffice?.phone || '+62 (21) 5307340',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.headOffice?.address || '',
      addressLocality: COMPANY.headOffice?.city || 'Jakarta Barat',
      postalCode: COMPANY.headOffice?.postalCode || '11550',
      addressCountry: 'ID',
    },
    sameAs: [COMPANY.idxUrl],
  };

  // Optional BreadcrumbList schema
  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: b.url.startsWith('http') ? b.url : `${COMPANY.siteUrl}${b.url}`,
        })),
      }
    : null;

  const combinedSchemas = [orgSchema, ...(breadcrumbSchema ? [breadcrumbSchema] : []), ...(schema ? (Array.isArray(schema) ? schema : [schema]) : [])];

  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.lang = language;

    // Synchronize meta tags directly in head for crawlers that don't execute JS microtasks
    const setMeta = (attr, val, content) => {
      let el = document.querySelector(`meta[${attr}="${val}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', metaDescription);
    setMeta('name', 'robots', robots);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', metaDescription);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:site_name', siteName);
    setMeta('property', 'og:locale', language === 'en' ? 'en_US' : 'id_ID');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', metaDescription);
    setMeta('name', 'twitter:image', image);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);
  }, [fullTitle, metaDescription, robots, canonicalUrl, type, image, siteName, language]);

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : 'id_ID'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data JSON-LD */}
      {combinedSchemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
