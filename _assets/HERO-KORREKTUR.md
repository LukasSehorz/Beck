# Korrekturrunde 2 — Hero-Format, zweite Sektion, Zoom-Stil

**Überschreibt die betroffenen Punkte in `STRUKTUR-KORREKTUR.md`.**
Grundlage: direkter Vergleich der Hero-Screenshots beider Seiten durch den Kunden.

---

## 1. Hero ist höher als ein Viewport — das Video trägt zwei Bildschirmseiten

**Das ist der Kernpunkt.** Bei fluid.glass endet der Hero nicht am unteren
Viewportrand. Man scrollt weiter, **das Video läuft weiter**, und erst im
zweiten Viewport erscheinen über demselben Video die Info-Zeile
(`◆ GLAZING SPECIALISTS`) und der Textabsatz.

Belege: `.ref/shots/hero/still-0.png` (erster Viewport: nur Tagline) und
`.ref/shots/fg-01.png` (weitergescrollt: Linie + ◆-Label + Textspalte,
**dasselbe Bildmotiv**, dieselben Gräser, dieselbe Fassade).

### Soll
```
┌─ Hero-Sektion, ca. 190svh hoch ───────────────────────┐
│  Video liegt sticky/fixiert dahinter, füllt immer     │
│  den ganzen Viewport                                  │
│                                                       │
│  Viewport 1:  Wortmarke oben · ↳ CTA oben rechts      │
│               Riesen-Tagline zentriert unteres Drittel│
│               „Scrollen zum Entdecken" unten links    │
│                                                       │
│  Viewport 2:  dünne helle Linie über volle Breite     │
│               ◆ WAS WIR TUN  links                    │
│               Textspalte rechts (~272 px)             │
└───────────────────────────────────────────────────────┘
```

Technisch: Hero-`<section>` auf ~190svh, darin das Video in einem
`sticky top-0 h-[100svh]`-Container (oder `position: fixed` mit Clipping),
darüber zwei Textebenen, die je einen Viewport hoch sind. Kein zweites Bild,
kein zweites Video — **ein durchgehendes Motiv**.

Die bisherige eigenständige Komponente `Specialists.tsx` entfällt damit; ihr
Inhalt (`content.ts` → `specialists.eyebrow` / `specialists.body`) wandert in
den zweiten Viewport des Heros. Das Bild `specialists.image` wird nicht mehr
gebraucht.

---

## 2. Zweite Sektion ist Text auf Creme — kein Vollbild

Direkt nach dem Hero folgt bei fluid.glass **kein weiteres Bild**, sondern der
ruhige Textblock auf der Grundfarbe (`fg-02.png`):

```
              ◆ ABOUT FLUID GLASS
   We bring architecture to life through
   craft and innovation. Trusted by
   architects who demand precision,
   beauty, and care.
              [↳ WHO WE ARE]
```

Zentriert, Creme-Hintergrund `#f3f0ec`, Label → Headline → Button, kein
Fließtext, kein Bild. Das ist bei uns bereits die `About`-Komponente und
inhaltlich korrekt — sie muss nur **direkt auf den Hero folgen**.

### Neue Sektionsfolge der Startseite
```
1  HERO (190svh, Video, 2 Textebenen — Tagline + Was-wir-tun)
2  ÜBER BECK        Creme, zentriert, Label → Headline → Button
3  PRODUKTE         versetzte Bildkaskade
4  AUSSTELLUNG      Scroll-Zoom (siehe Punkt 3)
5  REFERENZEN       Zeilenliste
6  KENNZAHLEN & PARTNER
7  TEAM
8  CTA
9  FOOTER           Vollbild + Wasserzeichen
```

---

## 3. Zoom-Sektion: Stil und Material

Der Ablauf (Bild wächst von eingefasst auf randlos, Text bleibt stehen) ist
bereits korrekt umgesetzt und **gemessen deckungsgleich** mit der Vorlage —
Mechanik nicht anfassen.

Geändert wird nur das **Material**. Die Vorlage zeigt dort einen dunklen,
ruhigen Innenraum mit Glaselementen (`fg-05.png`); unser bisheriges
Panoramafenster-Video mit Berglandschaft ist zu hell und zu bunt dafür.

**Neu:** `/video/zoom-glasraum.mp4` (11,8 s, 1920 px, 5,4 MB)
Poster: `/img/poster-zoom-glasraum.jpg`
Dunkler Innenraum, schwarz gerahmte bodentiefe Glaselemente, Holzdecke, Blick
ins Grüne, ruhige langsame Kamera. Trifft die dunkle, architektonische
Anmutung der Vorlage.

Die Abdunklung kann dadurch schwächer ausfallen als bisher (`bg-black/55`) —
das Material ist von sich aus dunkel. Bitte am Screenshot prüfen und so weit
zurücknehmen, dass der Raum sichtbar bleibt, der Text aber trägt.

---

## 4. Materialregel

Nur **zwei** Motive dürfen Fremdmaterial sein:
- das Hero-Video
- das Video der Zoom-Sektion

Alles andere — Produkte, Referenzen, Ausstellung, Team, CTA, Footer — bleibt
bei Beck-Bildern.

---

## 5. Unverändert gültig

Farben, Typo-Skala (`.t-h1` 57,6 px bei 1440), `border-radius: 0`,
Mono/Sans-Kontrast, Buttons mit `↳`, Nav-Pill (249 × 45), Footer mit
Wasserzeichen, alle Unterseiten und sämtliche Inhaltsregeln aus
`DESIGN-SYSTEM.md`, `SEITENSTRUKTUR.md` und `BRIEFING.md`.
