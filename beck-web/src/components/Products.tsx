import Image from "next/image";
import Link from "next/link";

import { products } from "@/data/content";

/**
 * Produkt-Kollektion nach fluid.glass (.ref/shots/fg-03.png).
 *
 * Kein gleichmäßiges Raster: Die Bilder sitzen in unterschiedlichen Größen
 * treppenartig über die Fläche verteilt, der Kategoriename steht groß und
 * weiß im Bild. Die Platzierung ist reine Präsentation und deshalb hier
 * hinterlegt statt in content.ts.
 */
/* Die negativen Ränder ziehen jedes Bild in den Freiraum der Zeile darüber —
   erst dadurch entsteht die Treppe statt vier weit auseinanderliegender
   Blöcke. */
const layout = [
  "lg:col-start-4 lg:col-span-4 lg:row-start-1 lg:aspect-[3/4]",
  "lg:col-start-9 lg:col-span-4 lg:row-start-2 lg:-mt-[20vw] lg:aspect-[4/5]",
  "lg:col-start-5 lg:col-span-3 lg:row-start-3 lg:-mt-[15vw] lg:aspect-[3/4]",
  "lg:col-start-1 lg:col-span-3 lg:row-start-4 lg:-mt-[27vw] lg:aspect-[3/4]",
] as const;

export default function Products() {
  return (
    <section
      id="produkte"
      className="px-[var(--gutter)] py-[clamp(4rem,8vw,8rem)]"
    >
      <div className="mx-auto max-w-[110rem]">
        {/* Linie über die volle Breite, das ◆-Label links darunter am Gutter —
            wie in der Vorlage. Die Intro-Spalte bleibt rechts oben. */}
        <hr className="rule" />
        <div className="mt-6 grid grid-cols-1 gap-x-[2vw] gap-y-[clamp(3rem,7vw,7rem)] lg:grid-cols-12">
          <p className="t-mono t-label self-start lg:col-span-3 lg:col-start-1 lg:row-start-1">
            {products.eyebrow}
          </p>

          {/* Intro-Spalte rechts oben, wie im Original */}
          <div className="lg:col-start-9 lg:col-span-4 lg:row-start-1">
            <h2 className="t-h3 max-w-[24ch]">{products.headline}</h2>
            <p className="t-body mt-5 max-w-[38ch] text-black/65">
              {products.intro}
            </p>
            <Link href="/partner-produkte" className="btn btn-primary mt-8">
              Produktübersicht
            </Link>
          </div>

          {products.items.map((item, i) => (
            <Link
              key={item.key}
              href="/partner-produkte"
              className={`group relative block aspect-[4/5] overflow-hidden ${layout[i]}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.165,.84,.44,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                {/* `manual`: getrennt wird nur an den weichen Trennstrichen
                    aus content.ts – `auto` brach „Hebeschie-türen". */}
                {/* Nur der Kategoriename, wie in der Vorlage. Die
                    Systembezeichnungen brachen zweizeilig um („…AHF 105 S · /
                    HF 82 EFFIZIENT") und stehen vollständig auf
                    /partner-produkte. */}
                <h3 className="t-h2 [hyphens:manual]">{item.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
