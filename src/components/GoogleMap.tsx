"use client";

export default function GoogleMap() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.1234567890!2d13.3456789!3d52.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f8b8b8b8b8b%3A0x1234567890abcdef!2sBeckerstra%C3%9Fe%2025%2C%2012157%20Berlin!5e0!3m2!1sde!2sde!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="TMS Football Shop Berlin Location"
      />
    </div>
  );
}
