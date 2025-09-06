import Hero from "@/components/Hero";
import PromoSpotlight from "@/components/PromoSpotlight";
import SalesButton from "@/components/SalesButton";
import SalesModal from "@/components/SalesModal";

export default function Page() {
  return (
    <>
      <Hero />
      <PromoSpotlight />

      {/* Services anchors for dropdown links */}
      <section id="service-ozone" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">O-Zone Power Cleaning</h2>
        <p className="mt-2 text-gray-600">Geruchsbeseitigung & Hygienereinigung für Ausrüstung.</p>
      </section>

      <section id="service-consulting" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Consulting</h2>
        <p className="mt-2 text-gray-600">Team- und Spielerberatung, Größen- und Safety-Check.</p>
      </section>

      <section id="service-reconditioning" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Reconditioning</h2>
        <p className="mt-2 text-gray-600">Inspektion, Reparatur, Lackierung, Zertifizierung.</p>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <p className="mt-2 text-gray-600">Vorher/Nachher Bilder und Projekte (bald verfügbar).</p>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="mt-2 text-gray-600">Schreib uns oder besuch uns im Shop. Öffnungszeiten folgen.</p>
      </section>

      <SalesButton />
      <SalesModal />
    </>
  );
}
