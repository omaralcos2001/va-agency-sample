import Link from "next/link";
import { Sparkles, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Careers", href: "/apply" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "For Businesses",
    links: [
      { label: "Hire a VA", href: "/contact" },
      { label: "Pricing", href: "/contact" },
      { label: "Industries", href: "/#industries" },
    ],
  },
  {
    heading: "For Applicants",
    links: [
      { label: "Apply", href: "/apply" },
      { label: "Requirements", href: "/apply#requirements" },
      { label: "Open Roles", href: "/apply#positions" },
    ],
  },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
              <Sparkles size={18} />
            </span>
            CANDACE <span className="text-brand-600">Agency</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-slate-500">
            Helping businesses scale with skilled virtual professionals while creating meaningful remote career opportunities.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">{col.heading}</h3>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-500 transition hover:text-brand-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-slate-500">© 2026 CANDACE Agency. All rights reserved.</p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <span
                key={s.label}
                aria-label={s.label}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-slate-500 shadow-card transition hover:bg-brand-600 hover:text-white"
              >
                <s.icon size={16} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
