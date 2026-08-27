import Image from "next/image";

import { team } from "@/data/content";

/**
 * Team. Porträts in Graustufen wie die Testimonial-Bilder bei fluid.glass
 * (.ref/shots/fg-10.png) — Farbe kommt erst beim Hover zurück. Name in Sans,
 * Rolle in Mono-Versalien.
 */
export default function Team() {
  return (
    <section id="team" className="px-[var(--gutter)] py-[clamp(5rem,10vw,10rem)]">
      <div className="mx-auto max-w-[110rem]">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,30rem)] lg:items-end">
          <div>
            <p className="t-mono t-label">{team.eyebrow}</p>
            <h2 className="t-h1 mt-8 max-w-[16ch]">{team.headline}</h2>
          </div>
          <p className="t-body max-w-[42ch] text-black/65 lg:pb-2">
            {team.body}
          </p>
        </div>

        <ul className="mt-[clamp(3rem,6vw,6rem)] grid gap-x-[2vw] gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((m) => (
            <li key={m.key}>
              <div className="relative aspect-[3/4] overflow-hidden bg-taupe/40">
                <Image
                  src={m.image}
                  alt={`${m.name}, ${m.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top grayscale transition-[filter,transform] duration-[1.2s] ease-[cubic-bezier(.165,.84,.44,1)] hover:scale-[1.03] hover:grayscale-0"
                />
              </div>
              <h3 className="t-h3 mt-5">{m.name}</h3>
              <p className="t-mono mt-2 text-black/70">{m.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
