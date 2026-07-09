"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/apply", label: "Apply as VA" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
            <Sparkles size={18} />
          </span>
          VA Agency <span className="text-brand-600">Sample</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="text-sm font-medium text-slate-600 transition hover:text-brand-600">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !px-5 !py-2.5">
            Get Started
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
