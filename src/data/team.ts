export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Markus Kreuzer',
    role: 'Firmengründer & Inhaber',
    description: 'Meine langjährige Erfahrung trägt dazu bei, eine hohe handwerkliche Qualität im Trocken- und Innenausbau zu gewährleisten. Seit Bestehen der Firma ist "Qualität unsere Stärke"! Sie beginnt bei einer soliden, ehrlichen und verbindlichen Angebotserstellung und begleitet Ihr Projekt von der Planung bis hin zur Ausführung und Fertigstellung. Präzise, preiswert und termingerecht.',
  },
  {
    name: 'Tobias Kreuzer',
    role: 'Malermeister',
    description: 'Unser Unternehmen stellt individuelle Innenraum-Gestaltungsmöglichkeiten aus Meisterhand bereit — Malen, Lackieren, Tapezieren und kreatives Raumdesign. Um den größtmöglichen Nutzen für unsere Auftraggeber zu erzielen, sind Teamarbeit sowie Kooperation mit anderen Gewerken auf der Baustelle für uns eine Selbstverständlichkeit.',
  },
];

export const companyValues = [
  'Qualität und Zuverlässigkeit',
  'Flexibilität und Schnelligkeit',
  'Professionalität und Kompetenz',
  'Perfektion und Detailtreue',
];
