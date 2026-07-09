import Link from "next/link";
import { AlertCircle, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data";

export const metadata = {
  title: "Success Stories — VA Agency Sample",
  description: "Real results from businesses that scaled with our virtual assistants.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="container-x max-w-3xl text-center sm:mx-auto">
          <span className="section-eyebrow">Success Stories</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Results our clients <span className="text-brand-600">brag about</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            A look at how businesses across industries transformed their operations with the right VA.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-8 pb-20 lg:grid-cols-2">
        {caseStudies.map((cs) => (
          <article key={cs.industry} className="card flex flex-col !p-8">
            <span className="mb-5 inline-flex w-fit rounded-full bg-gradient-to-r from-brand-600 to-accent-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              {cs.industry}
            </span>

            <div className="space-y-5">
              <div>
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900">
                  <AlertCircle size={16} className="text-rose-500" /> Challenge
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{cs.challenge}</p>
              </div>
              <div>
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900">
                  <Lightbulb size={16} className="text-amber-500" /> Solution
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{cs.solution}</p>
              </div>
              <div>
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900">
                  <TrendingUp size={16} className="text-emerald-500" /> Results
                </h2>
                <ul className="mt-2 space-y-2">
                  {cs.results.map((r) => (
                    <li key={r} className="rounded-xl bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-800">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container-x pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-accent-700 px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-white">Your success story starts here</h2>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50">
            Hire a Virtual Assistant <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
