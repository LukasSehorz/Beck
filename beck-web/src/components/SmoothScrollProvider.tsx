"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Verdrahtet Lenis mit GSAP ScrollTrigger:
 * - Lenis meldet jeden Scroll-Frame an ScrollTrigger.update()
 * - gsap.ticker treibt Lenis an, damit beide auf derselben RAF-Schleife laufen
 * - lagSmoothing(0), sonst überspringt GSAP nach Tab-Wechseln Frames
 *
 * Bei `prefers-reduced-motion` wird Lenis gar nicht erst gestartet; das native
 * Scrollen bleibt aktiv und ScrollTrigger arbeitet direkt darauf.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Wert noch unbekannt -> nichts starten, der Effekt läuft gleich erneut.
    if (reduced === null) return;

    gsap.registerPlugin(ScrollTrigger);

    if (reduced) {
      // Ohne Lenis: ScrollTrigger einmal neu vermessen und fertig.
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Auf Touch bleibt natives Scrollen – fühlt sich dort schlicht besser an.
      syncTouch: false,
      touchMultiplier: 1.6,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      // gsap.ticker liefert Sekunden, Lenis erwartet Millisekunden.
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  // Anker-Links (#kontakt …) müssen auch mit Lenis funktionieren.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      // Auch „/#kontakt" abfangen: Diese Form brauchen Nav und Footer, damit
      // die Links von den Rechtstext-Unterseiten aus funktionieren. Auf der
      // Startseite sollen sie sich aber wie ein reiner Anker verhalten.
      const anchor = (event.target as HTMLElement | null)?.closest?.(
        'a[href^="#"], a[href^="/#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const id = href.slice(href.indexOf("#") + 1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();

      const rootFontSize =
        parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const navRem =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--nav-h"),
        ) || 4.5;
      const offset = navRem * rootFontSize;

      const lenis = lenisRef.current;

      if (lenis) {
        lenis.scrollTo(target, { offset: -offset, duration: 1.4 });
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "auto" });
      }

      // Fokus mitnehmen, damit Tastaturnutzer nicht am Seitenanfang hängen.
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return <>{children}</>;
}
