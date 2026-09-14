import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bump, setBump] = useState(false);
  const prevCount = useRef(count);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (count !== prevCount.current) {
      setBump(true);
      const t = setTimeout(() => setBump(false), 600);
      prevCount.current = count;
      return () => clearTimeout(t);
    }
  }, [count]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
      ? "bg-white/60 dark:bg-ink-950/60 backdrop-blur-2xl shadow-[0_4px_30px_-12px_rgba(15,23,42,.15)] dark:shadow-[0_4px_30px_-12px_rgba(0,0,0,.6)] border-b border-white/40 dark:border-white/5"
      : "bg-white/30 dark:bg-ink-950/30 backdrop-blur-xl"}`}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-[68px] sm:h-[80px]">
          <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <span className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 grid place-items-center text-white font-black shadow-[0_8px_24px_-6px_rgba(124,58,237,.7)] group-hover:scale-105 transition-transform">
              <span className="relative z-10">D</span>
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
            </span>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight leading-none">
              <span className="text-gradient">Digi</span>
              <span className="text-slate-900 dark:text-white">Tools</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to}
                className={({ isActive }) => `group relative px-4 py-2.5 text-[13.5px] font-medium rounded-xl transition-all duration-300 ${isActive ? "text-brand-700 dark:text-brand-300" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"}`}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{l.label}</span>
                    {isActive && (
                      <>
                        <span className="absolute inset-0 rounded-xl bg-brand-50 dark:bg-brand-500/10" />
                        <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-6 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500" />
                      </>
                    )}
                    {!isActive && <span className="absolute inset-0 rounded-xl bg-slate-50 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <ThemeToggle />

            <Link to="/#products" className="relative p-2.5 rounded-xl hover:bg-brand-50/80 dark:hover:bg-white/5 transition-colors" aria-label="Cart">
              <svg className="w-5 h-5 text-slate-700 dark:text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {count > 0 && (
                <span className={`absolute -top-0.5 -right-0.5 min-w-[20px] h-5 px-1 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white text-[11px] font-bold grid place-items-center shadow-[0_4px_12px_-2px_rgba(124,58,237,.7)] transition-transform ${bump ? "scale-125" : "scale-100"}`}>
                  {count}
                </span>
              )}
            </Link>

            <button className="hidden md:inline-flex text-[13.5px] font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              Login
            </button>

            <MagneticButton as="button" onClick={() => navigate("/#pricing")} strength={12}
              className="hidden sm:inline-flex items-center gap-2 btn-brand px-5 py-2.5 rounded-full text-[13.5px] font-semibold"
            >
              Get Started
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </MagneticButton>

            <button className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors" onClick={() => setOpen((o) => !o)} aria-label="Menu">
              <span className="relative block w-5 h-4">
                <span className={`absolute left-0 w-5 h-[2px] bg-slate-800 dark:bg-slate-200 rounded transition-all ${open ? "top-1/2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 w-5 h-[2px] bg-slate-800 dark:bg-slate-200 rounded transition-all ${open ? "top-1/2 opacity-0" : "top-1/2"}`} />
                <span className={`absolute left-0 w-5 h-[2px] bg-slate-800 dark:bg-slate-200 rounded transition-all ${open ? "top-1/2 -rotate-45" : "top-full"}`} />
              </span>
            </button>
          </div>
        </div>

        <div className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${open ? "max-h-[28rem] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
          <nav className="flex flex-col gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
            {navLinks.map((l, i) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
                className={({ isActive }) => `px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300" : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"}`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {l.label}
              </NavLink>
            ))}
            <button onClick={() => { setOpen(false); navigate("/#pricing"); }} className="mt-3 btn-brand px-5 py-3.5 rounded-xl text-sm font-semibold">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}