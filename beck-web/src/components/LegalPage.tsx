import type { ReactNode } from "react";

import Footer from "@/components/Footer";

/**
 * Gemeinsames Layout für die Rechtstexte. Bewusst schlicht: eine schmale
 * Lesespalte, kein Bild, keine Scroll-Effekte – hier zählt Lesbarkeit.
 * Die Nav-Pill kommt aus dem Root-Layout.
 */
export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <main
        id="inhalt"
        className="px-[var(--gutter)] pb-[calc(var(--pill-h)+var(--pill-gap)+4rem)] pt-[clamp(6rem,10vw,9rem)]"
      >
        <div className="mx-auto max-w-[46rem]">
          <p className="t-mono t-label">Rechtliches</p>
          <h1 className="t-h1 mt-7">{title}</h1>
          {intro && (
            <p className="t-body-lg mt-7 text-black/65">{intro}</p>
          )}

          <div className="legal-prose mt-14">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
