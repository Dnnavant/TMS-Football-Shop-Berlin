"use client";
import { useEffect, useState } from "react";
import sales from "@/data/sales.json";

const KEY = "tms_sales_last_seen"; // show once per day

export default function SalesModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sales.modal?.enabled) return;
    const last = typeof window !== 'undefined' ? localStorage.getItem(KEY) : null;
    const today = new Date().toDateString();
    if (last !== today) {
      setTimeout(() => setOpen(true), 800);
    }
  }, []);

  const close = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(KEY, new Date().toDateString());
    }
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6">
        <h3 className="text-xl font-bold">{sales.modal.headline}</h3>
        <p className="mt-2 text-sm text-gray-700">{sales.modal.body}</p>
        <div className="mt-5 flex items-center gap-3">
          <a href={sales.modal.ctaHref} className="rounded-full bg-black px-4 py-2 text-white font-semibold">
            {sales.modal.ctaText}
          </a>
          <button onClick={close} className="rounded-full border px-4 py-2 font-semibold">
            Später
          </button>
        </div>
      </div>
    </div>
  );
}
