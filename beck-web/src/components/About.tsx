import Link from "next/link";

import RevealText from "@/components/RevealText";
import { about } from "@/data/content";

/**
 * „Über Beck" nach fluid.glass (.ref/shots/fg-01.png, fg-02.png):
 * zentriertes Mono-Label, darunter eine sehr große, zentrierte Headline über
 * die volle Satzbreite, darunter der Button. Bewusst ohne Bild — die Ruhe
 * zwischen den Bildsektionen ist Teil des Rhythmus.
 *
 * Ebenso bewusst ohne Fließtext: Die Vorlage geht hier Label → Headline →
 * Button (STRUKTUR-KORREKTUR §2); der Absatz stand auf /ueber-uns ohnehin.
 */
export default function About() {
  return (
    <section
      id="ueber-uns"
      /* 13vw ergaben 187 px oben und unten und machten die Sektion 859 px hoch —
         42 % mehr als die 607 px der Vorlage. */
      className="px-[var(--gutter)] py-[clamp(4rem,9vw,9rem)]"
    >
      <div className="mx-auto max-w-[85rem] text-center">
        <p className="t-mono t-label">{about.eyebrow}</p>

        <RevealText
          as="h2"
          lines={about.lines}
          /* 31ch trägt die längste vorgesetzte Zeile (30 Zeichen) — sonst
             bricht sie zusätzlich innerhalb ihrer eigenen Maske um.
             `text-wrap: balance` greift genau dann: Unter ~700 px passt keine
             der vier Zeilen mehr am Stück, und ohne Ausgleich bliebe „2016"
             allein auf einer 32-px-Zeile stehen. */
          className="t-h1 mx-auto mt-10 max-w-[31ch] [text-wrap:balance]"
        />

        <Link href={about.linkHref} className="btn btn-primary mt-12">
          {about.linkLabel}
        </Link>
      </div>
    </section>
  );
}
