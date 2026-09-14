import { useEffect, useRef, useState } from "react";

export default function TextReveal({ text, className = "", delay = 0, wordDelay = 60, as: As = "span" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = String(text).split(" ");
  return (
    <As ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span
            className="inline-block"
            style={{
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transition: `transform .8s cubic-bezier(.16,1,.3,1) ${delay + i * wordDelay}ms, opacity .6s ease ${delay + i * wordDelay}ms`,
            }}
          >
            {w}{i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </As>
  );
}