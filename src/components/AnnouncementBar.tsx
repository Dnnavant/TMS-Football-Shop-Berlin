"use client";

import { useState, useEffect } from "react";
import sales from "@/data/sales.json";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AnnouncementBar() {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  
  // Advertisement data for rotation
  const advertisements = [
    {
      id: "helmets-sale",
      title: "Riddell Speedflex Collection",
      subtitle: "NEUE PRODUKTE",
      description: "Die neuesten Helme mit verbesserter Sicherheit und Komfort. Jetzt mit bis zu 15% Rabatt erhältlich!",
      primaryButton: "Jetzt ansehen",
      primaryHref: "https://your-shopify-domain.com/collections/helmets",
      secondaryButton: "Beratung buchen",
      secondaryHref: "/#service-consulting",
      offers: [
        { discount: "-15%", product: "Helme", detail: "Alle Größen", color: "amber" },
        { discount: "-10%", product: "Shoulderpads", detail: "Neue Kollektion", color: "amber" },
        { discount: "GRATIS", product: "Beratung", detail: "Bei jedem Kauf", color: "green" },
        { discount: "NEU", product: "Zubehör", detail: "Handschuhe & Co", color: "blue" }
      ]
    },
    {
      id: "shoulder-pads",
      title: "Schulterpolster Pro Line",
      subtitle: "SPEZIAL ANGEBOT",
      description: "Professionelle Schulterpolster für maximale Sicherheit. Begrenzte Zeit - 20% Rabatt auf alle Modelle!",
      primaryButton: "Angebot sichern",
      primaryHref: "https://your-shopify-domain.com/collections/shoulder-pads",
      secondaryButton: "Größenberatung",
      secondaryHref: "/#service-consulting",
      offers: [
        { discount: "-20%", product: "Schulterpolster", detail: "Alle Modelle", color: "amber" },
        { discount: "-15%", product: "Helme", detail: "Riddell & Schutt", color: "amber" },
        { discount: "GRATIS", product: "Anpassung", detail: "Vor Ort", color: "green" },
        { discount: "NEU", product: "Schuhe", detail: "Nike & Adidas", color: "blue" }
      ]
    },
    {
      id: "reconditioning",
      title: "Equipment Reconditioning",
      subtitle: "PROFESSIONELLER SERVICE",
      description: "Lassen Sie Ihre Ausrüstung professionell aufarbeiten. Bis zu 10 Jahre Garantie bei Riddell-Helmen!",
      primaryButton: "Service buchen",
      primaryHref: "/#service-reconditioning",
      secondaryButton: "Mehr erfahren",
      secondaryHref: "/#service-ozone",
      offers: [
        { discount: "10 JAHRE", product: "Garantie", detail: "Riddell Helme", color: "green" },
        { discount: "O-ZONE", product: "Reinigung", detail: "Geruchsbeseitigung", color: "blue" },
        { discount: "GRATIS", product: "Inspektion", detail: "Sicherheitscheck", color: "green" },
        { discount: "NEU", product: "Lackierung", detail: "Nach Hersteller", color: "purple" }
      ]
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % advertisements.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, [advertisements.length]);
  
  if (!sales.announcement) return null;
  
  const currentAd = advertisements[currentAdIndex];
  
  return (
    <div 
      className="relative bg-amber-100 text-amber-900 text-center text-sm py-2 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center gap-2">
        <span>{sales.announcement}</span>
        <svg 
          className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {/* Dropdown Banner */}
      {isHovered && (
        <div className="absolute top-full left-0 right-0 bg-white border border-amber-200 shadow-lg z-50">
          {/* Advertisement Banner */}
          <div className="relative bg-gradient-to-r from-black via-gray-800 to-black text-white py-8 transition-all duration-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-gray-800/90 to-black/90"></div>
            <div className="relative max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Main Ad */}
                <div>
                  <div className="text-amber-400 text-sm font-medium mb-2">🔥 {currentAd.subtitle}</div>
                  <h2 className="text-3xl font-bold mb-4">{currentAd.title}</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    {currentAd.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={currentAd.primaryHref} 
                      className="bg-amber-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors text-center"
                    >
                      {currentAd.primaryButton}
                    </a>
                    <a 
                      href={currentAd.secondaryHref} 
                      className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-center"
                    >
                      {currentAd.secondaryButton}
                    </a>
                  </div>
                </div>
                
                {/* Right Side - Product Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {currentAd.offers.map((offer, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                      <div className={`text-2xl font-bold mb-1 ${
                        offer.color === 'amber' ? 'text-amber-400' :
                        offer.color === 'green' ? 'text-green-400' :
                        offer.color === 'blue' ? 'text-blue-400' :
                        'text-purple-400'
                      }`}>
                        {offer.discount}
                      </div>
                      <div className="text-sm">{offer.product}</div>
                      <div className="text-xs text-gray-400">{offer.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {advertisements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAdIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentAdIndex
                      ? "bg-amber-400 scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to advertisement ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Additional Info Bar */}
          <div className="bg-gray-50 py-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Kostenlose Beratung</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Schnelle Lieferung</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">20 Jahre Erfahrung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
