// src/data/fleet.js
export const fleetCategories = [
  { id: 'aht', label: 'AHT', fullLabel: 'Anchor Handling Tug' },
  { id: 'tug', label: 'Tug Boat', fullLabel: 'Tug Boat' },
  { id: 'crane', label: 'Floating Crane', fullLabel: 'Floating Crane' },
  { id: 'barge', label: 'Barge', fullLabel: 'Barge' },
  { id: 'heavy', label: 'Heavy Equipment', fullLabel: 'Heavy Equipment' },
];

export const charterTypes = [
  { code: 'TC', label: 'Time Charter', desc: 'Sewa kapal beserta awak untuk periode tertentu' },
  { code: 'FC', label: 'Freight Charter', desc: 'Sewa berdasarkan muatan yang diangkut' },
  { code: 'VC', label: 'Voyage Charter', desc: 'Sewa untuk satu perjalanan tertentu' },
  { code: 'BC', label: 'Bareboat Charter', desc: 'Sewa kapal tanpa awak dan perlengkapan' },
];

export const fleetData = {
  aht: [
    { name: 'CNI COMMANDER', hp: '6,000 BHP', bollardPull: '80 Ton', year: 2008, flag: 'Indonesia', charter: ['TC', 'BC'] },
    { name: 'CNI PIONEER', hp: '4,800 BHP', bollardPull: '65 Ton', year: 2010, flag: 'Indonesia', charter: ['TC', 'FC'] },
    { name: 'CNI NAVIGATOR', hp: '5,200 BHP', bollardPull: '70 Ton', year: 2012, flag: 'Indonesia', charter: ['TC', 'BC'] },
    { name: 'CNI EXPLORER', hp: '4,200 BHP', bollardPull: '55 Ton', year: 2009, flag: 'Indonesia', charter: ['TC', 'VC'] },
    { name: 'CNI WARRIOR', hp: '6,400 BHP', bollardPull: '85 Ton', year: 2013, flag: 'Indonesia', charter: ['TC', 'BC'] },
  ],
  tug: [
    { name: 'CNI ASSIST 1', hp: '2,400 BHP', bollardPull: '30 Ton', year: 2007, flag: 'Indonesia', charter: ['TC', 'VC'] },
    { name: 'CNI ASSIST 2', hp: '2,400 BHP', bollardPull: '30 Ton', year: 2007, flag: 'Indonesia', charter: ['TC', 'VC'] },
    { name: 'CNI ASSIST 3', hp: '2,800 BHP', bollardPull: '35 Ton', year: 2011, flag: 'Indonesia', charter: ['TC', 'FC'] },
    { name: 'CNI HARBOR 1', hp: '1,800 BHP', bollardPull: '22 Ton', year: 2005, flag: 'Indonesia', charter: ['TC', 'VC'] },
    { name: 'CNI HARBOR 2', hp: '1,800 BHP', bollardPull: '22 Ton', year: 2006, flag: 'Indonesia', charter: ['TC', 'VC'] },
    { name: 'CNI HARBOR 3', hp: '2,000 BHP', bollardPull: '25 Ton', year: 2009, flag: 'Indonesia', charter: ['TC', 'VC'] },
  ],
  crane: [
    { name: 'CNI CRANE I', capacity: '300 Ton', boom: '50 m', year: 2010, flag: 'Indonesia', charter: ['TC', 'BC'] },
    { name: 'CNI CRANE II', capacity: '500 Ton', boom: '60 m', year: 2012, flag: 'Indonesia', charter: ['TC', 'BC'] },
    { name: 'CNI CRANE III', capacity: '150 Ton', boom: '40 m', year: 2008, flag: 'Indonesia', charter: ['TC', 'FC'] },
  ],
  barge: [
    { name: 'CNI BARGE 3000', dwt: '3,000 DWT', loa: '80 m', year: 2006, flag: 'Indonesia', charter: ['TC', 'FC', 'VC'] },
    { name: 'CNI BARGE 5000', dwt: '5,000 DWT', loa: '100 m', year: 2008, flag: 'Indonesia', charter: ['TC', 'FC', 'VC'] },
    { name: 'CNI BARGE 8000', dwt: '8,000 DWT', loa: '120 m', year: 2010, flag: 'Indonesia', charter: ['TC', 'BC'] },
    { name: 'CNI BARGE 10000', dwt: '10,000 DWT', loa: '135 m', year: 2013, flag: 'Indonesia', charter: ['TC', 'BC'] },
    { name: 'CNI OIL BARGE 1', dwt: '2,500 DWT', loa: '75 m', year: 2007, flag: 'Indonesia', charter: ['TC', 'FC'] },
  ],
  heavy: [
    { name: 'CNI EXCAVATOR 01', type: 'Excavator Amphibi', capacity: '1.2 m³', year: 2011, flag: 'Indonesia', charter: ['TC'] },
    { name: 'CNI EXCAVATOR 02', type: 'Excavator Amphibi', capacity: '1.2 m³', year: 2011, flag: 'Indonesia', charter: ['TC'] },
    { name: 'CNI BULLDOZER 01', type: 'Bulldozer D8R', capacity: '385 HP', year: 2009, flag: 'Indonesia', charter: ['TC'] },
    { name: 'CNI CRANE DARAT 01', type: 'Crawler Crane', capacity: '200 Ton', year: 2012, flag: 'Indonesia', charter: ['TC', 'BC'] },
  ],
};
