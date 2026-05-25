const phrases = [
  "ENGINEERING DIGITAL POWER",
  "CINEMATIC BY DESIGN",
  "BUILT IN THE FUTURE",
  "FORGED IN NEON",
  "PIXEL-PERFECT · LIGHT-SPEED",
  "WE DON'T DESIGN — WE TRANSMIT",
];

export function Marquee() {
  const items = [...phrases, ...phrases];
  return (
    <div className="relative py-10 overflow-hidden border-y border-cyan-500/15 bg-[#03040A]/40">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-12 font-display text-2xl sm:text-3xl font-black tracking-[0.3em]">
            <span className={i % 2 === 0 ? "text-gradient-neon" : "text-foreground/30"}>{p}</span>
            <span className="text-cyan-400 text-xl">✦</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
