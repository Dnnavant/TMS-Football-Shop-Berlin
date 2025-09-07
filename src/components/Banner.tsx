"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import bannerData from "@/data/banner.json";
import { useLanguage } from "@/contexts/LanguageContext";

type Advertisement = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryButton: {
    text: string;
    href: string;
    style: "primary" | "secondary";
  };
  secondaryButton: {
    text: string;
    href: string;
    style: "primary" | "secondary";
  };
};

export default function Banner() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Create advertisements with translations
  const advertisements = useMemo(() => [
    {
      id: "helmets-sale",
      title: t.banner.helmets_sale.title,
      subtitle: t.banner.helmets_sale.subtitle,
      description: t.banner.helmets_sale.description,
      image: "https://images.unsplash.com/photo-1513171920216-2640b288471b?q=80&w=2000&auto=format&fit=crop",
      primaryButton: {
        text: t.banner.helmets_sale.primaryButton,
        href: "https://shop.tms-footballshop-berlin.de/collections/helmets",
        style: "primary" as const
      },
      secondaryButton: {
        text: t.banner.helmets_sale.secondaryButton,
        href: "https://shop.tms-footballshop-berlin.de/collections/sale",
        style: "secondary" as const
      }
    },
    {
      id: "shoulder-pads",
      title: t.banner.shoulder_pads.title,
      subtitle: t.banner.shoulder_pads.subtitle,
      description: t.banner.shoulder_pads.description,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000&auto=format&fit=crop",
      primaryButton: {
        text: t.banner.shoulder_pads.primaryButton,
        href: "https://shop.tms-footballshop-berlin.de/collections/shoulder-pads",
        style: "primary" as const
      },
      secondaryButton: {
        text: t.banner.shoulder_pads.secondaryButton,
        href: "/#service-consulting",
        style: "secondary" as const
      }
    },
    {
      id: "reconditioning",
      title: t.banner.reconditioning.title,
      subtitle: t.banner.reconditioning.subtitle,
      description: t.banner.reconditioning.description,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2000&auto=format&fit=crop",
      primaryButton: {
        text: t.banner.reconditioning.primaryButton,
        href: "/#service-reconditioning",
        style: "primary" as const
      },
      secondaryButton: {
        text: t.banner.reconditioning.secondaryButton,
        href: "/#service-ozone",
        style: "secondary" as const
      }
    }
  ] as Advertisement[], [t]);

  useEffect(() => {
    if (!bannerData.autoRotate) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % advertisements.length);
    }, bannerData.rotationInterval);
    return () => clearInterval(interval);
  }, [advertisements.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentAd = advertisements[currentIndex];

  return (
    <section className="relative overflow-hidden h-[50vh]">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-800 to-black opacity-70" />
      <Image
        src={currentAd.image}
        alt={currentAd.title}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover transition-opacity duration-1000"
      />
      
      <div className="relative mx-auto max-w-6xl px-4 py-8 text-white h-full flex flex-col justify-center">
        <div className="max-w-2xl bg-black/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10">
          <div className="text-sm font-medium text-white mb-2">
            {currentAd.subtitle}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {currentAd.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            {currentAd.description}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={currentAd.primaryButton.href}
              target={currentAd.primaryButton.href.startsWith('http') ? "_blank" : undefined}
              rel={currentAd.primaryButton.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                currentAd.primaryButton.style === "primary"
                  ? "bg-white text-black hover:bg-white/90"
                  : "border-2 border-white text-white hover:bg-white/20"
              }`}
            >
              {currentAd.primaryButton.text}
            </a>
            <a
              href={currentAd.secondaryButton.href}
              target={currentAd.secondaryButton.href.startsWith('http') ? "_blank" : undefined}
              rel={currentAd.secondaryButton.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                currentAd.secondaryButton.style === "primary"
                  ? "bg-white text-black hover:bg-white/90"
                  : "border-2 border-white text-white hover:bg-white/20"
              }`}
            >
              {currentAd.secondaryButton.text}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {advertisements.map((ad, index) => (
          <button
            key={ad.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => goToSlide((currentIndex - 1 + advertisements.length) % advertisements.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
        aria-label="Previous slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentIndex + 1) % advertisements.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
        aria-label="Next slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </section>
  );
}
