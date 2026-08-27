# Strukturkorrektur — Startseite exakt wie fluid.glass

**Diese Datei überschreibt die Sektionsreihenfolge in `DESIGN-SYSTEM.md`.**
Grundlage: die 35 Referenz-Screenshots in `.ref/shots/fg-00.png` … `fg-34.png`,
Frame für Frame durchgesehen. Der Kunde hat die aktuelle Umsetzung als
strukturell falsch zurückgewiesen.

---

## 1. Was aktuell falsch ist

| Ist (falsch) | Soll (fluid.glass) |
|---|---|
| Hero trägt Linie + „◆ WAS WIR TUN" + Textspalte **im ersten Viewport** | Hero zeigt **nur** Riesen-Tagline, Wortmarke oben, CTA oben rechts, Nav-Pill unten |
| Scroll-Zoom-Video direkt nach dem Hero (Position 2) | Der Zoom sitzt bei der **Ausstellung/Showroom**, ca. 60 % der Seite |
| Ausstellung als statisches Vollbild | Ausstellung **ist** die Zoom-Sektion |
| Hero-Standbild (Innenhof mit Kindern) | Hero ist ein **Video**, Fenster/Glas im Vordergrund |

---

## 2. Verbindliche Reihenfolge

```
1  HERO                    Vollbild-Video, nur Tagline + Wortmarke + CTA + Pill
2  SPEZIALISTEN            Linie + ◆-Label + Textspalte rechts, über zweitem Vollbild
3  ÜBER BECK               Creme, zentriert: ◆-Label, Riesen-Headline, Button
4  PRODUKTE                ◆-Label, Intro+Button rechts, versetzte Bildkaskade
5  AUSSTELLUNG  ← ZOOM     dunkel; Bild wächst beim Scrollen von eingefasst auf randlos
6  REFERENZEN              Creme; ◆-Label links + Headline rechts + Button; Zeilenliste
7  KENNZAHLEN & PARTNER    (ersetzt fluid.glass-Testimonials — Beck hat keine Kundenstimmen)
8  CTA                     zentriert, große Headline, zwei Buttons
9  FOOTER                  Vollbild-Bild + Riesen-Wasserzeichen
```

---

## 3. Sektion 1 — Hero (`fg-00.png`)

Der erste Viewport enthält **ausschließlich**:

- **Wortmarke** klein, mittig oben („Beck Fenster")
- **`↳ ANGEBOT ANFORDERN`** oben rechts, Mono-Versalien, gesperrt
- **Riesen-Tagline** zentriert, im **unteren Drittel** (nicht vertikal mittig!),
  weiß, ~2 Zeilen
- **Nav-Pill** unten mittig
- Optional ganz unten links: `SCROLLEN ZUM ENTDECKEN` in Mono

**Nicht im Hero:** keine Linie, kein ◆-Label, keine Textspalte, keine Fließtexte.

### Hero-Video
`/video/hero-glass-forest.mp4` (13,8 s, 5,7 MB, 1920 px)
Poster: `/img/poster-hero-glass-forest.jpg`

Dunkler Innenraum mit bodentiefen, schwarz gerahmten Glaselementen, Blick in
bewaldetes Grün, wanderndes Blattlicht. Bewusst stark verlangsamt — wirkt wie
ein leicht belebtes Standbild, genau wie das Hero bei fluid.glass.
Einbindung: `autoplay muted loop playsInline preload="metadata"` + Poster,
`object-cover`, darüber ein Verlauf für die Textlesbarkeit.

## 4. Sektion 2 — Spezialisten (`fg-01.png`)

Kommt **erst beim Weiterscrollen**, über einem zweiten randlosen Bild:

- dünne helle Linie über die volle Breite
- links darunter: `◆ WAS WIR TUN` (Mono-Versalien)
- rechts: Textspalte, rechtsbündig, max. ~46 Zeichen Zeilenlänge

Bild: ein Beck-Referenzfoto mit Fensterbezug (z. B. `Wagnis_West_1319`).

## 5. Sektion 5 — Ausstellung **mit Scroll-Zoom** (`fg-05.png` → `fg-07.png`)

Das ist der Signature-Move, und er gehört **hierher**:

1. **Start:** dunkler Grund (`#0b1012`), das Video/Bild sitzt **eingefasst**
   in der Mitte — bei 1440 px ca. 845 px breit, mit sichtbarem dunklem Rand
   ringsum. Headline links im Bild, `ADRESSE` + Adresse + Button rechts
   **außerhalb** des Bildes auf dem dunklen Grund.
2. **Beim Scrollen:** das Bild wächst per ScrollTrigger (`scrub`, gepinnt) auf
   **volle Viewportbreite und -höhe**, Radius bleibt 0.
3. **Ende:** randlos formatfüllend, danach übernimmt die Creme-Sektion
   „Referenzen".

Headline und Adressblock bleiben währenddessen stehen — nur die Bildfläche
wächst.

Material: `hero-window-vista.mp4` (Panoramafenster, bereits vorhanden) oder
ein Ausstellungsfoto `showroom-19.jpg`. Video ist näher am Original, weil
fluid.glass dort einen `PLAY`-Button zeigt.

## 6. Sektion 6 — Referenzen (`fg-07.png`, `fg-08.png`)

Kopfzeile anders als aktuell umgesetzt:
- `◆ FEATURED PROJECTS` klein **links**
- die große Headline **rechts daneben** (nicht links)
- Button `↳ ALLE PROJEKTE` unter der Headline

Darunter die Zeilenliste (Name links, Mono-Pills mittig, `↳` rechts) — die ist
bereits richtig. Danach das versetzte Bildpaar.

---

## 7. Unverändert gültig

Farben, Typo-Skala, `border-radius: 0`, Mono/Sans-Kontrast, Buttons mit
`↳`-Pfeil, Nav-Pill, Footer-Wasserzeichen und alle Inhaltsregeln aus
`DESIGN-SYSTEM.md`, `SEITENSTRUKTUR.md` und `BRIEFING.md` bleiben bestehen.
Die Unterseiten sind fertig und werden **nicht** angefasst.
