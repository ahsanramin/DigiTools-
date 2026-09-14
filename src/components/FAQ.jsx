import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { q: "How do I access the tools after purchasing?", a: "Immediately after checkout, you'll receive an email with your account credentials. All purchased tools become instantly available in your DigiTools dashboard." },
  { q: "Can I cancel my subscription at any time?", a: "Absolutely. You can cancel from your account settings in one click. You'll retain access until the end of your current billing period — no hidden fees." },
  { q: "Do you offer refunds?", a: "Yes — every paid plan comes with a 30-day money-back guarantee. If you're not satisfied, contact support and we'll process a full refund." },
  { q: "Are the tools compatible with my existing workflow?", a: "Our tools export to standard formats (PDF, Figma, PNG, MP4, JSON) and integrate with popular platforms like Slack, Notion, Google Workspace, and Zapier." },
  { q: "Is my data safe with DigiTools?", a: "We're SOC-2 compliant, use end-to-end encryption, and never sell or share your data. You can export or delete your data at any time." },
  { q: "Do you offer discounts for teams or students?", a: "Yes! Teams of 5+ get 20% off, and verified students receive 50% off any plan. Contact our sales team for details." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-ink-900">
      <div className="container-x">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions"
          subtitle="Everything you need to know about DigiTools."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={f.q} delay={i * 60}>
                <div className={`rounded-2xl bg-white dark:bg-white/[0.02] border transition-colors duration-300 ${isOpen ? "border-brand-300 dark:border-brand-500/50 shadow-soft" : "border-slate-100 dark:border-white/5"}`}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 text-left px-6 py-5">
                    <span className="font-semibold text-slate-900 dark:text-white">{f.q}</span>
                    <span className={`w-8 h-8 shrink-0 rounded-full grid place-items-center transition-all duration-300 ${isOpen ? "bg-brand-600 text-white rotate-45" : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"}`}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="px-6 pb-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}