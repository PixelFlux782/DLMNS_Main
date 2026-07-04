"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { offers, primaryLinks, worlds } from "@/lib/worlds";

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
} as const;

export function RootPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <SystemBackdrop />
      <Header />
      <Hero />
      <OfferSection />
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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/84 backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex h-12 w-[8.75rem] items-center sm:w-[10.25rem]"
          aria-label="DLMNS Start"
        >
          <Image
            src="/dlmns-main-wordmark.png"
            alt="DLMNS"
            width={3000}
            height={720}
            priority
            className="h-auto w-full object-contain"
            sizes="(min-width: 640px) 164px, 140px"
          />
        </a>
        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#angebote">
            Angebote
          </a>
          <a className="transition hover:text-white" href="#bereiche">
            Räume
          </a>
          <a className="transition hover:text-white" href="#digital">
            Digital
          </a>
          <a className="transition hover:text-white" href="#kontakt">
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
      className="relative mx-auto flex min-h-[86svh] max-w-7xl flex-col justify-center px-5 pb-12 pt-28 sm:px-8 lg:min-h-[82svh]"
    >
      <Image
        src="/dlmns-main-icon.png"
        alt=""
        width={1400}
        height={1400}
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12rem] top-28 hidden w-[34rem] max-w-none opacity-[0.13] mix-blend-screen lg:block"
        sizes="544px"
      />
      <div className="w-full max-w-[calc(100vw-2.5rem)] sm:max-w-4xl">
        <p className="mb-7 max-w-[22rem] text-xs font-medium uppercase tracking-[0.16em] text-emerald-100/75 sm:max-w-none sm:tracking-[0.28em]">
          Familienbetrieb für Gemeinde, Raum und Ausstattung
        </p>
        <h1 className="max-w-[20rem] text-[1.75rem] font-semibold leading-[1.16] text-white sm:max-w-4xl sm:text-6xl sm:leading-[1.08] lg:text-7xl">
          DLMNS verbindet Gemeindebedarf, Räume und passende Ausstattung.
        </h1>
        <p className="mt-8 max-w-[21rem] text-sm leading-7 text-slate-300 sm:max-w-2xl sm:text-lg sm:leading-8">
          Persönlich geführt, praktisch gedacht: von Sitzmöbeln, Tischen und
          Organisation bis zu digitalen Werkzeugen als sinnvolle Erweiterung.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#angebote"
            className="inline-flex h-12 items-center justify-center border border-emerald-100/30 bg-emerald-100/10 px-6 text-sm font-medium text-emerald-50 transition hover:border-emerald-100/60 hover:bg-emerald-100/16"
          >
            Angebote ansehen
          </a>
          <a
            href={primaryLinks.contact}
            className="inline-flex h-12 items-center justify-center border border-white/12 bg-white/[0.03] px-6 text-sm font-medium text-slate-100 transition hover:border-white/24 hover:bg-white/[0.07]"
          >
            Anfrage starten
          </a>
        </div>
      </div>

      <div className="mt-16 grid w-full max-w-[calc(100vw-2.5rem)] grid-cols-2 gap-px border border-white/10 bg-white/10 sm:max-w-4xl sm:grid-cols-4">
        {["Gemeinde", "Räume & Ausstattung", "Service", "Digital als Ergänzung"].map((item) => (
          <div key={item} className="bg-ink/72 px-4 py-4 text-sm text-slate-300">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section id="angebote" className="relative border-t border-white/10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div {...fadeIn} className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-100/65">
            DLMNS Angebote
          </p>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
            Der Schwerpunkt: nutzbare Räume, passende Ausstattung und verlässlicher Service.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-5">
          {offers.map((offer, index) => (
            <motion.article
              key={offer.name}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.04 }}
              className="group flex min-h-[20rem] flex-col bg-ink-soft/94 p-6 transition hover:bg-[#0e1714]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-100/55">
                0{index + 1}
              </p>
              <h3 className="mt-5 text-2xl font-semibold text-white">{offer.name}</h3>
              <p className="mt-5 text-sm leading-7 text-slate-300">{offer.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {offer.items.map((item) => (
                  <span
                    key={item}
                    className="border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {offer.href ? (
                <a
                  href={offer.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto pt-7 text-sm font-medium text-emerald-100 transition group-hover:text-white"
                >
                  {offer.cta} <span aria-hidden="true">-&gt;</span>
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorldsSection() {
  return (
    <section id="bereiche" className="relative border-t border-white/10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div {...fadeIn} className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-100/65">
            Aktive Bereiche
          </p>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
            Eine Dachmarke für Gemeindeservice, Räume und ergänzende digitale Angebote.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          {worlds.map((world, index) => (
            <motion.article
              key={world.name}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.04 }}
              className="group min-h-[18rem] bg-ink-soft/92 p-6 transition hover:bg-[#0e1714]"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/55">
                    {world.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {world.name}
                  </h3>
                </div>
                <span className="border border-white/12 px-3 py-1 text-xs text-slate-300">
                  {world.status}
                </span>
              </div>
              <p className="mt-7 min-h-[6.5rem] text-sm leading-7 text-slate-300">
                {world.description}
              </p>
              {world.href ? (
                <a
                  href={world.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-emerald-100 transition group-hover:text-white"
                >
                  {world.cta}
                  <span aria-hidden="true">-&gt;</span>
                </a>
              ) : (
                <p className="mt-7 text-sm text-slate-500">Wird als eigener Einstieg vorbereitet.</p>
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
    ["Gemeinde praktisch denken", "DLMNS verbindet Ausstattung, Abläufe und Beratung mit dem Alltag echter Gemeinderäume."],
    ["Räume verlässlich ausstatten", "Sitzmöbel, Tische und Organisation werden so gedacht, dass sie im Gemeindebetrieb einfach funktionieren."],
    ["Digital sinnvoll ergänzen", "Webseiten, Tools und Automatisierung kommen dort dazu, wo sie Abläufe spürbar leichter machen."]
  ];

  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div {...fadeIn}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-100/65">
            Arbeitsweise
          </p>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
            Persönlich, geordnet und entwicklungsfähig.
          </h2>
        </motion.div>
        <div className="grid gap-px border border-white/10 bg-white/10">
          {points.map(([title, text]) => (
            <motion.div key={title} {...fadeIn} className="bg-ink/80 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DigitalSection() {
  return (
    <section id="digital" className="border-t border-white/10 py-24">
      <motion.div {...fadeIn} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border border-emerald-100/18 bg-emerald-100/[0.045] p-7 shadow-panel sm:p-10 lg:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-100/65">
            DLMNS Digital
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-5xl">
                Ergänzend digital: Webseiten, Werkzeuge und Automatisierung.
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                DLMNS Digital ist kein Ersatz für den praktischen Gemeindeservice,
                sondern erweitert ihn: von klaren Webseiten bis zu kleinen Tools,
                Prozesssystemen und automatisierten Abläufen.
              </p>
            </div>
            <a
              href={primaryLinks.digital}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-full items-center justify-center border border-emerald-100/30 bg-emerald-100/10 px-6 text-sm font-medium text-emerald-50 transition hover:border-emerald-100/60 hover:bg-emerald-100/16 sm:w-fit lg:justify-self-end"
            >
              DLMNS Digital ansehen
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="kontakt" className="border-t border-white/10 py-24">
      <motion.div {...fadeIn} className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-100/65">
          Einstieg
        </p>
        <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
          Du suchst Ausstattung, Beratung oder digitale Unterstützung für Gemeinde
          und Raum?
        </h2>
        <a
          href={primaryLinks.contact}
          className="mt-10 inline-flex h-12 items-center justify-center border border-white/14 bg-white/[0.04] px-6 text-sm font-medium text-slate-100 transition hover:border-emerald-100/40 hover:bg-emerald-100/10"
        >
          Anfrage starten
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  const linkedWorlds = worlds.filter((world) => world.href);

  return (
    <footer className="border-t border-white/10 bg-ink/42 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 text-sm text-slate-400 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <Image
            src="/dlmns-main-horizontal-dark.png"
            alt="DLMNS - Gemeinde. Raum. Entwicklung."
            width={3600}
            height={1520}
            className="h-auto w-56 object-contain sm:w-64"
            sizes="(min-width: 640px) 256px, 224px"
          />
          <p className="mt-4 max-w-md leading-7">
            Familienbetrieb für Gemeinde, Raum, Ausstattung und ergänzende digitale
            Werkzeuge.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:justify-self-end">
          {linkedWorlds.map((world) => (
            <a
              key={world.name}
              href={world.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              {world.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function SystemBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:80px_80px]" />
    </div>
  );
}
