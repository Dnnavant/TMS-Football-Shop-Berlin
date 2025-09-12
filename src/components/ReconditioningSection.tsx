"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ReconditioningSection() {
  const { t } = useLanguage();
  const highlights = (t.services.reconditioning as any).highlights as string[] | undefined;

  return (
    <section id="service-reconditioning" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{t.services.reconditioning.title}</h2>
            <p className="mt-4 text-gray-600">{t.services.reconditioning.description}</p>
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
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 font-semibold text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition hover:bg-[#991b22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
                {(t.services.reconditioning as any).cta ?? "Service anfragen"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-90">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border bg-gray-50 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4 shadow">
                <div className="text-sm font-semibold text-gray-500">Inspection</div>
                <div className="mt-1 text-lg font-bold">Safety Check</div>
                <p className="mt-2 text-sm text-gray-600">Helmet shell, padding, facemask and hardware review.</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow">
                <div className="text-sm font-semibold text-gray-500">Refurbish</div>
                <div className="mt-1 text-lg font-bold">Repair & Replace</div>
                <p className="mt-2 text-sm text-gray-600">Padding refresh, strap/hardware replacement and adjustments.</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow">
                <div className="text-sm font-semibold text-gray-500">Finish</div>
                <div className="mt-1 text-lg font-bold">Painting</div>
                <p className="mt-2 text-sm text-gray-600">Manufacturer‑grade coatings and team color matching.</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow">
                <div className="text-sm font-semibold text-gray-500">Compliance</div>
                <div className="mt-1 text-lg font-bold">Certification</div>
                <p className="mt-2 text-sm text-gray-600">Meets safety guidelines for extended equipment lifecycle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
