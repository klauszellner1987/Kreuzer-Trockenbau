# Kreuzer Trockenbau & Malerbetrieb

Firmenwebsite von **Kreuzer Trockenbau & Malerbetrieb** aus Haibühl / Arrach im Bayerischen Wald.

**Live:** [klauszellner1987.github.io/Kreuzer-Trockenbau](https://klauszellner1987.github.io/Kreuzer-Trockenbau)

## Tech-Stack

| Technologie | Version | Zweck |
|---|---|---|
| [Astro](https://astro.build/) | v5 | Static Site Generator |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-First CSS |
| TypeScript | – | Typisierung |
| Sharp | – | Bildoptimierung |

## Projektstruktur

```
src/
├── components/       # Wiederverwendbare Komponenten
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── Footer.astro
│   ├── ServiceSection.astro
│   ├── WhatsAppButton.astro
│   └── ...
├── data/             # Daten (Services, Team, Projekte)
│   ├── services.ts
│   ├── team.ts
│   └── projects.ts
├── layouts/
│   └── Layout.astro  # Basis-Layout mit SEO & Schema.org
├── pages/            # Seiten (File-based Routing)
│   ├── index.astro
│   ├── leistungen.astro
│   ├── team.astro
│   └── ...
└── styles/
    └── global.css
public/
└── images/           # Bilder (Fotos, Logo)
```

## Seiten

| Seite | Pfad | Beschreibung |
|---|---|---|
| Startseite | `/` | Hero-Slider, Leistungsübersicht, Über uns, CTA |
| Leistungen | `/leistungen` | Fullscreen-Sektionen pro Leistung mit Bildergalerie |
| Das Team | `/team` | Teammitglieder, Arbeitsbilder, Firmengeschichte |
| Referenzen | `/referenzen` | Projektliste und Kundenstimmen |
| Kontakt | `/kontakt` | Kontaktformular (Web3Forms), Karte, WhatsApp |
| Datenschutz | `/datenschutz` | Datenschutzerklärung |
| Impressum | `/impressum` | Impressum |

## Features

- Responsive Design (Mobile-first)
- Hero-Slider mit automatischem Bildwechsel
- Cinematische Bildergalerie mit Ken Burns Effekt und Lightbox
- WhatsApp-Integration (Click-to-Chat)
- Kontaktformular mit Projektauswahl-Wizard
- SEO-optimiert mit Schema.org Markup und Sitemap
- GitHub Pages Deployment

## Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (Port 4322)
npm run dev

# Produktions-Build erstellen
npm run build

# Build lokal testen
npm run preview
```

## Deployment

Die Website wird automatisch über **GitHub Pages** deployt. Push auf `main` triggert den Build.

## Entwickelt von

**Klaus Zellner** — Design & Entwicklung
