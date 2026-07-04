export type DlmnsWorld = {
  name: string;
  category: string;
  description: string;
  status: "Live" | "Im Aufbau" | "Entsteht";
  href?: string;
  cta?: string;
};

export const worlds: DlmnsWorld[] = [
  {
    name: "DLMNS Digital",
    category: "Produktstudio",
    description:
      "Digitale Produktsysteme für Analyse, Prozesse, Automatisierung und Wachstum.",
    status: "Live",
    href: "https://dlmn-sdigital.vercel.app/",
    cta: "Öffnen"
  },
  {
    name: "Shophebel",
    category: "Analysesystem",
    description:
      "Analyse- und Optimierungssystem für Onlineshops. Erkennt Umsatzbremsen, bewertet Signale und priorisiert nächste Schritte.",
    status: "Live",
    href: "https://shophebel-analyse.vercel.app/",
    cta: "Ansehen"
  },
  {
    name: "Bibel Symbolraum",
    category: "Bedeutungsraum",
    description:
      "Interaktiver Bedeutungsraum für biblische Symbole, Wörter, Räume und persönliche Wege.",
    status: "Live",
    href: "https://bibel-symbolraum.vercel.app/",
    cta: "Erkunden"
  },
  {
    name: "Gemeindeservice",
    category: "Digitaler Bereich",
    description:
      "Digitale Werkzeuge und Services für Gemeinden, Organisation und Kommunikation.",
    status: "Live",
    href: "https://gemeindeservice2.vercel.app/",
    cta: "Öffnen"
  },
  {
    name: "Stapelstuhl & Klapptisch",
    category: "Medien- und Gesprächsformat",
    description:
      "Gesprächsformat für Glaube, Alltag, Körper, Denken und echte Lebensfragen.",
    status: "Im Aufbau"
  },
  {
    name: "Custom Systems / Experimente",
    category: "Prototypenraum",
    description:
      "Raum für neue DLMNS-Systeme, Prototypen und digitale Produktideen.",
    status: "Entsteht"
  }
];

export const primaryLinks = {
  digital: "https://dlmn-sdigital.vercel.app/",
  contact: "mailto:hallo@dlmns.de?subject=Projektanfrage%20DLMNS"
};
