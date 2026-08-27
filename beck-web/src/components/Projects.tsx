"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "@/data/content";
import { prefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * Referenzen als gepinntes Akkordeon mit Bildwechsel.
 *
 * Technik übernommen aus dem Projekt „Häckl Architekten"
 * (`site/assets/js/main.js` §8, `style.css` .advantage*): Die Sektion ist
 * doppelt so hoch wie der Viewport, der Inhalt bleibt darin stehen. Über den
 * Scrollweg öffnet sich Zeile für Zeile – die vorherige schließt gleichzeitig,
 * ihre Kopfzeile blasst ab, und rechts blendet das zugehörige Bild auf.
 *
 * Abweichung vom Vorbild: Statt `ScrollTrigger.pin` hält `position: sticky`
 * den Inhalt. Das Original braucht den Pin, weil es zusätzlich einen eigenen
 * Snap über Lenis fährt; hier genügt Sticky, und es kollidiert nicht mit dem
 * gepinnten Zoom der Ausstellung weiter oben.
 */
export default function Projects() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const panels = gsap.utils.toArray<HTMLElement>(".ref-panel", el);
    const imgs = gsap.utils.toArray<HTMLElement>(".ref-img", el);
    if (panels.length < 2) return;

    const bodies = panels.map((p) =>
      p.querySelector<HTMLElement>(".ref-body"),
    );
    const headers = panels.map((p) =>
      p.querySelector<HTMLElement>(".ref-header"),
    );

    // Ohne Bewegung: alles offen, alle Bilder sichtbar übereinander wäre
    // sinnlos – hier bleibt die erste Zeile offen und das erste Bild stehen.
    if (prefersReducedMotion()) {
      bodies.forEach((b, i) => {
        if (b && i > 0) b.style.height = "0px";
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Bildstapel: nur das erste Bild ist zu Beginn sichtbar.
        gsap.set(imgs, { opacity: 0 });
        gsap.set(imgs[0], { opacity: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        panels.forEach((_, i) => {
          if (i === 0) return;
          const body = bodies[i];
          const prevBody = bodies[i - 1];
          const prevHeader = headers[i - 1];
          const header = headers[i];

          // Die geöffnete Zeile wächst aus der Höhe 0 – `from` liest die
          // tatsächliche Inhaltshöhe selbst aus.
          if (body) tl.from(body, { height: 0, ease: "none", duration: 1 }, i);
          if (prevBody)
            tl.to(prevBody, { height: 0, ease: "none", duration: 1 }, i);
          if (prevHeader)
            tl.to(prevHeader, { opacity: 0.35, ease: "none", duration: 1 }, i);
          if (header)
            tl.fromTo(
              header,
              { opacity: 0.35 },
              { opacity: 1, ease: "none", duration: 1 },
              i,
            );
          if (imgs[i])
            tl.to(imgs[i], { opacity: 1, ease: "none", duration: 0.6 }, i);
        });
      });

      // Unter 1024 px steht alles offen untereinander, jede Zeile mit Bild.
      mm.add("(max-width: 1023px)", () => {
        gsap.set(imgs, { opacity: 1 });
        bodies.forEach((b) => {
          if (b) b.style.height = "auto";
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="referenzen"
      ref={root}
      className="relative lg:h-[220svh]"
    >
      <div className="lg:sticky lg:top-0 lg:flex lg:h-[100svh] lg:items-stretch">
        {/* ---- linke Spalte: Kopfzeile und Zeilen ---- */}
        <div className="flex flex-col justify-center px-[var(--gutter)] py-[clamp(4rem,8vw,7rem)] lg:w-1/2 lg:py-0 lg:pr-[clamp(2rem,4vw,4rem)]">
          <div className="mx-auto w-full max-w-[52rem]">
            <hr className="rule" />
            <p className="t-mono t-label mt-8">{projects.eyebrow}</p>
            <h2 className="t-h1 mt-6 max-w-[16ch] !hyphens-manual">
              {projects.headline}
            </h2>

            <ul className="mt-[clamp(2.5rem,4vw,3.5rem)]">
              {projects.items.map((p, i) => (
                <li
                  key={p.key}
                  className="ref-panel border-t border-black/12 last:border-b"
                >
                  <div className="ref-header flex items-center gap-5 py-5">
                    <span className="t-mono shrink-0 border border-black/20 px-3 py-2 text-black">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="t-h3 flex-1">{p.name}</h3>
                  </div>

                  {/* `overflow-hidden`: Die Höhe wird animiert, der Inhalt darf
                      dabei nicht überstehen. */}
                  <div className="ref-body overflow-hidden">
                    <div className="pb-6 pl-0 lg:pl-[4.25rem]">
                      <p className="t-mono text-black/70">{p.location}</p>
                      <p className="t-body mt-4 max-w-[46ch] text-black/70">
                        {p.scope}
                      </p>

                      <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
                        <dt className="t-mono text-black/55">Auftraggeber</dt>
                        <dd className="t-body">{p.client}</dd>
                        {"architect" in p && p.architect && (
                          <>
                            <dt className="t-mono text-black/55">Architektur</dt>
                            <dd className="t-body">{p.architect}</dd>
                          </>
                        )}
                        <dt className="t-mono text-black/55">Auftragssumme</dt>
                        <dd className="t-body font-[family-name:var(--font-mono)] tabular-nums">
                          {p.volume}
                        </dd>
                      </dl>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {p.systems.map((s) => (
                          <li key={s} className="pill">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <Link href="/objektbau" className="btn btn-primary mt-10">
              Alle Projekte
            </Link>
          </div>
        </div>

        {/* ---- rechte Spalte: Bildstapel ---- */}
        <div className="relative hidden lg:block lg:w-1/2">
          {projects.items.map((p) => (
            <div key={p.key} className="ref-img absolute inset-0">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                /* `eager`: Die Bilder liegen übereinander und sind anfangs
                   transparent – Lazy-Loading würde erst auslösen, wenn das
                   Bild schon sichtbar sein müsste. */
                loading="eager"
                sizes="50vw"
                className="object-cover"
              />
              {"credit" in p && p.credit && (
                <span className="t-mono absolute bottom-4 right-4 text-white/70">
                  {p.credit}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---- Bilder unter 1024 px: je Projekt eines im Fluss ---- */}
      <ul className="px-[var(--gutter)] pb-[clamp(4rem,8vw,7rem)] lg:hidden">
        {projects.items.map((p) => (
          <li key={p.key} className="relative mt-2 aspect-[4/3] w-full">
            <Image
              src={p.image}
              alt={p.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
