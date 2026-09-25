# PT Capitol Nusantara Indonesia Tbk — Company Profile Website

Website company profile modern untuk PT Capitol Nusantara Indonesia Tbk, dibangun dengan **Vite + React + React Router + Tailwind CSS + Framer Motion**.

## 🛠️ Tech Stack

| Technology | Version | Kegunaan |
|---|---|---|
| Vite | 6.x | Build tool & dev server |
| React | 18.x | UI framework |
| React Router v6 | 7.x | Client-side routing multi-page |
| Tailwind CSS v4 | 4.x | Utility-first styling |
| Framer Motion | 11.x | Animasi scroll & transisi |
| Lucide React | Latest | Icon library |

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
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          ← Navbar sticky + dropdown + mobile menu
│   │   └── Footer.jsx          ← Footer global
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
│   ├── fleet.js        ← Data armada
│   ├── history.js      ← Timeline sejarah
│   ├── board.js        ← Komisaris & Direksi
│   ├── news.js         ← Berita & pengumuman
│   └── financials.js   ← Laporan keuangan
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🎨 Design System

| Token | Nilai |
|---|---|
| Aksen / Brand | `#C0392B` (merah tua) |
| Navy (teks) | `#1E2A3A` |
| Section Alt | `#F4F6F8` |
| Base | `#FFFFFF` |
| Font | Inter (Google Fonts) |

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
| `/investors/financials` | Laporan Keuangan |
| `/contact/info` | Informasi Kontak |
| `/contact/inquiry` | Form Inquiry |

---

## ✏️ Kustomisasi Data

Edit file di `src/data/` untuk mengupdate konten tanpa menyentuh komponen:

- `fleet.js` → Tambah/hapus unit kapal
- `history.js` → Edit timeline sejarah
- `board.js` → Update direksi & komisaris
- `news.js` → Tambah berita baru
- `financials.js` → Tambah laporan keuangan

---

*Internal use — PT Capitol Nusantara Indonesia Tbk*
