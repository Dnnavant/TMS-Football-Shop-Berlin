import sales from "@/data/sales.json";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PromoSpotlight() {
  const { t } = useLanguage();
  if (!sales.promos?.length) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold">{t.promo.title}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {sales.promos.map((p, i) => (
          <a
            key={i}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border bg-white p-6 shadow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/10 via-transparent to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-blue">Featured</div>
              <div className="mt-1 text-xl font-extrabold">{p.title}</div>
              {"badge" in p && (p as any).badge && (
                <span className="mt-2 inline-flex items-center rounded-full bg-brand-blue/10 px-2.5 py-1 text-xs font-semibold text-brand-blue">
                  {(p as any).badge}
                </span>
              )}
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-red text-shadow-right">
                {p.cta}
                <span aria-hidden>→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
