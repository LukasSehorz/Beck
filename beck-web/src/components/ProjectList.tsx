import Image from "next/image";

import { objektbau } from "@/data/pages";

/**
 * Vollständige Referenzliste für /objektbau. Zeilenaufbau wie bei
 * fluid.glass (.ref/shots/fg-08.png), hier aber aufgeklappt: Auftraggeber,
 * Architektur und Auftragssumme stehen direkt in der Zeile, weil genau diese
 * Zahlen die Referenz tragen.
 */
export default function ProjectList() {
  return (
    <ul>
      {objektbau.items.map((p, i) => (
        <li key={p.key} className="border-t border-black/12 last:border-b">
          <article className="grid gap-x-10 gap-y-7 py-[clamp(2rem,3.5vw,3.5rem)] lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)_minmax(0,22rem)]">
            {/* Bild + laufende Nummer */}
            <div>
              <p className="t-mono mb-4 text-black/70">
                {String(i + 1).padStart(2, "0")}
              </p>
              <figure className="relative aspect-[4/3]">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 20rem"
                  className="object-cover"
                />
                {"credit" in p && p.credit && (
                  <figcaption className="t-mono absolute bottom-1.5 right-2 text-white/75">
                    {p.credit}
                  </figcaption>
                )}
              </figure>
            </div>

            {/* Name, Ort, Leistungsumfang, Systeme */}
            <div>
              <h2 className="t-h3">{p.name}</h2>
              <p className="t-mono mt-2 text-black/70">{p.location}</p>
              <p className="t-body mt-5 max-w-[52ch] text-black/70">
                {p.scope}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {p.systems.map((s) => (
                  <li key={s} className="pill">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Eckdaten */}
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 self-start lg:text-right">
              <dt className="t-mono text-black/70">Auftraggeber</dt>
              <dd className="t-body-lg">{p.client}</dd>

              {"architect" in p && p.architect && (
                <>
                  <dt className="t-mono text-black/70">Architektur</dt>
                  <dd className="t-body-lg">{p.architect}</dd>
                </>
              )}

              <dt className="t-mono text-black/70">Auftragssumme</dt>
              <dd className="t-body-lg font-[family-name:var(--font-mono)] tabular-nums">
                {p.volume}
              </dd>
            </dl>
          </article>
        </li>
      ))}
    </ul>
  );
}
