"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
            >
              <span className="font-semibold text-slate-900">{item.q}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-brand-600 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
