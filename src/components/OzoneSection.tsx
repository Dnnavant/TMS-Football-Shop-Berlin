"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function OzoneSection() {
  const { t } = useLanguage();
  const highlights = t.services.ozone.highlights as unknown as string[];

  return (
    <section id="service-ozone" className="relative overflow-hidden min-h-screen">
      {/* Background image */}
      <Image
        src="/Ozone-Machine.png"
        alt="Clean sports equipment background"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-24 text-white min-h-screen flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t.services.ozone.title}</h2>
          <p className="mt-4 text-lg text-white/90">{t.services.ozone.description}</p>
        </div>

        {Array.isArray(highlights) && highlights.length > 0 && (
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-3xl w-full">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-white/10 backdrop-blur rounded-xl p-3 text-left">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white text-xs">✓</span>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Before / After */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <div className="absolute top-3 left-3 z-10 rounded-full bg-red-600/90 text-white text-xs font-semibold px-3 py-1">Before</div>
            <Image
              src="/ozone-before.png"
              alt="Football equipment before cleaning"
              width={800}
              height={500}
              className="h-64 md:h-80 w-full object-cover"
              priority
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <div className="absolute top-3 left-3 z-10 rounded-full bg-emerald-600/90 text-white text-xs font-semibold px-3 py-1">After</div>
            <Image
              src="https://images.unsplash.com/photo-1529369623227-8ee8a794ecf8?q=80&w=1600&auto=format&fit=crop"
              alt="Football equipment after cleaning"
              width={800}
              height={500}
              className="h-64 md:h-80 w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10">
          <a
            href="https://www.o-zone-powercleaning.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black hover:bg-white/90"
          >
            {t.services.ozone.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-90">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
