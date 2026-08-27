import type { Metadata } from "next";
import Link from "next/link";

import BrandGroups from "@/components/BrandGroups";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { idealWeinstock } from "@/data/pages";

export const metadata: Metadata = {
  title: "IDEAL Weinstock",
  description: "Kunststoff- und Kunststoff-Aluminium-Fenster der Serien IDEAL 5000 und 8000 – Bautiefen bis 90 mm, Schallschutz bis Rw 46 dB.",
};

export default function Page() {
  return (
    <>
      <main id="inhalt">
        <PageHero
          eyebrow={idealWeinstock.eyebrow}
          title={idealWeinstock.title}
          intro={idealWeinstock.intro}
          image={idealWeinstock.hero.src}
          alt={idealWeinstock.hero.alt}
        />

        <div className="px-[var(--gutter)] py-[clamp(4rem,8vw,8rem)]">
          <BrandGroups groups={idealWeinstock.groups} />
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
