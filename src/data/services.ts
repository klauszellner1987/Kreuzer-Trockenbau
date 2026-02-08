export interface Service {
  title: string;
  description: string;
  icon: string;
  image?: string;
  images?: string[];
}

export const services: Service[] = [
  {
    title: 'Trockenbau & Innenausbau',
    description: 'Komplettlösungen für Wand, Decke und Boden in Trockenbauweise. Dachgeschossausbau, Raumtrennung und mehr.',
    icon: 'trowel',
    images: ['/images/service-trockenbau.jpg'],
  },
  {
    title: 'Malerarbeiten',
    description: 'Meisterhaft, dekorativ und umweltbewusst. Von einfachen Anstrichen bis hin zu umfassendem Raumdesign.',
    icon: 'roller',
    images: ['/images/service-maler.jpg'],
  },
  {
    title: 'Bodenbeläge',
    description: 'Verlegen von Parkett-, Vinyl-, Laminat-, Holz- und Teppichböden, inklusive Vorbereitung des Unterbodens.',
    icon: 'floor',
    images: ['/images/service-boden.jpg'],
  },
  {
    title: 'Fassadengestaltung',
    description: 'Fassadengestaltung und -sanierung sowie professionelle Wärmedämmung für Ihr Gebäude.',
    icon: 'facade',
    images: ['/images/service-fassade.jpg'],
  },
  {
    title: 'Bäderrenovierung',
    description: 'Komplettsanierung von Bädern — von der Planung bis zur schlüsselfertigen Übergabe.',
    icon: 'bath',
    images: ['/images/herobad1.jpeg', '/images/herobad2.jpeg', '/images/herobad3.jpeg'],
  },
  {
    title: 'Fliesenarbeiten',
    description: 'Fachgerechte Verlegung von Fliesen, Platten, Mosaik und Naturstein in Bad, Küche und mehr.',
    icon: 'tiles',
  },
  {
    title: 'Deckensysteme',
    description: 'Originelle und differenzierte Gestaltung von Decken — abgehängte Decken, Lichtvouten und Akustiklösungen.',
    icon: 'ceiling',
  },
  {
    title: 'Montage & Demontage',
    description: 'Professionelle Montage und Demontage von Türen, Möbeln, Fenstern und vielem mehr.',
    icon: 'wrench',
  },
  {
    title: 'Reparaturarbeiten',
    description: 'Reparaturarbeiten diverser Art am Haus, um größere Schäden rechtzeitig zu vermeiden.',
    icon: 'tools',
  },
];
