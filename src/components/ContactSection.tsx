"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-6">Kontakt & Öffnungszeiten</h3>

          {/* Single horizontal row for address, phone, email */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-gray-700">
            <div className="inline-flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Beckerstraße 25, 12157 Berlin</span>
            </div>

            <div className="inline-flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+493085506915" className="hover:text-black transition-colors">+49 (0) 30 / 855 06 915</a>
            </div>

            <div className="inline-flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@tms-footballshop-berlin.de" className="hover:text-black transition-colors">info@tms-footballshop-berlin.de</a>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-lg mb-4">Öffnungszeiten</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Montag:</span>
              <span className="text-gray-600">geschlossen</span>
            </div>
            <div className="flex justify-between">
              <span>Dienstag – Freitag:</span>
              <span className="text-gray-600">11 – 19 Uhr</span>
            </div>
            <div className="flex justify-between">
              <span>Samstag:</span>
              <span className="text-gray-600">10 – 15 Uhr</span>
            </div>
            <div className="flex justify-between">
              <span>Sonntag & Feiertage:</span>
              <span className="text-gray-600">geschlossen</span>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded">
            <p className="text-sm text-amber-800">
              <strong>Eingeschränkte Öffnungszeiten</strong><br />
              vom 06.05. bis zum 04.06.2024<br />
              Mittwoch: 13 – 18 Uhr | Donnerstag: 13 – 19 Uhr<br />
              Freitag: 15 – 19 Uhr | Samstag: 10 – 15 Uhr
            </p>
          </div>
        </div>

        {/* Special Notice */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-800">
            <strong>Wichtiger Hinweis:</strong><br />
            Am 27.12.2023 bleibt unser Geschäft geschlossen!<br />
            Wir sind am 28.12. und 29.12. wie gewohnt für euch da! 💪
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Nachricht senden</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="ihre@email.de"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="+49 (0) 30 12345678"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Betreff *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="">Bitte wählen...</option>
                <option value="beratung">Beratung</option>
                <option value="reconditioning">Reconditioning</option>
                <option value="reparatur">Reparatur</option>
                <option value="bestellung">Bestellung</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Nachricht *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Ihre Nachricht an uns..."
            />
          </div>

          <div className="mt-2 flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center bg-black text-white px-5 py-2 rounded-full font-semibold text-shadow-right hover:bg-gray-800 transition-colors duration-200"
            >
              Nachricht senden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
