# PT Capitol Nusantara Indonesia Tbk — Company Profile Website

Website company profile modern untuk PT Capitol Nusantara Indonesia Tbk, dibangun dengan **Vite + React + React Router + Tailwind CSS + Framer Motion**, dengan dukungan **Multi-Bahasa (English & Bahasa Indonesia)** di mana bahasa default adalah **English (EN)**.

## 🛠️ Tech Stack

| Technology | Version | Kegunaan |
|---|---|---|
| Vite | 6.x | Build tool & dev server |
| React | 18.x | UI framework |
| React Router | 7.x | Client-side routing multi-page |
| Tailwind CSS v4 | 4.x | Utility-first styling modern |
| Framer Motion | 11.x | Animasi scroll & transisi smooth |
| Lucide React | Latest | Icon library |
| LanguageContext | Custom | Sistem multi-bahasa (EN default & ID) |

---

## 🌐 Sistem Multi-Bahasa (English & Bahasa Indonesia)

- **Default Bahasa**: English (`en`).
- **Pilihan Bahasa**: English (`EN`) & Bahasa Indonesia (`ID`).
- **Penyimpanan**: Preferensi bahasa pengguna tersimpan di `localStorage` (`cani_language`).
- **Language Switcher**: Terdapat di pojok kanan atas Navbar (tersedia baik di desktop maupun mobile view) dengan visual toggle `[ EN | ID ]`.
- **Dukungan Penuh**: Seluruh teks antarmuka, navigasi, footer, form inquiry, tabel armada, riwayat sejarah, dewan direksi, dan berita telah di-lokalisasi secara dwibahasa.

---

## 🚀 Cara Menjalankan

### Prasyarat
- **Node.js** v18 atau lebih baru
- **npm** v9 atau lebih baru

### Langkah-langkah

```bash
# 1. Masuk ke folder project
cd "compro cani"

# 2. Install dependensi (jika belum)
npm install

# 3. Jalankan development server
npm run dev
```

Buka browser di **http://localhost:5173**

### Build untuk Production

```bash
npm run build    # Build ke folder dist/
npm run preview  # Preview hasil build
```

---

## 📁 Struktur Project

```
src/
├── context/
│   └── LanguageContext.jsx     ← Provider state multi-bahasa & helper t()
├── translations/
│   └── translations.js         ← Kamus terjemahan lengkap (EN & ID)
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          ← Navbar sticky + dropdown + language switch
│   │   └── Footer.jsx          ← Footer global dwibahasa
│   ├── ui/
│   │   ├── SectionTitle.jsx
│   │   ├── Button.jsx
│   │   └── PageHeader.jsx
│   └── home/
│       ├── HeroSection.jsx
│       ├── ServicesSection.jsx
│       ├── RecentProjects.jsx
│       ├── NewsSection.jsx
│       └── ClientsSection.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── about/
│   │   ├── CompanyProfile.jsx
│   │   ├── CompanyHistory.jsx
│   │   └── BoardPage.jsx
│   ├── fleet/
│   │   └── FleetPage.jsx
│   ├── MediaCenter.jsx
│   ├── investors/
│   │   └── FinancialStatements.jsx
│   └── contact/
│       ├── ContactInfo.jsx
│       └── ContactInquiry.jsx
│
├── data/
│   ├── fleet.js        ← Data armada (dwibahasa)
│   ├── history.js      ← Timeline sejarah (dwibahasa)
│   ├── board.js        ← Komisaris & Direksi (dwibahasa)
│   ├── news.js         ← Berita & pengumuman (dwibahasa)
│   └── financials.js   ← Laporan keuangan (dwibahasa)
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🎨 Design System

| Token | Nilai | Keterangan |
|---|---|---|
| Aksen / Brand | `#C0392B` | Merah tua/oranye gelap maritim |
| Navy Utama | `#1E2A3A` | Warna teks utama & banner gelap |
| Section Alt | `#F4F6F8` | Alternating section background |
| Base | `#FFFFFF` | Background utama |
| Font | Inter | Clean modern sans-serif via Google Fonts |

---

## 📄 Routes

| Route | Halaman |
|---|---|
| `/` | Home |
| `/about/profile` | Company Profile |
| `/about/history` | Company History (Timeline) |
| `/about/commissioners` | Board of Commissioners |
| `/about/directors` | Board of Directors |
| `/fleet/:category` | Fleet (aht, tug, crane, barge, heavy) |
| `/media` | Media Center |
| `/investors/financials` | Financial Statements |
| `/contact/info` | Contact Information |
| `/contact/inquiry` | Business Inquiry |

---

## ✏️ Kustomisasi Data & Bahasa

- Edit kosakata UI: [`src/translations/translations.js`](file:///d:/project/compro%20cani/src/translations/translations.js)
- Edit unit kapal: [`src/data/fleet.js`](file:///d:/project/compro%20cani/src/data/fleet.js)
- Edit sejarah timeline: [`src/data/history.js`](file:///d:/project/compro%20cani/src/data/history.js)
- Edit dewan direksi/komisaris: [`src/data/board.js`](file:///d:/project/compro%20cani/src/data/board.js)
- Edit berita: [`src/data/news.js`](file:///d:/project/compro%20cani/src/data/news.js)
- Edit laporan keuangan: [`src/data/financials.js`](file:///d:/project/compro%20cani/src/data/financials.js)
