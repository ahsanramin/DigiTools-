import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { n: "01", title: "Create Account", desc: "Sign up for free in seconds. No credit card required to get started.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7"><circle cx="12" cy="8" r="4" /><path strokeLinecap="round" d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></svg> },
  { n: "02", title: "Choose Products", desc: "Browse our catalog and select the tools that fit your needs.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8l-9-5-9 5 9 5 9-5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 8v8l9 5 9-5V8" /><path strokeLinecap="round" d="M12 13v8" /></svg> },
  { n: "03", title: "Start Creating", desc: "Download and start using your premium tools immediately.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M14 4l6 6-9 9H5v-6l9-9z" /><circle cx="9" cy="15" r="1.5" /></svg> },
];

export default function Steps() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
      <div className="container-x">
        <SectionHeading eyebrow="How It Works" title="Get Started In 3 Steps" subtitle="Start using premium digital tools in minutes, not hours." />
        <div className="grid md:grid-cols-3 gap-7">
          {steps.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 120}>
              <div className="relative rounded-3xl border border-slate-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-8 shadow-card hover:shadow-[0_25px_50px_-20px_rgba(124,58,237,.35)] transition-all duration-500 hover:-translate-y-2 grad-border">
                <span className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white text-sm font-bold grid place-items-center shadow-soft">{s.n}</span>
                <div className="w-20 h-20 rounded-full bg-brand-100 dark:bg-brand-500/15 grid place-items-center text-brand-600 dark:text-brand-400 mx-auto">
                  {s.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-center text-slate-900 dark:text-white">{s.title}</h3>
                <p className="mt-3 text-sm text-center text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}