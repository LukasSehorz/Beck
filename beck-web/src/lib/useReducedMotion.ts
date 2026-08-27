"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches;
}

/**
 * `null` auf dem Server und beim ersten Render – erst danach steht der Wert
 * fest. Effekte sollten erst laufen, wenn er bekannt ist, sonst startet kurz
 * eine Animation, die niemand sehen wollte.
 */
export function useReducedMotion(): boolean | null {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    // Server-Snapshot: Wert ist dort nicht ermittelbar.
    () => null,
  );
}

/** Synchrone Variante für Code, der außerhalb von React läuft. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(QUERY).matches;
}
