export interface Service {
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  image?: string;
  images?: string[];
  gallery?: string[];
}

export const services: Service[] = [
  {
    title: 'Trockenbau & Innenausbau',
    description: 'Komplettlösungen für Wand, Decke und Boden in Trockenbauweise. Dachgeschossausbau, Raumtrennung und mehr.',
    longDescription: 'Ob Dachgeschossausbau, Raumtrennung oder komplett neuer Innenausbau — wir realisieren Ihre Vorstellungen in Trockenbauweise. Sauber, schnell und mit höchster Präzision. Von der Unterkonstruktion bis zur fertigen Oberfläche bekommen Sie bei uns alles aus einer Hand.',
    icon: 'trowel',
    features: [
      'Dachgeschossausbau',
      'Raumtrennung & Trennwände',
      'Schallschutz & Brandschutz',
      'Abgehängte Decken',
      'Trockenestrich & Bodensysteme',
    ],
    images: ['/images/service-trockenbau.jpg'],
  },
  {
    title: 'Malerarbeiten',
    description: 'Meisterhaft, dekorativ und umweltbewusst. Von einfachen Anstrichen bis hin zu umfassendem Raumdesign.',
    longDescription: 'Als Malermeisterbetrieb liegt uns die Qualität besonders am Herzen. Wir bieten Ihnen alles vom klassischen Wandanstrich über Tapezierarbeiten bis hin zu dekorativen Techniken und Farbkonzepten. Jeder Raum bekommt seinen individuellen Charakter.',
    icon: 'roller',
    features: [
      'Innenanstriche & Wandgestaltung',
      'Tapezierarbeiten',
      'Dekorative Techniken & Spachteltechnik',
      'Lackierarbeiten',
      'Farbberatung & Raumkonzepte',
    ],
    images: ['/images/maler_tobias_streichen.jpg', '/images/Maler_Tobias_Airflow_System.jpg', '/images/Maler_tobias_streichen_1.jpg'],
    gallery: [
      '/images/maler_tobias_streichen.jpg',
      '/images/Maler_Tobias_Airflow_System.jpg',
      '/images/Maler_tobias_streichen_1.jpg',
      '/images/Maler_Tobias_abkleben.jpg',
      '/images/Maler_Tobias_Leibung.jpg',
      '/images/Maler_tobias_Airflow_system_2.jpg',
    ],
  },
  {
    title: 'Bodenbeläge',
    description: 'Verlegen von Parkett-, Vinyl-, Laminat-, Holz- und Teppichböden, inklusive Vorbereitung des Unterbodens.',
    longDescription: 'Der Boden ist das Fundament jedes Raumes. Wir verlegen sämtliche Bodenbeläge fachgerecht und sorgen dafür, dass Ihr neuer Boden nicht nur gut aussieht, sondern auch langlebig ist. Vom Unterboden bis zur fertigen Oberfläche — alles aus einer Hand.',
    icon: 'floor',
    features: [
      'Parkett & Holzböden',
      'Vinyl & Designbeläge',
      'Laminat & Fertigparkett',
      'Teppichböden',
      'Unterbodenaufbau & Ausgleich',
    ],
    images: ['/images/service-boden.jpg'],
  },
  {
    title: 'Fassadengestaltung',
    description: 'Fassadengestaltung und -sanierung sowie professionelle Wärmedämmung für Ihr Gebäude.',
    longDescription: 'Die Fassade ist die Visitenkarte Ihres Hauses. Wir gestalten und sanieren Ihre Fassade professionell — inklusive Wärmedämmverbundsysteme (WDVS) für maximale Energieeffizienz. So sparen Sie Heizkosten und Ihr Haus erstrahlt in neuem Glanz.',
    icon: 'facade',
    features: [
      'Fassadenanstrich & Sanierung',
      'Wärmedämmverbundsystem (WDVS)',
      'Putzarbeiten & Strukturputz',
      'Sockelabdichtung',
      'Energetische Beratung',
    ],
    images: ['/images/service-fassade.jpg'],
  },
  {
    title: 'Bäderrenovierung',
    description: 'Komplettsanierung von Bädern — von der Planung bis zur schlüsselfertigen Übergabe.',
    longDescription: 'Ihr Traumbad — wir machen es möglich. Von der ersten Idee über die Planung bis zur schlüsselfertigen Übergabe kümmern wir uns um alles. Fliesen, Sanitär, Trockenbau und Malerarbeiten — bei uns bekommen Sie die komplette Badsanierung ohne Koordinationsstress.',
    icon: 'bath',
    features: [
      'Komplettbadsanierung',
      'Fliesenarbeiten & Mosaik',
      'Barrierefreie Bäder',
      'Trockenbau im Nassbereich',
      'Schlüsselfertige Übergabe',
    ],
    images: ['/images/herobad1.jpeg', '/images/herobad2.jpeg', '/images/herobad3.jpeg'],
  },
  {
    title: 'Fliesenarbeiten',
    description: 'Fachgerechte Verlegung von Fliesen, Platten, Mosaik und Naturstein in Bad, Küche und mehr.',
    longDescription: 'Fliesen sind zeitlos und vielseitig. Wir verlegen alle Arten von Fliesen, Platten und Naturstein — ob im Bad, in der Küche oder im Eingangsbereich. Mit Präzision und Liebe zum Detail sorgen wir für ein perfektes Ergebnis.',
    icon: 'tiles',
    features: [
      'Wand- & Bodenfliesen',
      'Großformatige Fliesen',
      'Mosaik & Naturstein',
      'Abdichtung im Nassbereich',
      'Fugenarbeiten & Sanierung',
    ],
  },
  {
    title: 'Deckensysteme',
    description: 'Originelle und differenzierte Gestaltung von Decken — abgehängte Decken, Lichtvouten und Akustiklösungen.',
    longDescription: 'Decken können mehr als nur den Raum nach oben abschließen. Wir gestalten abgehängte Decken mit integrierten Lichtkonzepten, Lichtvouten für indirektes Licht und Akustikdecken für optimalen Schallschutz. Ob modern oder klassisch — wir finden die richtige Lösung.',
    icon: 'ceiling',
    features: [
      'Abgehängte Decken',
      'Lichtvouten & indirektes Licht',
      'Akustikdecken',
      'Designdecken & Sonderlösungen',
      'Deckenverkleidungen',
    ],
  },
  {
    title: 'Montage & Demontage',
    description: 'Professionelle Montage und Demontage von Türen, Möbeln, Fenstern und vielem mehr.',
    longDescription: 'Manchmal braucht es einfach einen Profi, der anpackt. Wir übernehmen die Montage und Demontage von Türen, Fenstern, Einbauschränken und vielem mehr. Schnell, sauber und zuverlässig — damit Sie sich auf die schönen Dinge konzentrieren können.',
    icon: 'wrench',
    features: [
      'Türenmontage & -austausch',
      'Fenstermontage',
      'Einbauschränke & Regale',
      'Demontage & Entsorgung',
      'Kleinmontagen aller Art',
    ],
  },
  {
    title: 'Reparaturarbeiten',
    description: 'Reparaturarbeiten diverser Art am Haus, um größere Schäden rechtzeitig zu vermeiden.',
    longDescription: 'Kleine Schäden werden schnell zu großen Problemen, wenn man sie ignoriert. Wir reparieren Löcher in Wänden, beschädigte Böden, defekte Fliesen und vieles mehr — schnell und unkompliziert. Lieber heute reparieren als morgen sanieren.',
    icon: 'tools',
    features: [
      'Wand- & Deckenreparaturen',
      'Bodenreparaturen',
      'Fliesenreparaturen',
      'Feuchtigkeitsschäden',
      'Allgemeine Instandhaltung',
    ],
  },
];
