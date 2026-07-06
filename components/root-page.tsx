"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { offers, primaryLinks, worlds } from "@/lib/worlds";

const fadeIn = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
} as const;

const values = ["Gemeinde", "Raum", "Ausstattung", "Digital als Ergänzung"];

export function RootPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-cream text-graphite">
      <Header />
      <Hero />
      <OfferSection />
      <FurnitureSection />
      <WorldsSection />
      <LogicSection />
      <DigitalSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-graphite/10 bg-cream/88 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[7rem] max-w-7xl flex-col justify-center gap-3 px-5 py-3 sm:px-8 md:h-[4.75rem] md:min-h-0 md:flex-row md:items-center md:justify-between md:gap-8 md:py-0">
        <a
          href="#top"
          className="flex h-9 w-[12.5rem] shrink-0 items-center sm:w-[15.5rem] md:h-12"
          aria-label="DLMNS Start"
        >
          <Image
            src="/dlmns-main-horizontal-light.png"
            alt="DLMNS"
            width={3600}
            height={1520}
            priority
            className="h-auto w-full object-contain"
            sizes="(min-width: 640px) 248px, 200px"
          />
        </a>
        <div className="flex w-full flex-wrap items-center gap-x-3 gap-y-2 text-[0.68rem] font-medium text-graphite/68 min-[420px]:text-[0.76rem] sm:gap-x-5 sm:text-sm md:w-auto md:flex-nowrap md:gap-7 [&_a]:shrink-0 [&_a]:whitespace-nowrap">
          <a className="transition hover:text-forest" href="#angebote">
            Angebote
          </a>
          <a className="transition hover:text-forest" href="#stapelstuehle-klapptische">
            Stapelstühle & Klapptische
          </a>
          <a className="transition hover:text-forest" href="#bereiche">
            Räume
          </a>
          <a className="transition hover:text-forest" href="#digital">
            Digital
          </a>
          <a className="transition hover:text-forest" href="#kontakt">
            Kontakt
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid max-w-7xl scroll-mt-36 gap-10 px-5 pb-14 pt-36 sm:px-8 md:scroll-mt-28 md:pt-28 lg:grid-cols-[minmax(0,0.95fr)_minmax(26rem,1.05fr)] lg:items-center lg:gap-14"
    >
      <div className="relative z-10 max-w-3xl">
        <p className="mb-6 max-w-[24rem] text-xs font-semibold uppercase tracking-[0.22em] text-sage-dark sm:max-w-none sm:tracking-[0.28em]">
          Familienbetrieb für Gemeinde, Raum und Ausstattung
        </p>
        <h1 className="text-[2.45rem] font-semibold leading-[1.05] text-graphite sm:text-6xl sm:leading-[1.02] lg:text-7xl">
          Räume ausstatten, die Gemeindealltag tragen.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-graphite/72 sm:text-lg">
          DLMNS begleitet Gemeinden bei Stapelstühlen, Klapptischen,
          Sitzmöbeln, Raumgestaltung und passenden digitalen Systemen. Ruhig,
          persönlich und mit Blick für das, was im Alltag wirklich funktioniert.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={primaryLinks.contact}
            className="inline-flex h-12 items-center justify-center bg-forest px-6 text-sm font-semibold text-white shadow-soft transition hover:bg-forest/92"
          >
            Beratung anfragen
          </a>
          <a
            href="#stapelstuehle-klapptische"
            className="inline-flex h-12 items-center justify-center border border-graphite/18 bg-white/45 px-6 text-sm font-semibold text-graphite transition hover:border-forest/35 hover:bg-white"
          >
            Stapelstühle & Klapptische ansehen
          </a>
        </div>
      </div>

      <motion.div
        {...fadeIn}
        className="relative z-10 min-h-[21rem] overflow-hidden rounded-sm border border-graphite/10 bg-sage/20 shadow-soft sm:min-h-[29rem] lg:min-h-[36rem]"
      >
        <Image
          src="/dlmns-room-hero.png"
          alt="Heller Gemeinderaum mit Stapelstühlen und Klapptischen"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 600px, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,241,232,0.18),transparent_42%),linear-gradient(0deg,rgba(36,49,43,0.22),transparent_48%)]" />
        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-px border border-white/45 bg-white/50 text-xs font-medium text-graphite/78 backdrop-blur sm:grid-cols-4">
          {values.map((item) => (
            <div key={item} className="bg-cream/78 px-3 py-3">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <motion.div {...fadeIn} className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage-dark">
        {eyebrow}
      </p>
      <h2 className="mt-5 text-3xl font-semibold leading-tight text-graphite sm:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-5 max-w-2xl text-base leading-8 text-graphite/68">{text}</p> : null}
    </motion.div>
  );
}

function OfferSection() {
  return (
    <section id="angebote" className="relative scroll-mt-36 border-t border-graphite/10 py-20 sm:py-24 md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="DLMNS Angebote"
          title="Ein Dach für Gemeinderäume, Ausstattung, Beratung und unterstützende Systeme."
          text="Die Angebote greifen ineinander, bleiben aber klar gewichtet: zuerst der reale Raum, dann der Service darum, Digitales dort, wo es entlastet."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {offers.map((offer, index) => (
            <motion.article
              key={offer.name}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.04 }}
              className={`group scroll-mt-36 border p-6 transition md:scroll-mt-32 ${
                offer.featured
                  ? "min-h-[25rem] border-forest/20 bg-white shadow-soft lg:col-span-5 lg:row-span-2 lg:p-8"
                  : offer.name === "DLMNS Digital"
                    ? "min-h-[15rem] border-blue-accent/18 bg-white/68 lg:col-span-4"
                    : "min-h-[15rem] border-graphite/10 bg-white/54 lg:col-span-4"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
                  0{index + 1}
                </p>
                {offer.status ? (
                  <span className="max-w-[11rem] border border-brass/24 bg-brass/10 px-3 py-1 text-right text-xs leading-5 text-graphite/70">
                    {offer.status}
                  </span>
                ) : null}
              </div>
              <h3
                className={`mt-5 font-semibold text-graphite ${
                  offer.featured ? "max-w-sm text-3xl leading-tight" : "text-2xl"
                }`}
              >
                {offer.name}
              </h3>
              <p className="mt-5 text-sm leading-7 text-graphite/68">{offer.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {offer.items.map((item) => (
                  <span
                    key={item}
                    className="border border-graphite/10 bg-cream/70 px-3 py-1 text-xs text-graphite/68"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {offer.href ? (
                <a
                  href={offer.href}
                  target={offer.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={offer.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className={`mt-8 inline-flex text-sm font-semibold transition ${
                    offer.name === "DLMNS Digital"
                      ? "text-blue-accent hover:text-forest"
                      : "text-forest hover:text-graphite"
                  }`}
                >
                  {offer.cta} <span aria-hidden="true" className="pl-2">-&gt;</span>
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FurnitureSection() {
  return (
    <section id="stapelstuehle-klapptische" className="scroll-mt-36 bg-white/38 py-20 sm:py-24 md:scroll-mt-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div {...fadeIn} className="relative min-h-[22rem] overflow-hidden border border-graphite/10 bg-sage/20 shadow-soft sm:min-h-[31rem]">
          <Image
            src="/dlmns-stapelstuehle-klapptische.png"
            alt="Gestapelte Stühle und zusammengeklappte Tische für Gemeinderäume"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 600px, 100vw"
          />
        </motion.div>
        <motion.div {...fadeIn} className="lg:pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage-dark">
            Praktischer Kern
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-graphite sm:text-5xl">
            Stapelstühle und Klapptische bleiben die sichtbare Wurzel von DLMNS.
          </h2>
          <p className="mt-6 text-base leading-8 text-graphite/70">
            Gemeinden brauchen Möbel, die lange halten, schnell umgestellt
            werden können und trotzdem wertig wirken. DLMNS hilft bei Auswahl,
            Mengen, Raumwirkung und der Frage, welche Ausstattung zum echten
            Gemeindeleben passt.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Stapelbare Sitzlösungen", "Flexible Tischkonzepte", "Beratung zu Mengen & Nutzung", "Ausstattung für Mehrzweckräume"].map((item) => (
              <div key={item} className="border-l-2 border-brass bg-cream/70 px-4 py-3 text-sm font-medium text-graphite/76">
                {item}
              </div>
            ))}
          </div>
          <a
            href={primaryLinks.furnitureInquiry}
            className="mt-9 inline-flex h-12 items-center justify-center bg-forest px-6 text-sm font-semibold text-white shadow-soft transition hover:bg-forest/92"
          >
            Räume ausstatten
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function WorldsSection() {
  return (
    <section id="bereiche" className="relative scroll-mt-36 border-t border-graphite/10 py-20 sm:py-24 md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="Aktive Bereiche"
          title="Die Marke bleibt breit genug für Entwicklung und klar genug für konkrete Hilfe."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {worlds.map((world, index) => (
            <motion.article
              key={world.name}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.04 }}
              className={`group min-h-[18rem] border p-6 transition ${
                world.name === "DLMNS Digital"
                  ? "border-blue-accent/18 bg-white/64"
                  : "border-graphite/10 bg-white/54"
              }`}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-dark">
                    {world.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-graphite">
                    {world.name}
                  </h3>
                </div>
                <span className="border border-graphite/12 bg-cream/60 px-3 py-1 text-xs text-graphite/62">
                  {world.status}
                </span>
              </div>
              <p className="mt-7 min-h-[6.5rem] text-sm leading-7 text-graphite/66">
                {world.description}
              </p>
              {world.href ? (
                <a
                  href={world.href}
                  target={world.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={world.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold transition ${
                    world.name === "DLMNS Digital" ? "text-blue-accent" : "text-forest"
                  } group-hover:text-graphite`}
                >
                  {world.cta}
                  <span aria-hidden="true">-&gt;</span>
                </a>
              ) : (
                <p className="mt-7 text-sm text-graphite/45">Wird als eigener Einstieg vorbereitet.</p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogicSection() {
  const points = [
    ["Gemeinde praktisch denken", "DLMNS hört zu, ordnet Bedarf und übersetzt ihn in Ausstattung, Räume und Abläufe, die vor Ort tragfähig sind."],
    ["Räume verlässlich ausstatten", "Stühle, Tische, Sitzmöbel und Organisation werden so geplant, dass Aufbau, Nutzung und Lagerung im Alltag leicht bleiben."],
    ["Digital sinnvoll ergänzen", "Webseiten, Tools und Automatisierung kommen dazu, wenn sie Mitarbeitende entlasten und Kommunikation einfacher machen."]
  ];

  return (
    <section className="border-y border-graphite/10 bg-sage/16 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionIntro
          eyebrow="Arbeitsweise"
          title="Persönlich beraten, ruhig planen, sauber umsetzen."
        />
        <div className="grid gap-4">
          {points.map(([title, text]) => (
            <motion.div key={title} {...fadeIn} className="border border-graphite/10 bg-cream/74 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-graphite">{title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-graphite/66">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DigitalSection() {
  return (
    <section id="digital" className="scroll-mt-36 py-20 sm:py-24 md:scroll-mt-28">
      <motion.div {...fadeIn} className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-accent">
            DLMNS Digital
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-graphite sm:text-5xl">
            Digitale Systeme, wenn sie Gemeinde wirklich leichter machen.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-graphite/70">
            DLMNS Digital ist die Erweiterung, nicht der Hauptcharakter:
            klare Webseiten, kleine Werkzeuge, Prozesssysteme und Automatisierung
            für Gemeinden, Projekte und Teams, die übersichtlich arbeiten wollen.
          </p>
          <a
            href={primaryLinks.digital}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex h-12 items-center justify-center border border-blue-accent/28 bg-blue-accent/9 px-6 text-sm font-semibold text-blue-accent transition hover:bg-blue-accent hover:text-white"
          >
            Digitale Systeme entdecken
          </a>
        </div>
        <div className="relative order-1 min-h-[20rem] overflow-hidden border border-blue-accent/16 bg-white shadow-soft sm:min-h-[29rem] lg:order-2">
          <Image
            src="/dlmns-digital-beratung.png"
            alt="Beratungstisch mit Raumplan, Materialmustern und einem dezenten digitalen System"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 620px, 100vw"
          />
        </div>
      </motion.div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-36 border-t border-graphite/10 bg-forest py-20 text-white md:scroll-mt-28">
      <motion.div {...fadeIn} className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
          Einstieg
        </p>
        <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
          Du suchst Ausstattung, Beratung oder digitale Unterstützung für Gemeinde und Raum?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/74">
          Ein ehrlicher Einstieg reicht: Bedarf schildern, Raum beschreiben,
          nächste sinnvolle Schritte gemeinsam sortieren.
        </p>
        <a
          href={primaryLinks.contact}
          className="mt-10 inline-flex h-12 items-center justify-center bg-cream px-6 text-sm font-semibold text-forest transition hover:bg-white"
        >
          Beratung anfragen
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  const linkedWorlds = worlds.filter((world) => world.href);

  return (
    <footer className="border-t border-graphite/10 bg-cream py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 text-sm text-graphite/62 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <Image
            src="/dlmns-main-horizontal-light.png"
            alt="DLMNS - Gemeinde. Raum. Entwicklung."
            width={3600}
            height={1520}
            className="h-auto w-64 object-contain sm:w-72"
            sizes="(min-width: 640px) 288px, 256px"
          />
          <p className="mt-4 max-w-md leading-7">
            Familienbetrieb für Gemeinde, Raum, Ausstattung und ergänzende
            digitale Werkzeuge.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:justify-self-end">
          {linkedWorlds.map((world) => (
            <a
              key={world.name}
              href={world.href}
              target={world.href?.startsWith("mailto:") ? undefined : "_blank"}
              rel={world.href?.startsWith("mailto:") ? undefined : "noreferrer"}
              className="font-medium transition hover:text-forest"
            >
              {world.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
