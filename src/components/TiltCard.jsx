import { useRef, useState } from "react";

export default function TiltCard({ children, className = "", max = 12, scale = 1.02, glare = true }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -max * 2;
    const ry = (px - 0.5) * max * 2;
    setStyle({ transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`, transition: "transform .1s linear" });
    if (glare) setGlareStyle({ opacity: 0.35, background: `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,.5), transparent 60%)` });
  };
  const onLeave = () => {
    setStyle({ transform: "perspective(1000px) rotateX(0) rotateY(0) scale(1)", transition: "transform .5s cubic-bezier(.2,.8,.2,1)" });
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`relative will-change-transform ${className}`} style={style}>
      {children}
      {glare && <div className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300" style={glareStyle} />}
    </div>
  );
}