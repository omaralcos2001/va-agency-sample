"use client";

import { useState } from "react";
import {
  Home, CalendarClock, TrendingUp, Award, Users, CheckCircle2, Upload, X, ArrowRight,
} from "lucide-react";
import { positions, faqs } from "@/lib/data";
import Accordion from "@/components/Accordion";

const perks = [
  { icon: Home, title: "Work From Home", desc: "Skip the commute and work from wherever you do your best work." },
  { icon: CalendarClock, title: "Flexible Schedule", desc: "Full-time, part-time, and project-based roles across time zones." },
  { icon: TrendingUp, title: "Career Growth", desc: "Training, mentorship, and clear paths to senior and lead roles." },
  { icon: Award, title: "Competitive Opportunities", desc: "Quality clients, fair rates, and long-term placements." },
  { icon: Users, title: "Supportive Community", desc: "A network of 1,200+ VAs sharing tips, templates, and wins." },
];

const requirements = [
  "Excellent communication skills",
  "Stable internet connection",
  "Laptop/Desktop",
  "Time management",
  "Professional attitude",
  "Problem-solving skills",
];

export default function ApplyPage() {
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    e.target.reset();
    setFileName("");
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent-50 via-brand-50 to-white py-16">
        <div className="container-x max-w-3xl text-center sm:mx-auto">
          <span className="section-eyebrow">Careers</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Join Our Growing Team of <span className="text-brand-600">Virtual Assistants</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Build a rewarding remote career with great clients, steady work, and a community that has your back.
          </p>
          <a href="#application" className="btn-primary mt-8">
            Apply Now <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="container-x py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Why Work With Us</span>
          <h2 className="section-title">A remote career you'll actually love</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {perks.map((p) => (
            <div key={p.title} className="card">
              <span className="icon-badge">
                <p.icon size={22} />
              </span>
              <h3 className="mb-2 font-semibold text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="scroll-mt-20 bg-slate-50 py-16">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">Requirements</span>
            <h2 className="section-title">What you'll need to succeed</h2>
            <p className="mt-4 text-slate-600">
              We look for professionals who take pride in their work. If this sounds like you, we'd love to meet you.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {requirements.map((r) => (
              <li key={r} className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-card">
                <CheckCircle2 size={18} className="shrink-0 text-emerald-500" /> {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Positions */}
      <section id="positions" className="container-x scroll-mt-20 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Available Positions</span>
          <h2 className="section-title">Find your next role</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {positions.map((pos) => (
            <div key={pos.title} className="card flex flex-col">
              <h3 className="font-semibold text-slate-900">{pos.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{pos.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {pos.skills.map((s) => (
                  <span key={s} className="rounded-full bg-accent-100 px-2.5 py-1 text-xs font-medium text-accent-700">
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">{pos.type}</p>
              <a href="#application" className="btn-secondary mt-4 !py-2 text-center">
                Apply
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Application form */}
      <section id="application" className="scroll-mt-20 bg-slate-50 py-16">
        <div className="container-x max-w-3xl sm:mx-auto">
          <div className="text-center">
            <span className="section-eyebrow">Application</span>
            <h2 className="section-title">Submit your application</h2>
            <p className="mt-3 text-slate-600">We review every application and respond within 3–5 business days.</p>
          </div>

          <form onSubmit={handleSubmit} className="card mt-10 grid gap-5 !p-8 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="firstName">First Name *</label>
              <input id="firstName" required className="input" placeholder="Jane" />
            </div>
            <div>
              <label className="label" htmlFor="lastName">Last Name *</label>
              <input id="lastName" required className="input" placeholder="Smith" />
            </div>
            <div>
              <label className="label" htmlFor="appEmail">Email *</label>
              <input id="appEmail" type="email" required className="input" placeholder="jane@email.com" />
            </div>
            <div>
              <label className="label" htmlFor="appPhone">Phone *</label>
              <input id="appPhone" type="tel" required className="input" placeholder="+1 (555) 000-0000" />
            </div>
            <div>
              <label className="label" htmlFor="country">Country *</label>
              <input id="country" required className="input" placeholder="Philippines" />
            </div>
            <div>
              <label className="label" htmlFor="position">Position Applying For *</label>
              <select id="position" required className="input" defaultValue="">
                <option value="" disabled>Select a position</option>
                {positions.map((p) => (
                  <option key={p.title} value={p.title}>{p.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label" htmlFor="experience">Years of Experience *</label>
              <select id="experience" required className="input" defaultValue="">
                <option value="" disabled>Select experience</option>
                <option>Less than 1 year</option>
                <option>1–2 years</option>
                <option>3–5 years</option>
                <option>5+ years</option>
              </select>
            </div>
            <div>
              <label className="label" htmlFor="portfolio">Portfolio URL</label>
              <input id="portfolio" type="url" className="input" placeholder="https://..." />
            </div>
            <div className="sm:col-span-2">
              <label className="label" htmlFor="resume">Resume Upload</label>
              <label
                htmlFor="resume"
                className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 bg-white px-4 py-6 text-sm text-slate-500 transition hover:border-brand-300 hover:bg-brand-50"
              >
                <Upload size={18} className="text-brand-600" />
                {fileName || "Click to upload your resume (PDF, DOCX)"}
              </label>
              <input
                id="resume"
                type="file"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="label" htmlFor="coverLetter">Cover Letter</label>
              <textarea id="coverLetter" rows={5} className="input" placeholder="Tell us why you'd be a great fit..." />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="btn-primary w-full">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Frequently asked questions</h2>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <Accordion items={faqs} />
        </div>
      </section>

      {/* Success modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-soft"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="ml-auto flex rounded-full p-1 text-slate-400 hover:bg-slate-100"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 size={32} />
            </span>
            <h3 className="mt-5 text-xl font-bold text-slate-900">Application Submitted!</h3>
            <p className="mt-3 text-sm text-slate-600">
              Thank you for applying. Our recruitment team will review your application and reach out within 3–5 business days. (This is a demo — no data was actually sent.)
            </p>
            <button className="btn-primary mt-6 w-full" onClick={() => setShowModal(false)}>
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
