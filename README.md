# PT Capitol Nusantara Indonesia Tbk — Corporate Portal

Official corporate portal for **PT Capitol Nusantara Indonesia Tbk (IDX: CANI)**, a publicly listed Indonesian shipping and offshore marine support logistics company. Engineered with **Vite 8, React 19, React Router 7, Tailwind CSS v4, Framer Motion, and Lucide React** with bilingual support (English default & Bahasa Indonesia).

---

## 🏗️ Architecture & Technical Stack

| Area | Implementation | Description |
|---|---|---|
| **Core Framework** | React 19 + Vite 8 | High-performance modern frontend tooling targeting `es2022` |
| **Routing & Code-Splitting** | React Router 7 + `React.lazy()` | Eager Home landing + granular route code-splitting with vendor chunk segregation |
| **Styling & Tokens** | Tailwind CSS v4 (`@tailwindcss/vite`) | Industrial maritime design system with custom keyframes and responsive layouts |
| **Typography** | Google Fonts (`Sora` + `Inter`) | `Sora` for authoritative corporate display headings; `Inter` for technical data |
| **Animation** | Framer Motion | Purposeful reveals respecting `prefers-reduced-motion` |
| **Single Source of Truth** | `src/data/company.js` | Centralized corporate identities, addresses, geolocation, contact phones & emails |
| **Multi-Language Engine** | `LanguageContext` + `translations.js` | Instant English (default) & Bahasa Indonesia switching |
| **SEO & Head** | React 19 Document Metadata Hoisting (`SEO.jsx`) | Canonical URLs, Open Graph, Twitter Cards, Organization & LocalBusiness JSON-LD |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18.0 or later
- npm v9.0 or later

### Installation & Development
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (outputs to dist/)
npm run build

# 4. Run static lint check (oxlint)
npm run lint

# 5. Preview production build
npm run preview
```

---

## 📁 Source Code Organization

```
src/
├── assets/
│   ├── clients/                ← Client & partner brand logos (optimized WebP <= 300px)
│   └── images/                 ← Optimized corporate imagery (WebP responsive variants)
├── components/
│   ├── common/
│   │   ├── ComingSoon.jsx      ← Temporary section notice with live contact links
│   │   ├── SEO.jsx             ← React 19 metadata hoister with full JSON-LD schema
│   │   ├── TabNavigation.jsx   ← Accessible tab buttons
│   │   └── YearFilter.jsx      ← Reusable year filter bar for media & financials
│   ├── fleet/
│   │   ├── FleetEmptyState.jsx ← Shared empty-state when filters return zero units
│   │   └── FleetPdfButton.jsx  ← Shared PDF specification download link
│   ├── home/
│   │   ├── AboutSection.jsx    ← Corporate summary and history CTA
│   │   ├── ClientsSection.jsx  ← Partner credentials and marquee display
│   │   ├── FleetOverviewSection.jsx ← Dynamic unit counts categorized from fleet data
│   │   ├── HeroSection.jsx     ← High-impact responsive WebP hero with deferred video
│   │   ├── NewsSection.jsx     ← Lead disclosure and corporate news preview
│   │   ├── OperationsSection.jsx ← Interactive archipelagic operational map
│   │   └── StatsBandSection.jsx← Fleet milestones and verified statistics
│   ├── layout/
│   │   ├── DesktopNav.jsx      ← Desktop multi-level navigation
│   │   ├── Footer.jsx          ← 4-column footer with centralized company metadata
│   │   ├── LanguageSwitcher.jsx← Reusable accessible [ EN | ID ] switcher
│   │   ├── MobileDrawer.jsx    ← Off-canvas responsive mobile drawer
│   │   ├── Navbar.jsx          ← Sticky translucent/solid navbar orchestrator
│   │   └── UtilityBar.jsx      ← Top bar with IDX ticker and direct operational line
│   ├── media/
│   │   ├── MediaArticleCard.jsx← Grid article preview card
│   │   ├── MediaArticleModal.jsx← Full detail modal dialog with focus trap
│   │   └── MediaPagination.jsx ← Accessible numeric page pagination
│   └── ui/
│       ├── Breadcrumbs.jsx     ← Accessible breadcrumb navigation
│       ├── CountUp.jsx         ← Smooth numerical counter
│       ├── PageHeader.jsx      ← Editorial header banner with precision grid
│       ├── Reveal.jsx          ← Scroll-triggered reveal animations
│       └── SectionHeading.jsx  ← Balanced editorial section titles
├── context/
│   └── LanguageContext.jsx     ← Language state management & memoized t() helper
├── data/
│   ├── board.js                ← Commissioners and Directors biographical records (WebP photos)
│   ├── company.js              ← Single source of truth for corporate credentials
│   ├── financials.js           ← Annual reports and financial statement records
│   ├── fleet.js                ← Full vessel specifications, dimensions & charter models
│   ├── history.js              ← Chronological timeline of corporate milestones
│   └── news.js                 ← Press statements and regulatory announcements
├── pages/
│   ├── about/
│   │   ├── BoardPage.jsx       ← Unified parameterized executive board display
│   │   └── CompanyHistory.jsx  ← Milestone timeline (2004 to present)
│   ├── contact/
│   │   ├── ContactInfo.jsx     ← Jakarta HQ & Samarinda Branch directory + map facades
│   │   └── ContactInquiry.jsx  ← Commercial chartering inquiry form
│   ├── fleet/
│   │   └── FleetPage.jsx       ← Specification table & grid views with 404 validation
│   ├── investors/
│   │   ├── FinancialStatements.jsx ← Filterable financial reports archive with local PDFs
│   │   └── StockInformation.jsx← Capital structure, ticker specifications, and IDX link
│   ├── Home.jsx                ← Corporate landing portal (eagerly loaded)
│   ├── MediaCenter.jsx         ← Searchable press releases & news archive
│   └── NotFound.jsx            ← Branded 404 error page with noindex robots
├── translations/
│   └── translations.js         ← Clean localized dictionary (EN & ID)
├── utils/
│   └── i18n.js                 ← Shared getLocalized and getSecondaryLocalized helpers
├── App.jsx                     ← Main routes, eager Home, skip link & instant scroll-to-top
├── main.jsx                    ← React DOM root mount
└── index.css                   ← Tailwind CSS v4 directives and keyframe animations
```

---

## 📝 Content Management & Data Guidelines

### 1. Adding a New Vessel to Fleet
1. Place the technical specification sheet PDF in `public/docs/fleet/`.
2. Open `src/data/fleet.js`.
3. Locate the appropriate category array (`aht`, `tug`, `crane`, `barge`, or `heavy`).
4. Append an entry following this format:
```javascript
{
  id: 'unit-slug',
  name: 'VESSEL NAME',
  category: 'aht', // or 'tug', 'crane', 'barge', 'heavy'
  group: 'Subcategory Filter',
  power: '3,200 BHP',
  bollardPull: '45 Tonnes',
  year: '2012',
  class: 'BKI / ABS',
  pdfUrl: '/docs/fleet/vessel-name.pdf',
}
```
*Note: Vessel counts in `FleetOverviewSection` update automatically based on `fleetData` arrays.*

### 2. Publishing News or Press Releases
1. Open `src/data/news.js`.
2. Add to `pressReleaseData` (for official IDX disclosures) or `newsData` (for general company news):
```javascript
{
  id: 'unique-id-slug',
  title: {
    en: 'English Title',
    id: 'Judul Bahasa Indonesia',
  },
  category: {
    en: 'Corporate Action',
    id: 'Aksi Korporasi',
  },
  date: {
    en: '15 March 2026',
    id: '15 Maret 2026',
  },
  year: 2026,
  excerpt: {
    en: 'English executive summary of the release...',
    id: 'Ringkasan eksekutif pengumuman dalam bahasa Indonesia...',
  },
  content: {
    en: 'Full English announcement text paragraphs...',
    id: 'Teks lengkap pengumuman dalam bahasa Indonesia...',
  },
  links: [
    { label: 'IDX Disclosure PDF', url: 'https://...' },
  ],
}
```

### 3. Adding Periodic Financial Statements
1. Place the financial report PDF in `public/financials/`.
2. Open `src/data/financials.js`.
3. Add an entry to `annualReports` or `periodicReports`:
```javascript
{
  id: 'fs-2025-fy',
  title: {
    en: 'Financial Statement FY 2025 (Audited)',
    id: 'Laporan Keuangan Tahun Buku 2025 (Diaudit)',
  },
  year: 2025,
  date: '31 March 2026',
  fileSize: '4.8 MB',
  url: '/financials/FS_2025_Audited.pdf',
}
```

---

## 🌐 Single Source of Truth (`src/data/company.js`)

All corporate identities, addresses, and contacts are centralized in `src/data/company.js`:
- `COMPANY.name`: Full registered entity name.
- `COMPANY.ticker`: `IDX: CANI`.
- `COMPANY.siteUrl`: Production website canonical origin (`https://cani.cemaraintan.id`).
- `COMPANY.idxUrl`: Official IDX issuer profile link.
- `COMPANY.offices.jakarta`: Address, phone, fax, coordinates, and operating hours.
- `COMPANY.offices.samarinda`: Address, phone, fax, coordinates, and operating hours.
- `COMPANY.whatsapp.chartering`: Direct WhatsApp chartering hotline.

---

## 🚢 Production Deployment

Because this is a Single Page Application (CSR) using React Router, all client requests must rewrite to `/index.html`.

### Vercel
Configuration is pre-packaged in root `vercel.json`:
- Automatic SPA rewrites to `/index.html`
- Immutable cache headers (`max-age=31536000`) for static build artifacts in `/assets/*`.

### Netlify / Cloudflare Pages
Pre-configured via `public/_redirects`:
```
/*    /index.html   200
```

### Apache / cPanel
Pre-configured via `public/.htaccess`:
- `mod_rewrite` fallback to `/index.html`
- `mod_expires` caching rules for webp, css, js, and pdf files
- Security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).

### Nginx
Reference configuration is provided in `nginx.conf.example`:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

---

## 🛡️ License & Statutory Notice

PT Capitol Nusantara Indonesia Tbk is an Indonesian publicly traded company listed on the Indonesia Stock Exchange (IDX: CANI). All maritime operations strictly adhere to Indonesian Cabotage Law (Law No. 17/2008). All content, vessel specifications, corporate filings, and trademarks belong to PT Capitol Nusantara Indonesia Tbk.
