# Briefing — Beck Fenster & Türen, Neubau Startseite

**Referenz-Vorlage:** https://fluid.glass/ (Struktur & Scroll-Choreografie 1:1)
**Inhalte:** ausschließlich Beck Fenster & Türen (echte Daten unten)
**Stack:** Next.js 15 App Router, TypeScript, Tailwind, GSAP + Lenis, Framer Motion

---

## 1. fluid.glass — Sektionsabfolge (exakt nachzubauen)

| # | Section | Inhalt bei fluid.glass | Beck-Entsprechung |
|---|---------|------------------------|-------------------|
| 0 | Nav (fixed, transparent → solid) | Logo links, Menü mittig, Telefon/Mail, CTA "Get a quote" | Logo, Menü, 08702/67157-0, CTA "Angebot anfordern" |
| 1 | **Hero** | Riesiger Titel "Fluid Glass", Tagline in 3 Zeilen, "Scroll to explore" | "Beck Fenster" + Tagline |
| 2 | **Scroll-Zoom-Video** | Video/Bild skaliert beim Scrollen von klein → vollflächig | Stock-Video Panoramafenster |
| 3 | **Specialists** | "Glazing specialists" + Absatz + großes Hero-Bild | "Fenster-Spezialisten" |
| 4 | **About** | "About Fluid Glass", 3-zeiliger Text, Link "Who we are" | "Über Beck", Link "Wer wir sind" |
| 5 | **Product collection** | Headline + 4 Produkt-Cards (Doors/Windows/Additional/Structural), Portrait 1200x1480 | 4 Kategorien (s.u.) |
| 6 | **Showroom** | Headline, Subtext, Adresse, Link, breites Banner-Bild 3200x1800 | Ausstellung Niederaichbach |
| 7 | **Featured projects** | Headline + 5 Projekt-Cards mit Produktliste, Bild 580x728 | 5 aus 15 echten Referenzen |
| 8 | **Testimonials** | Karussell 01/05, Porträt + Zitat, Google 5.0 | Partner/Auftraggeber-Statements |
| 9 | **CTA** | "Where vision meets execution" über Vollbild-Hintergrundbild | "Wo Planung auf Handwerk trifft" |
| 10 | **Footer** | Copyright, Social, Privacy/Terms | Impressum, Datenschutz |

### Zentrale Effekte
- **Scroll-Zoom**: Element wächst von ~40% auf 100% Viewport (GSAP ScrollTrigger, `scrub`)
- **Text-Reveal**: zeilenweise Masken-Animation (clip-path/translateY, stagger)
- **Sticky-Pinning** bei Bild-Sektionen
- **Lenis** Smooth Scroll
- Sehr große Typo, viel Weißraum, ruhige lange Scrollwege
- Bildsprache: hell, architektonisch, Glas/Licht

---

## 2. Beck — Firmendaten (verifiziert)

- **Firma:** Beck Fenster und Türen GmbH
- **Adresse:** Mövenweg 2, 84100 Niederaichbach
- **Telefon:** 08702/67157-0
- **E-Mail:** marco.beck@becks-fenster.de
- **Öffnungszeiten:** Mo–Do 08:00–17:00 (Mittag 12:00–13:00), Fr 08:00–12:00, weitere Termine nach Vereinbarung
- **Gegründet:** Mai 2003 als OHG (Tochter der Beck Schreinerei GmbH), 2016 Umwandlung in GmbH
- **Erfahrung:** über 20 Jahre
- **Claim:** „Expertise, Qualität und Zuverlässigkeit sind unser höchster Anspruch"
- **USP:** Ausschließlich Made-in-Germany-Produkte

### Team
| Name | Position | Bild |
|------|----------|------|
| Peter Beck | Geschäftsführer | `_assets/beck/230309_Beck_Schreinerei_05_medium.jpg` |
| Marco Beck | Geschäftsführer (seit 2022) | 06/07/08_medium (zuordnen per Sichtprüfung) |
| Johannes Bachmeier | Projektleiter (seit 2014) | s.o. |
| Maria Heider | Sachbearbeiterin | s.o. |

> Willi Bachmeier (Aufbau Objektbau) ging 2022 in Rente — nur in Historie erwähnen.

### Drei Säulen (von alter Seite)
- **EXPERTISE** — erfahrenes Team, Beratung bis Montage, laufende Schulungen
- **QUALITÄT** — KNEER Südfenster, IDEAL Weinstock, ROMA; lokale Montagefirmen
- **ZUVERLÄSSIGKEIT** — deutsche Hersteller, verlässliche Beratung, Termintreue

### Ablauf der Verkaufsberatung
Projektidee → Terminvereinbarung → Individuelle Beratung → Bedarfsermittlung → Produktauswahl → Montage

### Partner
KNEER Südfenster · IDEAL Weinstock · ROMA · (Solarlux, Warema, Raico im Objektbau)

---

## 3. Produktkategorien (→ Section 5, 4 Cards)

1. **Holz & Holz-Alu-Fenster** — Kneer AHF 95 Classic, AHF 105 S, HF 82 Effizient
   → `_assets/products/full_AHF_95_Classic-removebg-preview.png`
2. **Kunststofffenster** — IDEAL Weinstock 8000S / TWINSET
   → `_assets/products/KunststoffAlu-Ideal-Weinstock-das-Fluegellose-scaled.jpg`
3. **Sonnenschutz & Rollläden** — ROMA Raffstoren, zipScreen.2
   → `_assets/products/roma-modulraffstoren-imagewall.jpg`
4. **Haustüren & Hebeschiebetüren** — HST, Aluminiumhaustüren
   → `_assets/products/Referenz-Sky-HST-scaled.jpg`

---

## 4. Referenzprojekte (→ Section 7, 5 der besten)

**Empfohlene Auswahl (größte Wirkung + eigenes Bild vorhanden):**

1. **wagnis WEST, Freiham** — München-Freiham · wagnis eG & WG München-West · Hable Architekten
   3.000.000 € · Fenster, Faltelemente, Laubeneingangstüren, Brandschutztüren, Sonnenschutz
   *Kneer AHF 95 Art · Solarlux Woodline Glas-Faltwand · Kneer HF82 Effizient · Roma zipScreen.2*
   → `_assets/refs/1_wagnisWEST_*`, `3_wagnisWEST_*`, `10_wagnisWEST_*`, `Wagnis_West_*`

2. **Wohnanlage Josef-Felder-Straße** — München-Pasing, 200 Wohnungen · GWG München · Grassinger Emrich
   2.200.000 € · 1.350 Kunststofffenster mit Aufsatzrollläden
   *IDEAL Weinstock 8000S* → `_assets/refs/JoFelder-121-*`

3. **Wohnanlage Theresienstraße** — München-Maxvorstadt, 116 Wohnungen · Instone Real Estate · Palais Mai
   2.100.000 € · 1.000 Holz-Aluminiumfenster, Faltelemente, Haustüren
   *Kneer AHF95 Classic* → `_assets/refs/Therese_190607_083-*`

4. **Lortzing-/Scapinellistraße** — München · GEWOFAG · Grassinger Emrich
   800.000 € · 190 Kunststofffenster Sonderfolie, 70 Hafencity-Fenster, Stahlabsturzsicherungen
   *Kneer KF 734 S · Eilenburger Hafencity-Fenster* → `_assets/refs/Scalpinellistr-*`

5. **Kindergarten Langenpreising** — Gemeinde Langenpreising · Architektur Werkstatt Vallentin
   145.000 € · Fenster, Türen und P+R-Fassade
   *Raico Fassadensystem HI 50 · Kneer Einsatzelemente* → `_assets/refs/Kindergarten-Langenpreising-scaled.jpg`

**Weitere (für Kennzahlen/Unterseite):** Kämpferstraße (199 WE, 850k), Freischützstraße (225 WE, 1,4 Mio),
Ottobrunner Str. (140 WE, 800k), Freiham WA1 (145 WE, 2,1 Mio), Roter Block (500 Fenster, 1 Mio),
Taufkirchen (50 WE), Weihlerstraße Landshut (120), KiGa Altheim (230k), Kinderkrippe Schmatzhausen (150k),
ÜZW Altheim (100k)

### Ableitbare Kennzahlen (für Stats/Counter)
- **20+** Jahre Erfahrung (seit 2003)
- **15+** Objektbau-Referenzen
- **~8.000** verbaute Fenster in Referenzprojekten
- **~2.000** Wohneinheiten ausgestattet
- **100 %** Made in Germany

---

## 5. Assets-Inventar

```
_assets/beck/       Team-Porträts (01,04,05,06,07,08_medium) + Showroom (15,16,19,20,23,24,26,27,30_large)
                    + firma_aussen.jpg (Firmengebäude) + Logos
_assets/refs/       20 Referenzprojekt-Fotos (wagnisWEST, KiGa, Scalpinelli, baywobau, Therese, JoFelder, Kämpfer)
_assets/products/   16 Produktbilder (Freisteller-PNGs + Objektfotos) + Partner-Logos
_assets/video/      hero-window-vista.mp4      ← Panoramafenster Bergblick (EMPFOHLEN für Scroll-Zoom)
                    hero-glass-timber.mp4      ← Glasfläche Holzarchitektur (Alternative, 4K)
                    detail-curtain-light.mp4   ← Vorhang/Licht, vertikal
                    detail-roof-glass.mp4      ← Dachverglasung
                    detail-facade.mp4          ← Glasfassade Hochhaus (4K vertikal)
                    detail-interior.mp4        ← Wohnraum-Schwenk
```

**Logos:** `cropped-Beck-FundT-Gmbhjpg-removebg-preview.png` (Beck, transparent),
`logo.png` (ROMA), `logoweinstock_*.png` (IDEAL Weinstock), `KNEER_LOGO_*.jpg`,
`IDEAL-Logo-Gruen-mit-Claim_transparent.png`

**Hinweis Bildrechte:** wagnisWEST-Fotos © Frank Schroth, baywobau © Matthias Kestel,
KiGa © bildraumwest/brw studio — Credits im Footer oder an der Card vermerken.

---

## 6. Regeln

- Deutsch, Sie-Form
- Keine erfundenen Zahlen, Zertifikate oder Kundenstimmen — nur Daten aus diesem Briefing
- Keine fluid.glass-Texte übernehmen (Marke/Copyright) — Struktur ja, Wortlaut nein
- Bilder über `next/image`, Videos `muted playsInline preload="metadata"` + Poster
- `prefers-reduced-motion` respektieren
- Responsiv ab 360 px; Scroll-Effekte auf Mobile vereinfachen
