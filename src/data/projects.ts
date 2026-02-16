export interface Project {
  client: string;
  location: string;
  category: string;
}

export interface Category {
  name: string;
  image: string;
}

// Reihenfolge und Kategorien wie von dir vorgegeben
export const projects: Project[] = [
  { client: 'Kanzlei "MITTE" Steuerberatungsgesellschaft mbH', location: 'Straubing', category: 'Komplettsanierung' },
  { client: 'Hotel Sonnenhof Best Western Premier', location: 'Lam', category: 'Trockenbau' },
  { client: 'Schmid Sepp (Bürgermeister)', location: 'Arrach-Ottenzell', category: 'Trockenbau' },
  { client: 'Haus Gunda', location: 'Arrach', category: 'Badsanierung' },
  { client: 'Gästehaus Weber', location: 'Haibühl', category: 'Badsanierung' },
  { client: 'Adina Koeppelle, Rechtsanwältin', location: 'Bad Kötzting', category: 'Komplettsanierung' },
  { client: 'Dr. Emil Ondr', location: 'Bad Kötzting', category: 'Komplettsanierung' },
  { client: 'Hemdenmeister – Textilkaufhaus Peter Schödlbauer', location: 'Bad Kötzting', category: 'Malerarbeiten' },
  { client: 'Hotel Waidler Hof', location: 'Lam', category: 'Innenausbau' },
  { client: 'Hotel Rösslwirt', location: 'Lam', category: 'Malerarbeiten' },
  { client: 'Gasthof-Pension-Metzgerei Meindl', location: 'Arrach-Haibühl', category: 'Trockenbau' },
  { client: 'Kieferorthopäde/Zahnarzt Dr. Fischl', location: 'Bad Kötzting', category: 'Trockenbau' },
  { client: 'Museumscafé "Frauenfleiß"', location: 'Blaibach', category: 'Komplettsanierung' },
  { client: 'Landhotel "GrünWies"', location: 'Lohberg', category: 'Badsanierung' },
  { client: 'Abwasserzweckverband', location: 'Lam', category: 'Trockenbau' },
  { client: 'Goggolori', location: 'Bad Kötzting', category: 'Komplettsanierung' },
  { client: 'Gemeindeverwaltung', location: 'Arrach', category: 'Malerarbeiten' },
  { client: 'Zahnärztin Dr. Anette Fischer', location: 'Wenzenbach', category: 'Trockenbau' },
  { client: 'Michaela u. Siegfried Kohlbeck, Rechtsanwälte', location: 'Bad Kötzting', category: 'Komplettsanierung' },
  { client: 'Wensauer Automobile', location: 'Blaibach', category: 'Fassadensanierung' },
  { client: 'Rackl', location: '', category: 'Trockenbau' },
  { client: 'Procurand', location: '', category: 'Fassadensanierung' },
  { client: 'Schule Neukirchen', location: '', category: 'Innenausbau' },
  { client: 'Haufe Helga', location: 'Hochrain', category: 'Komplettsanierung' },
  { client: 'Rathaus Haibühl', location: 'Haibühl', category: 'Trockenbau' },
];

export const categories: Category[] = [
  { name: 'Innenausbau', image: '/images/referenzen-header.jpg' },
  { name: 'Trockenbau', image: '/images/referenzen-header.jpg' },
  { name: 'Komplettsanierung', image: '/images/referenzen-header.jpg' },
  { name: 'Badsanierung', image: '/images/referenzen-header.jpg' },
  { name: 'Malerarbeiten', image: '/images/referenzen-header.jpg' },
  { name: 'Fassadensanierung', image: '/images/referenzen-header.jpg' },
];
