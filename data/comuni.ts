export const comuniCatania = [
  'Aci Bonaccorsi',
  'Aci Castello',
  'Aci Catena',
  'Aci Sant\'Antonio',
  'Acireale',
  'Adrano',
  'Belpasso',
  'Biancavilla',
  'Bronte',
  'Calatabiano',
  'Caltagirone',
  'Camporotondo Etneo',
  'Castel di Iudica',
  'Castiglione di Sicilia',
  'Catania',
  'Fiumefreddo di Sicilia',
  'Giarre',
  'Gravina di Catania',
  'Grammichele',
  'Licodia Eubea',
  'Linguaglossa',
  'Maletto',
  'Maniace',
  'Mascali',
  'Mascalucia',
  'Mazzarrone',
  'Militello in Val di Catania',
  'Milo',
  'Mineo',
  'Mirabella Imbaccari',
  'Misterbianco',
  'Motta Sant\'Anastasia',
  'Nicolosi',
  'Palagonia',
  'Paterno',
  'Pedara',
  'Piedimonte Etneo',
  'Ragalna',
  'Ramacca',
  'Randazzo',
  'Riposto',
  'San Cono',
  'San Giovanni la Punta',
  'San Gregorio di Catania',
  'San Michele di Ganzaria',
  'San Pietro Clarenza',
  'Sant\'Agata li Battiati',
  'Sant\'Alfio',
  'Santa Maria di Licodia',
  'Santa Venerina',
  'Scordia',
  'Trecastagni',
  'Tremestieri Etneo',
  'Valverde',
  'Viagrande',
  'Vizzini',
  'Zafferana Etnea'
];

export const getSlugFromComune = (comune: string): string => {
  return comune
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/\s+/g, '-')
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u');
};

export const getComuneFromSlug = (slug: string): string => {
  const comune = comuniCatania.find(c => getSlugFromComune(c) === slug);
  return comune || '';
};