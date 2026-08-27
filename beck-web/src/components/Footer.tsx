import Image from "next/image";
import Link from "next/link";

import { company, cta, imageCredits, navLinks } from "@/data/content";

/**
 * Footer nach fluid.glass (.ref/shots/fg-12.png).
 *
 * Die Vorlage füllt den letzten Viewport mit **einem** Bild; Wasserzeichen,
 * Linkspalten und Rechtszeile liegen als Ebenen darüber, das Wasserzeichen
 * unten bewusst angeschnitten. Vorher stand hier ein 21:9-Band am Ende des
 * CTA und darunter getrennt eine schwarze Fläche — zwei Blöcke statt einem.
 *
 * Das Bild kommt aus `cta.background`, weil es dieselbe Abschlussfläche
 * bespielt; die Herkunft ist dort dokumentiert.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black text-cream">
      <Image
        src={cta.background.src}
        alt={cta.background.alt}
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* Ohne Scrim säuft die Mono-Ebene über der hellen Fassade ab — flächige
          60 % drückten aber auch das Foto weg. Zwei dunkle Bänder statt einer
          Fläche: oben hinter Adresse und Seitenliste, unten hinter der
          Fußzeile, dazwischen bleibt die Fassade stehen wie in fg-12.
          Gegen die hellste Bildstelle (rgb 230) gerechnet trägt das Band an
          jeder Textzeile ≥ 6:1. */}
      <div
        aria-hidden
        className="-z-10 absolute inset-0 bg-[linear-gradient(to_bottom,rgb(0_0_0/0.78)_0%,rgb(0_0_0/0.62)_30%,rgb(0_0_0/0.22)_52%,rgb(0_0_0/0.22)_64%,rgb(0_0_0/0.78)_78%,rgb(0_0_0/0.82)_100%)]"
      />

      {/* Wasserzeichen — liegt über dem Bild, aber unter den Texten, und ist
          unten angeschnitten wie im Original. */}
      <p
        aria-hidden
        className="t-display pointer-events-none absolute inset-x-0 bottom-0 translate-y-[0.16em] select-none whitespace-nowrap px-[var(--gutter)] text-white/20"
      >
        {company.shortName}
      </p>

      {/* Zwei Spalten, nicht drei: Die Bildnachweise sind in die Fußzeile
          gewandert. Die Vorlage zeigt hier Foto, Wasserzeichen und eine
          schmale Fußzeile — drei Linkspalten drückten das Bild weg. */}
      <div className="relative px-[var(--gutter)] pt-[clamp(4rem,8vw,8rem)]">
        <div className="mx-auto grid max-w-[110rem] gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
          <div>
            <p className="t-mono text-cream">Kontakt</p>
            <address className="t-body mt-4 not-italic text-cream/85">
              {company.name}
              <br />
              {company.street}
              <br />
              {company.zip} {company.city}
            </address>
            <div className="mt-5 flex flex-col gap-1">
              <a
                href={company.phoneHref}
                className="t-body text-cream/85 hover:opacity-60"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="t-body text-cream/85 hover:opacity-60"
              >
                {company.email}
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="t-mono text-cream">Seiten</p>
            <ul className="mt-4 grid max-w-[34rem] gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="t-body text-cream/85 hover:opacity-60"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Drückt die Rechtszeile an die Unterkante des Viewports, damit das
          Wasserzeichen dazwischen Platz bekommt. */}
      <div aria-hidden className="min-h-[clamp(6rem,18vw,16rem)] flex-1" />

      <div className="relative border-t border-cream/20 px-[var(--gutter)] py-6 pb-[calc(var(--pill-h)+var(--pill-gap)+1rem)]">
        <div className="mx-auto flex max-w-[110rem] flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <p className="t-mono text-cream/70">
            © {year}, {company.name}
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            <li>
              <Link href="/impressum" className="t-mono hover:opacity-60">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="t-mono hover:opacity-60">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>

        {/* Bildnachweise als schmale Zeile statt als dritte Spalte — sie
            gehören zur Rechtszeile, nicht in die Navigation. */}
        <p className="t-mono-md mx-auto mt-4 max-w-[110rem] text-cream/80">
          {imageCredits.join(" · ")}
        </p>
      </div>
    </footer>
  );
}
