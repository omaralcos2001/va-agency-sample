import Link from "next/link";
import {
  ShieldCheck, Wallet, LifeBuoy, Zap, ArrowRight, CheckCircle2,
  Laptop, Headset, CalendarCheck, MessageSquare,
} from "lucide-react";
import { services, industries, stats, processSteps } from "@/lib/data";
import Counter from "@/components/Counter";
import Testimonials from "@/components/Testimonials";

const features = [
  { icon: ShieldCheck, title: "Pre-screened Talent", desc: "Every VA passes skills assessments, background checks, and live interviews before meeting you." },
  { icon: Wallet, title: "Flexible Pricing", desc: "Part-time, full-time, or project-based — plans that scale with your business, no long contracts." },
  { icon: LifeBuoy, title: "Dedicated Support", desc: "A client success manager stays with you after placement to keep everything running smoothly." },
  { icon: Zap, title: "Fast Hiring", desc: "Meet matched candidates in as little as 48 hours and start working within the week." },
];

function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-accent-200/50 blur-2xl" />
      <div className="absolute -bottom-8 -right-4 h-48 w-48 rounded-full bg-brand-200/60 blur-2xl" />

      <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 font-bold text-white">
            VA
          </span>
          <div>
            <p className="font-semibold text-slate-900">Your Virtual Assistant</p>
            <p className="flex items-center gap-1.5 text-xs text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Online now
            </p>
          </div>
        </div>
        <ul className="mt-4 space-y-3">
          {[
            { icon: MessageSquare, text: "Inbox cleared — 3 replies drafted for review" },
            { icon: CalendarCheck, text: "Tomorrow's meetings confirmed & prepped" },
            { icon: Laptop, text: "Weekly report ready in your dashboard" },
            { icon: Headset, text: "12 support tickets resolved today" },
          ].map((item) => (
            <li key={item.text} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
              <item.icon size={18} className="mt-0.5 shrink-0 text-brand-600" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute -right-6 top-10 hidden animate-float rounded-2xl bg-white p-4 shadow-soft sm:block">
        <p className="text-xs font-medium text-slate-500">Hours saved this week</p>
        <p className="text-2xl font-bold text-brand-600">18.5</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="container-x grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fadeUp">
            <span className="section-eyebrow">Virtual Assistant Agency</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Find Reliable Virtual Assistants for{" "}
              <span className="bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
                Your Business
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Helping businesses scale with skilled virtual professionals while creating meaningful remote career opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Hire a VA <ArrowRight size={16} />
              </Link>
              <Link href="/apply" className="btn-secondary">
                Become a VA
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              {["No setup fees", "Cancel anytime", "48-hour matching"].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-emerald-500" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <HeroIllustration />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-x py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">Everything you need to delegate with confidence</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="card">
              <span className="icon-badge">
                <f.icon size={22} />
              </span>
              <h3 className="mb-2 font-semibold text-slate-900">{f.title}</h3>
              <p className="text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Our Services</span>
            <h2 className="section-title">One partner for every task you want off your plate</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((s) => (
              <div key={s.title} className="card flex flex-col">
                <span className="icon-badge">
                  <s.icon size={22} />
                </span>
                <h3 className="mb-2 font-semibold text-slate-900">{s.title}</h3>
                <p className="flex-1 text-sm text-slate-600">{s.desc}</p>
                <Link href="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">
              View All 15 Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="container-x scroll-mt-20 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Industries We Serve</span>
          <h2 className="section-title">Specialized support for your field</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind) => (
            <div key={ind.name} className="card flex flex-col items-center !p-5 text-center">
              <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <ind.icon size={22} />
              </span>
              <p className="text-sm font-semibold text-slate-800">{ind.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gradient-to-b from-white to-brand-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Our Process</span>
            <h2 className="section-title">From first call to first task in four steps</h2>
          </div>
          <ol className="relative mt-14 grid gap-10 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-brand-200 via-accent-200 to-brand-200 md:block" />
            {processSteps.map((step, i) => (
              <li key={step.title} className="relative text-center md:text-left">
                <span className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-lg font-bold text-white shadow-soft md:mx-0">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">Trusted by growing businesses</h2>
        </div>
        <div className="mt-12">
          <Testimonials />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 py-16">
        <div className="container-x grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold text-white sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-accent-700 px-8 py-16 text-center shadow-soft sm:px-16">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-xl" />
          <div className="absolute -bottom-14 -right-10 h-56 w-56 rounded-full bg-white/10 blur-xl" />
          <h2 className="relative text-3xl font-bold text-white sm:text-4xl">Ready to Grow Your Business?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-brand-100">
            Tell us what's on your plate and meet your matched virtual assistant this week.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50">
              Hire a Virtual Assistant <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
