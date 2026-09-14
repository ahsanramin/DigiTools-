import { useEffect, useRef, useState } from "react";

export default function PremiumCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = (e) => setEnabled(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("has-custom-cursor");
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my, raf;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onOver = (e) => {
      const interactive = e.target.closest("a, button, [role='button'], input, textarea, select, label");
      setHovering(!!interactive);
    };
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={ringRef} className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference"
        style={{
          width: hovering ? 60 : 36, height: hovering ? 60 : 36,
          border: "1.5px solid rgba(139,92,246,.9)",
          background: hovering ? "rgba(139,92,246,.15)" : "transparent",
          transition: "width .25s ease, height .25s ease, background .25s ease",
        }}
      />
      <div ref={dotRef} className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-brand-500"
        style={{
          width: hovering ? 6 : 8, height: hovering ? 6 : 8,
          boxShadow: "0 0 20px rgba(139,92,246,.8)",
          transition: "width .2s ease, height .2s ease",
        }}
      />
    </>
  );
}