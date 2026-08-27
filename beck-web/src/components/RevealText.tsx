"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { prefersReducedMotion } from "@/lib/useReducedMotion";

type Props = {
  /** Jede Zeile wird zu einer eigenen Maske. */
  lines: readonly string[];
  className?: string;
  /** HTML-Element des Containers – h1/h2/p je nach Kontext. */
  as?: "h1" | "h2" | "h3" | "p" | "div";
  delay?: number;
  stagger?: number;
  /** Erst animieren, wenn das Element in den Viewport kommt. */
  trigger?: boolean;
};

/**
 * Zeilenweise Masken-Animation: jede Zeile sitzt in einem overflow-hidden
 * Container, der innere Span fährt von unten herein.
 *
 * Wichtig fürs Markup: Die Zeilen bleiben echter Text im DOM, damit
 * Screenreader und Suchmaschinen den vollständigen Satz lesen.
 */
export default function RevealText({
  lines,
  className,
  as: Tag = "div",
  delay = 0,
  stagger = 0.09,
  trigger = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  // Nur einmal pro Seitenaufruf – siehe Hinweis in Hero.tsx (Strict Mode).
  const played = useRef(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || played.current) return;
    played.current = true;

    if (prefersReducedMotion()) {
      // Endzustand direkt zeigen – und die Compositing-Ebene gar nicht erst
      // reservieren, hier wird nichts animiert.
      el.classList.remove("js-reveal-ready");
      el.querySelectorAll<HTMLElement>(".reveal-line > span").forEach((s) => {
        s.style.willChange = "auto";
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const targets = el.querySelectorAll<HTMLElement>(".reveal-line > span");
    if (!targets.length) return;

    // GSAP übernimmt den Startzustand, danach darf die CSS-Klasse weg –
    // sonst hält sie den Text dauerhaft versteckt.
    gsap.set(targets, { yPercent: 110, visibility: "visible" });
    el.classList.remove("js-reveal-ready");

    // GSAP setzt Start- und Endwert selbst, damit der CSS-Startzustand und
    // die Animation nicht auseinanderlaufen können.
    gsap.fromTo(
      targets,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 1.05,
        ease: "expo.out",
        delay,
        stagger,
        /* `will-change: transform` steht per CSS auf jeder Zeile, damit der
           Reveal auf einer eigenen Ebene startet. Danach ist die Reservierung
           nur noch Speicherlast — der Browser hält je Zeile eine
           Compositing-Ebene vor, die sich nie wieder ändert. */
        onComplete: () => {
          gsap.set(targets, { willChange: "auto" });
        },
        ...(trigger
          ? {
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            }
          : {}),
      },
    );

    // Kein kill() im Cleanup – der Strict-Mode-Cleanup würde die Animation
    // sofort wieder stoppen. Der ScrollTrigger räumt sich über `once: true`
    // selbst ab, sobald er einmal ausgelöst hat.
  }, [delay, stagger, trigger]);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`js-reveal-ready ${className ?? ""}`}
    >
      {lines.map((line, i) => (
        <span className="reveal-line" key={i}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
