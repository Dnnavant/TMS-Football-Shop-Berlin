"use client";

/*
  Navbar component
  ----------------
  - Layout: 3-column grid (brand | links | utilities)
  - Desktop: centered primary links with Services dropdown
  - Mobile: hamburger toggle with collapsible list
  - A11y: keyboard support (Escape to close), aria attributes, visible focus states
  - Styling: Tailwind + small custom utilities (see globals.css for text shadow)
*/

import nav from "@/data/nav.json";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

// A plain navigation link (no submenu)
type SimpleLink = { label: string; href: string };
// A link used inside the Services submenu
type ServiceChild = { label: string; href: string };
// A navigation item that renders a dropdown with child links
type ServicesLink = { label: string; children: ServiceChild[] };
// All supported navigation item shapes
type NavItem = SimpleLink | ServicesLink;

// Top-level site navigation
export default function Navbar() {
  const { t } = useLanguage();
  // Mobile menu visibility
  const [open, setOpen] = useState(false);
  // Desktop Services dropdown visibility
  const [servicesOpen, setServicesOpen] = useState(false);
  // Ref used to detect outside clicks for the Services dropdown
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close Services dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  // Create translated navigation links (labels come from i18n)
  const links: NavItem[] = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.shop, href: nav.shop.href },
    {
      label: t.nav.services,
      children: [
        { label: t.services.ozone.title, href: "/#service-ozone" },
        { label: t.services.consulting.title, href: "/#service-consulting" },
        { label: t.services.reconditioning.title, href: "/#service-reconditioning" }
      ]
    },
    { label: t.nav.gallery, href: "/#gallery" },
    { label: t.nav.contact, href: "/#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      {/* Grid: [brand | primary links | utilities] */}
      <nav className="mx-auto max-w-6xl p-3 grid grid-cols-[auto,1fr,auto] items-center gap-6 md:gap-10">
        {/* Brand: clickable logo takes you home */}
        <Link href="/" className="flex items-center justify-self-start" aria-label="TMS Footballshop Berlin">
          <Image
            src="/TMS LOGO.svg"
            alt="TMS Football Shop Berlin"
            width={400}
            height={112}
            priority
            className="h-20 md:h-24 w-auto drop-shadow-xl"
          />
        </Link>

        {/* Desktop nav: centered primary links */}
        <div className="hidden md:flex items-center gap-6 justify-self-center">
          {links.map((l) => {
            if (!("children" in l)) {
              const item = l as SimpleLink;
              const isExternal = item.href.startsWith("http");
              const baseHover = "text-2xl font-bold text-shadow-right inline-block relative transition-transform duration-150 hover:scale-105 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all after:duration-200 hover:after:w-full";
              return isExternal ? (
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={baseHover}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className={baseHover}>
                  {item.label}
                </Link>
              );
            }
            const item = l as ServicesLink;
            // Services dropdown (desktop): toggled by button, closes on outside click or Escape
            return (
              <div key={item.label} className="relative" ref={servicesRef}>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setServicesOpen((v) => !v); }}
                  onKeyDown={(e) => e.key === "Escape" && setServicesOpen(false)}
                  className="text-2xl font-bold text-shadow-right hover:opacity-80 inline-flex items-center gap-1 transition-transform duration-150 hover:scale-105"
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                >
                  {item.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-70">
                    <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div id="services-menu" role="menu" className="absolute left-0 mt-2 w-72 rounded-xl border bg-white shadow-lg p-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-lg px-3 py-2 text-2xl font-bold text-shadow-right relative transition-transform duration-150 hover:scale-105 hover:bg-gray-100 after:absolute after:left-3 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-blue after:transition-all after:duration-200 hover:after:w-[calc(100%-1.5rem)]"
                        role="menuitem"
                        tabIndex={0}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop utilities: language selector + Sales CTA */}
        <div className="hidden md:flex items-center gap-4 justify-self-end">
          <LanguageSelector />
          <a href={nav.sales.href} target="_blank" rel="noopener noreferrer" className="rounded-full px-5 py-2.5 text-2xl font-semibold text-shadow-right bg-brand-red text-white shadow transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#991b22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
            {t.nav.sales}
          </a>
        </div>

        {/* Mobile toggler button */}
        <button
          className="md:hidden rounded-md border px-4 py-2 text-2xl justify-self-end"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>

      {/* Mobile menu: mirrors the desktop links, plus utilities below */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl p-3 space-y-2">
            {links.map((l) => {
              if (!("children" in l)) {
                const item = l as SimpleLink;
                const isExternal = item.href.startsWith("http");
                return isExternal ? (
                  <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="block px-2 py-2 rounded-md hover:bg-gray-100 text-2xl transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.href} href={item.href} className="block px-2 py-2 rounded-md hover:bg-gray-100 text-2xl transition-colors">
                    {item.label}
                  </Link>
                );
              }
              const item = l as ServicesLink;
              return <MobileServices key={item.label} item={item} />;
            })}
            <div className="space-y-3">
              <LanguageSelector />
              <a href={nav.sales.href} target="_blank" rel="noopener noreferrer" className="inline-flex w-full justify-center rounded-full px-5 py-2.5 text-2xl font-semibold text-shadow-right bg-black text-white hover:opacity-90">
                {t.nav.sales}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// Collapsible Services group used inside the mobile menu
function MobileServices({ item }: { item: ServicesLink }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-md">
      <button className="w-full flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100 text-base" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{item.label}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" className={`transition ${open ? "rotate-180" : ""}`}>
          <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
      {open && (
        <div className="ml-2 mt-1 space-y-1">
          {item.children.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="block px-2 py-2 rounded-md hover:bg-gray-100 text-2xl font-bold text-shadow-right transition-transform duration-150 hover:scale-105"
            >
              {c.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
