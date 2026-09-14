export default function Marquee({ items, speed = 30 }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden group">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white dark:from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white dark:from-ink-950 to-transparent" />
      <div
        className="flex gap-16 w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}