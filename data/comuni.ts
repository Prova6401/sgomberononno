export interface Comune {
  id: string;
  nome: string;
  slug: string;
  provincia: string;
  descrizione: string;
  popolazione?: number;
  servizi: string[];
  metaTitle: string;
  metaDescription: string;
}

export const comuniCatania: Comune[] = [
  {
    id: '1',
    nome: 'Catania',
    slug: 'catania',
    provincia: 'CT',
    descrizione: 'Servizio di sgombero professionale nel capoluogo etneo. Operiamo in tutti i quartieri di Catania con mezzi attrezzati e personale qualificato.',
    popolazione: 311584,
    servizi: ['Sgombero appartamenti', 'Sgombero cantine', 'Sgombero uffici', 'Trasporto mobili', 'Smaltimento rifiuti'],
    metaTitle: 'Sgombero Catania - Servizio Professionale e Veloce | TR Trasporti',
    metaDescription: 'Servizio di sgombero a Catania rapido e professionale. Sgomberiamo appartamenti, cantine, uffici. Chiama 3490073264 per preventivo gratuito.'
  },
  {
    id: '2',
    nome: 'Gravina di Catania',
    slug: 'gravina-di-catania',
    provincia: 'CT',
    descrizione: 'Sgombero rapido e professionale a Gravina di Catania. Serviamo tutto il territorio comunale con attrezzature moderne.',
    popolazione: 27851,
    servizi: ['Sgombero case', 'Sgombero garage', 'Trasporto', 'Smaltimento'],
    metaTitle: 'Sgombero Gravina di Catania - Servizio Veloce | TR Trasporti',
    metaDescription: 'Sgombero professionale a Gravina di Catania. Servizio rapido per case, garage, cantine. Preventivo gratuito: 3490073264.'
  },
  {
    id: '3',
    nome: 'Acireale',
    slug: 'acireale',
    provincia: 'CT',
    descrizione: 'Servizio di sgombero ad Acireale e frazioni. Operiamo con professionalità nella città barocca e dintorni.',
    popolazione: 52269,
    servizi: ['Sgombero abitazioni', 'Sgombero locali commerciali', 'Trasporto mobili', 'Pulizie post-sgombero'],
    metaTitle: 'Sgombero Acireale - Servizio Professionale | TR Trasporti',
    metaDescription: 'Sgombero ad Acireale e frazioni. Servizio completo per abitazioni e locali commerciali. Chiama 3490073264.'
  },
  {
    id: '4',
    nome: 'Paternò',
    slug: 'paterno',
    provincia: 'CT',
    descrizione: 'Sgombero a Paternò con servizio completo di trasporto e smaltimento. Interveniamo rapidamente in tutto il territorio.',
    popolazione: 47009,
    servizi: ['Sgombero completo', 'Trasporto', 'Smaltimento certificato', 'Pulizie finali'],
    metaTitle: 'Sgombero Paternò - Servizio Completo | TR Trasporti',
    metaDescription: 'Servizio di sgombero a Paternò con trasporto e smaltimento. Intervento rapido e professionale. Tel: 3490073264.'
  },
  {
    id: '5',
    nome: 'Misterbianco',
    slug: 'misterbianco',
    provincia: 'CT',
    descrizione: 'Sgombero professionale a Misterbianco. Serviamo residenze private e attività commerciali con massima efficienza.',
    popolazione: 49292,
    servizi: ['Sgombero residenziale', 'Sgombero commerciale', 'Trasporto sicuro', 'Smaltimento eco-compatibile'],
    metaTitle: 'Sgombero Misterbianco - Servizio Efficiente | TR Trasporti',
    metaDescription: 'Sgombero a Misterbianco per privati e aziende. Servizio efficiente e prezzi competitivi. Contattaci: 3490073264.'
  },
  {
    id: '6',
    nome: 'Belpasso',
    slug: 'belpasso',
    provincia: 'CT',
    descrizione: 'Servizio di sgombero a Belpasso con personale esperto. Operiamo nel rispetto dell\'ambiente e delle normative.',
    popolazione: 27002,
    servizi: ['Sgombero eco-sostenibile', 'Trasporto protetto', 'Smaltimento differenziato', 'Consulenza gratuita'],
    metaTitle: 'Sgombero Belpasso - Servizio Eco-Sostenibile | TR Trasporti',
    metaDescription: 'Sgombero a Belpasso rispettoso dell\'ambiente. Servizio completo con smaltimento differenziato. Tel: 3490073264.'
  },
  {
    id: '7',
    nome: 'Mascalucia',
    slug: 'mascalucia',
    provincia: 'CT',
    descrizione: 'Sgombero a Mascalucia con attenzione ai dettagli. Serviamo ville, appartamenti e locali con cura professionale.',
    popolazione: 31425,
    servizi: ['Sgombero ville', 'Sgombero appartamenti', 'Imballaggio professionale', 'Trasporto assicurato'],
    metaTitle: 'Sgombero Mascalucia - Servizio Accurato | TR Trasporti',
    metaDescription: 'Sgombero professionale a Mascalucia per ville e appartamenti. Servizio accurato e trasporto assicurato. Tel: 3490073264.'
  },
  {
    id: '8',
    nome: 'San Giovanni la Punta',
    slug: 'san-giovanni-la-punta',
    provincia: 'CT',
    descrizione: 'Servizio di sgombero a San Giovanni la Punta veloce e affidabile. Operiamo con mezzi moderni e personale qualificato.',
    popolazione: 21806,
    servizi: ['Sgombero veloce', 'Trasporto moderno', 'Smaltimento legale', 'Preventivi immediati'],
    metaTitle: 'Sgombero San Giovanni la Punta - Servizio Veloce | TR Trasporti',
    metaDescription: 'Sgombero veloce a San Giovanni la Punta. Mezzi moderni e preventivi immediati. Chiama ora: 3490073264.'
  },
  {
    id: '9',
    nome: 'Tremestieri Etneo',
    slug: 'tremestieri-etneo',
    provincia: 'CT',
    descrizione: 'Sgombero a Tremestieri Etneo con servizio personalizzato. Adattiamo il nostro intervento alle tue specifiche esigenze.',
    popolazione: 21281,
    servizi: ['Servizio personalizzato', 'Sgombero su misura', 'Trasporto flessibile', 'Assistenza completa'],
    metaTitle: 'Sgombero Tremestieri Etneo - Servizio Personalizzato | TR Trasporti',
    metaDescription: 'Sgombero personalizzato a Tremestieri Etneo. Servizio su misura per ogni esigenza. Contatta: 3490073264.'
  },
  {
    id: '10',
    nome: 'Sant\'Agata li Battiati',
    slug: 'sant-agata-li-battiati',
    provincia: 'CT',
    descrizione: 'Servizio di sgombero a Sant\'Agata li Battiati preciso e puntuale. Garantiamo interventi tempestivi e professionali.',
    popolazione: 9090,
    servizi: ['Interventi tempestivi', 'Sgombero preciso', 'Trasporto puntuale', 'Servizio garantito'],
    metaTitle: 'Sgombero Sant\'Agata li Battiati - Servizio Puntuale | TR Trasporti',
    metaDescription: 'Sgombero puntuale a Sant\'Agata li Battiati. Interventi tempestivi e servizio garantito. Tel: 3490073264.'
  }
];

export const getComune = (slug: string): Comune | undefined => {
  return comuniCatania.find(comune => comune.slug === slug);
};

export const getAllComuniSlugs = (): string[] => {
  return comuniCatania.map(comune => comune.slug);
};
