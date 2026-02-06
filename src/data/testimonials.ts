export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Adina Koeppelle',
    role: 'Rechtsanwältin, Bad Kötzting',
    text: 'Klare Note eins! Das Team der Firma Kreuzer Trockenbau & Malerbetrieb arbeitete in sehr guter Qualität Hand in Hand. Ich war immer verwundert, wie schnell und reibungslos mein Bauvorhaben voranschritt. Mit der qualitativ hochwertigen und pünktlichen Durchführung bin ich mehr als zufrieden.',
  },
  {
    name: 'Franz Bauer',
    role: 'Cafe "Goggolori", Bad Kötzting',
    text: 'Wir sind sehr zufrieden mit dem Resultat, das wir von der Firma Kreuzer Trockenbau erhalten haben. Wir wünschten, alle Unternehmen wären im Umgang mit ihren Kunden so professionell und respektvoll wie diese Firma.',
  },
  {
    name: 'Florian Vogl',
    role: 'Landhotel "GrünWies", Lohberg',
    text: 'Dank der professionellen und termingerechten Ausführung Ihrer Handwerker-Leistungen konnten wir rechtzeitig unseren Betrieb eröffnen. Wir danken für die perfekte und äußerst ansprechende Gestaltung unserer Bäder in den Gästezimmern.',
  },
  {
    name: 'Gudrun Linn',
    role: 'Museum "Frauenfleiß", Blaibach',
    text: 'Beim Umbau des Museums haben Sie Ihre Kompetenz voll unter Beweis gestellt. Der Umbau war bei Ihnen in den besten Händen und ich war sehr erstaunt, was sich aus alten Räumen so alles machen lässt.',
  },
];
