import { Reveal } from "@/components/Reveal";

const stats = [
  { n: "50+", l: "PROJECTS LAUNCHED" },
  { n: "12", l: "COUNTRIES SERVED" },
  { n: "99", l: "LIGHTHOUSE SCORE" },
  { n: "24/7", l: "ENGINEERING MODE" },
];

export function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.5), transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(123,97,255,0.5), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="text-center glass rounded-2xl p-6 hover:border-cyan-400/60 hover:-translate-y-1 transition-all">
                <div className="font-display text-4xl sm:text-5xl font-black text-gradient-neon">{s.n}</div>
                <div className="mt-2 text-[10px] tracking-[0.3em] text-foreground/60 font-display">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
