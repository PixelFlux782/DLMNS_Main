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
    summary: "Sitzmöbel, Stapelstühle, Klapptische und Ausstattung für Gemeinderäume.",
    items: ["Sitzmöbel", "Stapelstühle", "Klapptische", "Gemeinderäume"]
  },
  {
    name: "Gemeindeservice",
    summary: "Beratung, Services und klare Abläufe für Organisation und Gemeindebedarf.",
    items: ["Services", "Beratung", "Abläufe", "Organisation", "Gemeindebedarf"]
  },
  {
    name: "DLMNS Digital",
    summary: "Digitale Werkzeuge, Webseiten, Tools und Automatisierung aus einer Hand.",
    items: ["Digitale Werkzeuge", "Webseiten", "Tools", "Automatisierung"],
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
    summary: "Raumgestaltung, Beratung, Medien und Prozesssysteme für neue Vorhaben.",
    items: ["Raumgestaltung", "Beratung", "Medien", "Prozesssysteme"]
  }
];

export const worlds: DlmnsWorld[] = [
  {
    name: "DLMNS Digital",
    category: "Digitale Entwicklung",
    description:
      "Webseiten, Werkzeuge, Automatisierung und Produktlogik für Gemeinden, Projekte und kleine Organisationen.",
    status: "Aktiv",
    href: "https://dlmn-sdigital.vercel.app/",
    cta: "Öffnen"
  },
  {
    name: "Gemeindeservice",
    category: "Service & Organisation",
    description:
      "Praktische Unterstützung für Abläufe, Ausstattung, Kommunikation und Bedarf in Gemeinderäumen.",
    status: "Aktiv",
    href: "https://gemeindeservice2.vercel.app/",
    cta: "Ansehen"
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
    name: "Räume & Ausstattung",
    category: "Gemeinde & Raum",
    description:
      "Sitzmöbel, Stapelstühle, Klapptische und durchdachte Ausstattung für nutzbare Gemeinderäume.",
    status: "Im Aufbau"
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
