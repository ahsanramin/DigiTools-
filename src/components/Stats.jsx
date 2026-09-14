import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 50, suffix: "K+", label: "Active Users", icon: "👥" },
  { value: 200, suffix: "+", label: "Premium Tools", icon: "🧰" },
  { value: 4.9, decimals: 1, label: "Average Rating", icon: "⭐" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-700 noise">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-blob" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-indigo-300/20 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      </div>
      <div className="container-x relative py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 120}>
              <div className="text-center py-8 sm:py-2 px-6 group">
                <div className="text-3xl mb-3 opacity-80 group-hover:scale-110 transition-transform">{s.icon}</div>
                <p className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white tracking-tighter leading-none">
                  <AnimatedCounter end={s.value} decimals={s.decimals || 0} suffix={s.suffix || ""} duration={2200} />
                </p>
                <p className="mt-3 text-white/75 font-medium text-sm tracking-wide uppercase">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}