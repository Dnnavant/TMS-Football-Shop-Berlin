"use client";

import nav from "@/data/nav.json";
import { useEffect, useRef, useState } from "react";

type NavItem = { label: string; href: string } | { label: string; children: { label: string; href: string }[] };

export default function Navbar() {
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

  const links = nav.links as NavItem[];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-3">
        {/* Brand */}
        <a href="/" className="text-xl font-extrabold tracking-tight">TMS Footballshop Berlin</a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            if (!("children" in l)) {
              return (
                <a key={(l as any).href} href={(l as any).href} className="text-sm font-medium hover:opacity-80">
                  {(l as any).label}
                </a>
              );
            }
            // Services dropdown (desktop)
            return (
              <div key={(l as any).label} className="relative" ref={servicesRef}>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setServicesOpen((v) => !v); }}
                  onKeyDown={(e) => e.key === "Escape" && setServicesOpen(false)}
                  className="text-sm font-medium hover:opacity-80 inline-flex items-center gap-1"
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                >
                  {(l as any).label}
                  <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-70">
                    <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div role="menu" className="absolute left-0 mt-2 w-56 rounded-xl border bg-white shadow-lg p-1">
                    {(l as any).children?.map((c: any) => (
                      <a key={c.href} href={c.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-gray-100" role="menuitem">
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Sales button (far right) */}
          <a href={nav.sales.href} className="rounded-full px-4 py-2 text-sm font-semibold bg-black text-white hover:opacity-90 shadow">
            {nav.sales.label}
          </a>
        </div>

        {/* Mobile toggler */}
        <button
          className="md:hidden rounded-md border px-3 py-2 text-sm"
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
                return (
                  <a key={(l as any).href} href={(l as any).href} className="block px-2 py-2 rounded-md hover:bg-gray-100">
                    {(l as any).label}
                  </a>
                );
              }
              return <MobileServices key={(l as any).label} item={l as any} />;
            })}
            <a href={nav.sales.href} className="inline-flex w-full justify-center rounded-full px-4 py-2 text-sm font-semibold bg-black text-white hover:opacity-90">
              {nav.sales.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileServices({ item }: { item: { label: string; children: { label: string; href: string }[] } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-md">
      <button className="w-full flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{item.label}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" className={`transition ${open ? "rotate-180" : ""}`}>
          <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
      {open && (
        <div className="ml-2 mt-1 space-y-1">
          {item.children.map((c) => (
            <a key={c.href} href={c.href} className="block px-2 py-2 rounded-md hover:bg-gray-100">
              {c.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
