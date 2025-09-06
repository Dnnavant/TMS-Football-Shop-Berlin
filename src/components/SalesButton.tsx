"use client";
import sales from "@/data/sales.json";

export default function SalesButton() {
  if (!sales.floatingButton?.enabled) return null;
  return (
    <a
      href={sales.floatingButton.href}
      className="fixed bottom-5 right-5 rounded-full px-5 py-3 font-semibold shadow-lg bg-black text-white hover:opacity-90"
      aria-label="Sales"
    >
      {sales.floatingButton.label}
    </a>
  );
}
