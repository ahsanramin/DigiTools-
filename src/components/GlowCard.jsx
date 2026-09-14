import { useRef } from "react";

export default function GlowCard({ children, className = "", glowColor = "139, 92, 246" }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={onMove} className={`group relative overflow-hidden rounded-3xl transition-shadow duration-500 ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(500px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(${glowColor}, .12), transparent 60%)` }}
      />
      {children}
    </div>
  );
}