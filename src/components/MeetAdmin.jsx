import ScrollReveal from "./ScrollReveal";

export default function MeetAdmin() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute inset-0 -m-4 bg-gradient-to-tr from-brand-200/60 to-indigo-200/40 dark:from-brand-600/30 dark:to-indigo-600/20 blur-2xl rounded-[3rem] animate-blob" />
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Founder"
                className="relative w-full h-[380px] sm:h-[480px] object-cover rounded-[2rem] shadow-xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-500/15 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wide mb-4">
                Meet the Admin
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Hi, I'm Anika — founder of <span className="text-gradient">DigiTools</span>
              </h2>
              <p className="mt-6 text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                After a decade of building products for creators and agencies, I realized the market was flooded with disconnected, overpriced tools. DigiTools is my answer: a single, thoughtfully-designed platform where every tool works beautifully with the next.
              </p>
              <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">
                My mission is simple — give every creator the same superpowers that top studios pay six figures for, at a price anyone can afford.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { v: "10+", l: "Years Building" },
                  { v: "50K+", l: "Happy Users" },
                  { v: "200+", l: "Tools Shipped" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-3xl font-extrabold text-brand-600 dark:text-brand-400">{s.v}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{s.l}</p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex gap-4">
                <button className="btn-brand px-7 py-3 rounded-full font-semibold text-sm">Connect With Me</button>
                <button className="px-7 py-3 rounded-full font-semibold text-sm border-2 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  Our Story
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}