import SectionHeading from "../components/SectionHeading";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import TopExperts from "../components/TopExperts";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50 dark:from-brand-950/40 to-white dark:to-ink-950 py-16 lg:py-24 overflow-hidden noise">
        <div className="absolute -top-40 -right-20 w-96 h-96 rounded-full bg-brand-300/30 dark:bg-brand-600/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-fuchsia-300/30 dark:bg-fuchsia-600/20 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="container-x text-center max-w-3xl relative">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-500/15 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wide mb-4">
              About Us
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              We build tools that <span className="text-gradient">amplify creators</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              DigiTools started with a simple belief: creative professionals deserve premium tools without the enterprise price tag. Today, 50,000+ creators across 180 countries use our platform every day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Stats />

      <section className="py-20 lg:py-28 bg-white dark:bg-ink-950">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute inset-0 -m-4 bg-gradient-to-tr from-brand-200/60 to-indigo-200/40 dark:from-brand-600/30 dark:to-indigo-600/20 blur-2xl rounded-[3rem] animate-blob" />
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Team"
                className="relative w-full h-[420px] object-cover rounded-[2rem] shadow-xl"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div>
              <SectionHeading center={false} eyebrow="Our Mission"
                title="Make world-class tools accessible to everyone"
                subtitle="Every tool we ship is hand-crafted, brutally fast, and priced so a solo creator can afford the same stack as a Fortune-500 design team."
              />
              <ul className="space-y-4">
                {[
                  "Obsessively customer-driven product decisions",
                  "Transparent pricing with zero surprise fees",
                  "Ships weekly — new features, no waiting",
                  "Carbon-neutral infrastructure & sustainable growth",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-slate-600 dark:text-slate-300">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-brand-300 grid place-items-center text-xs font-bold">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <TopExperts />
      <Testimonials />
    </>
  );
}