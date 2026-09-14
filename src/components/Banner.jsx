import { useRef, useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Marquee from "./Marquee";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";

const trustedBy = ["Notion", "Figma", "Vercel", "Stripe", "Linear", "Framer", "Webflow", "Slack", "Zapier", "Loom"];

export default function Banner() {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={onMove}
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-white dark:from-ink-950 dark:via-brand-950/20 dark:to-ink-950 noise"
    >
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[38rem] h-[38rem] rounded-full bg-gradient-to-br from-brand-300/40 to-indigo-300/30 dark:from-brand-600/25 dark:to-indigo-600/15 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -left-40 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-fuchsia-200/40 to-brand-200/40 dark:from-fuchsia-600/15 dark:to-brand-600/15 blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
        <div className="absolute bottom-0 left-1/2 w-[28rem] h-[28rem] rounded-full bg-sky-200/30 dark:bg-sky-500/10 blur-3xl animate-blob" style={{ animationDelay: "-8s" }} />
      </div>

      {/* Particle field */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <ParticleField count={50} color="139, 92, 246" maxSize={2.5} speed={0.35} connected />
      </div>

      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(139,92,246,.10), transparent 60%)" }}
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 mesh-grid opacity-40"
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      <div className="container-x relative pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* ============== LEFT: COPY ============== */}
          <div>
            {/* Badge */}
            <ScrollReveal>
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass dark:glass-dark border border-brand-100 dark:border-brand-500/20 text-brand-700 dark:text-brand-300 text-xs sm:text-[13px] font-semibold shadow-[0_4px_20px_-6px_rgba(124,58,237,.3)]">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping" />
                  <span className="relative w-2 h-2 rounded-full bg-brand-600" />
                </span>
                New: AI-Powered Tools Available
                <span className="text-brand-400">→</span>
              </span>
            </ScrollReveal>

            {/* Heading — fixed so BOTH lines always show */}
            <h1 className="mt-6 text-[2.25rem] leading-[1.08] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-extrabold text-slate-900 dark:text-white tracking-tight">
              {/* Line 1 — plain white/dark text */}
              <ScrollReveal delay={150}>
                <span className="block">Supercharge Your</span>
              </ScrollReveal>

              {/* Line 2 — gradient text (kept directly on the element so background-clip works) */}
              <ScrollReveal delay={350}>
                <span className="relative inline-block">
                  <span className="text-gradient">Digital Workflow</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-brand-300/60 dark:text-brand-500/40"
                    viewBox="0 0 300 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9C60 2 120 2 180 6C220 9 260 8 298 4"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </ScrollReveal>
            </h1>

            {/* Description */}
            <ScrollReveal delay={450}>
              <p className="mt-6 text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                Access premium AI tools, design assets, templates, and productivity
                software — all in one beautifully unified platform. Start creating
                faster today.
              </p>
            </ScrollReveal>

            {/* Buttons */}
            <ScrollReveal delay={550}>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton
                  as="a"
                  href="#products"
                  strength={20}
                  className="btn-brand px-7 py-3.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 group"
                >
                  Explore Products
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </MagneticButton>

                <MagneticButton
                  as="button"
                  strength={16}
                  className="group px-7 py-3.5 rounded-full font-semibold text-sm border border-slate-200 dark:border-white/10 glass dark:glass-dark text-slate-800 dark:text-white hover:border-brand-300 dark:hover:border-brand-500/50 inline-flex items-center gap-2.5 transition-all"
                >
                  <span className="w-7 h-7 rounded-full bg-brand-50 dark:bg-brand-500/15 grid place-items-center group-hover:bg-brand-100 dark:group-hover:bg-brand-500/25 transition-colors">
                    <svg className="w-3 h-3 text-brand-600 dark:text-brand-400 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  Watch Demo
                </MagneticButton>
              </div>
            </ScrollReveal>

            {/* Social proof */}
            <ScrollReveal delay={650}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <div className="flex -space-x-3">
                  {["12", "32", "45", "5", "68"].map((n) => (
                    <img
                      key={n}
                      src={`https://i.pravatar.cc/80?img=${n}`}
                      alt="user"
                      className="w-10 h-10 rounded-full border-[2.5px] border-white dark:border-ink-900 shadow-md hover:scale-110 hover:z-10 transition-transform"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-amber-400 text-[15px]">
                    ★★★★★
                    <span className="ml-2 text-slate-700 dark:text-slate-200 font-semibold">4.9/5</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 mt-1 text-[13px]">
                    Loved by{" "}
                    <span className="font-semibold text-slate-800 dark:text-white">50,000+</span>{" "}
                    creators
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ============== RIGHT: VISUAL ============== */}
          <ScrollReveal delay={200} y={40}>
            <div className="relative" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
              {/* Glow behind the card */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-brand-400/40 via-fuchsia-300/30 to-indigo-400/30 dark:from-brand-600/30 dark:via-fuchsia-600/20 dark:to-indigo-600/30 blur-3xl rounded-[3rem] animate-tilt" />

              <TiltCard
                max={8}
                scale={1.01}
                className="relative rounded-[2rem] overflow-hidden border border-white/70 dark:border-white/10 shadow-[0_40px_80px_-30px_rgba(76,29,149,.55)] bg-white dark:bg-ink-900"
              >
                {/* ⬇️ NEW IMAGE — futuristic hand + digital interface (matches Figma vibe) ⬇️ */}
                <img
                  src="https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=1200&q=80"
                  alt="Hand interacting with digital interface"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
                />
                {/* ⬆️ NEW IMAGE ⬆️ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </TiltCard>

              {/* Floating card 1 — Productivity */}
              <div className="absolute -bottom-6 -left-3 sm:-left-8 glass dark:glass-dark rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-white/80 dark:border-white/10 animate-floaty">
                <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 grid place-items-center text-white shadow-md">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Productivity
                  </p>
                  <p className="text-base font-extrabold text-slate-900 dark:text-white">+245%</p>
                </div>
              </div>

              {/* Floating card 2 — Tools Ready */}
              <div
                className="absolute -top-4 -right-3 sm:-right-8 glass dark:glass-dark rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-white/80 dark:border-white/10 animate-floaty"
                style={{ animationDelay: "-3s" }}
              >
                <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center text-white shadow-md">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Tools ready
                  </p>
                  <p className="text-base font-extrabold text-slate-900 dark:text-white">200+</p>
                </div>
              </div>

              {/* Floating card 3 — Live users */}
              <div
                className="absolute top-1/2 -right-4 sm:-right-10 glass dark:glass-dark rounded-2xl shadow-lg p-3 border border-white/80 dark:border-white/10 animate-floaty"
                style={{ animationDelay: "-6s" }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    2,341 active now
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ============== TRUSTED BY MARQUEE ============== */}
      <div className="relative border-t border-slate-100 dark:border-white/5 bg-white/40 dark:bg-ink-950/40 backdrop-blur">
        <div className="container-x py-8">
          <p className="text-center text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-6">
            Trusted by teams at the world's best companies
          </p>
          <Marquee
            items={trustedBy.map((n) => (
              <span
                key={n}
                className="text-2xl sm:text-3xl font-extrabold text-slate-700 dark:text-slate-300 tracking-tight"
              >
                {n}
              </span>
            ))}
            speed={38}
          />
        </div>
      </div>
    </section>
  );
}