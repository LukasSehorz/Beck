import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";

import Nav from "@/components/Nav";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { company } from "@/data/content";
import "./globals.css";

/* Freie Zwillinge für Aeonik Pro / Aeonik Mono (fluid.glass).
   Schibsted Grotesk trifft die geometrisch-humanistische Anmutung mit den
   weiten Rundungen; JetBrains Mono die breite, quadratische Mono.
   Ein späterer Tausch gegen echtes Aeonik läuft allein über diese beiden
   CSS-Variablen — die Komponenten kennen nur --font-sans / --font-mono. */
const sans = Schibsted_Grotesk({
  variable: "--font-beck-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-beck-mono",
  subsets: ["latin"],
  /* 600 trägt die Mono-Ebene (.t-mono). Ohne den echten Schnitt bliebe sie
     wegen `font-synthesis-weight: none` stillschweigend bei 500. */
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} – Fenster, Türen und Sonnenschutz aus Niederaichbach`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "Fenster, Haustüren und Sonnenschutz aus deutscher Fertigung – für Privatkunden und Objektbau. Seit über 20 Jahren von Niederaichbach aus geplant, geliefert und montiert.",
  keywords: [
    "Fenster Niederaichbach",
    "Holz-Aluminium-Fenster",
    "Kunststofffenster",
    "Haustüren",
    "Sonnenschutz",
    "Objektbau Fenster Bayern",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: company.name,
    title: `${company.name} – Fenster, Türen und Sonnenschutz`,
    description:
      "Fenster, Haustüren und Sonnenschutz aus deutscher Fertigung – für Privatkunden und Objektbau in Bayern.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f3f0ec",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${sans.variable} ${mono.variable} antialiased`}>
      <body>
        <a
          href="#inhalt"
          className="t-mono sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-black focus:px-4 focus:py-3 focus:text-cream"
        >
          Zum Inhalt springen
        </a>
        <SmoothScrollProvider>
          {children}
          <Nav />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
