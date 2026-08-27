"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { company, navLinks } from "@/data/content";

/**
 * Navigation nach fluid.glass (siehe .ref/shots/fg-00.png):
 * eine schwebende, rechteckige dunkle Leiste unten mittig — Logo, aktueller
 * Seitenname in Mono-Versalien, Burger. Keine klassische Kopfleiste.
 * Das Menü öffnet als vollflächiges Overlay.
 */
export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const current =
    navLinks.find((l) => l.href === pathname)?.label ??
    // Unterseiten der Hersteller erben den Namen ihres Bereichs
    navLinks.find((l) => l.href !== "/" && pathname.startsWith(l.href))?.label ??
    "Startseite";

  // Das Overlay schließt beim Klick auf einen Link (siehe onClick unten) –
  // bewusst kein Effekt auf `pathname`, der würde eine Kaskadenrenderung
  // auslösen.

  // Solange das Overlay offen ist, darf der Hintergrund nicht scrollen
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* ---- Overlay-Menü ---- */}
      <div
        id="hauptmenue"
        hidden={!open}
        className="on-dark fixed inset-0 z-[60] bg-black text-cream"
      >
        <nav
          aria-label="Hauptmenü"
          className="flex h-full flex-col justify-center px-[var(--gutter)] pb-[7rem] pt-24"
        >
          <ul className="mx-auto w-full max-w-[80rem]">
            {navLinks.map((link, i) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href} className="border-t border-white/15">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-[1.5em] py-[0.55em] transition-opacity duration-300 hover:opacity-55"
                  >
                    <span className="t-mono w-[2.5em] shrink-0 text-cream/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="t-h1">{link.label}</span>
                    {active && (
                      <span className="t-mono text-cream/70">— hier</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mx-auto mt-16 flex w-full max-w-[80rem] flex-wrap gap-x-12 gap-y-4">
            <a href={company.phoneHref} className="t-mono hover:opacity-55">
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="t-mono hover:opacity-55"
            >
              {company.email}
            </a>
          </div>
        </nav>
      </div>

      {/* ---- Schwebende Leiste unten mittig ---- */}
      <div className="pointer-events-none fixed inset-x-0 bottom-[var(--pill-gap)] z-[70] flex justify-center px-[var(--gutter)]">
        <div className="pointer-events-auto flex h-[var(--pill-h)] items-stretch bg-grey/85 backdrop-blur-md">
          {/* Die Leiste ist gegen fluid.glass auf 248 × 45 px eingestellt.
              Statt des vollen Lockups steht hier nur die „beck"-Wortmarke
              (aus beck-logo.png freigestellt): Bei 45 px Pillhöhe war die
              Unterzeile „FENSTER & TÜREN" unlesbar und drückte die
              Buchstaben auf 8 px. Ohne sie tragen dieselben 60 px Breite eine
              10 px hohe Wortmarke. */}
          <Link
            href="/"
            aria-label={`${company.shortName} — zur Startseite`}
            className="flex items-center pl-3.5 pr-2.5 transition-opacity duration-300 hover:opacity-60"
          >
            <Image
              src="/logos/beck-wortmarke.png"
              alt=""
              width={340}
              height={56}
              sizes="65px"
              className="h-[10px] w-auto brightness-0 invert"
            />
          </Link>

          {/* min-w als Untergrenze für kurze Seitennamen; längere („Partner &
              Produkte") dürfen die Leiste breiter machen. */}
          <span className="t-mono flex min-w-[7.5rem] items-center justify-center px-4 text-white">
            {current}
          </span>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="hauptmenue"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="group flex w-11 items-center justify-center transition-opacity duration-300 hover:opacity-60"
          >
            <span className="relative block h-[0.85rem] w-5">
              <span
                className={`absolute left-0 block h-px w-full bg-white transition-all duration-300 ${
                  open ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 bg-white transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-white transition-all duration-300 ${
                  open ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
