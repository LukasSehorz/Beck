"use client";

import { useEffect, useRef } from "react";

import { prefersReducedMotion } from "@/lib/useReducedMotion";

type Props = {
  src: string;
  poster: string;
  /** Beschreibt das Motiv – das Video trägt keine Information, die fehlt. */
  label: string;
  className?: string;
};

/**
 * Hintergrundvideo im Duktus von fluid.glass: stumm, endlos, ohne Bedienung.
 *
 * Zwei Dinge löst diese Komponente zentral, damit Hero und Ausstellung sie
 * nicht doppelt lösen müssen:
 *
 * 1. `prefers-reduced-motion`: Das Video wird angehalten und bleibt es auch –
 *    sichtbar ist dann allein das Poster. Der `autoplay`-Start des Browsers
 *    kann vor dem ersten Effektlauf liegen, deshalb zusätzlich ein
 *    `play`-Listener als Riegel.
 * 2. Wiedergabe nur im Sichtbereich – und ohne die AbortError-Meldung, die
 *    entsteht, wenn `pause()` ein noch laufendes `play()`-Promise unterbricht.
 */
export default function AmbientVideo({ src, poster, label, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (prefersReducedMotion()) {
      const hold = () => {
        video.pause();
        video.currentTime = 0;
      };
      video.autoplay = false;
      hold();
      video.addEventListener("play", hold);
      return () => video.removeEventListener("play", hold);
    }

    let pending: Promise<void> = Promise.resolve();

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          pending = (video.play() ?? Promise.resolve()).catch(() => {
            /* Autoplay kann blockiert sein – dann bleibt das Poster stehen. */
          });
        } else {
          pending.then(() => video.pause()).catch(() => {});
        }
      },
      { threshold: 0.05 },
    );

    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
