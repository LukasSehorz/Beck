import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { processSteps } from "@/data/content";
import { privatkunden } from "@/data/pages";

export const metadata: Metadata = {
  title: "Privatkunden",
  description:
    "Fenster, Haustüren und Sonnenschutz für Privatkunden – von KNEER Südfenster und IDEAL Weinstock, montiert von spezialisierten Monteuren.",
};

export default function PrivatkundenPage() {
  return (
    <>
      <main id="inhalt">
        <PageHero
          eyebrow={privatkunden.eyebrow}
          title={privatkunden.title}
          intro={privatkunden.intro}
          image={privatkunden.hero.src}
          alt={privatkunden.hero.alt}
        />

        {privatkunden.sections.map((s, i) => (
          <section
            key={s.key}
            className="px-[var(--gutter)] py-[clamp(4rem,8vw,8rem)]"
          >
            <div className="mx-auto grid max-w-[110rem] gap-x-[3vw] gap-y-10 lg:grid-cols-2 lg:items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                <p className="t-mono t-label">{s.eyebrow}</p>
                <h2 className="t-h1 mt-7 max-w-[16ch]">{s.headline}</h2>
                <p className="t-body mt-7 max-w-[48ch] text-black/70">
                  {s.body}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* Ablauf der Beratung */}
        <section className="px-[var(--gutter)] py-[clamp(4rem,8vw,8rem)]">
          <div className="mx-auto max-w-[110rem]">
            <p className="t-mono t-label">Ablauf</p>
            <h2 className="t-h1 mt-7 max-w-[18ch]">
              Von der Idee bis zur Montage
            </h2>

            <ol className="mt-[clamp(2.5rem,5vw,5rem)] grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, i) => (
                <li key={step} className="border-t border-black/12 pt-5">
                  <span className="t-mono text-black/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="t-h3 mt-3">{step}</p>
                </li>
              ))}
            </ol>

            <p className="t-body mt-14 max-w-[52ch] text-black/65">
              {privatkunden.partnersNote}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn btn-primary">
                Beratung anfragen
              </Link>
              <Link href="/partner-produkte" className="btn btn-secondary">
                Produkte ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
