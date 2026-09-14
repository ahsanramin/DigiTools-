import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const featured = [
  { title: "AI-Powered Tools", desc: "Leverage the latest frontier AI models to write, design and automate in seconds.", gradient: "from-violet-500 to-purple-700", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 6.9L21 11l-6.6 2.1L12 20l-2.4-6.9L3 11l6.6-2.1L12 2z" /></svg> },
  { title: "Cloud Collaboration", desc: "Work with your team in real-time, from anywhere in the world, on any device.", gradient: "from-sky-500 to-blue-700", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A6 6 0 003 15z" /></svg> },
  { title: "Enterprise Security", desc: "SOC-2 compliant infrastructure with end-to-end encryption turned on by default.", gradient: "from-emerald-500 to-teal-700", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v6c0 5-3.5 9-8 9s-8-4-8-9V6l8-3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg> },
  { title: "Lightning Fast", desc: "Global CDN and edge computing keep every tool under 100ms of latency.", gradient: "from-amber-500 to-orange-600", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
];

export default function Featured() {
  return (
    <section className="relative py-20 lg:py-28 bg-white dark:bg-ink-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />
      <div className="container-x relative">
        <SectionHeading eyebrow="Featured" title={<>Everything you need, <span className="text-gradient">in one platform</span></>}
          subtitle="From AI writing assistants to premium design assets — DigiTools brings your entire creative stack together."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 100}>
              <div className="group relative h-full rounded-3xl border border-slate-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_35px_70px_-25px_rgba(124,58,237,.4)] dark:hover:shadow-[0_35px_70px_-25px_rgba(139,92,246,.5)] grad-border">
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} grid place-items-center text-white shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors">{f.title}</h3>
                <p className="mt-2.5 text-[13.5px] text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-600 dark:text-brand-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}