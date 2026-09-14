import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

const items = [
  { v: 1.2, suffix: "M+", decimals: 1, l: "Projects Completed" },
  { v: 180, suffix: "+", l: "Countries Served" },
  { v: 98, suffix: "%", l: "Customer Retention" },
  { v: 4.8, prefix: "$", suffix: "M", decimals: 1, l: "Saved For Clients" },
];

export default function ImpactNumbers() {
  return (
    <section className="py-20 lg:py-24 bg-slate-950 dark:bg-ink-950 text-white relative overflow-hidden noise">
      <div className="absolute -top-40 left-1/3 w-[28rem] h-[28rem] bg-brand-700/30 blur-3xl rounded-full animate-blob" />
      <div className="absolute -bottom-40 right-1/4 w-[28rem] h-[28rem] bg-indigo-700/20 blur-3xl rounded-full animate-blob" style={{ animationDelay: "-7s" }} />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-4">Our Impact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Our Impact in <span className="text-brand-400">Numbers</span>
          </h2>
          <p className="mt-4 text-slate-400">Measurable outcomes delivered for creators and businesses worldwide.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i, idx) => (
            <ScrollReveal key={i.l} delay={idx * 100}>
              <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-7 text-center hover:bg-white/10 transition-colors hover:-translate-y-1 duration-300">
                <p className="text-4xl sm:text-5xl font-extrabold text-brand-400">
                  <AnimatedCounter end={i.v} decimals={i.decimals || 0} prefix={i.prefix || ""} suffix={i.suffix || ""} duration={2200} />
                </p>
                <p className="mt-3 text-slate-300 text-sm">{i.l}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}