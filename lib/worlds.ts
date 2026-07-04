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
  id?: string;
  status?: string;
  featured?: boolean;
};

export const primaryLinks = {
  digital: "https://dlmn-sdigital.vercel.app/",
  contact: "mailto:hallo@dlmns.de?subject=Projektanfrage%20DLMNS",
  furnitureInquiry:
    "mailto:hallo@dlmns.de?subject=Ausstattung%20anfragen%20-%20Stapelstuehle%20und%20Klapptische"
};

export const offers: DlmnsOffer[] = [
  {
    name: "Stapelstühle & Klapptische",
    summary:
      "Der praktische Ursprung von DLMNS: Stapelstühle, Klapptische und Ausstattung für Gemeinden, Veranstaltungen und flexible Gemeinderäume.",
    items: ["Stapelstühle", "Klapptische", "Sitzmöbel", "Gemeinderäume", "Veranstaltungen"],
    href: primaryLinks.furnitureInquiry,
    cta: "Ausstattung anfragen",
    id: "stapelstuehle-klapptische",
    status: "Wurzel der DLMNS-Gruppe",
    featured: true
  },
  {
    name: "Räume & Ausstattung",
    summary: "Durchdachte Ausstattung, Raumgefühl und praktische Planung für nutzbare Gemeinderäume.",
    items: ["Raumnutzung", "Ausstattung", "Planung", "Gemeindebedarf"]
  },
  {
    name: "Gemeindeservice",
    summary: "Beratung, Services und klare Abläufe für Organisation und Gemeindebedarf.",
    items: ["Services", "Beratung", "Abläufe", "Organisation", "Gemeindebedarf"]
  },
  {
    name: "DLMNS Digital",
    summary: "Webseiten, kleine Tools und Automatisierung als Ergänzung zum gewachsenen praktischen Kern.",
    items: ["Webseiten", "Werkzeuge", "Abläufe", "Ergänzung"],
    href: primaryLinks.digital,
    cta: "Digital ansehen"
  },
  {
    name: "Digitale Räume",
    summary: "Symbolräume, Lernräume, Glaubensräume und interaktive Formate als ergänzende Entwicklung.",
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
    name: "Stapelstühle & Klapptische",
    category: "Praktischer Kern",
    description:
      "Der gewachsene Ursprung der DLMNS-Gruppe: Sitzmöbel, Stapelstühle, Klapptische und Ausstattung für Gemeinden, Veranstaltungen und flexible Gemeinderäume.",
    status: "Aktiv",
    href: primaryLinks.furnitureInquiry,
    cta: "Anfragen"
  },
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
      "Raumgefühl, Planung und durchdachte Ausstattung für Gemeinderäume, die im Alltag verlässlich funktionieren.",
    status: "Im Aufbau"
  },
  {
    name: "DLMNS Digital",
    category: "Digitale Ergänzung",
    description:
      "Webseiten, Werkzeuge und Automatisierung für Gemeinden, Projekte und kleine Organisationen, wenn Digitales wirklich entlastet.",
    status: "Aktiv",
    href: primaryLinks.digital,
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
