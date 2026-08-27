import Link from "next/link";

import RevealText from "@/components/RevealText";
import { cta } from "@/data/content";

/**
 * Abschluss-CTA nach fluid.glass (.ref/shots/fg-11.png):
 * zentrierter Block über hellem Grund, große Headline, zwei Buttons — sonst
 * nichts. Das Bild, das hier früher als 21:9-Band hing, liegt jetzt im Footer
 * als Vollbild unter dem Wasserzeichen (fg-12).
 */
export default function CallToAction() {
  return (
    <section id="kontakt">
      <div className="px-[var(--gutter)] py-[clamp(5rem,11vw,11rem)] text-center">
        <RevealText
          as="h2"
          lines={cta.headlineLines}
          className="t-h1 mx-auto max-w-[18ch]"
        />
        <p className="t-body-lg mx-auto mt-9 max-w-[48ch] text-black/65">
          {cta.body}
        </p>

        <div className="mt-11 flex flex-wrap justify-center gap-3">
          <Link href={cta.primary.href} className="btn btn-primary">
            {cta.primary.label}
          </Link>
          <Link href={cta.secondary.href} className="btn btn-secondary">
            {cta.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
