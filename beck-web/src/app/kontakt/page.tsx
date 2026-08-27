import type { Metadata } from "next";

import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { company, openingHours, team } from "@/data/content";
import { kontakt } from "@/data/pages";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Beck Fenster und Türen GmbH, Mövenweg 2, 84100 Niederaichbach. Telefon 08702/67157-0. Öffnungszeiten und Ansprechpartner.",
};

export default function KontaktPage() {
  return (
    <>
      <main id="inhalt">
        <PageHero
          eyebrow={kontakt.eyebrow}
          title={kontakt.title}
          intro={kontakt.intro}
          image={kontakt.hero.src}
          alt={kontakt.hero.alt}
        />

        <section className="px-[var(--gutter)] py-[clamp(4rem,8vw,8rem)]">
          <div className="mx-auto grid max-w-[110rem] gap-x-[3vw] gap-y-12 lg:grid-cols-3">
            <div className="border-t border-black/12 pt-6">
              <h2 className="t-mono t-label">Adresse</h2>
              <address className="t-body-lg mt-6 not-italic">
                {company.name}
                <br />
                {company.street}
                <br />
                {company.zip} {company.city}
              </address>

              <div className="mt-8 flex flex-col items-start">
                <a href={company.phoneHref} className="btn btn-text">
                  {company.phone}
                </a>
                <a href={`mailto:${company.email}`} className="btn btn-text">
                  {company.email}
                </a>
              </div>
            </div>

            <div className="border-t border-black/12 pt-6">
              <h2 className="t-mono t-label">Öffnungszeiten</h2>
              <dl className="mt-6 space-y-4">
                {openingHours.map((h) => (
                  <div key={h.days}>
                    <dt className="t-body-lg">{h.days}</dt>
                    <dd className="t-mono-md mt-1 text-black/60">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="t-body mt-8 text-black/60">
                Weitere Termine nach Vereinbarung.
              </p>
            </div>

            <div className="border-t border-black/12 pt-6">
              <h2 className="t-mono t-label">
                Ihre Ansprechpartner
              </h2>
              <ul className="mt-6 space-y-5">
                {team.members.map((m) => (
                  <li key={m.key}>
                    <p className="t-body-lg">{m.name}</p>
                    <p className="t-mono mt-1 text-black/70">{m.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Anfahrt */}
        <section className="px-[var(--gutter)] pb-[clamp(5rem,10vw,10rem)]">
          <div className="mx-auto max-w-[110rem]">
            <h2 className="t-mono t-label mb-6">Anfahrt</h2>
            <div className="aspect-[21/9] w-full bg-taupe/40">
              <iframe
                title="Karte mit dem Standort von Beck Fenster und Türen in Niederaichbach"
                src="https://www.openstreetmap.org/export/embed.html?bbox=12.28%2C48.59%2C12.35%2C48.63&layer=mapnik&marker=48.6086%2C12.3145"
                loading="lazy"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
