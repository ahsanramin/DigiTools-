import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  { name: "Sarah Mitchell", role: "Content Creator", img: "https://i.pravatar.cc/150?img=45", text: "DigiTools completely changed how I create content. The AI Writing Pro alone saves me 12+ hours every week." },
  { name: "Marcus Chen", role: "Founder · Nova Studio", img: "https://i.pravatar.cc/150?img=15", text: "The design templates pack is worth every penny. Our team's output has tripled without any drop in quality." },
  { name: "Priya Sharma", role: "Product Designer", img: "https://i.pravatar.cc/150?img=48", text: "Elegant interface, thoughtful UX, and the customer support is genuinely the best I've ever experienced." },
  { name: "James O'Connor", role: "Marketing Lead", img: "https://i.pravatar.cc/150?img=33", text: "The social media kit is a game-changer. We've replaced 4 different subscriptions with just this one." },
  { name: "Amara Okafor", role: "Indie Hacker", img: "https://i.pravatar.cc/150?img=44", text: "I shipped my entire SaaS in 3 weeks using DigiTools. Best value tool on the market, period." },
  { name: "Leo Martins", role: "Creative Director", img: "https://i.pravatar.cc/150?img=13", text: "The quality of assets and templates is outstanding. Feels like having a senior design team in my pocket." },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-ink-900 dark:to-ink-950 overflow-hidden">
      <div className="container-x">
        <SectionHeading eyebrow="Testimonials" title={<>Loved by <span className="text-gradient">creators worldwide</span></>}
          subtitle="Here's what our customers say about building with DigiTools."
        />
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {reviews.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 80} className="mb-6 break-inside-avoid">
              <figure className="group relative rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 p-7 shadow-[0_4px_24px_-8px_rgba(15,23,42,.08)] hover:shadow-[0_25px_50px_-20px_rgba(124,58,237,.3)] hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-amber-400 text-lg">★★★★★</div>
                  <svg className="w-6 h-6 text-brand-200 dark:text-brand-500/40 group-hover:text-brand-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.5 8.5c0-1.5-1-2.5-2.5-2.5S4.5 7 4.5 8.5c0 3 4.5 5 4.5 5v3H6v-2c-1.5-.5-3-2-3-4.5C3 6 5 4 7 4s4 2 4 4.5H9.5zm10 0c0-1.5-1-2.5-2.5-2.5s-2.5 1-2.5 2.5c0 3 4.5 5 4.5 5v3H16v-2c-1.5-.5-3-2-3-4.5 0-3.5 2-5.5 4-5.5s4 2 4 4.5h-1.5z" />
                  </svg>
                </div>
                <blockquote className="text-[14.5px] text-slate-600 dark:text-slate-300 leading-relaxed">"{r.text}"</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5 flex items-center gap-3">
                  <img src={r.img} alt={r.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-white dark:ring-ink-900 shadow-md" />
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{r.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{r.role}</p>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}