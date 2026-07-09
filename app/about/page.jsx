import Link from "next/link";
import { Target, Eye, BookOpen, ArrowRight } from "lucide-react";
import { team, values } from "@/lib/data";

export const metadata = {
  title: "About — VA Agency Sample",
  description: "Our mission, vision, story, values, and the team behind VA Agency Sample.",
};

const gradients = [
  "from-brand-500 to-accent-500",
  "from-accent-500 to-brand-400",
  "from-brand-700 to-accent-400",
  "from-accent-600 to-brand-500",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="container-x max-w-3xl text-center sm:mx-auto">
          <span className="section-eyebrow">About Us</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Connecting great businesses with <span className="text-brand-600">great talent</span>
          </h1>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="container-x grid gap-6 pb-16 md:grid-cols-2">
        <div className="card !p-8">
          <span className="icon-badge">
            <Target size={22} />
          </span>
          <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
          <p className="mt-3 text-slate-600">
            To help businesses of every size scale efficiently by connecting them with skilled, reliable virtual professionals — while creating meaningful, well-supported remote careers around the world.
          </p>
        </div>
        <div className="card !p-8">
          <span className="icon-badge">
            <Eye size={22} />
          </span>
          <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>
          <p className="mt-3 text-slate-600">
            A world where geography never limits opportunity — where every business can find the support it needs, and every talented professional can build a career from anywhere.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-slate-50 py-16">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-title">Started small. Built to scale.</h2>
            <div className="mt-5 space-y-4 text-slate-600">
              <p>
                VA Agency Sample began when our founder, a small business owner, spent months searching for dependable remote help — and realized how hard it was to find pre-vetted, well-matched talent.
              </p>
              <p>
                What started as an informal network of trusted assistants grew into a full agency with structured screening, training, and client success support. Today we've placed over 1,200 virtual assistants with more than 500 businesses across ten industries.
              </p>
              <p>
                Behind every placement is the same simple idea: when you match the right person with the right business, both sides grow.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { year: "2019", event: "Founded with 5 VAs and a handful of clients" },
              { year: "2021", event: "Reached 100 businesses served across 6 industries" },
              { year: "2023", event: "Launched training academy for our VA community" },
              { year: "2026", event: "1,200+ VAs supporting 500+ businesses worldwide" },
            ].map((m) => (
              <div key={m.year} className="card">
                <p className="flex items-center gap-2 text-2xl font-extrabold text-brand-600">
                  <BookOpen size={20} className="text-accent-500" /> {m.year}
                </p>
                <p className="mt-2 text-sm text-slate-600">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Core Values</span>
          <h2 className="section-title">What we stand for</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="card">
              <h3 className="mb-2 font-semibold text-slate-900">{v.title}</h3>
              <p className="text-sm text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-16">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Meet Our Team</span>
            <h2 className="section-title">The people behind the placements</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <div key={m.name} className="card text-center">
                <span className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${gradients[i % 4]} text-xl font-bold text-white shadow-soft`}>
                  {m.initials}
                </span>
                <h3 className="mt-4 font-semibold text-slate-900">{m.name}</h3>
                <p className="text-sm text-slate-500">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-accent-700 px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-white">Want to work with us?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50">
              Hire a VA <ArrowRight size={16} />
            </Link>
            <Link href="/apply" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
