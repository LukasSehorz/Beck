import Image from "next/image";

/**
 * Kopf der Unterseiten. Wie bei fluid.glass: randloses Bild mit dunklem
 * Overlay, Mono-Label, große Headline und eine Linie, unter der ein
 * Einleitungstext rechts steht.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
  credit,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  alt: string;
  credit?: string;
}) {
  return (
    <section className="on-dark relative isolate flex min-h-[68svh] items-end overflow-hidden text-white">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="-z-10 absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70" />

      <div className="w-full px-[var(--gutter)] pb-14 pt-28">
        <div className="mx-auto max-w-[110rem]">
          <p className="t-mono t-label text-white">{eyebrow}</p>
          <h1 className="t-h1 mt-7 max-w-[18ch]">{title}</h1>

          {intro && (
            <>
              <hr className="rule-light mt-10" />
              <p className="t-body mt-6 max-w-[52ch] text-white/80">{intro}</p>
            </>
          )}
        </div>
      </div>

      {credit && (
        <p className="t-mono absolute bottom-3 right-[var(--gutter)] text-white/70">
          {credit}
        </p>
      )}
    </section>
  );
}
