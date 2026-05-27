import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"boot" | "flash" | "done">("boot");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const dur = 1400;
    const tick = setInterval(() => {
      const p = Math.min(100, ((Date.now() - start) / dur) * 100);
      setProgress(p);
      if (p >= 100) clearInterval(tick);
    }, 16);
    const t1 = setTimeout(() => setPhase("flash"), 1400);
    const t2 = setTimeout(() => setPhase("done"), 1750);
    const t3 = setTimeout(() => onDone(), 2050);
    return () => {
      clearInterval(tick);
      [t1, t2, t3].forEach(clearTimeout);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden transition-opacity duration-500 flex items-center justify-center ${
        phase === "done" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, #060a1f 0%, #02030A 70%)",
      }}
    >
      {/* grid backdrop */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* radial glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.25), rgba(123,97,255,0.15) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Rotating rings */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full border border-cyan-400/30"
            style={{ animation: "spin 6s linear infinite" }}
          />
          <div
            className="absolute inset-3 rounded-full border border-purple-400/20"
            style={{ animation: "spin 8s linear infinite reverse" }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(0,229,255,0.6), transparent 30%)",
              animation: "spin 2.4s linear infinite",
              maskImage:
                "radial-gradient(circle, transparent 65%, black 66%, black 100%)",
              WebkitMaskImage:
                "radial-gradient(circle, transparent 65%, black 66%, black 100%)",
            }}
          />
          <img
            src={logo}
            alt=""
            className="w-24 h-24 object-contain drop-shadow-[0_0_24px_rgba(0,229,255,0.7)]"
          />
        </div>

        {/* Brand */}
        <div className="mt-10 text-center">
          <div className="font-display text-2xl tracking-[0.5em] text-gradient-neon font-bold">
            VYRONEX
          </div>
          <div className="text-[10px] tracking-[0.6em] text-cyan-300/70 mt-3 font-display">
            ENGINEERING DIGITAL PRESENCE
          </div>
        </div>

        {/* Progress */}
        <div className="mt-8 w-64">
          <div className="h-[2px] w-full bg-cyan-500/15 overflow-hidden rounded-full">
            <div
              className="h-full transition-[width] duration-100 ease-linear"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, #00E5FF, #7B61FF)",
                boxShadow: "0 0 12px rgba(0,229,255,0.8)",
              }}
            />
          </div>
          <div className="mt-2 flex justify-between text-[9px] tracking-[0.4em] text-cyan-300/60 font-display">
            <span>SYSTEM</span>
            <span>{Math.floor(progress).toString().padStart(3, "0")}%</span>
          </div>
        </div>
      </div>

      {phase === "flash" && (
        <div
          className="absolute inset-0 bg-white"
          style={{ animation: "flash 0.6s ease-out forwards" }}
        />
      )}
    </div>
  );
}
