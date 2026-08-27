/**
 * Zentrale Inhalte der Startseite.
 * Alle Angaben stammen aus dem verifizierten Briefing – keine erfundenen Fakten.
 */

export const company = {
  name: "Beck Fenster und Türen GmbH",
  shortName: "Beck Fenster",
  street: "Mövenweg 2",
  zip: "84100",
  city: "Niederaichbach",
  phone: "08702/67157-0",
  phoneHref: "tel:+498702671570",
  email: "marco.beck@becks-fenster.de",
  claim: "Expertise, Qualität und Zuverlässigkeit sind unser höchster Anspruch.",
  foundedYear: 2003,
} as const;

export const openingHours = [
  { days: "Montag – Donnerstag", time: "08:00 – 17:00 Uhr" },
  { days: "Mittagspause", time: "12:00 – 13:00 Uhr" },
  { days: "Freitag", time: "08:00 – 12:00 Uhr" },
] as const;

/* Absolute Ziele („/#…" statt „#…"), damit die Links auch von den
   Rechtstext-Unterseiten aus auf die Startseite zurückführen. */
/* Die Seitennamen erscheinen auch in der Nav-Pill (Mono-Versalien) und als
   Titel der jeweiligen Unterseite. */
export const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Privatkunden", href: "/privatkunden" },
  { label: "Objektbau", href: "/objektbau" },
  { label: "Partner & Produkte", href: "/partner-produkte" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const hero = {
  wordmark: "Beck Fenster",
  cta: { label: "Angebot anfordern", href: "/kontakt" },
  /* Nur Fallback: Der Hero läuft als Video, `image` bleibt als Notnagel. */
  /* Zentriert über dem Vollbild, wie die Hero-Tagline bei fluid.glass. */
  taglineLines: ["Fenster für alle, die", "mit Anspruch bauen."],
  image: {
    src: "/img/refs/Therese_190607_083-scaled-e1697378758288.jpg",
    alt: "Bodentiefe Holz-Aluminium-Fensterelemente in der Wohnanlage Theresienstraße in München",
  },
} as const;

/* Zweite Textebene des Heros („Was wir tun") – liegt über demselben
   Hero-Video, deshalb kein eigenes Bild mehr (HERO-KORREKTUR.md §1). */
export const specialists = {
  eyebrow: "Was wir tun",
  headline: "Fenster-Spezialisten seit über 20 Jahren",
  /* Gegen die Vorlage gemessen: dort trägt die Spalte vier Zeilen. Der frühere
     Absatz lief auf elf und schob die Kopflinie aus dem Bild. */
  body:
    "Vom Einfamilienhaus bis zur Wohnanlage: Fenster, Türen und Sonnenschutz als ein Gewerk – von Aufmaß bis Montage, mit denselben Ansprechpartnern.",
} as const;

export const about = {
  eyebrow: "Über Beck",
  /* Vier kurze Zeilen statt drei langer: Display-Zeilen trennen nicht mehr
     automatisch (.t-h1 hyphens: manual), deshalb muss jede Zeile schon im Text
     auf 390 px passen — Richtwert ≤ 30 Zeichen. */
  lines: [
    "Gegründet 2003 als Tochter der",
    "Beck Schreinerei, seit 2016",
    "GmbH – geführt von Peter und",
    "Marco Beck in Niederaichbach.",
  ],
  /* Bewusst ohne Fließtext: Die Vorlage geht dort Label → Headline → Button
     (STRUKTUR-KORREKTUR §2). Der Inhalt steht ausführlich auf /ueber-uns. */
  linkLabel: "Wer wir sind",
  linkHref: "#team",
  image: {
    src: "/img/team/team-gruppe.jpg",
    alt: "Das Team von Beck Fenster und Türen aus Niederaichbach",
  },
} as const;

export const pillars = [
  {
    key: "expertise",
    title: "Expertise",
    body:
      "Ein eingespieltes Team begleitet Sie von der ersten Beratung bis zur Abnahme der Montage – mit laufenden Schulungen bei unseren Herstellern.",
  },
  {
    key: "qualitaet",
    title: "Qualität",
    body:
      "KNEER Südfenster, IDEAL Weinstock und ROMA liefern die Elemente, lokale Montagefirmen setzen sie ein. Beides haben wir seit Jahren im Griff.",
  },
  {
    key: "zuverlaessigkeit",
    title: "Zuverlässigkeit",
    body:
      "Deutsche Fertigung, ehrliche Beratung und Termintreue – auch dann, wenn auf der Baustelle etwas dazwischenkommt.",
  },
] as const;

export const products = {
  eyebrow: "Produkte",
  headline: "Vier Gewerke, ein Ansprechpartner",
  intro:
    "Alle Systeme stammen von deutschen Herstellern und lassen sich innerhalb eines Projekts sauber aufeinander abstimmen.",
  /* Die Namen tragen weiche Trennstriche (U+00AD). Auf den Kacheln steht
     `hyphens: manual` – nur an diesen Stellen darf getrennt werden, sonst
     entstehen sprachlich falsche Fugen wie „Hebeschie-türen". */
  items: [
    {
      key: "holz-alu",
      name: "Holz & Holz-Alu-Fenster",
      systems: "KNEER AHF 95 Classic · AHF 105 S · HF 82 Effizient",
      description:
        "Warme Holzoberfläche innen, wetterfeste Aluminiumschale außen – für Neubau und Sanierung im Bestand.",
      image: "/img/products/Bild-Kneer-Anfangsseite.jpg",
      alt: "Wohnraum mit bodentiefen Holz-Aluminium-Fensterelementen und Blick in den Garten",
    },
    {
      key: "kunststoff",
      name: "Kunst­stoff­fenster",
      systems: "IDEAL Weinstock 8000S · TWINSET",
      description:
        "Wirtschaftlich im Geschosswohnungsbau, pflegeleicht im Alltag – auf Wunsch mit Aufsatzrollladen und Sonderfolie.",
      image: "/img/refs/Scalpinellistr-40.jpg",
      alt: "Wohnanlage in München mit Kunststofffenstern über mehrere Geschosse",
    },
    {
      key: "sonnenschutz",
      name: "Sonnen­schutz & Roll­läden",
      systems: "ROMA Raffstoren · zipScreen.2",
      description:
        "Aufsatzelemente, Raffstoren und Textilscreens – geplant zusammen mit dem Fenster statt nachträglich angebaut.",
      image: "/img/products/roma-modulraffstoren-imagewall.jpg",
      alt: "Fassade mit ROMA Modul-Raffstoren als Sonnenschutz",
    },
    {
      key: "tueren",
      name: "Haus­türen & Hebe­schiebe­türen",
      systems: "Hebeschiebetüren · Aluminium-Haustüren",
      description:
        "Große Schiebeelemente zum Garten und Haustüren, die Wärmeschutz, Sicherheit und Optik zusammenbringen.",
      image: "/img/products/Referenz-Sky-HST-scaled.jpg",
      alt: "Bodentiefe Hebeschiebetür mit Blick in den Garten",
    },
  ],
} as const;

export const showroom = {
  eyebrow: "Ausstellung",
  headline: "Erst anfassen, dann entscheiden",
  /* Ein Satz. Die Vorlage zeigt an dieser Stelle nur Headline, Adresse und
     Button – ein längerer Absatz liegt beim Zoom-Start über der Bildkante. */
  body:
    "Fenster, Haustüren und Sonnenschutz stehen bei uns als vollwertige Musterelemente zum Öffnen und Vergleichen.",
  banner: {
    // showroom-19 zeigt als einziges Motiv den Raum selbst: Deckenschiene,
    // Stützen und eine Reihe von Türmustern in die Tiefe.
    src: "/img/showroom/showroom-19.jpg",
    alt: "Ausstellungsraum von Beck Fenster mit einer Reihe von Haustür- und Fenstermustern",
  },
  bannerCaption:
    "Musterelemente zum Öffnen, Schließen und Vergleichen — Mövenweg 2, Niederaichbach.",
  /* Eigenes Motiv für die Desktop-Spalte neben der Headline – bewusst nicht
     eines aus `side`: Zwei next/image mit identischer Quelle teilen sich eine
     Ressource, und eine per display:none versteckte Kopie würde das
     Lazy-Loading der sichtbaren blockieren. */
  desktopSide: {
    src: "/img/showroom/showroom-15.jpg",
    alt: "Fenster- und Türmuster in verschiedenen Ausführungen in der Ausstellung",
  },
  /* Bildpaar, das auf kleinen Schirmen an die Stelle von `desktopSide` tritt. */
  side: [
    {
      src: "/img/showroom/showroom-24.jpg",
      alt: "Holzfenster mit Rollladen und Haustürelement in der Ausstellung",
    },
    {
      src: "/img/showroom/showroom-26.jpg",
      alt: "Haustür- und Beschlagmuster in der Ausstellung",
    },
  ],
  linkLabel: "Termin vereinbaren",
} as const;

export type Project = {
  key: string;
  name: string;
  location: string;
  client: string;
  architect?: string;
  volume: string;
  scope: string;
  systems: readonly string[];
  image: string;
  alt: string;
  credit?: string;
};

export const projects = {
  eyebrow: "Referenzen",
  headline: "Objektbau, der geliefert wurde",
  intro:
    "Fünf von über fünfzehn Objekten, die wir in den vergangenen Jahren komplett ausgestattet haben.",
  items: [
    {
      key: "wagnis-west",
      name: "wagnis WEST",
      location: "München-Freiham",
      client: "wagnis eG & WG München-West",
      architect: "Hable Architekten",
      volume: "3,0 Mio. €",
      scope:
        "Fenster, Faltelemente, Laubeneingangstüren, Brandschutztüren und Sonnenschutz",
      systems: [
        "KNEER AHF 95 Art",
        "Solarlux Woodline Glas-Faltwand",
        "KNEER HF 82 Effizient",
        "ROMA zipScreen.2",
      ],
      image: "/img/refs/3_wagnisWEST_Eingang-Hans-Clarin-Weg_FrankSchroth-scaled.jpg",
      alt: "Eingangsbereich am Hans-Clarin-Weg im Quartier wagnis WEST",
      credit: "© Frank Schroth",
    },
    {
      key: "josef-felder",
      name: "Wohnanlage Josef-Felder-Straße",
      location: "München-Pasing · 200 Wohnungen",
      client: "GWG München",
      architect: "Grassinger Emrich Architekten",
      volume: "2,2 Mio. €",
      scope: "1.350 Kunststofffenster mit Aufsatzrollläden",
      systems: ["IDEAL Weinstock 8000S"],
      image: "/img/refs/JoFelder-121-e1697378542323.jpg",
      alt: "Wohnanlage in der Josef-Felder-Straße in München-Pasing",
    },
    {
      key: "theresienstrasse",
      name: "Wohnanlage Theresienstraße",
      location: "München-Maxvorstadt · 116 Wohnungen",
      client: "Instone Real Estate",
      architect: "Palais Mai",
      volume: "2,1 Mio. €",
      scope: "1.000 Holz-Aluminiumfenster, Faltelemente und Haustüren",
      systems: ["KNEER AHF 95 Classic"],
      image: "/img/refs/Therese_190607_083-scaled-e1697378758288.jpg",
      alt: "Wohnanlage in der Theresienstraße in München-Maxvorstadt",
    },
    {
      key: "scapinellistrasse",
      name: "Lortzing- & Scapinellistraße",
      location: "München",
      client: "GEWOFAG",
      architect: "Grassinger Emrich Architekten",
      volume: "0,8 Mio. €",
      scope:
        "190 Kunststofffenster mit Sonderfolie, 70 Hafencity-Fenster, Stahlabsturzsicherungen",
      systems: ["KNEER KF 734 S", "Eilenburger Hafencity-Fenster"],
      image: "/img/refs/Scalpinellistr-15.jpg",
      alt: "Wohngebäude in der Scapinellistraße in München",
    },
    {
      key: "kindergarten-langenpreising",
      name: "Kindergarten Langenpreising",
      location: "Langenpreising",
      client: "Gemeinde Langenpreising",
      architect: "Architektur Werkstatt Vallentin",
      volume: "145.000 €",
      scope: "Fenster, Türen und Pfosten-Riegel-Fassade",
      systems: ["Raico Fassadensystem HI 50", "KNEER Einsatzelemente"],
      image: "/img/refs/Kindergarten-Langenpreising-scaled.jpg",
      alt: "Kindergarten Langenpreising mit Pfosten-Riegel-Fassade",
      credit: "© bildraumwest",
    },
  ] as readonly Project[],
} as const;

export const stats = {
  eyebrow: "Zahlen",
  headline: "Was in zwei Jahrzehnten zusammenkommt",
  items: [
    { value: 20, suffix: "+", label: "Jahre Erfahrung", sub: "seit 2003" },
    { value: 15, suffix: "+", label: "Objektbau-Referenzen", sub: "in Bayern" },
    {
      value: 8000,
      prefix: "~",
      label: "verbaute Fenster",
      sub: "in Referenzprojekten",
    },
    {
      value: 2000,
      prefix: "~",
      label: "Wohneinheiten",
      sub: "ausgestattet",
    },
    { value: 100, suffix: " %", label: "Made in Germany", sub: "alle Systeme" },
  ],
} as const;

export const partners = {
  headline: "Unsere Hersteller",
  items: [
    // logoClass gleicht die sehr unterschiedlichen Seitenverhältnisse optisch an:
    // bei einheitlicher Höhe wirkt das quadratische ROMA-Logo sonst deutlich kleiner
    // als die breiten Wortmarken.
    {
      /* Freigestellt aus kneer.jpg: Das JPG liegt auf reinem Weiß und stand
         als heller Kasten auf dem Creme-Grund. */
      name: "KNEER Südfenster",
      logo: "/logos/kneer-freigestellt.png",
      width: 1024,
      height: 477,
      logoClass: "h-10 sm:h-12",
    },
    {
      name: "IDEAL Weinstock",
      logo: "/logos/ideal-weinstock.png",
      width: 220,
      height: 24,
      logoClass: "h-5 sm:h-6",
    },
    {
      /* Freigestellte Wortmarke aus roma.png: Das Original ist ein oranger
         Kasten über einem grauen Textblock — als einziges Logo eine Fläche
         statt einer Marke, und beides außerhalb der Palette. */
      name: "ROMA",
      logo: "/logos/roma-wortmarke.png",
      width: 244,
      height: 70,
      logoClass: "h-7 sm:h-8",
    },
  ],
  note: "Im Objektbau ergänzt um Solarlux, Warema und Raico.",
} as const;

export const team = {
  eyebrow: "Team",
  headline: "Die Menschen hinter jedem Auftrag",
  body:
    "Vier feste Ansprechpartner – von der Beratung über die Ausschreibung bis zur Abnahme auf der Baustelle.",
  members: [
    {
      key: "peter-beck",
      name: "Peter Beck",
      role: "Geschäftsführer",
      image: "/img/team/peter-beck.jpg",
    },
    {
      key: "marco-beck",
      name: "Marco Beck",
      role: "Geschäftsführer",
      image: "/img/team/marco-beck.jpg",
    },
    {
      key: "johannes-bachmeier",
      name: "Johannes Bachmeier",
      role: "Projektleiter",
      image: "/img/team/johannes-bachmeier.jpg",
    },
    {
      key: "maria-heider",
      name: "Maria Heider",
      role: "Sachbearbeiterin",
      image: "/img/team/maria-heider.jpg",
    },
  ],
} as const;

/* Ablauf der Verkaufsberatung – die sechs Schritte und die Beschreibungen
   stammen wörtlich sinngemäß von der alten Beck-Seite („Ablauf der
   Verkaufsberatung"). Keine erfundenen Zusagen. */
export const processSteps = [
  "Projektidee",
  "Terminvereinbarung",
  "Individuelle Beratung",
  "Bedarfsermittlung",
  "Produktauswahl",
  "Montage",
] as const;

export const process = {
  eyebrow: "Ablauf",
  headline: "Von der ersten Idee bis zur fertigen Montage",
  intro:
    "Ihr Projekt steht in den Startlöchern, aber das passende Unternehmen für Fenster und Türen fehlt noch? Wir gehen die sechs Schritte gemeinsam mit Ihnen durch – vom ersten Termin bis zur eingebauten Tür.",
  steps: [
    {
      title: "Projektidee",
      image: "/img/ablauf/projektidee.jpg",
      alt: "Bauzeichnungen und Grundriss eines Wohnhauses auf einem Tisch",
      body: "Neubau, Sanierung oder einzelnes Element – Sie schildern uns, was ansteht.",
    },
    {
      title: "Terminvereinbarung",
      image: "/img/ablauf/terminvereinbarung.jpg",
      alt: "Eingang der Ausstellung mit schwarz gerahmter Glastür",
      body: "Wir stimmen einen Termin ab: in der Ausstellung in Niederaichbach oder bei Ihnen vor Ort.",
    },
    {
      title: "Individuelle Beratung",
      image: "/img/ablauf/beratung.jpg",
      alt: "Musterordner mit Farbmustern und Fensterprofilschnitten auf einem Beratungstisch",
      body: "Gemeinsam besprechen wir Ihre Fenster- und Türenwünsche und was technisch dazugehört.",
    },
    {
      title: "Bedarfsermittlung",
      image: "/img/ablauf/bedarfsermittlung.jpg",
      alt: "Maßband und Zollstock auf einer Fensterbank im Rohbau",
      body: "Anhand Ihrer Pläne ermitteln wir den Bedarf. Auf Wunsch messen wir bei Ihnen zu Hause aus.",
    },
    {
      title: "Produktauswahl",
      image: "/img/ablauf/produktauswahl.jpg",
      alt: "Aufgereihte Material- und Glasmuster in Holz, Aluminium und Glas",
      body: "Produktlösungen, Farben und Materialien am Musterelement vergleichen – danach folgt das genaue Angebot.",
    },
    {
      title: "Montage",
      image: "/img/ablauf/montage.jpg",
      alt: "Großes Fensterelement wird in eine Maueröffnung eingesetzt",
      body: "Feste Montagepartner aus der Region bauen die Elemente ein – sauber und termintreu.",
    },
  ],
} as const;

export const cta = {
  headlineLines: ["Wo Planung", "auf Handwerk trifft"],
  body:
    "Erzählen Sie uns von Ihrem Vorhaben – ob Einzelfenster oder Wohnanlage. Wir melden uns mit einer belastbaren Einschätzung zurück.",
  primary: { label: "Beratung anfragen", href: "/kontakt" },
  secondary: { label: "Ausstellung besuchen", href: "/#ausstellung" },
  /* Vollbild hinter dem Footer (nicht mehr als Band unter dem CTA — fg-12).
     Bewusst NICHT `firmengebaeude.jpg`: das Foto ist stark degradiert und hat
     einen Cyan-Stich (Kanalmittel 73/147/158). Dieses Motiv hat eine
     Kanalspanne von 7, ist also farbneutral und sauber belichtet.
     `firmengebaeude.jpg` bleibt auf /ueber-uns im Einsatz, wo es als
     Firmensitz inhaltlich richtig steht. */
  background: {
    src: "/img/refs/Therese_190607_083-scaled-e1697378758288.jpg",
    alt: "Wohnanlage in der Theresienstraße in München-Maxvorstadt mit Holz-Aluminiumfenstern von Beck",
  },
} as const;

export const imageCredits = [
  "wagnis WEST: © Frank Schroth",
  "baywobau-Projekte: © Matthias Kestel",
  "Kindergärten: © bildraumwest / brw studio",
] as const;
