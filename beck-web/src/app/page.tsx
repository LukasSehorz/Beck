import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProcessCarousel from "@/components/ProcessCarousel";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import Showroom from "@/components/Showroom";
import Stats from "@/components/Stats";
import Team from "@/components/Team";

/**
 * Sektionsfolge exakt nach ../_assets/HERO-KORREKTUR.md §2:
 * Hero (190svh, Video, zwei Textebenen — Tagline + Was wir tun) → Über Beck →
 * Produkte → Ausstellung (trägt den Scroll-Zoom) → Ablauf → Referenzen →
 * Kennzahlen & Partner → Team → CTA → Footer.
 *
 * Auf den Hero folgt bewusst **kein** zweites Vollbild, sondern der ruhige
 * Textblock auf Creme (fg-02.png). Der frühere „Spezialisten"-Block ist in den
 * zweiten Viewport des Heros gewandert.
 */
export default function Home() {
  return (
    <>
      <main id="inhalt">
        <Hero />
        <About />
        <Products />
        <Showroom />
        <ProcessCarousel />
        <Projects />
        <Stats />
        <Team />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
