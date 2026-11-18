// src/data/company.js
// Single source of truth for company corporate profile, locations, and communications

export const COMPANY = {
  name: 'PT Capitol Nusantara Indonesia Tbk',
  legalName: 'PT CAPITOL NUSANTARA INDONESIA TBK',
  shortName: 'CNI',
  ticker: 'CANI',
  exchange: 'IDX',
  fullTicker: 'IDX: CANI',
  foundingDate: '2004-08',
  ipoDate: '2014-01-16',
  cabotageCompliance: '100%',
  siteUrl: 'https://cani.cemaraintan.id',

  phone: '+62 (21) 5307340',
  email: 'Enquiry@ptcni.co.id',

  idxUrl:
    'https://www.idx.co.id/id-id/perusahaan-tercatat/profil-perusahaan-tercatat/detail-profile-perusahaan-tercatat/?kodeEmiten=CANI',

  emails: {
    primary: 'Enquiry@ptcni.co.id',
    info: 'info@cani.co.id',
  },

  whatsapp: {
    chartering: {
      number: '628119695939',
      display: '+62 811-9695-939',
      url: 'https://wa.me/628119695939',
      label: {
        en: 'Chartering',
        id: 'Sewa Armada',
      },
    },
    others: {
      number: '6282125926877',
      display: '+62 821-2592-6877',
      url: 'https://wa.me/6282125926877',
      label: {
        en: 'General Inquiries',
        id: 'Lainnya',
      },
    },
  },

  headOffice: {
    title: {
      en: 'Head Office (Jakarta)',
      id: 'Kantor Pusat (Jakarta)',
    },
    type: {
      en: 'Head Office',
      id: 'Kantor Pusat',
    },
    city: 'Jakarta Barat',
    province: 'DKI Jakarta',
    postalCode: '11550',
    country: 'Indonesia',
    address:
      'Perkantoran Permata Eksekutif Blok R.1/3-2/3, Jl. Raya Pos Pengumben, Kebun Jeruk, Jakarta Barat 11550, Indonesia',
    shortAddress:
      'Perkantoran Permata Eksekutif Blok R.1/3-2/3, Jl. Raya Pos Pengumben, Kebun Jeruk, Jakarta Barat 11550',
    geo: {
      lat: -6.21643,
      lng: 106.76483,
    },
    phone: '+62 (21) 5307340',
    phoneTel: '+62215307340',
    fax: '+62 (21) 5307343, 2933-9372',
    email: 'Enquiry@ptcni.co.id',
    hours: {
      en: 'Mon – Fri: 08:30 – 17:30 WIB',
      id: 'Senin – Jumat: 08:30 – 17:30 WIB',
    },
    mapSrc:
      'https://maps.google.com/maps?q=-6.216430438976482,106.7648256406092&t=&z=16&ie=UTF8&iwloc=B&output=embed',
  },

  branchOffice: {
    title: {
      en: 'Branch Office (Samarinda)',
      id: 'Kantor Cabang (Samarinda)',
    },
    type: {
      en: 'Branch Office',
      id: 'Kantor Cabang',
    },
    city: 'Samarinda',
    province: 'Kalimantan Timur',
    postalCode: '75113',
    country: 'Indonesia',
    address:
      'Jl. Pangeran Suriansyah No. 30–34, Samarinda 75113, Kalimantan Timur, Indonesia',
    shortAddress:
      'Jl. Pangeran Suriansyah No. 30–34, Samarinda 75113, Kalimantan Timur',
    geo: {
      lat: -0.50703,
      lng: 117.15688,
    },
    phone: '+62-541-732893',
    phoneExtra: '732897, 741921, 731898',
    phoneTel: '+62541732893',
    fax: '+62-541-732891, 738324',
    email: 'Enquiry@ptcni.co.id',
    hours: {
      en: 'Mon – Fri: 08:30 – 17:30 WITA',
      id: 'Senin – Jumat: 08:30 – 17:30 WITA',
    },
    mapSrc:
      'https://maps.google.com/maps?q=-0.5070299831621746,117.1568785705522&t=&z=16&ie=UTF8&iwloc=B&output=embed',
  },

  get offices() {
    return {
      jakarta: this.headOffice,
      samarinda: this.branchOffice,
    };
  },
};

export const SITE_URL = COMPANY.siteUrl;
export const IDX_CANI_URL = COMPANY.idxUrl;
export default COMPANY;
