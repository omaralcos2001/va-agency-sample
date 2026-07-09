"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

const gradients = [
  "from-brand-500 to-accent-500",
  "from-accent-500 to-brand-400",
  "from-brand-700 to-accent-400",
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            className={`card flex flex-col ${i === active ? "ring-2 ring-brand-200" : ""} hidden md:flex`}
          >
            <Quote className="mb-4 text-accent-400" size={28} />
            <blockquote className="flex-1 text-sm leading-relaxed text-slate-600">“{t.quote}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${gradients[i % 3]} text-sm font-bold text-white`}
              >
                {t.name.split(" ").map((p) => p[0]).join("")}
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-900">{t.name}</span>
                <span className="block text-xs text-slate-500">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}

        {/* Mobile carousel: one card at a time */}
        <figure className="card flex flex-col md:hidden">
          <Quote className="mb-4 text-accent-400" size={28} />
          <blockquote className="flex-1 text-sm leading-relaxed text-slate-600">
            “{testimonials[active].quote}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${gradients[active % 3]} text-sm font-bold text-white`}
            >
              {testimonials[active].name.split(" ").map((p) => p[0]).join("")}
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-900">{testimonials[active].name}</span>
              <span className="block text-xs text-slate-500">{testimonials[active].role}</span>
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600"
          onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`h-2.5 w-2.5 rounded-full ${i === active ? "bg-brand-600" : "bg-slate-300"}`}
            onClick={() => setActive(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600"
          onClick={() => setActive((active + 1) % testimonials.length)}
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
