import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[100] bg-gradient-to-r from-brand-500 via-fuchsia-500 to-indigo-500 transition-[width] duration-100"
      style={{ width: `${progress}%`, boxShadow: "0 0 12px rgba(139,92,246,.8)" }}
    />
  );
}