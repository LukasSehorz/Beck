import type { Metadata } from "next";
import Link from "next/link";

import BrandGroups from "@/components/BrandGroups";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { kneer } from "@/data/pages";

export const metadata: Metadata = {
  title: "KNEER Südfenster",
  description: "Holzfenster, Aluminium-Holz-Fenster, Denkmalfenster und Hebeschiebetüren von KNEER Südfenster – mit Uw-Werten ab 0,76 W/m²K und RC2.",
};

export default function Page() {
  return (
    <>
      <main id="inhalt">
        <PageHero
          eyebrow={kneer.eyebrow}
          title={kneer.title}
          intro={kneer.intro}
          image={kneer.hero.src}
          alt={kneer.hero.alt}
        />

        <div className="px-[var(--gutter)] py-[clamp(4rem,8vw,8rem)]">
          <BrandGroups groups={kneer.groups} />
        </div>

        <section className="px-[var(--gutter)] pb-[clamp(5rem,10vw,10rem)] text-center">
          <p className="t-body-lg mx-auto max-w-[46ch] text-black/65">
            Alle Modelle stehen als Musterelement in unserer Ausstellung in
            Niederaichbach – zum Öffnen, Schließen und Vergleichen.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/kontakt" className="btn btn-primary">
              Termin vereinbaren
            </Link>
            <Link href="/partner-produkte" className="btn btn-secondary">
              Alle Hersteller
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
