import Banner from "@/components/Banner";
import PromoSpotlight from "@/components/PromoSpotlight";
import InstagramFeed from "@/components/InstagramFeed";
import ContactSection from "@/components/ContactSection";
import GoogleMap from "@/components/GoogleMap";
import SalesModal from "@/components/SalesModal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Page() {
  const { t } = useLanguage();
  
  return (
    <>
      <Banner />
      
      <div className="shadow-lg">
        <PromoSpotlight />
      </div>

      {/* Services anchors for dropdown links */}
      <div className="shadow-lg">
        <section id="service-ozone" className="mx-auto max-w-6xl px-4 min-h-screen flex flex-col justify-center">
          <h2 className="text-2xl font-bold">{t.services.ozone.title}</h2>
          <p className="mt-2 text-gray-600">{t.services.ozone.description}</p>
        </section>
      </div>

      <div className="shadow-lg">
        <section id="service-consulting" className="mx-auto max-w-6xl px-4 min-h-screen flex flex-col justify-center">
          <h2 className="text-2xl font-bold">{t.services.consulting.title}</h2>
          <p className="mt-2 text-gray-600">{t.services.consulting.description}</p>
        </section>
      </div>

      <div className="shadow-lg">
        <section id="service-reconditioning" className="mx-auto max-w-6xl px-4 min-h-screen flex flex-col justify-center">
          <h2 className="text-2xl font-bold">{t.services.reconditioning.title}</h2>
          <p className="mt-2 text-gray-600">{t.services.reconditioning.description}</p>
        </section>
      </div>

      <div className="shadow-lg">
        <section id="gallery" className="mx-auto max-w-6xl px-4 min-h-screen flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">{t.gallery.title}</h2>
            <p className="text-gray-600">{t.gallery.subtitle}</p>
          </div>
          <InstagramFeed />
        </section>
      </div>

      <div className="shadow-lg">
        <section id="contact" className="mx-auto max-w-6xl px-4 min-h-screen flex flex-col justify-center pt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-gray-600">{t.contact.subtitle}</p>
        </div>
        
        <div className="mb-12">
          <ContactSection />
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">{t.contact.map.title}</h3>
          <GoogleMap />
        </div>
        </section>
      </div>

      <SalesModal />
    </>
  );
}
