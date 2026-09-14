import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const experts = [
  { name: "Ayesha Rahman", role: "AI Product Lead", img: "https://i.pravatar.cc/300?img=47" },
  { name: "Daniel Carter", role: "Design Systems Expert", img: "https://i.pravatar.cc/300?img=12" },
  { name: "Maya Patel", role: "Automation Engineer", img: "https://i.pravatar.cc/300?img=32" },
  { name: "Liam Novak", role: "Cloud Architect", img: "https://i.pravatar.cc/300?img=68" },
];

export default function TopExperts() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-ink-900">
      <div className="container-x">
        <SectionHeading eyebrow="Our Team" title="Meet Our Top Experts"
          subtitle="A world-class team of engineers, designers and product specialists behind every tool."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((e, i) => (
            <ScrollReveal key={e.name} delay={i * 100}>
              <div className="group rounded-3xl bg-white dark:bg-white/[0.02] overflow-hidden border border-slate-100 dark:border-white/5 hover:shadow-[0_25px_50px_-20px_rgba(124,58,237,.35)] transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={e.img} alt={e.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold">{e.name}</p>
                    <p className="text-white/80 text-sm">{e.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}