import { useRef, useState } from "react";

export default function MagneticButton({
  children, className = "", strength = 30, as: As = "button", ...props
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: (x / rect.width) * strength, y: (y / rect.height) * strength });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <As
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`, transition: "transform .35s cubic-bezier(.2,.8,.2,1)" }}
      className={className}
      {...props}
    >
      {children}
    </As>
  );
}