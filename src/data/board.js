// src/data/board.js
import imgRichieLimson from '../assets/images/RICHIE-LIMSON.jpg';
import imgHeryantoCokro from '../assets/images/HERYANTO-COKRO.png';
import imgAngAhNui from '../assets/images/ANG-AH-NUI.png';
import imgYanuarWijaya from '../assets/images/H.-YANUAR-C.-WIJAYA.jpg';
import imgAngKokTian from '../assets/images/ANG-KOK-TIAN.png';
import imgRiduanKosasih from '../assets/images/RIDUAN-KOSASIH.jpeg';

export const commissioners = [
  {
    id: 1,
    name: 'RICHIE LIMSON',
    title: {
      en: 'President Commissioner',
      id: 'Presiden Komisaris',
    },
    photo: imgRichieLimson,
    color: '#1E2A3A',
    initial: 'RL',
    bio: {
      en: 'Serves as President Commissioner of PT Capitol Nusantara Indonesia Tbk. Provides comprehensive supervisory leadership, strategic corporate oversight, and ensures adherence to Good Corporate Governance (GCG) principles across all company operations.',
      id: 'Menjabat sebagai Presiden Komisaris PT Capitol Nusantara Indonesia Tbk. Bertanggung jawab atas pengawasan strategis perseroan, tata kelola perusahaan yang baik (GCG), serta memberikan arahan kebijakan umum kepada Direksi.',
    },
  },
  {
    id: 2,
    name: 'HERYANTO COKRO',
    title: {
      en: 'Independent Commissioner',
      id: 'Komisaris Independen',
    },
    photo: imgHeryantoCokro,
    color: '#2C3E50',
    initial: 'HC',
    bio: {
      en: 'Serves as Independent Commissioner, exercising independent oversight over corporate compliance, internal audit controls, risk management systems, and public market regulatory disclosures adhering to OJK and IDX standards.',
      id: 'Menjabat sebagai Komisaris Independen dengan fokus pada pengawasan independen, kepatuhan pasar modal (OJK & BEI), manajemen risiko, efektivitas komite audit, dan transparansi pelaporan publik.',
    },
  },
];

export const directors = [
  {
    id: 1,
    name: 'ANG AH NUI',
    title: {
      en: 'President Director',
      id: 'Direktur Utama',
    },
    photo: imgAngAhNui,
    color: '#C0392B',
    initial: 'AN',
    bio: {
      en: 'President Director and co-founder of PT Capitol Nusantara Indonesia Tbk. Brings decades of international leadership experience across maritime logistics, shipbuilding, and offshore chartering, directing the corporate strategy and fleet growth across Indonesia.',
      id: 'Direktur Utama dan pendiri PT Capitol Nusantara Indonesia Tbk. Memiliki pengalaman kepemimpinan puluhan tahun di industri maritim internasional, galangan kapal, dan logistik perkapalan lepas pantai, memimpin strategi pertumbuhan armada dan ekspansi bisnis perseroan.',
    },
  },
  {
    id: 2,
    name: 'H. YANUAR C. WIJAYA',
    title: {
      en: 'Director',
      id: 'Direktur',
    },
    photo: imgYanuarWijaya,
    color: '#1E2A3A',
    initial: 'YW',
    bio: {
      en: 'Director of the company with extensive executive experience in maritime operations, fleet administration, statutory certifications, and regulatory institutional relations throughout the Indonesian archipelago.',
      id: 'Direktur perseroan dengan pengalaman eksekutif mendalam di bidang manajemen operasional perkapalan, perizinan dan statutori maritim, serta koordinasi kelembagaan di seluruh perairan kepulauan Indonesia.',
    },
  },
  {
    id: 3,
    name: 'ANG KOK TIAN',
    title: {
      en: 'Director',
      id: 'Direktur',
    },
    photo: imgAngKokTian,
    color: '#2C3E50',
    initial: 'AT',
    bio: {
      en: 'Director with distinguished marine engineering and commercial shipbuilding background. Oversees technical vessel capabilities, capital equipment modernization, and regional maritime alliances.',
      id: 'Direktur dengan latar belakang teknik perkapalan dan konstruksi kapal internasional. Mengawasi keandalan teknis armada kapal, modernisasi alat berat maritim, serta kemitraan bisnis regional.',
    },
  },
  {
    id: 4,
    name: 'RIDUAN KOSASIH',
    title: {
      en: 'Company Secretary',
      id: 'Sekretaris Perusahaan',
    },
    photo: imgRiduanKosasih,
    color: '#1E2A3A',
    initial: 'RK',
    bio: {
      en: 'Serves as Corporate Secretary, responsible for statutory compliance, capital market information disclosures to the Financial Services Authority (OJK) and Indonesia Stock Exchange (IDX), and institutional investor relations.',
      id: 'Menjabat sebagai Sekretaris Perusahaan (Corporate Secretary), memimpin keterbukaan informasi pasar modal, kepatuhan regulasi OJK & BEI, serta koordinasi hubungan kelembagaan dan pemegang saham publik.',
    },
  },
];
