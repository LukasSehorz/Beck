import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { partnerProdukte } from "@/data/pages";

export const metadata: Metadata = {
  title: "Partner & Produkte",
  description:
    "KNEER Südfenster, IDEAL Fensterbau Weinstock und ROMA – die drei Hersteller, deren Fenster, Türen und Sonnenschutz wir vertreiben.",
};

export default function PartnerProduktePage() {
  return (
    <>
      <main id="inhalt">
        <PageHero
          eyebrow={partnerProdukte.eyebrow}
          title={partnerProdukte.title}
          intro={partnerProdukte.intro}
          image={partnerProdukte.hero.src}
          alt={partnerProdukte.hero.alt}
        />

        <div className="px-[var(--gutter)] py-[clamp(4rem,8vw,8rem)]">
          <div className="mx-auto max-w-[110rem]">
            {partnerProdukte.brands.map((b, i) => (
              <section
                key={b.key}
                className="border-t border-black/12 py-[clamp(3rem,6vw,6rem)] first:border-t-0 first:pt-0"
              >
                <div className="grid gap-x-[3vw] gap-y-10 lg:grid-cols-2 lg:items-center">
                  <Link
                    href={b.href}
                    className={`group relative block aspect-[4/3] overflow-hidden ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={b.image}
                      alt={b.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.165,.84,.44,1)] group-hover:scale-[1.04]"
                    />
                  </Link>

                  <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                    <p className="t-mono t-label">{b.claim}</p>
                    <h2 className="t-h1 mt-7">{b.name}</h2>
                    <p className="t-body mt-7 max-w-[46ch] text-black/70">
                      {b.body}
                    </p>
                    <Link href={b.href} className="btn btn-primary mt-9">
                      Produkte ansehen
                    </Link>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
