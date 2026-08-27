import type { Metadata } from "next";

import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { company } from "@/data/content";
import { karriere } from "@/data/pages";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Beck Fenster und Türen sucht laufend Montageunternehmen, die qualitativ hochwertig und sauber arbeiten. Initiativbewerbungen sind willkommen.",
};

export default function KarrierePage() {
  return (
    <>
      <main id="inhalt">
        <PageHero
          eyebrow={karriere.eyebrow}
          title={karriere.title}
          intro={karriere.intro}
          image={karriere.hero.src}
          alt={karriere.hero.alt}
        />

        <section className="px-[var(--gutter)] py-[clamp(5rem,10vw,10rem)]">
          <div className="mx-auto max-w-[46rem]">
            <p className="t-h2">{karriere.body}</p>

            <p className="t-body mt-10 text-black/70">{karriere.note}</p>

            <div className="mt-12 border-t border-black/12 pt-8">
              <p className="t-mono t-label">Ansprechpartner</p>
              <p className="t-h3 mt-5">Marco Beck</p>
              <p className="t-mono mt-2 text-black/70">Geschäftsführer</p>

              <div className="mt-7 flex flex-wrap gap-x-10 gap-y-2">
                <a
                  href={`mailto:${company.email}`}
                  className="btn btn-text"
                >
                  {company.email}
                </a>
                <a href={company.phoneHref} className="btn btn-text">
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
