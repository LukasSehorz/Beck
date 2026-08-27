import type { Metadata } from "next";

import LegalPage from "@/components/LegalPage";
import { company } from "@/data/content";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung der ${company.name}, ${company.zip} ${company.city}.`,
  robots: { index: true, follow: false },
};

/** Platzhalter für Angaben, die im Briefing nicht belegt sind. */
function Todo({ children }: { children: string }) {
  return <span className="todo">[{children}]</span>;
}

export default function ImpressumPage() {
  return (
    <LegalPage
      title="Impressum"
      intro="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
    >
      <section>
        <h2>Anbieter</h2>
        <address>
          {company.name}
          <br />
          {company.street}
          <br />
          {company.zip} {company.city}
          <br />
          Deutschland
        </address>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon:{" "}
          <a href={company.phoneHref}>{company.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </section>

      <section>
        <h2>Vertretungsberechtigte Geschäftsführer</h2>
        <p>Peter Beck und Marco Beck</p>
      </section>

      <section>
        <h2>Registereintrag</h2>
        <p>
          Rechtsform: Gesellschaft mit beschränkter Haftung (GmbH)
          <br />
          Registergericht: <Todo>Registergericht ergänzen</Todo>
          <br />
          Registernummer: <Todo>HRB-Nummer ergänzen</Todo>
        </p>
      </section>

      <section>
        <h2>Umsatzsteuer-Identifikationsnummer</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{" "}
          <Todo>USt-IdNr. ergänzen</Todo>
        </p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          <Todo>Name und Anschrift der verantwortlichen Person ergänzen</Todo>
        </p>
      </section>

      <section>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine
          rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese
          Inhalte umgehend.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält gegebenenfalls Links zu externen Websites
          Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können
          wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
          Betreiber der Seiten verantwortlich. Bei Bekanntwerden von
          Rechtsverletzungen entfernen wir derartige Links umgehend.
        </p>
      </section>

      <section>
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors beziehungsweise Erstellers.
        </p>
        <h3>Bildnachweise</h3>
        <ul>
          <li>wagnis WEST: © Frank Schroth</li>
          <li>baywobau-Projekte: © Matthias Kestel</li>
          <li>Kindergärten: © bildraumwest / brw studio</li>
        </ul>
      </section>
    </LegalPage>
  );
}
