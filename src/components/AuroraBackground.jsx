export default function AuroraBackground({ className = "", variant = "default" }) {
  const palettes = {
    default: [
      "from-brand-300/40 to-indigo-300/30 dark:from-brand-600/25 dark:to-indigo-600/15",
      "from-fuchsia-200/40 to-brand-200/40 dark:from-fuchsia-600/20 dark:to-brand-600/15",
      "from-sky-200/30 dark:from-sky-500/15",
    ],
    warm: [
      "from-amber-300/40 to-orange-300/30 dark:from-amber-600/25 dark:to-orange-600/15",
      "from-rose-200/40 to-pink-200/40 dark:from-rose-600/20 dark:to-pink-600/15",
      "from-fuchsia-200/30 dark:from-fuchsia-500/15",
    ],
    cool: [
      "from-sky-300/40 to-cyan-300/30 dark:from-sky-600/25 dark:to-cyan-600/15",
      "from-blue-200/40 to-indigo-200/40 dark:from-blue-600/20 dark:to-indigo-600/15",
      "from-violet-200/30 dark:from-violet-500/15",
    ],
  };
  const pal = palettes[variant] || palettes.default;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className={`absolute -top-40 -right-40 w-[42rem] h-[42rem] rounded-full bg-gradient-to-br ${pal[0]} blur-3xl animate-blob`} />
      <div className={`absolute top-1/3 -left-40 w-[34rem] h-[34rem] rounded-full bg-gradient-to-br ${pal[1]} blur-3xl animate-blob`} style={{ animationDelay: "-4s" }} />
      <div className={`absolute bottom-0 left-1/2 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br ${pal[2]} blur-3xl animate-blob`} style={{ animationDelay: "-8s" }} />
      <div className="absolute inset-0 mesh-grid opacity-40"
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
}