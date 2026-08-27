"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AmbientVideo from "@/components/AmbientVideo";
import RevealText from "@/components/RevealText";
import { hero, specialists } from "@/data/content";
import { prefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * Hero nach fluid.glass (.ref/shots/hero/still-0.png → .ref/shots/fg-01.png).
 *
 * Der Hero ist **eine** Sektion über zwei Bildschirmseiten (150svh). Das Video
 * liegt in einem `sticky top-0 h-[100svh]`-Container dahinter und füllt
 * durchgehend den Viewport; darüber liegen zwei absolut positionierte
 * Textebenen zu je einem Viewport:
 *
 *   Viewport 1  Wortmarke mittig oben · ↳ ANGEBOT ANFORDERN oben rechts ·
 *               Riesen-Tagline zentriert im unteren Drittel
 *   Viewport 2  dünne helle Linie über die volle Breite · ◆ WAS WIR TUN links ·
 *               Textspalte rechts (~272 px)
 *
 * Man scrollt also weiter, das Video läuft weiter, und die Info-Zeile erscheint
 * über **demselben** Motiv. Kein zweites Bild, kein zweites Video.
 *
 * Zwei Fallstricke, die das Markup bewusst umgeht:
 * - Die Sektion darf **kein** `overflow-hidden` tragen. Das würde einen
 *   Scroll-Container aufmachen und `position: sticky` wirkungslos machen; das
 *   Clipping sitzt deshalb im Sticky-Container selbst.
 * - Sticky braucht keinen ScrollTrigger und kein Pinning – es kollidiert damit
 *   auch nicht mit dem gepinnten Zoom weiter unten und läuft unter Lenis
 *   nativ mit, weil Lenis den echten Dokument-Scroll bewegt.
 *
 * Hintergrund ist ein eigens erzeugtes Video (Standbild aus GPT Image,
 * animiert mit Veo): Holzschalung, dunkles Obergeschoss, großes Eckfenster
 * mit Fensterbank, Ziergräser davor.
 *
 * Bewegungsbudget gegen die Vorlage gemessen (mittlere Pixeldifferenz):
 * Fassade 2,99 – fluid.glass liegt bei 3,03. Die Architektur steht also
 * praktisch still, nur die Gräser im Vordergrund bewegen sich (9,64).
 * Erreicht durch starke Verlangsamung eines kurzen Ausschnitts; das Video
 * läuft als Ping-Pong-Schleife und springt deshalb am Ende nicht.
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const frame = el.querySelector<HTMLElement>(".hero-parallax");
    if (!frame) return;

    // Ohne Bewegung bleibt das Bild schlicht stehen – der Hero liest sich
    // dann wie ein ruhiges Standbild.
    if (prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Der Rahmen ist 25svh höher als der Viewport und wandert genau um
      // diese 25svh nach oben, während der Hero seine 50svh Scrollweg
      // durchläuft — daraus ergibt sich das gemessene Verhältnis 0,5.
      gsap.fromTo(
        frame,
        { yPercent: 0 },
        {
          // 25svh von 125svh Rahmenhöhe = 20 %
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="on-dark relative h-[150svh] w-full text-white"
    >
      {/* ---- durchgehendes Motiv mit 50-%-Parallax ----
          An fluid.glass gemessen: Bei 120/240/360 px Scroll wandert eine feste
          Kante im Bild um exakt −60/−120/−180 px, also konstant mit halber
          Scrollgeschwindigkeit. Kein Sticky (das stünde still) und kein
          Mitlaufen (das wäre 1:1).

          Der Rahmen ist 125svh hoch: Über den Scrollweg des Heros
          (150svh − 100svh = 50svh) wandert er um die Hälfte, also 25svh —
          und deckt damit den Viewport durchgehend ab. */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <div className="hero-parallax absolute inset-x-0 top-0 h-[125svh] will-change-transform">
          {/* Unten verankert und etwas höher als der Rahmen: Der sichtbare
              Ausschnitt zeigt nur die oberen 100 von 125svh, sonst läge das
              Gräserband im Vordergrund von Anfang an unter der Falz — und die
              einzige Bewegung im Bild wäre unsichtbar. Der Überstand wird oben
              am Dach beschnitten, wo am wenigsten Information sitzt. */}
          <AmbientVideo
            src="/video/hero-haus.mp4"
            poster="/img/poster-hero-haus.jpg"
            label="Wohnhaus mit Holzfassade und großem Eckfenster, davor Ziergräser"
            className="absolute inset-x-0 bottom-0 h-[118%] w-full object-cover"
          />
        </div>

        {/* Der Verlauf bleibt am Viewport und wandert bewusst nicht mit –
            sonst zöge die Abdunklung beim Scrollen aus dem Bild. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/70"
        />
      </div>

      {/* ---- Viewport 1: Wortmarke, CTA, Tagline, Scroll-Hinweis ---- */}
      <div className="absolute inset-x-0 top-0 flex h-[100svh] flex-col px-[var(--gutter)] pb-[calc(var(--pill-h)+var(--pill-gap)+3rem)] pt-4">
        {/* ---- Kopfzeile ---- */}
        {/* Unter sm reicht die Breite nicht für eine mittige Wortmarke neben
            dem CTA – dort stehen beide nebeneinander an den Rändern.
            `items-baseline`: Wortmarke (Sans, groß) und CTA (Mono, klein)
            sitzen sonst nur auf gleicher Oberkante, nicht auf einer Achse. */}
        <div className="flex items-baseline justify-between gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-baseline sm:gap-4">
          <div className="hidden sm:block" />
          <span className="text-[clamp(1.05rem,1.6vw,1.5rem)] leading-none tracking-[-0.02em] sm:justify-self-center">
            {hero.wordmark}
          </span>
          <Link
            href={hero.cta.href}
            className="btn btn-text !py-0 !text-white sm:justify-self-end"
          >
            {hero.cta.label}
          </Link>
        </div>

        {/* ---- Tagline im unteren Drittel ----
            Gegen fluid.glass gemessen: 57,6 px bei 1440 px, lh 1,0, ls −0,03em
            — dieselbe Größe wie die Section-Headlines (.t-h1). Position und
            Umbruch bleiben unverändert. */}
        <div className="flex flex-1 items-end justify-center">
          <RevealText
            as="h1"
            lines={hero.taglineLines}
            trigger={false}
            className="max-w-[24ch] text-center text-[clamp(2rem,4vw,4.5rem)] font-normal leading-none tracking-[-0.03em]"
          />
        </div>

        {/* Kein „Scrollen zum Entdecken": Die Vorlage hat den Hinweis nicht,
            und beim Weiterscrollen stand er allein mitten im Bild. */}
      </div>

      {/* ---- Viewport 2: „Was wir tun" über demselben Motiv ----
          Die Ebene beginnt exakt bei 100svh; die helle Linie sitzt damit im
          unbescrollten Zustand knapp unter der Falz und schiebt sich beim
          Scrollen ins Bild – wie in fg-01. */}
      <div
        id="was-wir-tun"
        className="absolute inset-x-0 top-[100svh] h-[50svh] pt-[0.5svh]"
      >
        <div className="relative w-full px-[var(--gutter)]">
          {/* Bewusst **kein** Scrim: Die Vorlage hat an dieser Stelle keinen.
              An identischer Bildstelle gemessen liegt der Kontrast ohne
              Abdunkler bei 6,40:1, mit bei 5,04:1 (fluid.glass 4,61:1) — der
              Scrim kostete also nur Luminanz (−48 % in der leeren linken
              Bildhälfte), ohne die Lesbarkeit zu verbessern. */}
          <div className="relative mx-auto max-w-[110rem]">
            {/* Die Linie läuft in fg-01 nicht über die volle Breite, sondern
                setzt links beim ◆-Label an (dort ca. 54 % der Viewportbreite).
                Die linke Bildhälfte bleibt bewusst frei. */}
            <div className="ml-auto w-full lg:w-[57%]">
              <hr className="rule-light" />
              {/* 17rem = 272 px, gegen fluid.glass gemessen (≈33 Zeichen/Zeile). */}
              <div className="mt-5 grid gap-6 md:grid-cols-[1fr_minmax(0,17rem)] md:gap-10">
                <p className="t-mono t-label self-start text-white">
                  {specialists.eyebrow}
                </p>
                <p className="t-body-lg max-w-[34ch] text-white">
                  {specialists.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
