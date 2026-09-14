import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";

const allPosts = [
  { title: "10 AI Tools That Will Replace Your Entire Workflow", cat: "AI Tools", date: "Mar 24, 2026", read: "6 min read", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" },
  { title: "The Ultimate Guide to SaaS Pricing Psychology", cat: "Business", date: "Mar 18, 2026", read: "8 min read", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" },
  { title: "How Designers Are Using Templates to Ship 5x Faster", cat: "Design", date: "Mar 09, 2026", read: "5 min read", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" },
  { title: "Building a High-Performance Remote Team in 2026", cat: "Productivity", date: "Mar 02, 2026", read: "7 min read", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80" },
  { title: "Why Your Design System Slows You Down", cat: "Design", date: "Feb 22, 2026", read: "9 min read", img: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=800&q=80" },
  { title: "The 2026 Guide to Creator Monetization", cat: "Business", date: "Feb 14, 2026", read: "11 min read", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80" },
];

export default function Blog() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50 dark:from-brand-950/40 to-white dark:to-ink-950 py-16 lg:py-24 overflow-hidden noise">
        <div className="absolute -top-40 -left-20 w-96 h-96 rounded-full bg-brand-300/30 dark:bg-brand-600/20 blur-3xl animate-blob" />
        <div className="container-x text-center max-w-3xl relative">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Latest <span className="text-gradient">Articles</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="mt-6 text-slate-500 dark:text-slate-400 text-lg">
              Deep dives, tutorials and ideas for modern creators and product teams.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 bg-white dark:bg-ink-950">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {allPosts.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 60}>
                <article className="group rounded-3xl bg-white dark:bg-white/[0.02] overflow-hidden border border-slate-100 dark:border-white/5 hover:shadow-[0_25px_50px_-20px_rgba(124,58,237,.35)] transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-500/15 text-brand-700 dark:text-brand-300 font-semibold">{p.cat}</span>
                      <span className="text-slate-400 dark:text-slate-500">{p.date} · {p.read}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <span className="mt-4 inline-block text-sm font-semibold text-brand-600 dark:text-brand-400">
                      Read article →
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}