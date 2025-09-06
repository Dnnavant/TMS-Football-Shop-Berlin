import nav from "@/data/nav.json";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-800 to-black opacity-80" />
      <img
        src="https://images.unsplash.com/photo-1513171920216-2640b288471b?q=80&w=2000&auto=format&fit=crop"
        alt="American Football gear background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-28 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Gear up for the Season.</h1>
        <p className="mt-4 max-w-xl text-lg md:text-xl opacity-90">
          Pro Ausrüstung, Service & Beratung — schnell, sicher, zuverlässig.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a href={nav.shop.href} className="rounded-full bg-white text-black px-5 py-3 font-semibold hover:opacity-90">
            Zum Shop
          </a>
          <a href="/#service-reconditioning" className="rounded-full border border-white px-5 py-3 font-semibold hover:bg-white/10">
            Services ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
