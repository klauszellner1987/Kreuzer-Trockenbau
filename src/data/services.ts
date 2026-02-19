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
    description:
      'Komplettlösungen für Wand, Decke und Boden in Trockenbauweise. Dachgeschossausbau, Raumtrennung und mehr.',
    longDescription:
      'Ob Dachgeschossausbau, Raumtrennung oder komplett neuer Innenausbau — wir realisieren Ihre Vorstellungen in Trockenbauweise. Sauber, schnell und mit höchster Präzision. Von der Unterkonstruktion bis zur fertigen Oberfläche bekommen Sie bei uns alles aus einer Hand.',
    icon: 'trowel',
    features: [
      'Dachgeschossausbau',
      'Raumtrennung & Trennwände',
      'Schallschutz & Brandschutz',
      'Abgehängte Decken',
      'Trockenestrich & Bodensysteme',
    ],
    images: [
      '/images/leistungen/trockenbau/service-trockenbau.jpg',
      '/images/leistungen/trockenbau/Trockenbau_innenausbau_technik.jpg',
      '/images/leistungen/trockenbau/Trockenbau_innenausbau_aufbau.jpg',
      '/images/leistungen/trockenbau/Trockenbau_innenausbau_tueren.jpg',
      '/images/leistungen/trockenbau/handy-152.jpg',
      '/images/leistungen/trockenbau/handy-160.jpg',
      '/images/leistungen/trockenbau/handy-167.jpg',

      '/images/leistungen/trockenbau/handy-224.jpg',
    ],
    gallery: [
      '/images/leistungen/trockenbau/service-trockenbau.jpg',
      '/images/leistungen/trockenbau/Trockenbau_innenausbau_technik.jpg',
      '/images/leistungen/trockenbau/Trockenbau_innenausbau_aufbau.jpg',
      '/images/leistungen/trockenbau/Trockenbau_innenausbau_tueren.jpg',
      '/images/leistungen/trockenbau/handy-152.jpg',
      '/images/leistungen/trockenbau/handy-160.jpg',
      '/images/leistungen/trockenbau/handy-167.jpg',

      '/images/leistungen/trockenbau/handy-224.jpg',
    ],
  },
  {
    title: 'Malerarbeiten',
    description:
      'Meisterhaft, dekorativ und umweltbewusst. Von einfachen Anstrichen bis hin zu umfassendem Raumdesign.',
    longDescription:
      'Als Malermeisterbetrieb liegt uns die Qualität besonders am Herzen. Wir bieten Ihnen alles vom klassischen Wandanstrich über Tapezierarbeiten bis hin zu dekorativen Techniken und Farbkonzepten. Jeder Raum bekommt seinen individuellen Charakter. Dabei legen wir größten Wert auf Sauberkeit — vor, während und nach der Arbeit. Ihre Räume werden von uns so hinterlassen, wie Sie es erwarten: makellos.',
    icon: 'roller',
    features: [
      'Innenanstriche & Wandgestaltung',
      'Tapezierarbeiten',
      'Dekorative Techniken & Spachteltechnik',
      'Lackierarbeiten',
      'Farbberatung & Raumkonzepte',
    ],
    images: [
      '/images/leistungen/maler/maler_tobias_streichen.jpg',
      '/images/leistungen/maler/Maler_Tobias_Leibung.jpg',
      '/images/leistungen/maler/Maler_tobias_streichen_1.jpg',
      '/images/leistungen/maler/Maler_Tobias_abkleben.jpg',
    ],
    gallery: [
      '/images/leistungen/maler/maler_tobias_streichen.jpg',
      '/images/leistungen/maler/Maler_Tobias_Airflow_System.jpg',
      '/images/leistungen/maler/Maler_tobias_streichen_1.jpg',
      '/images/leistungen/maler/Maler_Tobias_abkleben.jpg',
      '/images/leistungen/maler/Maler_Tobias_Leibung.jpg',
      '/images/leistungen/maler/Maler_tobias_Airflow_system_2.jpg',
    ],
  },
  {
    title: 'Bodenbeläge',
    description:
      'Verlegen von Parkett-, Vinyl-, Laminat-, Holz- und Teppichböden, inklusive Vorbereitung des Unterbodens.',
    longDescription:
      'Der Boden ist das Fundament jedes Raumes. Wir verlegen sämtliche Bodenbeläge fachgerecht und sorgen dafür, dass Ihr neuer Boden nicht nur gut aussieht, sondern auch langlebig ist. Vom Unterboden bis zur fertigen Oberfläche — alles aus einer Hand.',
    icon: 'floor',
    features: [
      'Parkett & Holzböden',
      'Vinyl & Designbeläge',
      'Laminat & Fertigparkett',
      'Teppichböden',
      'Unterbodenaufbau & Ausgleich',
    ],
    images: [
      '/images/leistungen/boden/service-boden.jpg',
      '/images/leistungen/boden/handy-058.jpg',
      '/images/leistungen/boden/handy-066.jpg',
      '/images/leistungen/boden/handy-067.jpg',
      '/images/leistungen/boden/handy-068.jpg',
      '/images/leistungen/boden/handy-073.jpg',
      '/images/leistungen/boden/handy-080.jpg',
      '/images/leistungen/boden/handy-095.jpg',
      '/images/leistungen/boden/handy-291.jpg',
      '/images/leistungen/boden/handy-417.jpg',
      '/images/leistungen/boden/p1020985.jpg',
      '/images/leistungen/boden/p1030008.jpg',
    ],
    gallery: [
      '/images/leistungen/boden/service-boden.jpg',
      '/images/leistungen/boden/handy-058.jpg',
      '/images/leistungen/boden/handy-066.jpg',
      '/images/leistungen/boden/handy-067.jpg',
      '/images/leistungen/boden/handy-068.jpg',
      '/images/leistungen/boden/handy-073.jpg',
      '/images/leistungen/boden/handy-080.jpg',
      '/images/leistungen/boden/handy-095.jpg',
      '/images/leistungen/boden/handy-291.jpg',
      '/images/leistungen/boden/handy-417.jpg',
      '/images/leistungen/boden/p1020985.jpg',
      '/images/leistungen/boden/p1030008.jpg',
    ],
  },
  {
    title: 'Fassadengestaltung',
    description: 'Fassadengestaltung und -sanierung sowie professionelle Wärmedämmung für Ihr Gebäude.',
    longDescription:
      'Die Fassade ist die Visitenkarte Ihres Hauses. Wir gestalten und sanieren Ihre Fassade professionell — inklusive Wärmedämmverbundsysteme (WDVS) für maximale Energieeffizienz. So sparen Sie Heizkosten und Ihr Haus erstrahlt in neuem Glanz.',
    icon: 'facade',
    features: [
      'Fassadenanstrich & Sanierung',
      'Wärmedämmverbundsystem (WDVS)',
      'Putzarbeiten & Strukturputz',
      'Sockelabdichtung',
      'Energetische Beratung',
    ],
    images: [
      '/images/leistungen/fassade/service-fassade.jpg',
      '/images/leistungen/fassade/Fassade_1.jpg',
      '/images/leistungen/fassade/Fassade_2.jpg',
      '/images/leistungen/fassade/handy-468.jpg',
      '/images/leistungen/fassade/handy-471.jpg',
      '/images/leistungen/fassade/handy-497.jpg',
    ],
    gallery: [
      '/images/leistungen/fassade/service-fassade.jpg',
      '/images/leistungen/fassade/Fassade_1.jpg',
      '/images/leistungen/fassade/Fassade_2.jpg',
      '/images/leistungen/fassade/handy-468.jpg',
      '/images/leistungen/fassade/handy-471.jpg',
      '/images/leistungen/fassade/handy-497.jpg',
    ],
  },
  {
    title: 'Bäderrenovierung',
    description: 'Komplettsanierung von Bädern — von der Planung bis zur schlüsselfertigen Übergabe.',
    longDescription:
      'Ihr Traumbad — wir machen es möglich. Von der ersten Idee über die Planung bis zur schlüsselfertigen Übergabe kümmern wir uns um alles. Fliesen, Sanitär, Trockenbau und Malerarbeiten — bei uns bekommen Sie die komplette Badsanierung ohne Koordinationsstress.',
    icon: 'bath',
    features: [
      'Komplettbadsanierung',
      'Fliesenarbeiten & Mosaik',
      'Barrierefreie Bäder',
      'Trockenbau im Nassbereich',
      'Schlüsselfertige Übergabe',
    ],
    images: [
      '/images/leistungen/bad/herobad1.jpeg',
      '/images/leistungen/bad/herobad2.jpeg',
      '/images/leistungen/bad/herobad3.jpeg',
      '/images/leistungen/bad/handy-001.jpg',
      '/images/leistungen/bad/handy-002.jpg',
      '/images/leistungen/bad/handy-003.jpg',
      '/images/leistungen/bad/handy-008.jpg',
      '/images/leistungen/bad/handy-098.jpg',
      '/images/leistungen/bad/p1020969.jpg',
    ],
    gallery: [
      '/images/leistungen/bad/herobad1.jpeg',
      '/images/leistungen/bad/herobad2.jpeg',
      '/images/leistungen/bad/herobad3.jpeg',
      '/images/leistungen/bad/handy-001.jpg',
      '/images/leistungen/bad/handy-002.jpg',
      '/images/leistungen/bad/handy-003.jpg',
      '/images/leistungen/bad/handy-008.jpg',
      '/images/leistungen/bad/handy-098.jpg',
      '/images/leistungen/bad/p1020969.jpg',
    ],
  },
  {
    title: 'Fliesenarbeiten',
    description: 'Fachgerechte Verlegung von Fliesen, Platten, Mosaik und Naturstein in Bad, Küche und mehr.',
    longDescription:
      'Fliesen sind zeitlos und vielseitig. Wir verlegen alle Arten von Fliesen, Platten und Naturstein — ob im Bad, in der Küche oder im Eingangsbereich. Mit Präzision und Liebe zum Detail sorgen wir für ein perfektes Ergebnis.',
    icon: 'tiles',
    features: [
      'Wand- & Bodenfliesen',
      'Großformatige Fliesen',
      'Mosaik & Naturstein',
      'Abdichtung im Nassbereich',
      'Fugenarbeiten & Sanierung',
    ],
    images: [
      '/images/leistungen/fliesen/Fliesenarbeiten1.jpg',
      '/images/leistungen/fliesen/Fliesenarbeiten_markus.jpg',
      '/images/leistungen/fliesen/handy-014.jpg',
      '/images/leistungen/fliesen/handy-017.jpg',
      '/images/leistungen/fliesen/img-1129.jpg',
    ],
    gallery: [
      '/images/leistungen/fliesen/Fliesenarbeiten1.jpg',
      '/images/leistungen/fliesen/Fliesenarbeiten_markus.jpg',
      '/images/leistungen/fliesen/handy-014.jpg',
      '/images/leistungen/fliesen/handy-017.jpg',
      '/images/leistungen/fliesen/img-1129.jpg',
    ],
  },
  {
    title: 'Deckensysteme',
    description:
      'Originelle und differenzierte Gestaltung von Decken — abgehängte Decken, Lichtvouten und Akustiklösungen.',
    longDescription:
      'Decken können mehr als nur den Raum nach oben abschließen. Wir gestalten abgehängte Decken mit integrierten Lichtkonzepten, Lichtvouten für indirektes Licht und Akustikdecken für optimalen Schallschutz. Ob modern oder klassisch — wir finden die richtige Lösung.',
    icon: 'ceiling',
    features: [
      'Abgehängte Decken',
      'Lichtvouten & indirektes Licht',
      'Akustikdecken',
      'Designdecken & Sonderlösungen',
      'Deckenverkleidungen',
    ],
    images: [
      '/images/leistungen/decken/Deckensysteme_abgehaengt.jpg',
      '/images/leistungen/decken/Deckensysteme_Trockenbau.jpg',
      '/images/leistungen/decken/Deckensysteme_Trockenbau1.jpg',
      '/images/leistungen/decken/handy-150.jpg',
      '/images/leistungen/decken/handy-167.jpg',
      '/images/leistungen/decken/handy-244.jpg',
      '/images/leistungen/decken/handy-245.jpg',
      '/images/leistungen/decken/handy-270.jpg',
      '/images/leistungen/decken/img-1465.jpg',
      '/images/leistungen/decken/img-1473.jpg',
    ],
    gallery: [
      '/images/leistungen/decken/Deckensysteme_abgehaengt.jpg',
      '/images/leistungen/decken/Deckensysteme_Trockenbau.jpg',
      '/images/leistungen/decken/Deckensysteme_Trockenbau1.jpg',
      '/images/leistungen/decken/handy-150.jpg',
      '/images/leistungen/decken/handy-167.jpg',
      '/images/leistungen/decken/handy-244.jpg',
      '/images/leistungen/decken/handy-245.jpg',
      '/images/leistungen/decken/handy-270.jpg',
      '/images/leistungen/decken/img-1465.jpg',
      '/images/leistungen/decken/img-1473.jpg',
    ],
  },
  {
    title: 'Montage & Demontage',
    description: 'Professionelle Montage und Demontage von Türen, Möbeln, Fenstern und vielem mehr.',
    longDescription:
      'Manchmal braucht es einfach einen Profi, der anpackt. Wir übernehmen die Montage und Demontage von Türen, Fenstern, Einbauschränken und vielem mehr. Schnell, sauber und zuverlässig — damit Sie sich auf die schönen Dinge konzentrieren können.',
    icon: 'wrench',
    features: [
      'Türenmontage & -austausch',
      'Fenstermontage',
      'Einbauschränke & Regale',
      'Demontage & Entsorgung',
      'Kleinmontagen aller Art',
    ],
    images: [
      '/images/leistungen/montage/Montage_ludwig.jpg',
      '/images/leistungen/montage/handy-020.jpg',
      '/images/leistungen/montage/handy-022.jpg',
      '/images/leistungen/montage/img-0249.jpg',
    ],
    gallery: [
      '/images/leistungen/montage/Montage_ludwig.jpg',
      '/images/leistungen/montage/handy-020.jpg',
      '/images/leistungen/montage/handy-022.jpg',
      '/images/leistungen/montage/img-0249.jpg',
    ],
  },
];
