import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  { title: "SOC-2 Compliant", desc: "Enterprise-grade security audited yearly.", icon: "🛡️" },
  { title: "99.99% Uptime", desc: "Backed by a global multi-region infrastructure.", icon: "📶" },
  { title: "24/7 Support", desc: "Real humans, ready to help anytime, anywhere.", icon: "💬" },
  { title: "Money-Back", desc: "30-day refund guarantee, no questions asked.", icon: "💸" },
  { title: "Trusted by 50K+", desc: "Creators, agencies and Fortune-500 teams.", icon: "🏆" },
  { title: "Weekly Updates", desc: "New features and tools shipped every week.", icon: "🚀" },
];

export default function WhyTrustUs() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
      <div className="container-x">
        <SectionHeading eyebrow="Why Us" title="Why Clients Trust Us"
          subtitle="We obsess over reliability, security and customer success so you can focus on creating."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 80}>
              <div className="rounded-2xl border border-slate-100 dark:border-white/5 bg-gradient-to-br from-white to-slate-50 dark:from-white/[0.02] dark:to-white/[0.04] p-7 hover:shadow-[0_18px_40px_-20px_rgba(124,58,237,.35)] transition-all duration-500 hover:-translate-y-1">
                <div className="text-4xl mb-4">{r.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">{r.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}