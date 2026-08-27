"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { process } from "@/data/content";
import { prefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * Ablauf der Verkaufsberatung als 3D-Ring.
 *
 * Technik übernommen aus dem Projekt „Häckl Architekten"
 * (`site/assets/js/main.js` §6, `style.css` .carousel*): Die Karten sitzen auf
 * einem Zylinder – jede um `360°/TOTAL * index` gedreht und um den Radius nach
 * außen geschoben, der Ring selbst um denselben Radius nach hinten. Beim
 * Scrollen dreht der Ring von −102° auf −25°; die Bilder in den Karten laufen
 * gegenläufig und geben der Fläche zusätzlich Tiefe.
 *
 * Der Ring hat mehr Plätze als Karten (14 bei 6 Schritten). Die freien Plätze
 * bleiben leer, dadurch zieht nur ein Ausschnitt des Zylinders durchs Bild
 * statt eines geschlossenen Karussells.
 *
 * Zwei Abweichungen vom Vorbild, beide bewusst:
 * - Die Geometrie wird in JS gerechnet statt in CSS. Das Original nutzt
 *   `sin()` in `calc()`; hier hängen Radius und Kartenbreite ohnehin an einer
 *   gemessenen Pixelbreite, und `gsap.set` schreibt dieselben Werte ohne
 *   Abhängigkeit von der CSS-Trigonometrie.
 * - Unter 768 px entfällt die 3D-Ebene komplett: Dort ist es eine schlichte
 *   Liste. Das spart Compositing und bleibt bedienbar.
 */

/* Ringplätze insgesamt – mehr als Karten, damit der Ring offen wirkt. */
const TOTAL = 14;

export default function ProcessCarousel() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const ring = el.querySelector<HTMLElement>(".ring");
    const stage = el.querySelector<HTMLElement>(".ring-stage");
    if (!ring || !stage) return;

    if (prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".ring-card", el);
        const imgs = el.querySelectorAll(".ring-img");
        const angle = 360 / TOTAL;

        /* Radius so, dass die Karten den Zylinder lückenlos auskleiden:
           r = Kartenbreite / sin(Innenwinkel). */
        const place = () => {
          const w = cards[0]?.offsetWidth ?? 0;
          if (!w) return;
          const radius = w / Math.sin((angle * Math.PI) / 180);

          gsap.set(ring, { z: -radius, transformStyle: "preserve-3d" });

          /* Die Karten bewusst NICHT über gsap.set: GSAP schreibt immer
             `translate3d(...) rotate(...)`, verschiebt also erst nach der
             Drehung entlang der Weltachsen. Die Karten müssen aber umgekehrt
             erst nach vorn geschoben und dann um den Ringmittelpunkt gedreht
             werden – sonst drehen sie sich auf der Stelle und fächern
             übereinander, statt auf dem Zylinder zu sitzen. */
          cards.forEach((card, i) => {
            card.style.transform = `rotateY(${angle * (i + 1)}deg) translateZ(${radius}px)`;
          });
        };
        place();

        /* Das Vorbild dreht fest von −102° auf −25°. Dort liegen nur vier
           Karten auf dem Ring, die dabei einmal durchs Bild ziehen. Bei sechs
           Schritten kämen mit denselben Werten die Schritte 05 und 06 nie nach
           vorn – deshalb ist die Spanne an die Kartenzahl gekoppelt: von
           „Karte 1 frontal" bis „letzte Karte frontal". */
        /* Beide Bewegungen liegen auf **einer** Zeitachse mit **einem**
           ScrollTrigger – zwei getrennte Trigger mit `pin` würden sich
           gegenseitig die Pin-Spacer verstellen.

           Die Bühne wird gepinnt: Ohne Pin startet die Drehung, während die
           Bilder noch unter der Falz liegen, und bei „Sektion angekommen" war
           bereits Schritt 04 vorn – Schritt 01 hat man nie gesehen. Gepinnt
           beginnt die Drehung erst, wenn die Bilder mittig stehen, und alle
           sechs ziehen garantiert durch. */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: "center center",
            end: "+=900",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: place,
          },
        });

        tl.fromTo(
          ring,
          { rotationY: -angle },
          { rotationY: -angle * cards.length, ease: "none" },
          0,
        ).fromTo(
          imgs,
          { xPercent: 8 },
          { xPercent: -8, ease: "none" },
          0,
        );

        return () => {
          gsap.set(ring, { clearProps: "transform" });
          cards.forEach((c) => {
            c.style.transform = "";
          });
        };
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ablauf"
      ref={root}
      className="py-[clamp(5rem,10vw,10rem)]"
    >
      {/* ---- Kopfzeile ---- */}
      <div className="px-[var(--gutter)]">
        <div className="mx-auto max-w-[110rem]">
          <hr className="rule" />
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,40%)_1fr] lg:gap-12">
            <p className="t-mono t-label">{process.eyebrow}</p>
            <div>
              <h2 className="t-h1 max-w-[18ch] !hyphens-manual">
                {process.headline}
              </h2>
              <p className="t-body mt-7 max-w-[46ch] text-black/70">
                {process.intro}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Ring ----
          Die Perspektive muss auf dem *direkten* Elternelement des Rings
          liegen, sonst greift sie nicht. */}
      {/* Etwas höher als eine Karte: Die vorderste Karte steht bei 0°, die
          seitlichen kippen weg und brauchen oben und unten etwas Luft. */}
      <div className="ring-stage relative overflow-hidden mt-[clamp(3rem,6vw,6rem)] [--card-w:clamp(16rem,26vw,29rem)] md:h-[calc(var(--card-w)*1.35)]">
        <div className="md:flex md:h-full md:items-center md:justify-center md:[perspective:5000px]">
          <ul className="ring m-0 flex list-none flex-col gap-1 p-0 px-[var(--gutter)] md:h-[var(--card-w)] md:w-[var(--card-w)] md:flex-none md:gap-0 md:px-0 md:[transform-style:preserve-3d]">
            {process.steps.map((step, i) => (
              <li
                key={step.title}
                className="ring-card relative aspect-[4/3] w-full overflow-hidden bg-taupe/30 md:absolute md:inset-0 md:aspect-square md:h-[var(--card-w)] md:w-[var(--card-w)] md:[backface-visibility:hidden]"
              >
                {/* Das Bild ist größer als die Karte – der Überstand ist der
                    Weg für die gegenläufige Parallaxbewegung. */}
                {/* `eager`: Karten, die im Ring nach hinten zeigen, lösen das
                    Lazy-Loading nie aus – sie blieben als leere Flächen stehen,
                    bis der Ring sie nach vorn dreht. Sechs Bilder à ~130 KB
                    sind der bessere Handel. */}
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 29rem"
                  className="ring-img scale-[1.2] object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/0"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="t-mono block text-white/75">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="t-h3 mt-2">{step.title}</h3>
                  <p className="t-body mt-2 max-w-[30ch] text-white/80">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
}
