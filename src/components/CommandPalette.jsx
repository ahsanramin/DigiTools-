import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const commands = [
  { id: "home", label: "Go to Home", hint: "Navigation", icon: "🏠", action: "/" },
  { id: "about", label: "Go to About", hint: "Navigation", icon: "👥", action: "/about" },
  { id: "blog", label: "Go to Blog", hint: "Navigation", icon: "📰", action: "/blog" },
  { id: "support", label: "Get Support", hint: "Navigation", icon: "💬", action: "/support" },
  { id: "contact", label: "Contact Us", hint: "Navigation", icon: "✉️", action: "/contact" },
  { id: "products", label: "Browse Products", hint: "Shop", icon: "📦", action: "/#products" },
  { id: "pricing", label: "View Pricing", hint: "Shop", icon: "💰", action: "/#pricing" },
  { id: "theme", label: "Toggle Theme", hint: "Appearance", icon: "🌓", action: "theme" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { toggle } = useTheme();

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
    else setQuery("");
  }, [open]);

  const filtered = useMemo(
    () => commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  useEffect(() => setActiveIdx(0), [query]);

  const run = (cmd) => {
    setOpen(false);
    if (cmd.action === "theme") toggle();
    else if (typeof cmd.action === "string" && cmd.action.startsWith("/")) {
      navigate(cmd.action);
      if (cmd.action.includes("#")) {
        const id = cmd.action.split("#")[1];
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, filtered.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); if (filtered[activeIdx]) run(filtered[activeIdx]); }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="Open command palette"
        className="hidden lg:flex fixed bottom-6 left-6 z-[90] items-center gap-3 px-4 py-3 rounded-2xl glass dark:glass-dark shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <svg className="w-4 h-4 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-[13px] font-medium text-slate-700 dark:text-slate-200">Quick search</span>
        <kbd className="ml-2 px-2 py-0.5 rounded-md bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-[10.5px] font-mono text-slate-500 dark:text-slate-400">⌘K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-md flex items-start justify-center pt-[12vh] px-4 animate-fadeIn" onClick={() => setOpen(false)}>
          <div className="w-full max-w-xl rounded-3xl glass dark:glass-dark shadow-[0_40px_80px_-20px_rgba(0,0,0,.6)] overflow-hidden animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200/60 dark:border-white/10">
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={onKeyDown} placeholder="Search commands, pages, actions..." className="flex-1 bg-transparent outline-none text-[14.5px] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" />
              <kbd className="px-2 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-[10.5px] font-mono text-slate-500 dark:text-slate-400">ESC</kbd>
            </div>
            <div className="max-h-96 overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <div className="px-5 py-8 text-center text-sm text-slate-500 dark:text-slate-400">No results for "{query}"</div>
              ) : (
                filtered.map((c, i) => (
                  <button key={c.id} onClick={() => run(c)} onMouseEnter={() => setActiveIdx(i)}
                    className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${i === activeIdx ? "bg-brand-50 dark:bg-brand-500/10" : "hover:bg-slate-50 dark:hover:bg-white/5"}`}
                  >
                    <span className="w-8 h-8 rounded-lg bg-white dark:bg-white/10 grid place-items-center text-base shadow-sm">{c.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{c.label}</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">{c.hint}</p>
                    </div>
                    {i === activeIdx && <kbd className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-[10.5px] font-mono text-slate-500 dark:text-slate-400">↵</kbd>}
                  </button>
                ))
              )}
            </div>
            <div className="flex items-center justify-between px-5 py-3 border-t border-slate-200/60 dark:border-white/10 text-[11px] text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-4"><span>↑↓ navigate</span><span>↵ select</span></div>
              <span>DigiTools Command Palette</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}