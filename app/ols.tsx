"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3 * 3600 + 47 * 60);

  useEffect(() => {
    const t = setInterval(() => setTimeLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  const format = (t: number) =>
    `${String(Math.floor(t / 3600)).padStart(2, "0")}:${String(
      Math.floor((t % 3600) / 60)
    ).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert("You're in! Check your inbox. 🚀");
      setEmail("");
      setSubmitted(false);
    }, 400);
  };

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-indigo-600 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
              <div className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
              JEE Main 2025 – Jan & Apr Attempts
            </div>
            
            <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
              Master JEE with
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">NTA-Level Mocks</span>
                <div className="absolute bottom-2 left-0 h-4 w-full bg-indigo-200 z-0" />
              </span>
            </h1>
            
            <p className="mx-auto mt-8 max-w-2xl text-xl text-slate-600 leading-relaxed">
              Experience the real exam pressure. 180 minutes, 300 marks, 75 questions.
              <br />
              <span className="font-semibold text-slate-900">Get AI-powered weakness analysis in 30 seconds.</span>
            </p>

            <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
              <input
                required
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border-2 border-slate-200 bg-white px-6 py-4 text-lg text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-100"
              />
              <button
                onClick={handleSubmit}
                disabled={submitted}
                className="group rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700 hover:shadow-xl active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {submitted ? "Sending…" : (
                  <>
                    Get 5 Free Tests
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">17,482 students registered</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN BAR */}
      <section className="border-y-2 border-slate-900 bg-slate-900 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 text-base font-bold">
          <span className="text-white">Next live mock starts in:</span>
          <span className="rounded-lg bg-indigo-600 px-5 py-2 font-mono text-xl text-white shadow-lg">
            {format(timeLeft)}
          </span>
          <span className="hidden text-white sm:inline">
            Only 127 seats left
          </span>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              ["25,241", "Students Trained", "🎓"],
              ["99.07%", "Avg Percentile Jump", "📈"],
              ["1,400+", "Chapter Tests", "📚"],
              ["AIR 27", "Best 2024 Result", "🏆"],
            ].map((s) => (
              <div key={s[0]} className="text-center">
                <div className="text-4xl mb-3">{s[2]}</div>
                <div className="text-4xl font-black text-slate-900 lg:text-5xl">
                  {s[0]}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-600 uppercase tracking-wide">
                  {s[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black md:text-5xl">
              Why Students Choose Us
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Features that mirror the actual NTA exam experience
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["⏱️", "NTA Stopwatch", "Exact sectional timing with on-screen calculator"],
              ["🎯", "AI Weakness Heatmap", "Identify 3 chapters costing you 24 marks"],
              ["📈", "Live Rankings", "All-India rank updated after every test"],
              ["⚡", "60-Sec Solutions", "Quick video explanations for every question"],
              ["📱", "Cross-Device Sync", "Start on mobile, finish on laptop seamlessly"],
              ["📚", "Smart Revision", "Auto-generated practice for weak topics"],
            ].map((i, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border-2 border-slate-200 bg-white p-8 transition hover:border-indigo-600 hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">{i[0]}</div>
                <h3 className="text-xl font-bold text-slate-900">{i[1]}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{i[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black md:text-5xl">
              Real Results, Real Students
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Average improvement: 48 marks in 2 weeks
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Aditya Sharma", "99.21 Percentile", "Mocks mirrored the real paper. AI report showed I was losing 15 min in Chemistry—fixed it and gained 23 marks."],
              ["Riya Patel", "AIR 214 (2024)", "Chapter heat-map told me to quit Thermo revision and focus on Coordination compounds. Best decision ever."],
              ["Harsh Verma", "99.02 Percentile", "Interface feels like NTA portal. Solutions are crisp, no jargon. Attempted all 3 free tests—got 94 → 99."],
            ].map((t) => (
              <div
                key={t[0]}
                className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed">&quot;{t[2]}&quot;</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
                    {t[0].charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t[0]}</div>
                    <div className="text-sm font-semibold text-indigo-600">{t[1]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-black text-white md:text-5xl">
            Ready to Ace JEE Main 2025?
          </h2>
          <p className="mt-6 text-xl text-indigo-100">
            Take your first full-length mock test today. No payment, no spam.
            <br />
            <span className="font-bold text-white">Just pure exam practice.</span>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-8 rounded-xl bg-white px-10 py-5 text-lg font-bold text-indigo-700 shadow-2xl transition hover:bg-slate-50 hover:scale-105 active:scale-95"
          >
            Start Free Mock Test →
          </button>
          <p className="mt-6 text-sm text-indigo-200">
            Join 17,482+ students already practicing
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-4xl font-black md:text-5xl mb-12">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              ["Is it exactly like NTA pattern?", "Yes—75 questions, 300 marks, +4/-1 marking, numeric & MCQs, with on-screen calculator."],
              ["Are solutions included?", "Every question has step-by-step text explanations plus 60-second video solutions."],
              ["What device do I need?", "Any device with a browser works—phone, tablet, or laptop. Your progress syncs automatically."],
              ["Are there hidden charges?", "First 5 full-length mocks are completely free forever. No credit card, no ads, no spam."],
            ].map((faq) => (
              <details
                key={faq[0]}
                className="group rounded-xl border-2 border-slate-200 bg-white transition hover:border-indigo-600"
              >
                <summary className="cursor-pointer select-none px-6 py-5 font-bold text-slate-900 text-lg flex items-center justify-between">
                  {faq[0]}
                  <span className="text-indigo-600 text-2xl group-open:rotate-45 transition">+</span>
                </summary>
                <p className="px-6 pb-5 text-slate-600 leading-relaxed">{faq[1]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-slate-200 py-10 text-center">
        <p className="text-slate-600 font-medium">
          © {new Date().getFullYear()} JEE Mastery. Built for 2025 aspirants.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Empowering students to achieve their dreams
        </p>
      </footer>
    </main>
  );
}