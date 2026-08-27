"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { partners, stats } from "@/data/content";
import { prefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * Kennzahlen und Hersteller. Nimmt bei fluid.glass den Platz der
 * Testimonial-Sektion ein (.ref/shots/fg-10.png) — Beck hat keine echten
 * Kundenstimmen, deshalb tragen hier belegte Zahlen die Fläche.
 */
export default function Stats() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const nums = el.querySelectorAll<HTMLElement>("[data-count]");

    if (prefersReducedMotion()) {
      nums.forEach((n) => {
        n.textContent = Number(n.dataset.count).toLocaleString("de-DE");
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      nums.forEach((n) => {
        const target = Number(n.dataset.count);
        const obj = { v: 0 };

        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: n, start: "top 88%", once: true },
          onUpdate: () => {
            n.textContent = Math.round(obj.v).toLocaleString("de-DE");
          },
          onComplete: () => {
            n.textContent = target.toLocaleString("de-DE");
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="px-[var(--gutter)] py-[clamp(5rem,10vw,10rem)]"
    >
      <div className="mx-auto max-w-[110rem]">
        <p className="t-mono t-label">{stats.eyebrow}</p>
        <h2 className="t-h1 mt-8 max-w-[18ch]">{stats.headline}</h2>

        <dl className="mt-[clamp(3rem,6vw,6rem)] grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {stats.items.map((s) => (
            <div key={s.label} className="border-t border-black/12 pt-5">
              <dd className="t-h1">
                {"prefix" in s && s.prefix}
                <span data-count={s.value}>0</span>
                {"suffix" in s && s.suffix}
              </dd>
              <dt className="t-body mt-3">{s.label}</dt>
              <p className="t-mono mt-1 text-black/70">{s.sub}</p>
            </div>
          ))}
        </dl>

        {/* ---- Hersteller ---- */}
        <div className="mt-[clamp(4rem,8vw,8rem)] border-t border-black/12 pt-10">
          <h3 className="t-mono t-label">{partners.headline}</h3>

          <ul className="mt-9 flex flex-wrap items-center gap-x-14 gap-y-9">
            {partners.items.map((p) => (
              <li key={p.name}>
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={p.width}
                  height={p.height}
                  sizes="200px"
                  /* Die Herstellerlogos bringen Grün (KNEER), Türkis
                     (WEINSTOCK) und Orange (ROMA) mit — drei Fremdfarben in
                     einer Palette aus Creme und Anthrazit. Entsättigt liegen
                     sie auf einer Ebene; die Marke kommt erst beim Hover
                     zurück. */
                  className={`w-auto opacity-55 grayscale transition-[opacity,filter] duration-500 hover:opacity-100 hover:grayscale-0 ${p.logoClass}`}
                />
              </li>
            ))}
          </ul>

          <p className="t-mono mt-9 text-black/70">{partners.note}</p>
        </div>
      </div>
    </section>
  );
}
