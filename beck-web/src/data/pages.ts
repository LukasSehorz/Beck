/**
 * Inhalte der Unterseiten.
 *
 * Alle Angaben stammen von der bestehenden Seite becks-fenster.de
 * (Stand August 2026) — siehe _assets/SEITENSTRUKTUR.md und _assets/BRIEFING.md.
 * Nichts hier ist ergänzt oder geschätzt: Auftragssummen, Stückzahlen,
 * U-Werte und Bautiefen sind so veröffentlicht.
 */

/* ---------------------------------------------------------------- Privatkunden */

export const privatkunden = {
  eyebrow: "Privatkunden",
  title: "Fenster, die zum Haus passen – nicht zum Katalog",
  intro:
    "Sie wollen hochqualitative Fenster mit modernem Design und Sonderfunktionen für jegliches Bedürfnis? Dann sind Sie bei uns richtig.",
  hero: {
    src: "/img/products/Bild-Kneer-Anfangsseite.jpg",
    alt: "Wohnraum mit bodentiefen Holz-Aluminium-Fenstern und Blick in den Garten",
  },
  sections: [
    {
      key: "montage",
      eyebrow: "Montage",
      headline: "Sauber gearbeitet, auch im bewohnten Haus",
      body:
        "Unsere spezialisierten Monteure führen den Fenster- und Türeneinbau nach den aktuellen technischen Standards aus. Besonderen Wert legen wir auf sauberes Arbeiten – vor allem beim Austausch von Bestandsfenstern, wo in bewohnten Räumen gearbeitet wird.",
      image: {
        src: "/img/showroom/showroom-24.jpg",
        alt: "Holzfenster mit Rollladen in der Ausstellung von Beck Fenster",
      },
    },
    {
      key: "einbaukasten",
      eyebrow: "ROMA-Einbaukästen",
      headline: "Fenster und Rollladen als ein Bauteil",
      body:
        "Wir montieren das Fenster komplett mit Rollladenkasten. Beide Teile sind damit perfekt aufeinander abgestimmt – der Rollladen läuft leise und einwandfrei, und es gibt keine Schnittstelle zwischen zwei Gewerken, an der später niemand zuständig ist.",
      image: {
        src: "/img/products/roma-modulraffstoren-imagewall.jpg",
        alt: "Fassade mit ROMA Raffstoren als Sonnenschutz",
      },
    },
  ],
  partnersNote:
    "Für Privatkunden arbeiten wir vor allem mit KNEER Südfenster und IDEAL Weinstock.",
} as const;

/* ------------------------------------------------------------------- Objektbau */

export const objektbau = {
  eyebrow: "Objektbau",
  title: "Vom Aufmaß bis zur Abnahme",
  intro:
    "Wohnanlagen, Kindergärten und Sanierungen für kommunale Wohnungsbaugesellschaften, Genossenschaften und Bauträger. Fünfzehn Objekte, die wir komplett ausgestattet haben.",
  hero: {
    src: "/img/refs/1_wagnisWEST_LuftaufnahmeQuartier_FrankSchroth-scaled.jpg",
    alt: "Luftaufnahme des Quartiers wagnis WEST in München-Freiham",
    credit: "© Frank Schroth",
  },
  /* Alle 15 Referenzen, absteigend nach Auftragssumme. */
  items: [
    {
      key: "wagnis-west",
      name: "Genossenschaftliche Wohnanlage wagnis WEST",
      location: "München-Freiham",
      client: "Wohnbaugenossenschaft wagnis eG & WG München-West eG",
      architect: "Hable Architekten",
      volume: "3.000.000 €",
      scope:
        "Fenster, Faltelemente, Laubeneingangstüren, Brandschutz-Laubeneingangstüren und Sonnenschutzelemente",
      systems: [
        "KNEER AHF 95 Art",
        "Solarlux Woodline Glas-Faltwand",
        "KNEER HF 82 Effizient",
        "KNEER HT 3-82",
        "ROMA zipScreen.2",
        "Warema Schacht-Markise",
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
      volume: "2.200.000 €",
      scope: "1.350 Kunststofffenster mit Aufsatzrollläden und Fensterblechen",
      systems: ["IDEAL Weinstock 8000S"],
      image: "/img/refs/JoFelder-121-e1697378542323.jpg",
      alt: "Wohnanlage in der Josef-Felder-Straße in München-Pasing",
    },
    {
      key: "theresienstrasse",
      name: "Wohnanlage Theresienstraße",
      location: "München-Maxvorstadt · 116 Wohnungen",
      client: "Instone Real Estate München",
      architect: "Palais Mai München",
      volume: "2.100.000 €",
      scope:
        "1.000 Holz-Aluminiumfenster mit Aufsatzrollläden, Faltelemente und Haustüren",
      systems: ["KNEER Südfenster AHF 95 Classic"],
      image: "/img/refs/Therese_190607_083-scaled-e1697378758288.jpg",
      alt: "Wohnanlage in der Theresienstraße in München-Maxvorstadt",
    },
    {
      key: "freiham-wa1",
      name: "Wohnanlage Freiham WA 1, Aubinger Allee",
      location: "München-Freiham · 145 Wohnungen",
      client: "GWG München",
      architect: "Meier Neuberger Architekten",
      volume: "2.100.000 €",
      scope:
        "650 Kunststofffenster mit Vorbaurollläden, Absturzgittern und Fensterläden",
      systems: ["KNEER Südfenster KF 734"],
      image: "/img/refs/10_wagnisWEST_Gemeinschaftsmacher-v.-Suedwand_FrankSchroth-WAGNIS-NB19-scaled.jpg",
      alt: "Wohngebäude im Quartier Freiham mit Vorbaurollläden",
      credit: "© Frank Schroth",
    },
    {
      key: "freischuetzstrasse",
      name: "Wohnanlage Freischützstraße",
      location: "München-Bogenhausen · 225 Wohnungen",
      client: "Baywobau Immobilien",
      volume: "1.400.000 €",
      scope: "1.000 Kunststofffenster mit Aufsatzrollläden",
      systems: ["IDEAL Weinstock 8000S"],
      image: "/img/refs/baywobau_johanneskirchen-9444-Pano_c-matthias-kestel-scaled-e1697378853403.jpg",
      alt: "Wohnanlage der Baywobau in München mit Aufsatzrollläden",
      credit: "© Matthias Kestel",
    },
    {
      key: "roter-block",
      name: "Sanierung Roter Block, Maron- & Pfeuferstraße",
      location: "München",
      client: "GWG München",
      architect: "Maierhofer Architekten",
      volume: "1.000.000 €",
      scope: "500 Kunststofffenster mit Acryloberfläche",
      systems: ["KNEER Südfenster KF 594"],
      image: "/img/refs/Kaempferstr2-41-e1697378607324.jpg",
      alt: "Sanierte Wohnzeile in München mit neuen Kunststofffenstern",
    },
    {
      key: "kaempferstrasse",
      name: "Wohnanlage Kämpferstraße",
      location: "München-Harthof · 199 Wohnungen",
      client: "GWG München",
      architect: "Grassinger Emrich Architekten",
      volume: "850.000 €",
      scope: "800 Kunststofffenster mit Aufsatzrollläden",
      systems: ["IDEAL Weinstock 8000S"],
      image: "/img/refs/Kaempferstr2-41-e1697378607324.jpg",
      alt: "Wohnanlage in der Kämpferstraße in München-Harthof",
    },
    {
      key: "scapinellistrasse",
      name: "Neubau Lortzing- & Scapinellistraße",
      location: "München",
      client: "GEWOFAG Holding München",
      architect: "Grassinger Emrich Architekten",
      volume: "800.000 €",
      scope:
        "190 Kunststofffenster mit Sonderfolie, 70 Kunststoff-Hafencity-Fenster, pulverbeschichtete Stahlabsturzsicherungen und Aufsatzrollläden",
      systems: ["KNEER Südfenster KF 734 S", "Eilenburger Hafencity-Fenster"],
      image: "/img/refs/Scalpinellistr-15.jpg",
      alt: "Neubau in der Scapinellistraße in München",
    },
    {
      key: "ottobrunner",
      name: "Wohnanlage Ottobrunner Straße",
      location: "München-Ramersdorf · 140 Wohnungen",
      client: "Baywobau Immobilien",
      volume: "800.000 €",
      scope: "700 Kunststofffenster mit Aufsatzrollläden",
      systems: ["IDEAL Weinstock 8000S"],
      image: "/img/refs/baywobau_ramersdorf-9128-Pano_c-matthias-kestel-scaled.jpg",
      alt: "Wohnanlage in München-Ramersdorf",
      credit: "© Matthias Kestel",
    },
    {
      key: "taufkirchen",
      name: "Wohnanlage Taufkirchen",
      location: "Taufkirchen · 50 Wohnungen",
      client: "GEWOFAG Holding München",
      architect: "H2R Architekten",
      volume: "300.000 €",
      scope: "220 Kunststofffenster und Absturzgitter",
      systems: ["KNEER Südfenster 424 S"],
      image: "/img/refs/Scalpinellistr-82.jpg",
      alt: "Wohngebäude in Taufkirchen mit Kunststofffenstern",
    },
    {
      key: "weihlerstrasse",
      name: "Wohnanlage Weihlerstraße",
      location: "Landshut",
      client: "Katholisches Siedlungswerk Landshut",
      architect: "Neumeier & Paringer",
      volume: "250.000 €",
      scope:
        "120 Kunststoff-Aluminiumfenster mit Aufsatzrollo und Hauseingangstüren",
      systems: ["IDEAL Weinstock TWINSET 8000 S"],
      image: "/img/refs/Scalpinellistr-04-e1714742051925.jpg",
      alt: "Wohnanlage in der Weihlerstraße in Landshut",
    },
    {
      key: "kiga-altheim",
      name: "Neubau Kindergarten Altheim",
      location: "Altheim",
      client: "Markt Essenbach",
      architect: "Planungsgesellschaft POKAM mbH",
      volume: "230.000 €",
      scope: "Fenster und Beschattung",
      systems: ["KNEER AHF 95 Classic"],
      image: "/img/refs/KIGA-Altheim-scaled.jpg",
      alt: "Neubau des Kindergartens in Altheim",
      credit: "© bildraumwest",
    },
    {
      key: "kinderkrippe-schmatzhausen",
      name: "Neubau Kinderkrippe Schmatzhausen",
      location: "Schmatzhausen, Gemeinde Hohenthann",
      client: "Gemeinde Hohenthann",
      architect: "Architekturbüro Bindhammer",
      volume: "150.000 €",
      scope: "Fenster und Beschattung",
      systems: ["KNEER AHF 95 Classic", "ROMA Raffstore"],
      image: "/img/refs/c-by-brw-studio-100331-2409-Kiga-013-scaled.jpg",
      alt: "Kinderkrippe mit großformatigen Fensterelementen",
      credit: "© brw studio",
    },
    {
      key: "kiga-langenpreising",
      name: "Neubau Kindergarten Langenpreising",
      location: "Langenpreising",
      client: "Gemeinde Langenpreising",
      architect: "Architektur Werkstatt Vallentin GmbH, Dorfen",
      volume: "145.000 €",
      scope: "Fenster, Türen und P+R-Fassade",
      systems: ["Raico Fassadensystem HI 50", "KNEER Einsatzelemente"],
      image: "/img/refs/Kindergarten-Langenpreising-scaled.jpg",
      alt: "Kindergarten in Langenpreising mit Pfosten-Riegel-Fassade",
    },
    {
      key: "uezw-altheim",
      name: "Sanierung und Umbau ÜZW Altheim",
      location: "Altheim",
      client: "ÜZW Altheim",
      volume: "100.000 €",
      scope: "Sanierung und Neubau Fenster & Sonnenschutz",
      systems: [
        "Kunststofffenster foliert",
        "Aluminiumhaustüren",
        "Sonnenschutz",
      ],
      image: "/img/refs/c-by-bildraumwest-100331-2403-kiga-010-scaled.jpg",
      alt: "Sanierter Gebäudeteil mit folierten Kunststofffenstern",
      credit: "© bildraumwest",
    },
  ],
} as const;

/* ------------------------------------------------------------ Partner/Produkte */

export const partnerProdukte = {
  eyebrow: "Partner & Produkte",
  title: "Drei Hersteller, ein Ansprechpartner",
  intro:
    "Wir vertreiben ausschließlich Produkte deutscher Hersteller und stimmen Fenster, Türen und Sonnenschutz innerhalb eines Projekts aufeinander ab.",
  hero: {
    src: "/img/showroom/showroom-19.jpg",
    alt: "Ausstellungsraum mit einer Reihe von Fenster- und Türmustern",
  },
  brands: [
    {
      key: "kneer",
      href: "/partner-produkte/kneer",
      name: "KNEER Südfenster",
      claim: "Wohnen mit Weitblick",
      body:
        "Innovative Fenster in bester Qualität aus den Materialien Aluminium-Holz, Holz, Aluminium-Kunststoff, Kunststoff und Aluminium – mit Fokus auf Sicherheit und Wohnkomfort.",
      logo: "/logos/kneer.jpg",
      image: "/img/products/Holzfenster-das-klassiche-HF-82-Effizient-scaled.jpg",
      alt: "Holzfenster HF 82 Effizient von KNEER Südfenster",
    },
    {
      key: "ideal-weinstock",
      href: "/partner-produkte/ideal-weinstock",
      name: "IDEAL Fensterbau Weinstock",
      claim: "Raum für Individualität",
      body:
        "Ein modernes Fenster ist ein komplexes Konstrukt aus verschiedenen Elementen: Sichtschutz, Sonnenschutz, Schallschutz, Wärmedämmung und Sicherheit in einem Bauteil.",
      logo: "/logos/ideal-weinstock.png",
      image: "/img/products/KunststoffAlu-Ideal-Weinstock-das-Fluegellose-scaled.jpg",
      alt: "Kunststoff-Aluminium-Fenster von IDEAL Weinstock",
    },
    {
      key: "roma",
      href: "/partner-produkte/roma",
      name: "ROMA",
      claim: "Rollladen · Raffstoren · Textilscreens",
      body:
        "Schutz vor Sommerhitze, Lärm, unerwünschten Einblicken, Einbruch und Wärmeverlust – aus hochwertigem Aluminium, als Vorbau- oder Aufsatzmontage.",
      logo: "/logos/roma.png",
      image: "/img/products/roma-modulraffstoren-imagewall.jpg",
      alt: "Fassade mit ROMA Modul-Raffstoren",
    },
  ],
} as const;

/* -- Hersteller-Detailseiten. `specs` erscheint als Mono-Datentabelle. -- */

export const kneer = {
  eyebrow: "KNEER Südfenster",
  title: "Holz, Holz-Aluminium und Denkmalschutz",
  intro:
    "Innovative Fenster aus Aluminium-Holz, Holz, Aluminium-Kunststoff, Kunststoff und Aluminium – mit Fokus auf Sicherheit und Wohnkomfort.",
  hero: {
    src: "/img/products/Holzfenster-das-klassiche-HF-82-Effizient-scaled.jpg",
    alt: "Holzfenster HF 82 Effizient von KNEER Südfenster",
  },
  groups: [
    {
      key: "holz",
      name: "Holzfenster",
      body: "Reine Holzkonstruktion – innen wie außen sichtbare Holzoberfläche.",
      image: "/img/products/HF_82_Effiz_zu-removebg-preview.png",
      alt: "Freisteller des Holzfensters HF 82 Effizient",
      specs: [
        {
          model: "HF 82 Effizient",
          detail:
            "Innere und äußere Holzoberfläche für puristische Optik, mit Regenschiene und Flügelabdeckprofil",
          uw: "bis 0,86 W/m²K",
          extra: "Schallschutzklasse 4 · RC2",
        },
        {
          model: "HF 90",
          detail: "Holzfenster mit größerer Bautiefe",
          uw: "—",
          extra: "—",
        },
      ],
    },
    {
      key: "alu-holz",
      name: "Aluminium-Holz-Fenster",
      body:
        "Edles Holz auf der Innenseite, robuste Aluminiumschale außen – wartungsarm zur Wetterseite.",
      image: "/img/products/full_AHF_95_Classic-removebg-preview.png",
      alt: "Freisteller des Aluminium-Holz-Fensters AHF 95 Classic",
      specs: [
        {
          model: "AHF 95 Classic",
          detail: "Verdeckt liegende Beschläge",
          uw: "0,76 W/m²K",
          extra: "Schallschutzklasse 4 · RC2",
        },
        {
          model: "AHF 105 EF S Modern",
          detail: "Modernes Design mit schmalen Ansichten",
          uw: "—",
          extra: "—",
        },
        {
          model: "AHF 105 S Integral",
          detail:
            "Von außen nicht sichtbarer Flügel, innen flächenbündige Optik",
          uw: "0,79 W/m²K",
          extra: "Schallschutzklasse 4 · RC2",
        },
      ],
    },
    {
      key: "denkmal",
      name: "Holz-Denkmalfenster",
      body:
        "Für denkmalpflegerische Renovierungen – auch als Rundbogen-Sonderanfertigung.",
      image: "/img/products/HDF_68_Stil_-removebg-preview.png",
      alt: "Freisteller des Denkmalfensters HDF 68 Stil",
      specs: [
        {
          model: "HDF 68 Stil",
          detail: "Rundbogen als Sonderanfertigung möglich",
          uw: "0,81 W/m²K (3-fach)",
          extra: "—",
        },
        {
          model: "HDF 82 Antik",
          detail: "Denkmalvariante für historische Gebäude",
          uw: "—",
          extra: "—",
        },
      ],
    },
    {
      key: "hst",
      name: "Hebeschiebetüren",
      body:
        "Rahmenlose Verglasung bis in die Schwelle, mit Nullbarriere-Übergang nach außen.",
      image: "/img/products/Referenz-Sky-HST-scaled.jpg",
      alt: "Sky Hebeschiebetür mit bodenbündiger Schwelle",
      specs: [
        {
          model: "Sky Hebeschiebetür",
          detail:
            "Soft-Close-Technik, kugelgelagerte Laufwagen, Nullbarriere-Schwelle",
          uw: "—",
          extra: "Optimierte Energieeffizienz und Sicherheit",
        },
      ],
    },
  ],
} as const;

export const idealWeinstock = {
  eyebrow: "IDEAL Fensterbau Weinstock",
  title: "Kunststoff und Kunststoff-Aluminium",
  intro:
    "Ein modernes Fenster ist ein komplexes Konstrukt aus verschiedenen Elementen – Sichtschutz, Sonnenschutz, Schallschutz, Wärmedämmung und Sicherheit in einem Bauteil.",
  hero: {
    src: "/img/products/KunststoffAlu-Ideal-Weinstock-das-Fluegellose-scaled.jpg",
    alt: "Kunststoff-Aluminium-Fenster von IDEAL Weinstock",
  },
  groups: [
    {
      key: "twinset",
      name: "TWINSET – Kunststoff-Aluminium",
      body:
        "Kunststoffprofil innen, Aluminiumschale außen. Die Serie 8000 erreicht erhöhten Schallschutz.",
      image: "/img/products/aluplast-ideal-8000s.png",
      alt: "Freisteller eines IDEAL 8000S Fensterprofils",
      specs: [
        {
          model: "TWINSET 5000S",
          detail: "Bautiefe 75 mm · 2- oder 3-fach-Verglasung",
          uw: "bis 0,87 W/m²K",
          extra: "RC2",
        },
        {
          model: "TWINSET 8000S",
          detail: "Bautiefe 90 mm",
          uw: "bis 0,74 W/m²K",
          extra: "Schallschutz bis Rw 46 dB · RC2",
        },
      ],
    },
    {
      key: "kunststoff",
      name: "IDEAL – Kunststoff",
      body:
        "Wirtschaftlich im Geschosswohnungsbau, in Weiß, Grau, Holzoptik und weiteren Farbtönen.",
      image: "/img/refs/Scalpinellistr-40.jpg",
      alt: "Wohnanlage mit Kunststofffenstern über mehrere Geschosse",
      specs: [
        {
          model: "IDEAL 5000S",
          detail: "Bautiefe 70 mm · variable Verglasung",
          uw: "bis 0,87 W/m²K",
          extra: "RC2",
        },
        {
          model: "IDEAL 8000S",
          detail: "Bautiefe 85 mm",
          uw: "bis 0,74 W/m²K",
          extra: "Erhöhter Schallschutz Rw 46 dB",
        },
      ],
    },
  ],
} as const;

export const roma = {
  eyebrow: "ROMA",
  title: "Rollläden, Raffstoren und Textilscreens",
  intro:
    "Schutz vor Sommerhitze, Lärm, unerwünschten Einblicken, Einbruch und Wärmeverlust – aus hochwertigem Aluminium, als Vorbau- oder Aufsatzmontage.",
  hero: {
    src: "/img/products/roma-modulraffstoren-imagewall.jpg",
    alt: "Fassade mit ROMA Modul-Raffstoren",
  },
  groups: [
    {
      key: "rolllaeden",
      name: "Rollläden",
      body: "Drei Systeme für Neubau, Vorbaumontage und Sanierung.",
      image: "/img/products/12920_Objekt_491_SRF-9065-scaled.jpg",
      alt: "Wohnhaus mit ROMA Rollläden",
      specs: [
        {
          model: "PURO 2",
          detail:
            "Aufsatzsystem aus hartgeschäumtem Polyurethan mit außen- und innenliegender Revision",
          uw: "—",
          extra: "Optimierte Wärme- und Schalldämmung",
        },
        {
          model: "RONDO XP",
          detail: "Vorbausystem aus stabilem Aluminium mit runder Kastenform",
          uw: "—",
          extra: "Flexible Montageoptionen",
        },
        {
          model: "THERMO F",
          detail:
            "Der Sanierer – passt sich jedem Fensterprofil an und vermeidet Kältebrücken",
          uw: "—",
          extra: "Für die Sanierung im Bestand",
        },
      ],
    },
    {
      key: "raffstoren",
      name: "Raffstoren",
      body: "Tageslicht dosieren, ohne den Raum zu verdunkeln.",
      image: "/img/products/roma-modulraffstoren-imagewall.jpg",
      alt: "Fassade mit ROMA Raffstoren",
      specs: [
        {
          model: "PURO 2 XR-RS",
          detail: "Aufsatzsystem mit PU-Hartschaum, optimierte Kastenhöhe",
          uw: "—",
          extra: "Beste Wärme- und Schalldämmwerte",
        },
        {
          model: "QUADRO",
          detail:
            "Vorbausystem aus Aluminium mit quadratischer Form, in der Laibung oder an der Wand montierbar",
          uw: "—",
          extra: "—",
        },
        {
          model: "Fassadenraffstore",
          detail: "Nutzt einen vorhandenen Kasten",
          uw: "—",
          extra: "Edles und zeitloses Fassadenbild",
        },
      ],
    },
    {
      key: "textilscreens",
      name: "Textilscreens",
      body: "Blendschutz und Hitzeschutz bei erhaltenem Ausblick.",
      image: "/img/refs/Wagnis_West_1677-scaled.jpg",
      alt: "Fassade mit Textilscreens als Sonnenschutz",
      specs: [
        {
          model: "PURO",
          detail: "Aufsatzsystem, Kasten vollständig eingeputzt",
          uw: "—",
          extra: "Optimierte Dämmung",
        },
        {
          model: "QUADRO",
          detail: "Aluminium-Vorbausystem mit quadratischer Kastenform",
          uw: "—",
          extra: "—",
        },
        {
          model: "INTEGO",
          detail:
            "Vollständig in die Fassade integriert, mit abgeschrägter Unterseite oder puristisch",
          uw: "—",
          extra: "—",
        },
      ],
    },
  ],
} as const;

/* --------------------------------------------------------------- Über uns */

export const ueberUns = {
  eyebrow: "Über uns",
  title: "Zwei Jahrzehnte, zwei Generationen",
  intro:
    "Die Beck Fenster und Türen GmbH wurde im Mai 2003 gegründet – als Tochterunternehmen der Beck Schreinerei GmbH, um den Fenster- und Türenverkauf vom Produktionsbetrieb zu trennen.",
  hero: {
    src: "/img/firmengebaeude.jpg",
    alt: "Firmensitz von Beck Fenster und Türen in Niederaichbach",
  },
  milestones: [
    {
      year: "2003",
      title: "Gründung als OHG",
      body:
        "Die Beck Fenster und Türen OHG entsteht als Tochterunternehmen der Beck Schreinerei GmbH. Ziel ist, den Fenster- und Türenverkauf vom Produktionsbetrieb zu trennen.",
    },
    {
      year: "seit 2014",
      title: "Johannes Bachmeier verstärkt das Team",
      body:
        "Der Sohn von Willi Bachmeier steigt ein und begleitet die Objektbau-Projekte als Projektleiter.",
    },
    {
      year: "2016",
      title: "Umwandlung in eine GmbH",
      body:
        "Die wachsende Auftragslage führt zur Umwandlung in die Beck Fenster und Türen GmbH.",
    },
    {
      year: "2022",
      title: "Marco Beck in der Geschäftsführung",
      body:
        "Der Sohn von Peter Beck ist seit 2022 aktiv. Im selben Jahr geht Willi Bachmeier in Rente, der das Unternehmen zuvor in den Objektbau mit Münchener Bauträgern geführt hatte.",
    },
  ],
  clientsNote:
    "Neben Privatkunden gehören heute auch kommunale Wohnungsbaugesellschaften wie GEWOFAG und GWG zum Kundenstamm.",
} as const;

/* ---------------------------------------------------------------- Karriere */

export const karriere = {
  eyebrow: "Karriere",
  title: "Wir suchen Montageunternehmen",
  /* Originalton der bestehenden Seite – dort wird geduzt. */
  intro:
    "Es freut uns sehr, dass du dich dafür interessierst, für die Beck Fenster & Türen GmbH zu arbeiten.",
  hero: {
    src: "/img/showroom/showroom-20.jpg",
    alt: "Fenster- und Türmuster in der Ausstellung von Beck Fenster",
  },
  body:
    "Wir suchen zu jeder Zeit Montageunternehmen, die qualitativ hochwertig und sauber arbeiten.",
  note:
    "Aktuell sind keine weiteren Stellen ausgeschrieben. Initiativbewerbungen sind jederzeit willkommen – melde dich einfach direkt bei Marco Beck.",
} as const;

/* ----------------------------------------------------------------- Kontakt */

export const kontakt = {
  eyebrow: "Kontakt",
  title: "Erzählen Sie uns von Ihrem Vorhaben",
  intro:
    "Ob Einzelfenster oder Wohnanlage – wir melden uns mit einer belastbaren Einschätzung zurück.",
  hero: {
    src: "/img/showroom/showroom-26.jpg",
    alt: "Haustür- und Beschlagmuster in der Ausstellung",
  },
} as const;
