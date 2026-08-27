import type { Metadata } from "next";
import Link from "next/link";

import BrandGroups from "@/components/BrandGroups";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { roma } from "@/data/pages";

export const metadata: Metadata = {
  title: "ROMA",
  description: "Rollläden, Raffstoren und Textilscreens von ROMA – als Aufsatz-, Vorbau- oder fassadenintegriertes System.",
};

export default function Page() {
  return (
    <>
      <main id="inhalt">
        <PageHero
          eyebrow={roma.eyebrow}
          title={roma.title}
          intro={roma.intro}
          image={roma.hero.src}
          alt={roma.hero.alt}
        />

        <div className="px-[var(--gutter)] py-[clamp(4rem,8vw,8rem)]">
          <BrandGroups groups={roma.groups} />
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
