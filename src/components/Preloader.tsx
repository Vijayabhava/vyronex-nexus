import { useEffect, useState } from "react";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"fall" | "impact" | "flash" | "done">("fall");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("impact"), 700);
    const t2 = setTimeout(() => setPhase("flash"), 950);
    const t3 = setTimeout(() => setPhase("done"), 1450);
    const t4 = setTimeout(() => onDone(), 1750);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden transition-opacity duration-500 ${
        phase === "done" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, #0a0e2a 0%, #03040A 70%)",
      }}
    >
      {/* storm clouds */}
      <div className="absolute inset-0 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(60,80,140,0.5), transparent 40%), radial-gradient(circle at 80% 20%, rgba(40,60,120,0.5), transparent 40%), radial-gradient(circle at 50% 80%, rgba(20,30,80,0.6), transparent 50%)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
      </div>

      {/* lightning flicker layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(150,200,255,0.4), transparent 50%)",
          animation: "lightning-flicker 1.6s ease-out 2",
        }}
      />

      {/* Hammer */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
          phase === "impact" ? "animate-pulse" : ""
        }`}
        style={{
          animation: phase === "fall" ? "hammer-fall 1.6s cubic-bezier(.7,.05,.3,1) forwards" : undefined,
        }}
      >
        <Hammer />
      </div>

      {/* Shockwave */}
      {(phase === "impact" || phase === "flash") && (
        <>
          <div
            className="absolute left-1/2 top-1/2 rounded-full border-2"
            style={{
              borderColor: "rgba(0,229,255,0.9)",
              width: 200,
              height: 200,
              animation: "shockwave 1s ease-out forwards",
              boxShadow: "0 0 60px rgba(0,229,255,0.8)",
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 rounded-full border"
            style={{
              borderColor: "rgba(123,97,255,0.7)",
              width: 200,
              height: 200,
              animation: "shockwave 1.4s ease-out forwards",
            }}
          />
        </>
      )}

      {/* White flash */}
      {phase === "flash" && (
        <div className="absolute inset-0 bg-white" style={{ animation: "flash 0.7s ease-out forwards" }} />
      )}

      {/* Brand text */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center">
        <div className="font-display text-2xl tracking-[0.4em] text-gradient-neon font-bold">
          VYRONEX
        </div>
        <div className="text-xs tracking-[0.5em] text-cyan-300/70 mt-2">
          INITIALIZING
        </div>
      </div>
    </div>
  );
}

function Hammer() {
  return (
    <svg width="120" height="180" viewBox="0 0 120 180" fill="none">
      <defs>
        <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#cfd8e6" />
          <stop offset="50%" stopColor="#7e8a9c" />
          <stop offset="100%" stopColor="#3a4250" />
        </linearGradient>
        <linearGradient id="handle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b4a2a" />
          <stop offset="100%" stopColor="#2a1a0a" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Head */}
      <rect x="10" y="20" width="100" height="55" rx="6" fill="url(#hg)" stroke="#00E5FF" strokeWidth="1.5" filter="url(#glow)" />
      <rect x="14" y="24" width="92" height="6" fill="#00E5FF" opacity="0.6" />
      <rect x="14" y="65" width="92" height="6" fill="#7B61FF" opacity="0.4" />
      {/* Rune */}
      <circle cx="60" cy="47" r="10" fill="none" stroke="#00E5FF" strokeWidth="1.5" />
      <path d="M55 47 L65 47 M60 42 L60 52" stroke="#00E5FF" strokeWidth="1.5" />
      {/* Handle */}
      <rect x="54" y="75" width="12" height="95" fill="url(#handle)" />
      <rect x="52" y="165" width="16" height="12" rx="2" fill="#3a2a1a" />
    </svg>
  );
}
