import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProjectList from "@/components/ProjectList";
import { stats } from "@/data/content";
import { objektbau } from "@/data/pages";

export const metadata: Metadata = {
  title: "Objektbau",
  description:
    "Fünfzehn Referenzen im Objektbau: Wohnanlagen, Kindergärten und Sanierungen für GEWOFAG, GWG München, Baywobau, Instone und Genossenschaften.",
};

export default function ObjektbauPage() {
  return (
    <>
      <main id="inhalt">
        <PageHero
          eyebrow={objektbau.eyebrow}
          title={objektbau.title}
          intro={objektbau.intro}
          image={objektbau.hero.src}
          alt={objektbau.hero.alt}
          credit={objektbau.hero.credit}
        />

        <section className="px-[var(--gutter)] py-[clamp(4rem,8vw,8rem)]">
          <div className="mx-auto max-w-[110rem]">
            <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* „Jahre Erfahrung" bleibt der Startseite vorbehalten – hier
                  zählen die Objektbau-Kennzahlen. */}
              {stats.items.slice(1).map((s) => (
                <div key={s.label} className="border-t border-black/12 pt-5">
                  <dd className="t-h1">
                    {"prefix" in s && s.prefix}
                    {s.value.toLocaleString("de-DE")}
                    {"suffix" in s && s.suffix}
                  </dd>
                  <dt className="t-body mt-3">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="px-[var(--gutter)] pb-[clamp(4rem,8vw,8rem)]">
          <div className="mx-auto max-w-[110rem]">
            <ProjectList />
          </div>
        </section>

        <section className="px-[var(--gutter)] pb-[clamp(5rem,10vw,10rem)] text-center">
          <h2 className="t-h1 mx-auto max-w-[18ch]">
            Ein Objekt in Planung?
          </h2>
          <p className="t-body-lg mx-auto mt-8 max-w-[46ch] text-black/65">
            Schicken Sie uns die Ausschreibung oder den Fensterplan – wir
            kalkulieren und melden uns zurück.
          </p>
          <Link href="/kontakt" className="btn btn-primary mt-10">
            Anfrage senden
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
