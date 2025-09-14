"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ConsultingSection() {
  const { t } = useLanguage();
  const highlights = (t.services.consulting as any).highlights as string[] | undefined;

  return (
    <section id="service-consulting" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{t.services.consulting.title}</h2>
            <p className="mt-4 text-gray-600">{t.services.consulting.description}</p>
            {Array.isArray(highlights) && highlights.length > 0 && (
              <ul className="mt-6 space-y-3">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white text-xs">✓</span>
                    <span className="text-gray-800">{h}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 font-semibold text-white text-shadow-right shadow hover:shadow-lg hover:-translate-y-0.5 transition hover:bg-[#991b22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
                {(t.services.consulting as any).cta ?? "Beratung anfragen"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-90">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 rounded-2xl border bg-gray-50 p-6">
            {/* Helmet Test Results button card */}
            <a
              href="https://static.www.nfl.com/image/upload/t_portrait_tablet_desktop_2x/f_png/league/haupruqsfk8kdkwptov3.png"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mb-4 block overflow-hidden rounded-xl border bg-white shadow hover:shadow-lg transition"
              aria-label={t.services.consulting?.helmetTests ?? "Helmet test results"}
            >
              <Image
                src="https://static.www.nfl.com/image/upload/t_portrait_tablet_desktop_2x/f_png/league/haupruqsfk8kdkwptov3.png"
                alt={t.services.consulting?.helmetTests ?? "Helmet test results"}
                width={1200}
                height={800}
                className="h-48 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white px-4 py-2 text-sm font-semibold">
                {t.services.consulting?.helmetTests ?? "Helmet test results"}
              </div>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4 shadow">
                <div className="text-sm font-semibold text-gray-500">Sizing</div>
                <div className="mt-1 text-lg font-bold">Fit & Comfort</div>
                <p className="mt-2 text-sm text-gray-600">Helmet and pad fitting for players and teams.</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow">
                <div className="text-sm font-semibold text-gray-500">Teams</div>
                <div className="mt-1 text-lg font-bold">Outfitting</div>
                <p className="mt-2 text-sm text-gray-600">Team packages, bulk orders and equipment planning.</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow">
                <div className="text-sm font-semibold text-gray-500">Safety</div>
                <div className="mt-1 text-lg font-bold">Education</div>
                <p className="mt-2 text-sm text-gray-600">Best practices for equipment care and safety checks.</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow">
                <div className="text-sm font-semibold text-gray-500">Customization</div>
                <div className="mt-1 text-lg font-bold">Look & Style</div>
                <p className="mt-2 text-sm text-gray-600">Visors, decals, pads and accessories guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
