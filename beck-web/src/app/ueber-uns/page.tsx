import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";
import { company, pillars } from "@/data/content";
import { ueberUns } from "@/data/pages";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Gegründet 2003, seit 2016 GmbH: die Geschichte von Beck Fenster und Türen in Niederaichbach – und die Menschen dahinter.",
};

export default function UeberUnsPage() {
  return (
    <>
      <main id="inhalt">
        <PageHero
          eyebrow={ueberUns.eyebrow}
          title={ueberUns.title}
          intro={ueberUns.intro}
          image={ueberUns.hero.src}
          alt={ueberUns.hero.alt}
        />

        {/* Anspruch */}
        <section className="px-[var(--gutter)] py-[clamp(5rem,11vw,11rem)] text-center">
          <p className="t-h1 mx-auto max-w-[22ch]">„{company.claim}&ldquo;</p>
        </section>

        {/* Drei Säulen */}
        <section className="px-[var(--gutter)] pb-[clamp(4rem,8vw,8rem)]">
          <div className="mx-auto grid max-w-[110rem] gap-x-8 gap-y-10 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.key} className="border-t border-black/12 pt-6">
                <h2 className="t-mono t-label">{p.title}</h2>
                <p className="t-body-lg mt-5 max-w-[38ch] text-black/75">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Meilensteine */}
        <section className="px-[var(--gutter)] py-[clamp(4rem,8vw,8rem)]">
          <div className="mx-auto max-w-[110rem]">
            <p className="t-mono t-label">Geschichte</p>

            <ol className="mt-[clamp(2.5rem,5vw,5rem)]">
              {ueberUns.milestones.map((m) => (
                <li
                  key={m.year}
                  className="grid gap-x-10 gap-y-3 border-t border-black/12 py-8 last:border-b lg:grid-cols-[10rem_minmax(0,22rem)_1fr]"
                >
                  <p className="t-mono text-black/70">{m.year}</p>
                  <h3 className="t-h3">{m.title}</h3>
                  <p className="t-body max-w-[52ch] text-black/70">{m.body}</p>
                </li>
              ))}
            </ol>

            <p className="t-body mt-12 max-w-[54ch] text-black/65">
              {ueberUns.clientsNote}
            </p>
          </div>
        </section>

        {/* Firmensitz */}
        <section className="relative aspect-[21/9] w-full">
          <Image
            src="/img/firmengebaeude.jpg"
            alt="Firmensitz von Beck Fenster und Türen in Niederaichbach"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </section>

        <Team />

        <section className="px-[var(--gutter)] pb-[clamp(5rem,10vw,10rem)] text-center">
          <Link href="/kontakt" className="btn btn-primary">
            Kontakt aufnehmen
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
