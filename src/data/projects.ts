export interface Project {
  client: string;
  location: string;
  category: string;
}

export interface Category {
  name: string;
  image: string;
}

export const projects: Project[] = [
  { client: 'Kanzlei "MITTE" Steuerberatungsgesellschaft mbH', location: 'Straubing', category: 'Komplettsanierung' },
  { client: 'Hotel Sonnenhof Best Western Premier', location: 'Lam', category: 'Innenausbau' },
  { client: 'Schmid Sepp (Bürgermeister)', location: 'Arrach-Ottenzell', category: 'Trockenbau' },
  { client: 'Haus Gunda', location: 'Arrach', category: 'Innenausbau' },
  { client: 'Gästehaus Weber', location: 'Haibühl', category: 'Innenausbau' },
  { client: 'Adina Koeppelle, Rechtsanwältin', location: 'Bad Kötzting', category: 'Komplettsanierung' },
  { client: 'Dr. Emil Ondr', location: 'Bad Kötzting', category: 'Badsanierung' },
  { client: 'Hemdenmeister – Textilkaufhaus Peter Schödlbauer', location: 'Bad Kötzting', category: 'Innenausbau' },
  { client: 'Hotel Waidler Hof', location: 'Lam', category: 'Innenausbau' },
  { client: 'Hotel Rösslwirt', location: 'Lam', category: 'Innenausbau' },
  { client: 'Gasthof-Pension-Metzgerei Meindl', location: 'Arrach-Haibühl', category: 'Innenausbau' },
  { client: 'Kieferorthopäde/Zahnarzt Dr. Fischl', location: 'Bad Kötzting', category: 'Trockenbau' },
  { client: 'Museumscafé "Frauenfleiß"', location: 'Blaibach', category: 'Komplettsanierung' },
  { client: 'Landhotel "GrünWies"', location: 'Lohberg', category: 'Badsanierung' },
  { client: 'Abwasserzweckverband', location: 'Lam', category: 'Trockenbau' },
  { client: 'Goggolori', location: 'Bad Kötzting', category: 'Malerarbeiten' },
  { client: 'Gemeindeverwaltung', location: 'Arrach', category: 'Trockenbau' },
  { client: 'Zahnärztin Dr. Anette Fischer', location: 'Wenzenbach', category: 'Innenausbau' },
  { client: 'Michaela u. Siegfried Kohlbeck, Rechtsanwälte', location: 'Bad Kötzting', category: 'Innenausbau' },
  { client: 'Wensauer Automobile', location: 'Blaibach', category: 'Fassadensanierung' },
  { client: 'Rackl', location: 'Region', category: 'Innenausbau' },
  { client: 'Procurand', location: 'Region', category: 'Innenausbau' },
  { client: 'Schule Neukirchen', location: 'Neukirchen', category: 'Trockenbau' },
  { client: 'Haufe Helga', location: 'Hochrain', category: 'Innenausbau' },
  { client: 'Rathaus Haibühl', location: 'Haibühl', category: 'Trockenbau' },
];

export const categories: Category[] = [
  { name: 'Innenausbau', image: '/images/ref-innenausbau.jpg' },
  { name: 'Trockenbau', image: '/images/ref-trockenbau.jpg' },
  { name: 'Komplettsanierung', image: '/images/ref-komplettsanierung.jpg' },
  { name: 'Badsanierung', image: '/images/ref-badsanierung.jpg' },
  { name: 'Malerarbeiten', image: '/images/ref-malerarbeiten.jpg' },
  { name: 'Fassadensanierung', image: '/images/ref-fassadensanierung.jpg' },
];
