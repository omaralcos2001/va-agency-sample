import Link from "next/link";
import { ArrowRight, CheckCircle2, ListChecks, Building2 } from "lucide-react";
import { services } from "@/lib/data";

export const metadata = {
  title: "Services — CANDACE Agency",
  description: "15 virtual assistant services, from executive assistance to ecommerce support.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="container-x max-w-3xl text-center sm:mx-auto">
          <span className="section-eyebrow">Services</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Delegate anything. <span className="text-brand-600">We have a VA for it.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Fifteen specialized service lines, all staffed by pre-screened virtual professionals.
          </p>
        </div>
      </section>

      <section className="container-x space-y-8 pb-20">
        {services.map((s, i) => (
          <article key={s.title} className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
            <div className={`h-2 w-full bg-gradient-to-r ${i % 2 === 0 ? "from-brand-500 to-accent-500" : "from-accent-500 to-brand-500"}`} />
            <div className="grid gap-8 p-8 lg:grid-cols-3">
              <div>
                <span className="icon-badge">
                  <s.icon size={22} />
                </span>
                <h2 className="text-xl font-bold text-slate-900">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                <Link href="/contact" className="btn-primary mt-6 !px-5 !py-2.5">
                  Get Started <ArrowRight size={14} />
                </Link>
              </div>

              <div>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900">
                  <ListChecks size={16} className="text-brand-600" /> Typical Tasks
                </h3>
                <ul className="space-y-2.5">
                  {s.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500" /> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900">
                  <Building2 size={16} className="text-brand-600" /> Popular With
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.industries.map((ind) => (
                    <span key={ind} className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700">
                      {ind}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Benefits</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Save 10+ hours a week, reduce hiring costs, and keep quality high with a dedicated specialist backed by our support team.
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container-x pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-accent-700 px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-white">Not sure which service fits?</h2>
          <p className="mx-auto mt-3 max-w-lg text-brand-100">
            Tell us your goals and we'll recommend the right mix of support.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50">
            Talk to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
