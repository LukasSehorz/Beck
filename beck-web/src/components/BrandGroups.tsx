import Image from "next/image";

type Spec = {
  readonly model: string;
  readonly detail: string;
  readonly uw: string;
  readonly extra: string;
};

type Group = {
  readonly key: string;
  readonly name: string;
  readonly body: string;
  readonly image: string;
  readonly alt: string;
  readonly specs: readonly Spec[];
};

/**
 * Produktgruppen einer Hersteller-Seite: Bild und Beschreibung im Wechsel,
 * darunter die Modelle als Mono-Datentabelle (.spec-table). Die technischen
 * Werte stammen unverändert von becks-fenster.de.
 */
export default function BrandGroups({
  groups,
}: {
  groups: readonly Group[];
}) {
  return (
    <div className="mx-auto max-w-[110rem]">
      {groups.map((g, i) => (
        <section
          key={g.key}
          className="border-t border-black/12 py-[clamp(3rem,6vw,6rem)] first:border-t-0"
        >
          <div className="grid gap-x-[3vw] gap-y-10 lg:grid-cols-2 lg:items-start">
            <div
              className={`min-w-0 ${i % 2 === 1 ? "lg:order-2" : ""}`.trim()}
            >
              <div className="relative aspect-[4/3] bg-taupe/30">
                <Image
                  src={g.image}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  /* Freisteller-PNGs dürfen nicht beschnitten werden */
                  className={
                    g.image.endsWith(".png")
                      ? "object-contain p-10"
                      : "object-cover"
                  }
                />
              </div>
            </div>

            {/* `min-w-0`: Ohne das erbt die Spalte die Mindestbreite der
                Datentabelle (min-w-[34rem]) als Grid-Mindestbreite und sprengt
                auf 360/390 px die Seite — der `overflow-x-auto`-Container
                darunter fängt das erst eine Ebene zu tief ab. */}
            <div
              className={`min-w-0 ${i % 2 === 1 ? "lg:order-1" : ""}`.trim()}
            >
              <h2 className="t-h2">{g.name}</h2>
              <p className="t-body mt-5 max-w-[46ch] text-black/70">{g.body}</p>

              <div className="mt-10 overflow-x-auto">
                <table className="spec-table min-w-[34rem]">
                  <thead>
                    <tr>
                      <th scope="col">Modell</th>
                      <th scope="col">Merkmale</th>
                      <th scope="col">Uw-Wert</th>
                      <th scope="col">Weiteres</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.specs.map((s) => (
                      <tr key={s.model}>
                        <td>{s.model}</td>
                        <td>{s.detail}</td>
                        <td className="num">{s.uw}</td>
                        <td>{s.extra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
