import sales from "@/data/sales.json";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PromoSpotlight() {
  const { t } = useLanguage();
  if (!sales.promos?.length) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold">{t.promo.title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {sales.promos.map((p, i) => (
          <a key={i} href={p.href} className="group rounded-2xl border p-5 hover:shadow-lg transition">
            <div className="text-lg font-semibold">{p.title}</div>
            <div className="mt-2 inline-flex items-center gap-1 text-sm font-medium underline group-hover:no-underline">
              {p.cta} →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
