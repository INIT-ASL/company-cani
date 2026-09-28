# PT Capitol Nusantara Indonesia Tbk — Corporate Portal

Official corporate portal for **PT Capitol Nusantara Indonesia Tbk (IDX: CANI)**, a publicly listed Indonesian shipping and offshore marine support logistics company. Engineered with **Vite, React 19, React Router 7, Tailwind CSS v4, Framer Motion, and Lucide React** with institutional multi-language support (English default & Bahasa Indonesia).

---

## 🏗️ Architecture & Technical Stack

| Area | Implementation | Description |
|---|---|---|
| **Core Framework** | React 19 + Vite 8 | High-performance modern frontend tooling |
| **Routing & Code-Splitting** | React Router 7 + `React.lazy()` | Route-level code-splitting with zero large bundle bottlenecks |
| **Styling & Tokens** | Tailwind CSS v4 (`@theme`) | Industrial design system with crisp hairline borders and minimal radii |
| **Typography** | Google Fonts (`Sora` + `Inter`) | `Sora` for authoritative corporate display headings; `Inter` for technical data |
| **Animation** | Framer Motion (Restrained) | Purposeful reveals respecting `prefers-reduced-motion` |
| **Multi-Language Engine** | `LanguageContext` + `translations.js` | Full English (default) & Bahasa Indonesia coverage |
| **Inquiry Gateway** | `inquiryService.js` | Decoupled submission service with anti-spam honeypot filtering |
| **SEO & Head** | Dynamic `SEO.jsx` | Dynamic title, meta descriptions, Open Graph, and language tags |

---

## 🌐 Multi-Language Architecture

- **Default Language**: English (`en`).
- **Available Languages**: English (`EN`) & Bahasa Indonesia (`ID`).
- **Persistence**: User preference stored in `localStorage` under `cani_language`.
- **Switcher**: Accessible toggle `[ EN | ID ]` in the top utility bar and mobile drawer.
- **Copywriting Standard**: Professional corporate tone without generic promotional buzzwords; accurate maritime statutory terminology (e.g. *Biro Klasifikasi Indonesia (BKI)*, *Kapal Tunda*, *Anchor Handling Tug*, *Asas Kabotase*).

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

# 4. Preview production build
npm run preview

# 5. Run static lint check
npm run lint
```

---

## 📁 Source Code Organization

```
src/
├── assets/
│   ├── images/                 ← Dedicated slots for real fleet & corporate imagery
│   └── hero.jpg                ← High-resolution offshore vessel hero background
├── components/
│   ├── common/
│   │   └── SEO.jsx             ← Dynamic document title & meta tags manager
│   ├── layout/
│   │   ├── Navbar.jsx          ← Sticky translucent/solid navbar with accessible drawer
│   │   └── Footer.jsx          ← 4-column institutional footer with statutory credentials
│   ├── ui/
│   │   ├── Breadcrumbs.jsx     ← Accessible breadcrumb navigation
│   │   ├── Button.jsx          ← Accessible button primitives with industrial radii
│   │   ├── PageHeader.jsx      ← Editorial header banner with precision grid
│   │   └── SectionTitle.jsx    ← Balanced editorial section titles
│   └── home/
│       ├── HeroSection.jsx     ← High-impact maritime hero with technical stat band
│       ├── ServicesSection.jsx ← Asymmetrical 60/40 capability & chartering framework
│       ├── RecentProjects.jsx  ← Documented offshore deployments & operational records
│       ├── ClientsSection.jsx  ← Maritime classification (BKI/ABS) & institutional clients
│       └── NewsSection.jsx     ← Asymmetrical editorial news & disclosure preview
├── context/
│   └── LanguageContext.jsx     ← Language state management & t() translation lookup
├── data/
│   ├── board.js                ← Commissioners and Directors biographical records
│   ├── financials.js           ← Annual reports, financial statements & disclosures
│   ├── fleet.js                ← Full vessel specifications, dimensions & charter models
│   ├── history.js              ← Chronological timeline of corporate milestones
│   └── news.js                 ← Press statements and regulatory announcements
├── pages/
│   ├── Home.jsx                ← Corporate landing portal
│   ├── about/
│   │   ├── CompanyProfile.jsx  ← Corporate overview, governance, and business scope
│   │   ├── CompanyHistory.jsx  ← Milestone timeline with bold typographic years
│   │   └── BoardPage.jsx       ← Commissioners & Directors executive portrait cards
│   ├── fleet/
│   │   └── FleetPage.jsx       ← Engineering specification table & unit inspector modal
│   ├── investors/
│   │   └── FinancialStatements.jsx ← Categorized annual/interim reports archive with PDF downloads
│   ├── contact/
│   │   ├── ContactInfo.jsx     ← Samarinda & Jakarta office directory with interactive maps
│   │   └── ContactInquiry.jsx  ← Commercial chartering inquiry form with honeypot
│   ├── MediaCenter.jsx         ← Filterable press statements archive with search & pagination
│   └── NotFound.jsx            ← Branded 404 error page
├── services/
│   └── inquiryService.js       ← Centralized commercial inquiry transmission handler
├── translations/
│   └── translations.js         ← Master localized dictionary (EN & ID)
├── App.jsx                     ← Main application routes with React.lazy code-splitting
├── main.jsx                    ← Application DOM mount
└── index.css                   ← Tailwind v4 theme definitions and base styles
```

---

## 📑 Route Map

| Route | Content / Function |
|---|---|
| `/` | Corporate Landing Portal & Vessel Showcase |
| `/about/profile` | Institutional Company Profile & Business Scope |
| `/about/history` | Milestone Timeline (2004 Inception to Present) |
| `/about/commissioners` | Board of Commissioners Governance Oversight |
| `/about/directors` | Board of Directors Executive Management |
| `/fleet/:category` | Vessel Fleet Engineering Specs (`aht`, `tug`, `crane`, `barge`, `heavy`) |
| `/investors/financials` | Audited Financial Reports, Annual Reports & Disclosures |
| `/media` | Corporate Media Center & Press Releases Archive |
| `/contact/info` | Samarinda HQ & Jakarta Representative Office Directory |
| `/contact/inquiry` | Commercial Chartering & Investor Inquiries |
| `*` | Branded 404 Page Not Found |

---

## 📜 Compliance & Corporate Disclosures

PT Capitol Nusantara Indonesia Tbk is registered and supervised under the regulatory framework of the Financial Services Authority (*Otoritas Jasa Keuangan* / OJK) and the Indonesia Stock Exchange (*Bursa Efek Indonesia* / BEI) under stock code **CANI**. All domestic vessel voyages operate under Indonesian Cabotage Law (Law No. 17/2008).
