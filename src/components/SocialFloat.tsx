"use client";
import nav from "@/data/nav.json";

const icons: Record<string, JSX.Element> = {
  instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill="currentColor"/>
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path d="M13 22v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4z" fill="currentColor"/>
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path d="M4 4l7.5 8.5L4 20h3l7.5-7.5L20 20h0l-7.5-8.5L20 4h-3l-6.5 6.5L7 4H4z" fill="currentColor"/>
    </svg>
  )
};

export default function SocialFloat() {
  if (!nav.socials?.length) return null;
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 z-40" aria-label="Social media links">
      {nav.socials.map((s) => (
        <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="grid place-items-center h-10 w-10 rounded-full bg-black text-white shadow hover:opacity-90" aria-label={s.label} title={s.label}>
          {icons[s.icon] ?? <span className="text-xs">{s.label[0]}</span>}
        </a>
      ))}
    </div>
  );
}
