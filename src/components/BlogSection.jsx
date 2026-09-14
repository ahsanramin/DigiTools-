import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const posts = [
  { title: "10 AI Tools That Will Replace Your Entire Workflow", cat: "AI Tools", date: "Mar 24, 2026", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" },
  { title: "The Ultimate Guide to SaaS Pricing Psychology", cat: "Business", date: "Mar 18, 2026", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" },
  { title: "How Designers Are Using Templates to Ship 5x Faster", cat: "Design", date: "Mar 09, 2026", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" },
];

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-ink-900">
      <div className="container-x">
        <SectionHeading eyebrow="Blog" title="Latest Tips & Articles"
          subtitle="Insights, tutorials and product updates from the DigiTools team."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <article className="group rounded-3xl bg-white dark:bg-white/[0.02] overflow-hidden border border-slate-100 dark:border-white/5 hover:shadow-[0_25px_50px_-20px_rgba(124,58,237,.35)] transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-500/15 text-brand-700 dark:text-brand-300 font-semibold">{p.cat}</span>
                    <span className="text-slate-400 dark:text-slate-500">{p.date}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors leading-snug">{p.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
                    Read more <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
