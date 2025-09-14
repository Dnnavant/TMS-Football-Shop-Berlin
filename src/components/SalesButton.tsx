"use client";
import sales from "@/data/sales.json";

export default function SalesButton() {
  if (!sales.floatingButton?.enabled) return null;
  return (
    <a
      href={sales.floatingButton.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 rounded-full px-5 py-3 font-semibold shadow-lg bg-black text-white hover:opacity-90 text-shadow-right"
      aria-label="Sales"
    >
      {sales.floatingButton.label}
    </a>
  );
}
