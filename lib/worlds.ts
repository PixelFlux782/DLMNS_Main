export type DlmnsWorld = {
  name: string;
  category: string;
  description: string;
  status: "Aktiv" | "Im Aufbau" | "Entsteht";
  href?: string;
  cta?: string;
};

export type DlmnsOffer = {
  name: string;
  summary: string;
  items: string[];
  href?: string;
  cta?: string;
};

export const offers: DlmnsOffer[] = [
  {
    name: "Räume & Ausstattung",
    summary: "Sitzmöbel, Stapelstühle, Klapptische und durchdachte Ausstattung für Gemeinderäume.",
    items: ["Sitzmöbel", "Stapelstühle", "Klapptische", "Raumnutzung"]
  },
  {
    name: "Gemeindeservice",
    summary: "Beratung, Services und klare Abläufe für Organisation und Gemeindebedarf.",
    items: ["Services", "Beratung", "Abläufe", "Organisation", "Gemeindebedarf"]
  },
  {
    name: "DLMNS Digital",
    summary: "Webseiten, kleine Tools und Automatisierung als Ergänzung zum praktischen Gemeindeservice.",
    items: ["Webseiten", "Werkzeuge", "Abläufe", "Ergänzung"],
    href: "https://dlmn-sdigital.vercel.app/",
    cta: "Digital ansehen"
  },
  {
    name: "Digitale Räume",
    summary: "Symbolräume, Lernräume, Glaubensräume und interaktive Formate.",
    items: ["Symbolraum", "Lernräume", "Glaubensräume", "Interaktive Formate"],
    href: "https://bibel-symbolraum.vercel.app/",
    cta: "Raum erkunden"
  },
  {
    name: "Neue Angebote",
    summary: "Raumgestaltung, Beratung, Medien und einfache Prozesssysteme für neue Vorhaben.",
    items: ["Raumgestaltung", "Beratung", "Medien", "Prozesse"]
  }
];

export const worlds: DlmnsWorld[] = [
  {
    name: "Gemeindeservice",
    category: "Service & Organisation",
    description:
      "Praktische Unterstützung für Abläufe, Ausstattung, Kommunikation und konkreten Bedarf in Gemeinderäumen.",
    status: "Aktiv",
    href: "https://gemeindeservice2.vercel.app/",
    cta: "Ansehen"
  },
  {
    name: "Räume & Ausstattung",
    category: "Gemeinde & Raum",
    description:
      "Sitzmöbel, Stapelstühle, Klapptische und durchdachte Ausstattung für nutzbare Gemeinderäume.",
    status: "Im Aufbau"
  },
  {
    name: "DLMNS Digital",
    category: "Digitale Ergänzung",
    description:
      "Webseiten, Werkzeuge und Automatisierung für Gemeinden, Projekte und kleine Organisationen, wenn Digitales wirklich entlastet.",
    status: "Aktiv",
    href: "https://dlmn-sdigital.vercel.app/",
    cta: "Öffnen"
  },
  {
    name: "Bibel Symbolraum",
    category: "Digitaler Glaubensraum",
    description:
      "Interaktiver Bedeutungsraum für biblische Symbole, Wörter, Räume und persönliche Wege.",
    status: "Aktiv",
    href: "https://bibel-symbolraum.vercel.app/",
    cta: "Erkunden"
  },
  {
    name: "Neue Angebote",
    category: "Entwicklung",
    description:
      "Raumgestaltung, Beratung, Medienformate und Prozesssysteme als wachsende Angebotslinie.",
    status: "Entsteht"
  }
];

export const primaryLinks = {
  digital: "https://dlmn-sdigital.vercel.app/",
  contact: "mailto:hallo@dlmns.de?subject=Projektanfrage%20DLMNS"
};
