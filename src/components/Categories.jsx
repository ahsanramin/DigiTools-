import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const cats = [
  { name: "Writing & AI", count: 48, icon: "✍️", bg: "bg-violet-100 dark:bg-violet-500/15" },
  { name: "Design Assets", count: 126, icon: "🎨", bg: "bg-pink-100 dark:bg-pink-500/15" },
  { name: "Productivity", count: 74, icon: "📈", bg: "bg-emerald-100 dark:bg-emerald-500/15" },
  { name: "Video & Audio", count: 39, icon: "🎬", bg: "bg-amber-100 dark:bg-amber-500/15" },
  { name: "Developer Tools", count: 61, icon: "💻", bg: "bg-sky-100 dark:bg-sky-500/15" },
  { name: "Marketing", count: 88, icon: "📣", bg: "bg-rose-100 dark:bg-rose-500/15" },
  { name: "Cloud & Storage", count: 22, icon: "☁️", bg: "bg-indigo-100 dark:bg-indigo-500/15" },
  { name: "Automation", count: 33, icon: "⚙️", bg: "bg-teal-100 dark:bg-teal-500/15" },
];

export default function Categories() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-ink-900">
      <div className="container-x">
        <SectionHeading eyebrow="Categories" title="Browse by category"
          subtitle="Find exactly the tool you need — we've organized 200+ premium products into intuitive categories."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {cats.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 60}>
              <button className="group w-full text-left rounded-2xl bg-white dark:bg-white/[0.02] p-5 border border-slate-100 dark:border-white/5 hover:border-brand-300 dark:hover:border-brand-500/50 hover:shadow-[0_18px_40px_-20px_rgba(124,58,237,.4)] transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl ${c.bg} grid place-items-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>{c.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{c.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{c.count} tools</p>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}