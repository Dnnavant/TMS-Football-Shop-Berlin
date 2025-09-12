"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-2xl font-extrabold">TMS Footballshop Berlin</div>
          <p className="mt-3 text-sm text-white/70">
            {t.services.consulting.description}
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold tracking-wide uppercase text-white/70">Links</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">{t.nav.home}</Link></li>
            <li><a href="https://shop.tms-footballshop-berlin.de" target="_blank" rel="noopener noreferrer" className="hover:underline">{t.nav.shop}</a></li>
            <li><Link href="/#service-ozone" className="hover:underline">{t.services.ozone.title}</Link></li>
            <li><Link href="/#service-reconditioning" className="hover:underline">{t.services.reconditioning.title}</Link></li>
            <li><Link href="/#service-consulting" className="hover:underline">{t.services.consulting.title}</Link></li>
            <li><Link href="/#contact" className="hover:underline">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold tracking-wide uppercase text-white/70">Kontakt</div>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>Beckerstraße 25, 12157 Berlin</li>
            <li><a href="tel:+493085506915" className="hover:underline">+49 (0) 30 / 855 06 915</a></li>
            <li><a href="mailto:info@tms-footballshop-berlin.de" className="hover:underline">info@tms-footballshop-berlin.de</a></li>
          </ul>
          <div className="mt-4 text-xs text-white/60">
            <div>{t.openingHours.monday} {t.openingHours.closed}</div>
            <div>{t.openingHours.tuesday} {t.openingHours.hours}</div>
            <div>{t.openingHours.saturday} {t.openingHours.saturdayHours}</div>
            <div>{t.openingHours.sunday} {t.openingHours.closed}</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/60 flex items-center justify-between">
          <div>© {year} TMS Footballshop Berlin</div>
          <div className="space-x-4">
            <a href="https://instagram.com/tmsfootballshop_berlin" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

