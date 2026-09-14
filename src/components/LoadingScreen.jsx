import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`fixed inset-0 z-[300] bg-white dark:bg-ink-950 grid place-items-center transition-opacity duration-700 ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500 to-brand-800 grid place-items-center text-white text-3xl font-black shadow-[0_20px_60px_-10px_rgba(124,58,237,.7)] animate-jelly">
            D
          </div>
          <div className="absolute -inset-3 rounded-[2rem] border-2 border-brand-500/30 animate-spin-slow" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Loading DigiTools</span>
          <span className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: "300ms" }} />
          </span>
        </div>
      </div>
    </div>
  );
}