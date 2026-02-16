export interface Amenity {
  icon: string; // SVG path
  label: string;
}

export interface PriceRow {
  label: string;
  price: string;
  note?: string;
}

export interface GuestReview {
  name: string;
  date: string;
  text: string;
  rating: number;
}

export const amenities: Amenity[] = [
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5M10.5 21V8.25a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21m0 0H3m0 0h1.5" />',
    label: '90 m² Wohnfläche',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />',
    label: 'Bis zu 5 Gäste',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />',
    label: 'Schlafzimmer mit Doppelbett',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />',
    label: 'Kinderzimmer mit Etagenbett',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" />',
    label: 'Einbauküche mit Geschirrspüler',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />',
    label: 'Großer Balkon mit Bergblick',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M18 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75z" />',
    label: 'Panoramafenster im Wohnbereich',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A18.142 18.142 0 0112 21c-2.17 0-4.207-.576-5.963-1.557" />',
    label: 'Große Dusche mit Tageslicht',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />',
    label: 'Kostenloses WLAN',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />',
    label: 'Smart-TV',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.122-.504 1.125-1.125V11.25a2.999 2.999 0 00-2.974-3H5.625A2.999 2.999 0 002.25 11.25v6.375c.003.621.504 1.125 1.125 1.125H5.25" />',
    label: 'Kostenloser Stellplatz',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />',
    label: 'Inklusive Aktiv Card',
  },
];

export const prices: PriceRow[] = [
  { label: 'Wohnung pro Nacht', price: '94 € / Nacht', note: 'Min. 2 Nächte' },
  { label: 'Jede weitere Person', price: '20 € / Nacht' },
  { label: 'Spartipp: 5 Nächte buchen', price: '4 Nächte zahlen' },
  { label: 'Spartipp: 7 Nächte buchen', price: '6 Nächte zahlen' },
  { label: 'Endreinigung', price: '50 €', note: 'einmalig' },
];

export const guestReviews: GuestReview[] = [
  {
    name: 'Familie Müller',
    date: 'August 2025',
    text: 'Wunderschöne Wohnung mit Liebe zum Detail eingerichtet. Der Blick vom Balkon ist traumhaft! Wir kommen gerne wieder.',
    rating: 5,
  },
  {
    name: 'Thomas & Sandra',
    date: 'Juni 2025',
    text: 'Perfekter Ausgangspunkt für Wanderungen im Bayerischen Wald. Die Wohnung ist modern, sauber und hat alles was man braucht.',
    rating: 5,
  },
  {
    name: 'Gerlinde H.',
    date: 'Dezember 2024',
    text: 'Gemütliche Ferienwohnung im liebevoll sanierten Rathaus. Die Vermieter sind sehr freundlich und hilfsbereit. Absolute Empfehlung!',
    rating: 5,
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Wie viele Personen können in der Ferienwohnung übernachten?',
    answer: 'Die Ferienwohnung Haibühler Spitz bietet auf 90 m² Platz für bis zu 5 Gäste. Es gibt ein Schlafzimmer mit Doppelbett, ein Kinderzimmer mit Etagenbett und im großen Wohn-/Essbereich zwei Schlafsofas.',
  },
  {
    question: 'Ab wann kann ich einchecken und bis wann auschecken?',
    answer: 'Der Check-in ist ab 15:00 Uhr möglich, der Check-out bis 10:00 Uhr. In Absprache mit uns ist aber auch ein früherer oder späterer Zeitpunkt möglich.',
  },
  {
    question: 'Sind Haustiere erlaubt?',
    answer: 'Leider sind Haustiere in der Ferienwohnung nicht erlaubt.',
  },
  {
    question: 'Gibt es einen Parkplatz?',
    answer: 'Ja, direkt am Haus steht Ihnen ein kostenloser Stellplatz zur Verfügung.',
  },
  {
    question: 'Was ist die Aktiv Card?',
    answer: 'Die Aktiv Card ist im Aufenthalt inklusive und ermöglicht den kostenlosen Eintritt in über 130 Freizeiteinrichtungen der Region — z.B. das Osserbad in Lam oder den Tierpark Lohberg. Besonders attraktiv für Familien!',
  },
  {
    question: 'Was kann ich in der Nähe unternehmen?',
    answer: 'Die Ferienwohnung liegt im Lamer Winkel im Bayerischen Wald. Beliebte Ausflugsziele: Osserbad Lam, Tierpark Lohberg, Großer Arber (Wandern & Skifahren), Bike Park Arber sowie zahlreiche Wander- und Radwege.',
  },
  {
    question: 'Wie lange ist der Mindestaufenthalt?',
    answer: 'Der Mindestaufenthalt beträgt 2 Nächte. Tipp: Bei 5 Nächten zahlen Sie nur 4, bei 7 Nächten nur 6!',
  },
  {
    question: 'Gibt es WLAN in der Ferienwohnung?',
    answer: 'Ja, kostenloses WLAN ist in der gesamten Wohnung verfügbar.',
  },
];

export const galleryImages = [
  { src: '/images/fewo/1.jpg', alt: 'Wohn- und Essbereich mit Panoramafenstern' },
  { src: '/images/fewo/2.jpg', alt: 'Schlafzimmer mit Doppelbett' },
  { src: '/images/fewo/3.jpg', alt: 'Einbauküche mit Geschirrspüler' },
  { src: '/images/fewo/4.jpg', alt: 'Dusche mit Tageslicht' },
  { src: '/images/fewo/5.jpg', alt: 'Balkon mit Bergblick' },
  { src: '/images/fewo/6.jpg', alt: 'Kinderzimmer mit Etagenbett' },
];
