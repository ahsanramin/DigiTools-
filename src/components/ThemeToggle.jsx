import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-14 h-8 rounded-full transition-colors duration-500 overflow-hidden shadow-inner bg-gradient-to-r from-brand-100 to-indigo-100 dark:from-indigo-900 dark:to-brand-950 ring-1 ring-slate-200 dark:ring-white/10"
    >
      <span className="absolute inset-0 opacity-60">
        <span className="absolute top-1.5 left-2 text-[9px]">☀️</span>
        <span className="absolute top-1.5 right-2 text-[9px]">🌙</span>
      </span>
      <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center transition-all duration-500 ${isDark ? "translate-x-6 rotate-[360deg]" : "translate-x-0 rotate-0"}`}>
        {isDark ? (
          <svg className="w-3.5 h-3.5 text-brand-300" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></svg>
        ) : (
          <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4" /><g stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></g></svg>
        )}
      </span>
    </button>
  );
}