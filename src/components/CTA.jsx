import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden noise">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-indigo-700 animate-gradient" />
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-fuchsia-400/40 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-indigo-400/40 blur-3xl animate-blob" style={{ animationDelay: "-5s" }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-violet-300/30 blur-3xl animate-blob" style={{ animationDelay: "-9s" }} />
      </div>
      <div className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      <div className="container-x relative text-center text-white">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Free 14-day trial · No credit card
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-[2.25rem] sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.05] tracking-tight">
            Ready To Transform<br className="hidden sm:block" /> Your Workflow?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-6 text-white/85 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#products" className="group relative px-8 py-4 rounded-full bg-white text-brand-700 font-bold hover:bg-brand-50 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(255,255,255,.5)] inline-flex items-center gap-2">
              Explore Products
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <Link to="/#pricing" className="px-8 py-4 rounded-full border-2 border-white/60 text-white font-semibold hover:bg-white/10 hover:border-white backdrop-blur transition-all hover:-translate-y-0.5">
              View Pricing
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
            {["14-day free trial", "No credit card required", "Cancel anytime"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {t}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}