"use client";

import nav from "@/data/nav.json";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

type SimpleLink = { label: string; href: string };
type ServiceChild = { label: string; href: string };
type ServicesLink = { label: string; children: ServiceChild[] };
type NavItem = SimpleLink | ServicesLink;

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  // Create translated navigation links
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
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-3">
        {/* Brand */}
        <Link href="/" className="flex items-center" aria-label="TMS Footballshop Berlin">
          <Image
            src="/TMS LOGO.svg"
            alt="TMS Footballshop Berlin"
            width={200}
            height={56}
            priority
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            if (!("children" in l)) {
              const item = l as SimpleLink;
              const isExternal = item.href.startsWith("http");
              const baseHover = "text-base font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-200 hover:after:w-full";
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
            // Services dropdown (desktop)
            return (
              <div key={item.label} className="relative" ref={servicesRef}>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setServicesOpen((v) => !v); }}
                  onKeyDown={(e) => e.key === "Escape" && setServicesOpen(false)}
                  className="text-base font-medium hover:opacity-80 inline-flex items-center gap-1"
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
                  <div id="services-menu" role="menu" className="absolute left-0 mt-2 w-56 rounded-xl border bg-white shadow-lg p-1">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-gray-100 transition-colors duration-150 hover:translate-x-0.5" role="menuitem" tabIndex={0}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Language selector and Sales button */}
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <a href={nav.sales.href} target="_blank" rel="noopener noreferrer" className="rounded-full px-4 py-2 text-base font-semibold bg-black text-white shadow transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-lg">
              {t.nav.sales}
            </a>
          </div>
        </div>

        {/* Mobile toggler */}
        <button
          className="md:hidden rounded-md border px-3 py-2 text-base"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl p-3 space-y-2">
            {links.map((l) => {
              if (!("children" in l)) {
                const item = l as SimpleLink;
                const isExternal = item.href.startsWith("http");
                return isExternal ? (
                  <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="block px-2 py-2 rounded-md hover:bg-gray-100 text-base transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.href} href={item.href} className="block px-2 py-2 rounded-md hover:bg-gray-100 text-base transition-colors">
                    {item.label}
                  </Link>
                );
              }
              const item = l as ServicesLink;
              return <MobileServices key={item.label} item={item} />;
            })}
            <div className="space-y-3">
              <LanguageSelector />
              <a href={nav.sales.href} target="_blank" rel="noopener noreferrer" className="inline-flex w-full justify-center rounded-full px-4 py-2 text-base font-semibold bg-black text-white hover:opacity-90">
                {t.nav.sales}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

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
            <a key={c.href} href={c.href} className="block px-2 py-2 rounded-md hover:bg-gray-100 text-base">
              {c.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
