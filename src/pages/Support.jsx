import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import FAQ from "../components/FAQ";
import ScrollReveal from "../components/ScrollReveal";

const topics = [
  { icon: "🚀", title: "Getting Started", desc: "Set up your account and import your first project in minutes." },
  { icon: "💳", title: "Billing & Plans", desc: "Manage subscriptions, invoices, payment methods and refunds." },
  { icon: "🔒", title: "Security & Privacy", desc: "Learn how we protect your data and comply with GDPR & SOC-2." },
  { icon: "🔌", title: "Integrations", desc: "Connect DigiTools with Slack, Notion, Zapier and 40+ other apps." },
  { icon: "⚙️", title: "Account Settings", desc: "Update profile, team members and notification preferences." },
  { icon: "🐞", title: "Report a Bug", desc: "Found something broken? Let our engineers know right away." },
];

export default function Support() {
  const [q, setQ] = useState("");

  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50 dark:from-brand-950/40 to-white dark:to-ink-950 py-16 lg:py-24 overflow-hidden noise">
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-brand-300/30 dark:bg-brand-600/20 blur-3xl animate-blob" />
        <div className="container-x text-center max-w-3xl relative">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Help & <span className="text-gradient">Support</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="mt-6 text-slate-500 dark:text-slate-400 text-lg">
              Search our knowledge base or browse topics below. Our team is online 24/7.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative">
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search for help..."
                  className="w-full rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 pl-12 pr-5 py-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:focus:ring-brand-500/20 transition-all"
                />
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-ink-950">
        <div className="container-x">
          <SectionHeading eyebrow="Topics" title="Browse help topics" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 60}>
                <div className="rounded-2xl border border-slate-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-7 hover:shadow-[0_18px_40px_-20px_rgba(124,58,237,.35)] transition-all duration-500 hover:-translate-y-1">
                  <div className="text-3xl mb-4">{t.icon}</div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{t.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}