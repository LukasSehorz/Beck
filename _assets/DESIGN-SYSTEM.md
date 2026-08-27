# fluid.glass — Design-System (aus CSS + Screenshots extrahiert)

Referenz-Screenshots: `.ref/shots/fg-00.png` … `fg-34.png` (Desktop 1440×900)
Original-CSS: `.ref/style.css`

> **Diese Datei ist verbindlich.** Die Beck-Seite soll optisch 1:1 so aussehen —
> nur mit Beck-Inhalten und Beck-Bildern.

---

## 1. Farben (exakt aus `:root`)

```css
--color-black: #0b1012;   /* fast-schwarz, Text + dunkle Flächen */
--color-white: #ffffff;
--color-cream: #f3f0ec;   /* Seitenhintergrund — NICHT reinweiß! */
--color-taupe: #d4cec6;   /* Linien, Rahmen, gedämpfte Flächen */
--color-grey:  #212325;   /* dunkelgrau, Nav-Pill */
```

Der Seitenhintergrund ist **durchgehend Creme `#f3f0ec`**, nie weiß.

## 2. Typografie

**Original:** Aeonik Pro (400/700) + Aeonik Mono (500/600) — kommerziell.
**Ersatz (freie Zwillinge):**
- Aeonik Pro → **Schibsted Grotesk** oder **Inter Tight** (Google Fonts)
- Aeonik Mono → **Martian Mono**, **Geist Mono** oder **JetBrains Mono**

### Fluid Sizing (Kernprinzip!)
```css
--size: 1600;                          /* Desktop-Referenzbreite */
--font-s: calc((100vw / var(--size)) * 10);
```
Alles skaliert linear mit der Viewportbreite. Auf Mobil `--size: 375`.
**In Tailwind:** über `clamp()` bzw. eine CSS-Variable nachbauen, nicht über feste Breakpoint-Stufen.

### Größen (rem-Werte aus dem CSS, 1rem = 10px Basis)
| Einsatz | Größe |
|---|---|
| Riesen-Display (Footer-Wasserzeichen) | `19.2rem` / `12.8rem` |
| Section-Headline | `8.8rem` / `6.4rem` |
| Große Headline | `4.8rem` / `4rem` |
| Sub-Headline | `3.2rem` / `2.4rem` |
| Fließtext groß | `2rem` / `1.8rem` |
| Fließtext | `1.6rem` |
| Klein / Mono-Label | `1.4rem` / `1.2rem` |

### Laufweite & Zeilenhöhe
```css
letter-spacing: -.02em;   /* große Headlines (40×) */
letter-spacing: -.03em;   /* sehr große Headlines (33×) */
letter-spacing:  .08em;   /* Mono-Labels, gesperrt (34×) */
letter-spacing:  .1em;    /* Mono-Buttons (16×) */
line-height: 1.3;         /* Fließtext (98×) */
line-height: 1;           /* Headlines (72×) */
line-height: .95;         /* Riesen-Display */
text-transform: uppercase; /* alle Mono-Labels (50×) */
```

**Regel:** Headlines = Sans, eng (-0.02/-0.03em), `line-height: 1`.
Labels/Buttons/Meta = **Mono, UPPERCASE, gesperrt (+0.08/0.1em)**. Dieser Kontrast trägt das ganze Design.

## 3. Ecken & Rahmen

```css
border-radius: 0;      /* Standard — Bilder, Kästen, Buttons */
border-radius: 2rem;   /* NUR Pills: Tags, Nav-Pill */
border-radius: 100%;   /* Kreis-Icons */
```
**Wichtig:** Bilder haben **keine** abgerundeten Ecken. Kein `rounded-2xl`.

## 4. Easing

```css
--ease-in-out-quart: cubic-bezier(.77, 0, .175, 1);
--ease-out-quart:    cubic-bezier(.165, .84, .44, 1);
--ease-out-cubic:    cubic-bezier(.215, .61, .355, 1);
```

---

## 5. Komponenten (aus den Screenshots)

### Navigation — **schwebende Pill unten mittig** (`fg-00`)
- Dunkle Pill (`#212325`), zentriert am **unteren** Viewportrand, immer sichtbar
- Inhalt: Logo-Icon · aktueller Seitenname in **Mono-Versalien** · Burger-Icon
- **Keine klassische Kopfleiste.** Oben nur:
  - Wortmarke mittig oben (Hero)
  - `↳ GET A QUOTE` oben rechts, Mono-Versalien, gesperrt

### Buttons — eckige Mono-Kästchen
```
┌──────────────────────┐
│ ↳  PRODUCT OVERVIEW  │   schwarzer Grund, weiße Mono-Versalien,
└──────────────────────┘   letter-spacing .1em, radius 0, ↳-Pfeil voran
```
Sekundär: heller Grund (`#d4cec6`/weiß-transparent), dunkle Schrift.

### Hero (`fg-00`)
- **Vollbild-Foto**, randlos
- Wortmarke klein **mittig oben**
- Tagline **zentriert im unteren Drittel**, Sans, ~4.8rem, weiß
- `↳ GET A QUOTE` oben rechts

### Produkt-Kollektion (`fg-03`) — **versetztes Raster, KEIN gleichmäßiges Grid**
- Bilder in **unterschiedlichen Größen**, treppenartig über die Fläche verteilt
- Kategoriename **groß in Sans, weiß, im Bild** (unten mittig/links)
- Beschreibungstext + Button in einer eigenen Spalte rechts oben
- Viel Creme-Freifläche zwischen den Bildern

### Showroom (`fg-06`)
- Großes Bild mit dunklem Overlay
- Headline links unten, weiß, Sans
- Rechts: `ADDRESS` in Mono-Versalien, darunter Adresse, darunter Button
- Dünne helle Trennlinie horizontal über die volle Breite
- `PLAY`-Button unten rechts

### Referenzen (`fg-08`) — **Zeilen-Liste, KEINE Karten**
```
Orchard House      [FLUID TIMELESS WINDOW] [FLUID TIMELESS DOOR] ...        ↳
─────────────────────────────────────────────────────────────────────────────
Ashmead Barn       [FLUID SLIDING DOOR] [FLUID GLASS BALUSTRADE] ...        ↳
```
- Projektname links, Sans, ~3.2rem
- Produkt-Tags als **Mono-Versalien-Pills** (`border-radius: 2rem`, 1px Rahmen)
- `↳` ganz rechts
- Dünne Trennlinie je Zeile
- Darunter: versetztes Bildpaar in unterschiedlichen Größen

### Testimonials (`fg-10`)
- Kopfzeile: `◆ CLIENT STORIES` (Mono) · `01 / 05` (Mono) · Pfeil-Buttons `←` `→` (eckig)
- Kleines **Schwarzweiß**-Porträt links
- Riesiges Zitat in Sans (~4.8rem), eingeleitet von einem `"`-Zeichen
- Name in Sans, Rolle in **Mono-Versalien**

### Footer (`fg-12`)
- Vollbild-Foto
- **Riesiger Schriftzug als Wasserzeichen** über dem Bild (~19.2rem, halbtransparent)
- Unten links: `©2026, Fluid Glass` + Social-Links
- Unten rechts: Privacy · Terms · Credit

---

## 6. Layout-Prinzipien

1. **Randlos** — Bilder gehen bis an den Viewportrand, kein `max-width`-Container drumherum
2. **Versetzt statt Raster** — Bilder unterschiedlich groß, treppenartig angeordnet
3. **Viel Creme-Freifläche** — großzügige leere Flächen als Gestaltungsmittel
4. **Sans/Mono-Kontrast** — Headlines groß und eng, Labels klein/gesperrt/uppercase
5. **Keine Rundungen** außer bei Pills
6. **Lange Scrollwege** mit ruhigem Rhythmus

---

## 7. Was die aktuelle Beck-Version falsch macht

| Ist | Soll |
|---|---|
| Klassische Nav-Leiste oben | Schwebende dunkle Pill unten mittig |
| Weißer Hintergrund | Creme `#f3f0ec` |
| `rounded-2xl` überall | `border-radius: 0` |
| Gleichmäßiges 4-Spalten-Grid | Versetztes, gestaffeltes Layout |
| Referenzen als Karten | Zeilen-Liste mit Mono-Pills |
| Pill-Buttons mit Sans | Eckige Kästchen, Mono-Versalien, ↳-Pfeil |
| Keine Mono-Schrift | Mono für ALLE Labels/Meta/Buttons |
| Container mit `max-w` | Randlose Bilder |
