import type { Metadata } from "next";

import LegalPage from "@/components/LegalPage";
import { company } from "@/data/content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Informationen zur Verarbeitung personenbezogener Daten auf der Website der ${company.name}.`,
  robots: { index: true, follow: false },
};

/** Platzhalter für Angaben, die im Briefing nicht belegt sind. */
function Todo({ children }: { children: string }) {
  return <span className="todo">[{children}]</span>;
}

export default function DatenschutzPage() {
  return (
    <LegalPage
      title="Datenschutzerklärung"
      intro="Wir informieren Sie nachfolgend darüber, welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden, zu welchem Zweck das geschieht und welche Rechte Ihnen daraus zustehen."
    >
      <section>
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne
          der Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <address>
          {company.name}
          <br />
          {company.street}
          <br />
          {company.zip} {company.city}
          <br />
          Telefon: <a href={company.phoneHref}>{company.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
        </address>
        <p>
          Vertreten durch die Geschäftsführer Peter Beck und Marco Beck.
        </p>
        <h3>Datenschutzbeauftragter</h3>
        <p>
          <Todo>
            Angaben zum Datenschutzbeauftragten ergänzen oder diesen Abschnitt
            streichen, falls keine Bestellpflicht besteht
          </Todo>
        </p>
      </section>

      <section>
        <h2>2. Server-Logfiles</h2>
        <p>
          Beim Aufruf dieser Website werden durch den Hosting-Anbieter
          automatisch Informationen erfasst, die Ihr Browser übermittelt. Dazu
          gehören in der Regel:
        </p>
        <ul>
          <li>die aufgerufene Adresse (URL) und der Zeitpunkt des Zugriffs</li>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer-URL</li>
          <li>übertragene Datenmenge und Statusmeldung des Abrufs</li>
          <li>IP-Adresse in gekürzter oder vollständiger Form</li>
        </ul>
        <p>
          Diese Daten sind für uns keiner bestimmten Person zuordenbar und
          werden nicht mit anderen Datenquellen zusammengeführt. Die
          Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          Unser berechtigtes Interesse liegt im technisch fehlerfreien Betrieb
          und in der Sicherheit dieser Website.
        </p>
        <p>
          Speicherdauer: <Todo>Speicherdauer der Logfiles ergänzen</Todo>
        </p>
      </section>

      <section>
        <h2>3. Hosting</h2>
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet. Die im
          Rahmen des Seitenaufrufs erhobenen Daten werden auf dessen Servern
          verarbeitet. Mit dem Anbieter besteht ein Vertrag über
          Auftragsverarbeitung nach Art. 28 DSGVO.
        </p>
        <p>
          Anbieter und Serverstandort:{" "}
          <Todo>Hosting-Anbieter, Anschrift und Serverstandort ergänzen</Todo>
        </p>
      </section>

      <section>
        <h2>4. Cookies, Analyse und externe Inhalte</h2>
        <p>
          Diese Website setzt keine Cookies, die nicht für den Betrieb der
          Seite erforderlich sind. Es findet keine Reichweitenmessung und kein
          Tracking statt, und es sind keine Analyse- oder Werbedienste
          eingebunden.
        </p>
        <p>
          Schriften, Bilder und Videos werden von unserem eigenen Server
          ausgeliefert. Beim Aufruf der Seite wird deshalb keine Verbindung zu
          Servern Dritter aufgebaut, und Ihre IP-Adresse wird nicht an Dritte
          übermittelt.
        </p>
      </section>

      <section>
        <h2>5. Kontaktaufnahme</h2>
        <p>
          Diese Website enthält kein Kontaktformular. Wenn Sie uns per E-Mail
          oder telefonisch kontaktieren, verarbeiten wir die von Ihnen dabei
          mitgeteilten Daten – etwa Name, Kontaktdaten und den Inhalt Ihrer
          Anfrage – ausschließlich zur Bearbeitung Ihres Anliegens.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
          mit der Anbahnung oder Erfüllung eines Vertrags zusammenhängt, im
          Übrigen Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten
          Interesses an der Beantwortung von Anfragen. Wir löschen diese Daten,
          sobald sie für den Zweck der Verarbeitung nicht mehr erforderlich
          sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      <section>
        <h2>6. Weitergabe von Daten</h2>
        <p>
          Eine Übermittlung Ihrer personenbezogenen Daten an Dritte findet nur
          statt, soweit dies zur Vertragsabwicklung erforderlich ist, wir
          gesetzlich dazu verpflichtet sind oder Sie ausdrücklich eingewilligt
          haben. Eine Übermittlung in Länder außerhalb der Europäischen Union
          ist nicht vorgesehen.
        </p>
      </section>

      <section>
        <h2>7. Ihre Rechte</h2>
        <p>Ihnen stehen gegenüber uns folgende Rechte zu:</p>
        <ul>
          <li>Auskunft über die verarbeiteten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>
            Widerspruch gegen eine Verarbeitung auf Grundlage berechtigter
            Interessen (Art. 21 DSGVO)
          </li>
          <li>
            Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft
            (Art. 7 Abs. 3 DSGVO)
          </li>
        </ul>
        <p>
          Zur Ausübung dieser Rechte genügt eine formlose Nachricht an{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </section>

      <section>
        <h2>8. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>
          Unbeschadet anderer Rechtsbehelfe steht Ihnen ein Beschwerderecht bei
          einer Datenschutz-Aufsichtsbehörde zu. Für uns zuständig ist das
          Bayerische Landesamt für Datenschutzaufsicht, Promenade 18, 91522
          Ansbach.
        </p>
      </section>

      <section>
        <h2>9. SSL-/TLS-Verschlüsselung</h2>
        <p>
          Diese Website nutzt aus Sicherheitsgründen eine SSL-
          beziehungsweise TLS-Verschlüsselung. Eine verschlüsselte Verbindung
          erkennen Sie daran, dass die Adresszeile Ihres Browsers mit
          „https://&ldquo; beginnt.
        </p>
      </section>

      <section>
        <h2>10. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir passen diese Datenschutzerklärung an, sobald Änderungen an dieser
          Website oder an der Rechtslage dies erforderlich machen. Es gilt
          jeweils die hier veröffentlichte Fassung.
        </p>
        <p>
          Stand: <Todo>Datum der letzten Aktualisierung ergänzen</Todo>
        </p>
      </section>
    </LegalPage>
  );
}
