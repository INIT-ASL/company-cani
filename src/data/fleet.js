// src/data/fleet.js

export const fleetCategories = [
  {
    id: 'aht',
    label: 'AHT',
    fullLabel: {
      en: 'Anchor Handling Tug (AHT)',
      id: 'Anchor Handling Tug (AHT)',
    },
    description: {
      en: 'High-power anchor handling and ocean towage vessels engineered for offshore exploration platforms and rig moves.',
      id: 'Kapal berkekuatan tinggi untuk penanganan jangkar (anchor handling) dan penundaan laut lepas bagi rig minyak dan gas.',
    },
  },
  {
    id: 'tug',
    label: 'Tug Boat',
    fullLabel: {
      en: 'Tug Boat',
      id: 'Kapal Tunda (Tug Boat)',
    },
    description: {
      en: 'Maneuverable tugs for coastal towage, harbor assist, barge escort, and terminal berthing support.',
      id: 'Kapal tunda lincah untuk penundaan tongkang, asistensi kapal di pelabuhan, dan pemanduan terminal energi.',
    },
  },
  {
    id: 'crane',
    label: 'Floating Crane',
    fullLabel: {
      en: 'Floating Crane',
      id: 'Derek Terapung (Floating Crane)',
    },
    description: {
      en: 'Heavy-lift floating crane units up to 250-ton capacity for offshore transshipment, salvage, and marine construction.',
      id: 'Unit derek terapung hingga kapasitas 250 ton untuk alih muat (transshipment), konstruksi dermaga, dan instalasi lepas pantai.',
    },
  },
  {
    id: 'barge',
    label: 'Barge & Oil Barge',
    fullLabel: {
      en: 'Barge & Oil Barge',
      id: 'Tongkang Dek & Minyak',
    },
    description: {
      en: 'Flat top deck cargo barges up to 330 ft and split hopper barges from associates for bulk materials and dredge transport.',
      id: 'Tongkang geladak datar kapasitas hingga 330 kaki dan tongkang hopper dari mitra asosiasi untuk pengangkutan material curah.',
    },
  },
  {
    id: 'heavy',
    label: 'Heavy Equipment',
    fullLabel: {
      en: 'Heavy Equipment',
      id: 'Alat Berat',
    },
    description: {
      en: 'Specialized heavy equipment and marine engineering machinery for offshore operations.',
      id: 'Peralatan alat berat dan permesinan khusus untuk menunjang operasional maritim.',
    },
  },
];

export const charterTypes = [
  {
    code: 'TC',
    label: 'Time Charter',
    desc: {
      en: 'Full vessel lease including certified crew, provisioning, and planned technical maintenance.',
      id: 'Sewa kapal lengkap beserta awak bersertifikat, perbekalan, dan pemeliharaan teknis berkala.',
    },
  },
  {
    code: 'FC',
    label: 'Freight Charter',
    desc: {
      en: 'Charter rates structured per metric ton or cubic volume of cargo delivered.',
      id: 'Tarif sewa berdasarkan volume kubikasi atau bobot metrik ton kargo yang diangkut.',
    },
  },
  {
    code: 'VC',
    label: 'Voyage Charter',
    desc: {
      en: 'Point-to-point dedicated transit charter from loading anchorage to destination port.',
      id: 'Sewa kapal untuk satu rute penugasan tertentu dari pelabuhan muat ke pelabuhan bongkar.',
    },
  },
  {
    code: 'BC',
    label: 'Bareboat Charter',
    desc: {
      en: 'Bare hull vessel charter without operational crew or consumables for flexible client deployment.',
      id: 'Sewa fisik kapal tanpa awak dan bahan bakar untuk pengelolaan mandiri oleh penyewa.',
    },
  },
];

export const fleetData = {
  // AHT (Anchor Handling Tugs) - 5 units (All with PDFs)
  aht: [
    {
      name: 'ASL MANTRUS',
      power: '2 x 1900 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/aht/ASL-Mantrus-CNI-ship-particular.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'ASL MULIA',
      power: '2 x 1800 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/aht/ASL-MULIA-CNI-Ship-Particular.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'ASL SENTOSA',
      power: '2 x 1800 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/aht/ASL-SENTOSA-CNI-ShipParticular.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'ASL TRIAKSA',
      power: '2 x 1600 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/aht/Triaksa-SP-CNI-spec.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'QAL RANGER',
      power: '2 x 1498 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/aht/QAL-RANGER-CNI-ship-particulars.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
  ],

  // Tug Boats - 19 units (18 with PDFs, 1 without PDF)
  tug: [
    {
      name: 'ASL ABADI 1',
      power: '2 x 600 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/22.-ASL-ABADI-1-Ship-Particular.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'ASL ABADI 2',
      power: '2 x 600 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/TB1200HP-ASL-Abadi-2-Ship-Particulars.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'ASL ABADI 3',
      power: '2 x 600 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/24.-ASL-ABADI-3-ship-particulars.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'ASL ABADI 4',
      power: '2 x 600 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/TB1200HP-ASL-Abadi-4-Ship-Particulars.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'ASL ABADI 5',
      power: '2 x 600 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/26.-TB.-ASL-ABADI-5-CNI-ship-particulars.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'ASL DELTA',
      power: '2 x 1080 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/27.-ASL-Delta-2000-HP-CNI-ship-particulars.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'ASL FALCON',
      power: '2 x 1598 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/28.-Falcon-CNI-ship-particulars.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'ASL MARINE 8',
      power: '2 x 540 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: null, // No PDF found in folder
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'ASL PROSPER V',
      power: '2 x 600 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/31.-ASL-Prosper-V-CNI-ship-particulars.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'ASL PROSPER VI',
      power: '2 x 600 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/32.-ASL-Prosper-VI-CNI-Ship-Particulars.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'ASL VICTORY',
      power: '2 x 1445 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/33.-ASL-VictoryCNI-ship-particulars.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'CAPITOL T2001',
      power: '2 x 1016 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/34.-Capitol-T2001.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'CAPITOL T2002',
      power: '2 x 1200 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/35.-CAPITOL-T2002-2400HP-CNI-ship-particulars.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'CAPITOL T2005',
      power: '2 x 1000 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/CAPITOL-T2005-CNI-ship-particular.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'KARYA ABADI 6',
      power: '2 x 592 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/37.-Karya-Abadi-6-CNI-ship-particulars.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'KARYA ABADI 8',
      power: '2 x 1018 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/38.-Karya-Abadi-8.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'NUSANTARA ABADI 1',
      power: '2 x 1000 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/39.-Nusantara-Abadi-1-CNI-ship-particulars.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'TRISAKTI II',
      power: '2 x 600 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/TRISAKTI-II-CNI-ShipParticular.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
    {
      name: 'WHALE 3',
      power: '2 x 848 HP',
      flag: 'Indonesia',
      charter: ['TC', 'FC', 'VC', 'BC'],
      pdfUrl: '/fleet/tug-boat/WHALE-3.pdf',
      group: 'PT Capitol Nusantara Indonesia Tbk',
    },
  ],

  // Floating Crane - 8 units
  crane: [
    // PT Capitol Nusantara Indonesia Tbk
    {
      name: 'TMN 305',
      type: 'Starboard Pedestal Crane Barge',
      capacity: 'SWL 30 Ton (10,000 MT/day)',
      dimension: '57.0 x 22.0 x 5.5 m',
      craneModel: 'Liebherr Four Rope Grabs Crane',
      charter: ['TC', 'FC', 'BC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: null, // No PDF in folder
      description: 'Starboard pedestal crane barge suitable for bulk cargo handling (coal, iron ore). Single Liebherr Four Rope Grabs Crane on barge 57.0 x 22.0 x 5.5 m. SWL 30 tons, handles up to 10,000 MT/day.',
    },
    {
      name: '250 Ton Crane Barge',
      type: 'Crawler Crane on Barge',
      capacity: '250 Ton',
      dimension: '180 ft Barge',
      craneModel: 'Kobelco Crawler Crane 7250-2F',
      charter: ['TC', 'FC', 'BC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: '/fleet/floating-crane/Ship-particular-Kobelco-7250-2F.pdf',
      description: '250 Ton Kobelco crawler crane 7250-2F mounted on top of 180 ft barge Capitol 1801.',
    },

    // Associate: PT Awak Samudera Transportasi
    {
      name: 'Toll Suralaya',
      type: 'Transhipment Crane Barge',
      capacity: '30 Ton Grab (12,000 MT/day)',
      craneModel: '2 units MacGregor Deck Crane K 3030-4HD',
      charter: ['TC', 'FC'],
      group: 'PT Awak Samudera Transportasi (Associate)',
      pdfUrl: '/fleet/floating-crane/Crane-Barge-Toll-Suralaya-CNI.pdf',
      description: 'Equipped with 2 units MacGregor Deck Crane model K 3030-4HD with 30-ton grab capacity. Can handle loose bulk cargo up to 12,000 MT/day.',
    },
    {
      name: 'Harita 88',
      type: 'Grab Dredger (Clamshell)',
      capacity: '60 Ton / 20 m³ Grab Bucket',
      dimension: 'Dredge up to -50 m depth',
      craneModel: 'Clamshell Dredger Grab Bucket',
      charter: ['TC', 'FC'],
      group: 'PT Awak Samudera Transportasi (Associate)',
      pdfUrl: '/fleet/floating-crane/Harita-88-Grab-Dredger-Specification-CNI.pdf',
      description: 'Equipped with 60 ton 20 m³ grab bucket, clamshell dredger Harita 88 can dredge up to -50 m depth.',
    },

    // Associate: PT Agus Suta Line
    {
      name: 'CB Manunggal 150',
      type: 'Floating Crane Barge',
      capacity: '100 Ton',
      charter: ['TC', 'BC'],
      group: 'PT Agus Suta Line (Associate)',
      pdfUrl: '/fleet/floating-crane/100-Ton-Crane-Barge-Manunggal-150-CNI.pdf',
      description: '100 Ton Floating Crane Barge CB Manunggal 150.',
    },
    {
      name: 'CB ASL 28',
      type: 'Floating Crane Barge',
      capacity: '120 Ton',
      charter: ['TC', 'BC'],
      group: 'PT Agus Suta Line (Associate)',
      pdfUrl: '/fleet/floating-crane/120-Ton-Crane-Barge-ASL-28-CNI.pdf',
      description: '120 Ton Floating Crane Barge CB ASL 28.',
    },
    {
      name: 'CB ASL 42',
      type: 'Floating Crane Barge',
      capacity: '120 Ton',
      charter: ['TC', 'BC'],
      group: 'PT Agus Suta Line (Associate)',
      pdfUrl: '/fleet/floating-crane/120-Ton-Crane-Barge-ASL-42-CNI.pdf',
      description: '120 Ton Floating Crane Barge CB ASL 42.',
    },
    {
      name: 'CB ASL 60',
      type: 'Floating Crane Barge',
      capacity: '242 Ton',
      charter: ['TC', 'BC'],
      group: 'PT Agus Suta Line (Associate)',
      pdfUrl: '/fleet/floating-crane/242-Ton-Crane-Barge-ASL-69-CNI.pdf',
      description: '242 Ton Floating Crane Barge CB ASL 60 (ASL 69 series).',
    },
  ],

  // Barge & Hopper - 21 units
  barge: [
    // PT Capitol Nusantara Indonesia Tbk (Main Barges)
    {
      name: 'AKT 151',
      dimension: '150 x 50 x 10 ft',
      deckLoad: '5 t/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: '/fleet/barge/6.-AKT-151-CNI-Particulars.pdf',
    },
    {
      name: 'AKT 153',
      dimension: '150 x 50 x 10 ft',
      deckLoad: '5 t/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: '/fleet/barge/7.-AKT-153-CNI-particulars-150-ft.pdf',
    },
    {
      name: 'AKT 231',
      dimension: '230 x 64 x 14 ft',
      deckLoad: '7 t/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: '/fleet/barge/8.-AKT-231-ship-particular.pdf',
    },
    {
      name: 'AKT 232',
      dimension: '230 x 64 x 14 ft',
      deckLoad: '7 t/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: null, // No PDF in folder
    },
    {
      name: 'AKT 233',
      dimension: '230 x 64 x 14 ft',
      deckLoad: '7 t/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: '/fleet/barge/10.-AKT-233-CNI-particulars-230ft.pdf',
    },
    {
      name: 'AMH 3605',
      dimension: '230 x 64 x 14 ft',
      deckLoad: '5 t/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: null, // No PDF in folder
    },
    {
      name: 'AMH 4504',
      dimension: '250 x 68 x 15 ft',
      deckLoad: '5 t/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: '/fleet/barge/12.-AMH-4504-ship-particulars.pdf',
    },
    {
      name: 'AST 2401',
      dimension: '240 x 70 x 16 ft',
      deckLoad: '5 t/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: null, // No PDF in folder
    },
    {
      name: 'AST 2402',
      dimension: '240 x 70 x 16 ft',
      deckLoad: '5 t/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: null, // No PDF in folder
    },
    {
      name: 'AST 2403',
      dimension: '240 x 70 x 16 ft',
      deckLoad: '5 t/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: null, // No PDF in folder
    },
    {
      name: 'CAPITOL 1801',
      dimension: '180 x 60 x 12 ft',
      deckLoad: '15 t/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: '/fleet/barge/16.-CAPITOL-1801-CNI-particulars.pdf',
    },
    {
      name: 'CAPITOL 1802',
      dimension: '180 x 60 x 12 ft',
      deckLoad: '15 t/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: '/fleet/barge/17.-CAPITOL-1802-CNI-ship-particulars.pdf',
    },
    {
      name: 'INTAN 3607',
      dimension: '230 x 64 x 14 ft',
      deckLoad: '7 t/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: null, // No PDF in folder
    },
    {
      name: 'LIMIN 3301',
      dimension: '330 x 90 x 21 ft',
      deckLoad: '10 ton/m²',
      charter: ['TC', 'BC', 'FC'],
      group: 'PT Capitol Nusantara Indonesia Tbk',
      pdfUrl: '/fleet/barge/19.-LIMIN-3301-CNI-Particular-330ft.pdf',
    },

    // Associate: PT Awak Samudera Transportasi (Hopper Barges)
    {
      name: 'AOM Hopper 2',
      type: 'Hopper Barge',
      capacity: '1,000 m³',
      charter: ['TC', 'BC'],
      group: 'PT Awak Samudera Transportasi (Associate)',
      pdfUrl: '/fleet/barge/1000m3-AOM-Hpper-2-CANI.pdf',
    },
    {
      name: 'AOM Hopper 17',
      type: 'Hopper Barge',
      capacity: '1,500 m³',
      charter: ['TC', 'BC'],
      group: 'PT Awak Samudera Transportasi (Associate)',
      pdfUrl: '/fleet/barge/1500m3-AOM-Hopper-17-Specs-CNI.pdf',
    },
    {
      name: 'AOM Hopper 18',
      type: 'Hopper Barge',
      capacity: '1,500 m³',
      charter: ['TC', 'BC'],
      group: 'PT Awak Samudera Transportasi (Associate)',
      pdfUrl: '/fleet/barge/1500m3-AOM-Hopper-18-Specs-CNI.pdf',
    },
    {
      name: 'AOM Hopper 19',
      type: 'Hopper Barge',
      capacity: '1,500 m³',
      charter: ['TC', 'BC'],
      group: 'PT Awak Samudera Transportasi (Associate)',
      pdfUrl: '/fleet/barge/1500m3-AOM-Hopper-19-Specs-CNI.pdf',
    },
    {
      name: 'AOM Hopper 21',
      type: 'Hopper Barge',
      capacity: '1,500 m³',
      charter: ['TC', 'BC'],
      group: 'PT Awak Samudera Transportasi (Associate)',
      pdfUrl: '/fleet/barge/1500m3-AOM-Hopper-21-Specs-CNI.pdf',
    },

    // Associate: PT Agus Suta Line (Hopper Barges)
    {
      name: 'MG V',
      type: 'Hopper Barge',
      capacity: '500 m³',
      charter: ['TC', 'BC'],
      group: 'PT Agus Suta Line (Associate)',
      pdfUrl: '/fleet/barge/500-m3-Hopper-Barge-MG-V-CNI.pdf',
    },
    {
      name: 'SM122',
      type: 'Hopper Barge',
      capacity: '500 m³',
      charter: ['TC', 'BC'],
      group: 'PT Agus Suta Line (Associate)',
      pdfUrl: '/fleet/barge/500-m3-Hopper-Barge-SM-122-CNI.pdf',
    },
  ],

  // Heavy Equipment: Under development
  heavy: [],
};
