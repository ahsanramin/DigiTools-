const items = [
  "🎉 Black Friday — 40% off all Pro plans",
  "✨ New AI Writing Pro v3 is live",
  "🚀 Free migration for teams switching from competitors",
  "🎁 Get 30 days free when you invite 3 friends",
  "⚡ 200+ premium tools at your fingertips",
];

export default function AnnouncementBar() {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-brand-700 via-fuchsia-700 to-indigo-700 text-white text-[12.5px] py-2.5">
      <div className="flex w-max animate-marquee gap-12" style={{ animationDuration: "50s" }}>
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-3 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />{t}
          </span>
        ))}
      </div>
    </div>
  );
}