import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const plans = [
  { name: "Starter", tagline: "Perfect for getting started", price: 0, period: "Month", cta: "Get Started Free", highlight: false, features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"] },
  { name: "Pro", tagline: "Best for professionals", price: 29, period: "Month", cta: "Start Pro Trial", highlight: true, tag: "Most Popular", features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"] },
  { name: "Enterprise", tagline: "For teams and businesses", price: 99, period: "Month", cta: "Contact Sales", highlight: false, features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-white dark:bg-ink-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-brand-50/60 dark:from-brand-500/5 to-transparent" />
      <div className="container-x relative">
        <SectionHeading eyebrow="Pricing" title={<>Simple, <span className="text-gradient">Transparent Pricing</span></>}
          subtitle="Choose the plan that fits your needs. Upgrade or downgrade anytime."
        />
        <div className="grid md:grid-cols-3 gap-7 items-stretch">
          {plans.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 120}>
              <div className={`relative h-full rounded-[2rem] p-8 transition-all duration-500 ${p.highlight
                ? "bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800 text-white shadow-[0_40px_80px_-25px_rgba(124,58,237,.7)] md:-translate-y-5 md:scale-[1.02] border border-brand-500/40"
                : "bg-white dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 text-slate-900 dark:text-white hover:shadow-[0_25px_50px_-20px_rgba(15,23,42,.15)] dark:hover:shadow-[0_25px_50px_-20px_rgba(139,92,246,.3)] hover:-translate-y-1"}`}
              >
                {p.highlight && <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-brand-500/20 blur-2xl -z-10" />}
                {p.tag && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-300 to-amber-400 text-amber-900 text-[11px] font-extrabold uppercase tracking-wider shadow-lg whitespace-nowrap">
                    ⭐ {p.tag}
                  </span>
                )}
                <div className="relative">
                  <h3 className={`text-2xl font-extrabold ${p.highlight ? "text-white" : "text-slate-900 dark:text-white"}`}>{p.name}</h3>
                  <p className={`mt-1.5 text-sm ${p.highlight ? "text-white/75" : "text-slate-500 dark:text-slate-400"}`}>{p.tagline}</p>
                  <div className="mt-8 flex items-end gap-1.5">
                    <span className={`text-[3.5rem] leading-none font-extrabold tracking-tighter ${p.highlight ? "text-white" : "text-slate-900 dark:text-white"}`}>${p.price}</span>
                    <span className={`mb-2 text-sm font-medium ${p.highlight ? "text-white/70" : "text-slate-500 dark:text-slate-400"}`}>/{p.period}</span>
                  </div>
                  <div className={`my-7 hairline ${p.highlight ? "opacity-30" : "dark:opacity-30"}`} />
                  <ul className="space-y-3.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[13.5px]">
                        <span className={`w-5 h-5 mt-0.5 shrink-0 rounded-full grid place-items-center ${p.highlight ? "bg-white/15" : "bg-brand-100 dark:bg-brand-500/20"}`}>
                          <svg className={`w-3 h-3 ${p.highlight ? "text-white" : "text-brand-700 dark:text-brand-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className={p.highlight ? "text-white/90" : "text-slate-600 dark:text-slate-300"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`relative mt-9 w-full py-4 rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden group ${p.highlight ? "bg-white text-brand-700 hover:bg-brand-50 hover:shadow-[0_15px_40px_-12px_rgba(255,255,255,.4)]" : "btn-brand"}`}>
                    <span className="relative inline-flex items-center gap-2">
                      {p.cta}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}