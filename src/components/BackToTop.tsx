"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;
  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 grid h-12 w-12 place-items-center rounded-full bg-black text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5l-7 7M12 5l7 7"/>
      </svg>
    </button>
  );
}

