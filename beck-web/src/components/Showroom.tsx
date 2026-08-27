"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AmbientVideo from "@/components/AmbientVideo";
import { company, openingHours, showroom } from "@/data/content";
import { prefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * Ausstellung nach fluid.glass (.ref/shots/fg-05.png → fg-06.png → fg-07.png).
 *
 * Hier sitzt der Signature-Move der Vorlage: Auf dunklem Grund startet die
 * Bildfläche eingefasst in der Mitte (bei 1440 px ca. 845 px breit) und wächst
 * beim Scrollen auf volle Viewportbreite und -höhe. Der Radius bleibt
 * durchgehend 0.
 *
 * Headline und Adressblock liegen als eigene, unbewegte Ebene darüber – nur
 * die Bildfläche wächst, der Text bleibt stehen.
 *
 * Umgesetzt über `width`/`height` in Viewport-Einheiten statt `scale`, damit
 * der Videoinhalt nicht mitverzerrt wird.
 */
export default function Showroom() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const frame = el.querySelector<HTMLElement>(".zoom-frame");
    if (!frame) return;

    if (prefersReducedMotion()) {
      // Endzustand direkt zeigen – kein Pinning, kein Scrub.
      gsap.set(frame, { width: "100vw", height: "100svh" });
      return;
    }

    // matchMedia räumt beim revert() alle darin erstellten Tweens und
    // ScrollTrigger selbst auf – ein zusätzlicher gsap.context wäre doppelt.
    const mm = gsap.matchMedia();

    // Desktop: gepinnt, langer ruhiger Scrollweg.
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        frame,
        { width: "58vw", height: "59svh" },
        {
          width: "100vw",
          height: "100svh",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            // Der Zoom ist am Ende der Timeline fertig; ein längerer Pin-Weg
            // hielte die Sektion nur noch bewegungslos fest.
            end: "+=110%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // Mobile: kürzerer Weg, kein Pinning – dort kostet das nur Performance.
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        frame,
        { width: "82vw", height: "46svh" },
        {
          width: "100vw",
          height: "100svh",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 5%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    return () => mm.revert();
  }, []);

  return (
    /* `bg-grey` (#212325) statt `bg-black` (#0b1012): fluid.glass trägt an
       dieser Stelle den helleren Ton. Mit Schwarz fiel das Bildmittel der
       Sektion auf 29,3 statt 54,0 — die Fläche las sich als reines Schwarz und
       der Raum um die Bildfläche verschwand. */
    <section
      id="ausstellung"
      ref={root}
      className="on-dark relative h-[100svh] w-full overflow-hidden bg-grey text-white"
    >
      {/* ---- Kopfzeile: Label + Linie, wie über jeder Sektion der Vorlage ---- */}
      <div className="pointer-events-none absolute inset-x-0 top-[var(--gutter)] z-10 px-[var(--gutter)]">
        <div className="mx-auto max-w-[110rem]">
          <hr className="rule-light" />
          <p className="t-mono t-label mt-4 text-white">{showroom.eyebrow}</p>
        </div>
      </div>

      {/* ---- wachsende Bildfläche ---- */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="zoom-frame relative h-[46svh] w-[82vw] overflow-hidden bg-grey will-change-[width,height] md:h-[59svh] md:w-[58vw]">
          {/* Montage aus drei Einstellungen, die hart gegeneinander schneiden –
              wie bei fluid.glass, wo diese Fläche ebenfalls zwischen mehreren
              Aufnahmen wechselt (fg-05 zeigt die Musterreihe, fg-06 eine ganz
              andere Einstellung). Jeder Clip ist verlangsamt: roh lagen sie bei
              24–31 mittlerer Pixeldifferenz pro Sekunde und wirkten unruhig,
              jetzt bei 13–15. */}
          <AmbientVideo
            src="/video/ausstellung-montage.mp4"
            poster="/img/poster-ausstellung.jpg"
            label="Ausstellungsraum mit schwarz gerahmten Fenster- und Türmustern in wechselnden Einstellungen"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Das Material ist von sich aus dunkel (fg-05-Anmutung), deshalb nur
              eine flache Grundabdunklung plus seitliche Verläufe, die Headline
              (links) und Adressblock (rechts) tragen. Vorher addierten sich
              links 25 % + 55 % zu ≈66 % Schwarz — das Bild verschwand. */}
          <div aria-hidden className="absolute inset-0 bg-black/10" />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/0 to-black/20"
          />
          {/* Die dünne helle Linie der Vorlage liegt im Bild und wächst mit. */}
          <hr
            aria-hidden
            className="rule-light absolute left-[7%] right-[7%] top-[36%] opacity-60"
          />
        </div>
      </div>

      {/* ---- unbewegte Textebene ---- */}
      <div className="pointer-events-none absolute inset-0 flex items-center px-[var(--gutter)]">
        <div className="mx-auto grid w-full max-w-[110rem] gap-8 lg:grid-cols-[1fr_minmax(0,22rem)] lg:items-center lg:gap-16">
          <div>
            <h2 className="max-w-[20ch] text-[clamp(1.6rem,2.6vw,2.4rem)] font-normal leading-[1.1] tracking-[-0.02em] [hyphens:auto]">
              {showroom.headline}
            </h2>
            <p className="t-body-lg mt-6 max-w-[36ch] text-white/90">
              {showroom.body}
            </p>
          </div>

          <div className="pointer-events-auto lg:text-right">
            <p className="t-mono text-white">Adresse</p>
            <address className="t-body-lg mt-3 not-italic text-white/90">
              {company.name}
              <br />
              {company.street}
              <br />
              {company.zip} {company.city}
            </address>

            <p className="t-mono mt-7 text-white">Öffnungszeiten</p>
            <dl className="mt-3 space-y-1">
              {openingHours.map((h) => (
                <div
                  key={h.days}
                  className="t-mono-md flex gap-3 text-white/85 lg:justify-end"
                >
                  <dt>{h.days}</dt>
                  <dd className="text-white/65">{h.time}</dd>
                </div>
              ))}
            </dl>

            <Link href="/kontakt" className="btn btn-ghost-light mt-7 lg:ml-auto">
              {showroom.linkLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
