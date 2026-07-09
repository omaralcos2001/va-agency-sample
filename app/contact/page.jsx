"use client";

import { useState } from "react";
import { Mail, Phone, Clock, MapPin, Send, CheckCircle2 } from "lucide-react";

const info = [
  { icon: Mail, label: "Email", value: "hello@candaceagency.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: Clock, label: "Office Hours", value: "Mon–Fri, 9:00 AM – 6:00 PM EST" },
  { icon: MapPin, label: "Address", value: "123 Business Avenue, Suite 400, New York, NY 10001" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="container-x max-w-3xl text-center sm:mx-auto">
          <span className="section-eyebrow">Contact</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Let's find your <span className="text-brand-600">perfect VA</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Tell us about your business and we'll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-10 pb-20 lg:grid-cols-5">
        {/* Form */}
        <div className="card !p-8 lg:col-span-3">
          {sent && (
            <div className="mb-6 flex items-center gap-3 rounded-2xl bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-800">
              <CheckCircle2 size={20} className="shrink-0 text-emerald-600" />
              Thanks! Your message has been received. (This is a demo — no message was actually sent.)
            </div>
          )}
          <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="name">Name *</label>
              <input id="name" required className="input" placeholder="Jane Smith" />
            </div>
            <div>
              <label className="label" htmlFor="company">Company</label>
              <input id="company" className="input" placeholder="Acme Inc." />
            </div>
            <div>
              <label className="label" htmlFor="email">Email *</label>
              <input id="email" type="email" required className="input" placeholder="jane@acme.com" />
            </div>
            <div>
              <label className="label" htmlFor="phone">Phone</label>
              <input id="phone" type="tel" className="input" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="sm:col-span-2">
              <label className="label" htmlFor="message">Message *</label>
              <textarea id="message" required rows={5} className="input" placeholder="Tell us what you'd like help with..." />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message <Send size={16} />
              </button>
            </div>
          </form>
        </div>

        {/* Info */}
        <div className="space-y-4 lg:col-span-2">
          {info.map((item) => (
            <div key={item.label} className="card flex items-start gap-4 !p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <item.icon size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-0.5 text-sm text-slate-600">{item.value}</p>
              </div>
            </div>
          ))}

          {/* Map placeholder */}
          <div className="flex h-56 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-slate-400">
            <MapPin size={32} />
            <p className="mt-2 text-sm font-medium">Google Maps placeholder</p>
          </div>
        </div>
      </section>
    </>
  );
}
