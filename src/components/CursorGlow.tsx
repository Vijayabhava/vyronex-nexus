import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const leave = () => setHidden(true);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[90] mix-blend-screen transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: hidden ? 0 : 1,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="rounded-full"
          style={{
            width: 300,
            height: 300,
            background:
              "radial-gradient(circle, rgba(0,229,255,0.18), rgba(123,97,255,0.08) 40%, transparent 70%)",
          }}
        />
      </div>
      <div
        className="pointer-events-none fixed z-[91] rounded-full border border-cyan-400/80 transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          width: 14,
          height: 14,
          opacity: hidden ? 0 : 1,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 12px rgba(0,229,255,0.9)",
        }}
      />
    </>
  );
}
