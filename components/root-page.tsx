"use client";

import { motion } from "framer-motion";
import { primaryLinks, worlds } from "@/lib/worlds";

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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="DLMNS Start">
          <span className="grid h-8 w-8 place-items-center border border-cyan-200/30 bg-cyan-200/10 text-[0.68rem] font-semibold tracking-[0.16em] text-cyan-100">
            D
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-slate-100">
            DLMNS
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#welten">
            Welten
          </a>
          <a className="transition hover:text-white" href="#digital">
            DLMNS Digital
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
      <div className="max-w-4xl">
        <p className="mb-7 text-xs font-medium uppercase tracking-[0.34em] text-cyan-100/70">
          Dachmarke für Systeme und Bedeutungsräume
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
          DLMNS bündelt digitale Systeme, Denkformate und Erfahrungsräume.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Von Analysewerkzeugen über digitale Produktarchitektur bis zu
          erfahrbaren Wissens- und Glaubensräumen.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#welten"
            className="inline-flex h-12 items-center justify-center border border-cyan-100/30 bg-cyan-100/10 px-6 text-sm font-medium text-cyan-50 transition hover:border-cyan-100/60 hover:bg-cyan-100/16"
          >
            Welten ansehen
          </a>
          <a
            href={primaryLinks.digital}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center border border-white/12 bg-white/[0.03] px-6 text-sm font-medium text-slate-100 transition hover:border-white/24 hover:bg-white/[0.07]"
          >
            DLMNS Digital öffnen
          </a>
        </div>
      </div>

      <div className="mt-16 grid max-w-3xl grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
        {["Analyse", "Produktlogik", "Bedeutung", "Anwendung"].map((item) => (
          <div key={item} className="bg-ink/70 px-4 py-4 text-sm text-slate-300">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function WorldsSection() {
  return (
    <section id="welten" className="relative border-t border-white/10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div {...fadeIn} className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-100/65">
            DLMNS Welten
          </p>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
            Eine Root-Map für eigenständige Systeme.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          {worlds.map((world, index) => (
            <motion.article
              key={world.name}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.04 }}
              className="group min-h-[18rem] bg-ink-soft/92 p-6 transition hover:bg-[#0d1722]"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
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
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition group-hover:text-white"
                >
                  {world.cta}
                  <span aria-hidden="true">-&gt;</span>
                </a>
              ) : (
                <p className="mt-7 text-sm text-slate-500">Noch ohne externen Einstieg.</p>
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
    ["Systeme statt Einzelideen", "DLMNS denkt Projekte als Werkzeuge, Abläufe und nutzbare Strukturen."],
    ["Struktur statt Rauschen", "Komplexe Themen werden sortiert, priorisiert und in klare Schritte übersetzt."],
    ["Bedeutung und Anwendung", "Digitale Produktlogik trifft auf Erfahrungsräume, Inhalte und konkrete Praxis."]
  ];

  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div {...fadeIn}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-100/65">
            DLMNS Logik
          </p>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
            Verbunden durch klare Systeme.
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
      <motion.div
        {...fadeIn}
        className="mx-auto max-w-7xl px-5 sm:px-8"
      >
        <div className="border border-cyan-100/18 bg-cyan-100/[0.045] p-7 shadow-panel sm:p-10 lg:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-100/65">
            Beziehung zu DLMNS Digital
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-5xl">
                DLMNS Digital ist der professionelle Produktstudio-Bereich unter DLMNS.
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Dort liegen digitale Systeme, Analysewerkzeuge, Automatisierung,
                Produktarchitektur und individuelle Websysteme.
              </p>
            </div>
            <a
              href={primaryLinks.digital}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-full items-center justify-center border border-cyan-100/30 bg-cyan-100/10 px-6 text-sm font-medium text-cyan-50 transition hover:border-cyan-100/60 hover:bg-cyan-100/16 sm:w-fit lg:justify-self-end"
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
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-100/65">
          Einstieg
        </p>
        <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">
          Du möchtest ein digitales System, ein Tool oder eine Projektidee mit
          DLMNS entwickeln?
        </h2>
        <a
          href={primaryLinks.contact}
          className="mt-10 inline-flex h-12 items-center justify-center border border-white/14 bg-white/[0.04] px-6 text-sm font-medium text-slate-100 transition hover:border-cyan-100/40 hover:bg-cyan-100/10"
        >
          Projekt anfragen
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  const linkedWorlds = worlds.filter((world) => world.href);

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 text-sm text-slate-400 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="font-semibold tracking-[0.18em] text-slate-100">DLMNS</p>
          <p className="mt-4 max-w-md leading-7">
            Root Page für digitale Systeme, Denkformate, Produktideen und
            Bedeutungsräume.
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
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:64px_64px]" />
      <svg
        className="absolute right-[-8rem] top-24 hidden h-[34rem] w-[34rem] text-cyan-100/18 md:block lg:right-[5vw]"
        viewBox="0 0 520 520"
        fill="none"
      >
        <path d="M97 248H224L313 142H429" stroke="currentColor" strokeWidth="1" />
        <path d="M129 334H260L342 258H474" stroke="currentColor" strokeWidth="1" />
        <path d="M209 422L292 340L421 340" stroke="currentColor" strokeWidth="1" />
        {[97, 224, 313, 429, 129, 260, 342, 474, 209, 292, 421].map((x, index) => (
          <circle
            key={`${x}-${index}`}
            cx={x}
            cy={[248, 248, 142, 142, 334, 334, 258, 258, 422, 340, 340][index]}
            r="4"
            fill="currentColor"
          />
        ))}
      </svg>
    </div>
  );
}
