import logo from "@/assets/logo.png";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1400px] max-h-[1400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,229,255,0.15) 0%, rgba(123,97,255,0.08) 40%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, transparent, rgba(3,4,10,0.6) 70%, var(--space-black))",
        }}/>
      </div>

      {/* Rotating ring behind logo */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 -z-10 hidden lg:block">
        <div className="relative w-[600px] h-[600px] animate-spin-slow opacity-40">
          <div className="absolute inset-0 rounded-full border border-cyan-400/30" />
          <div className="absolute inset-8 rounded-full border border-purple-400/20" />
          <div className="absolute inset-16 rounded-full border border-blue-400/20 border-dashed" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(0,229,255,1)]" />
              <span className="text-xs tracking-[0.3em] text-cyan-200 font-display">SYSTEM ONLINE · 2026</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              WE BUILD<br />
              <span className="text-gradient-neon">DIGITAL POWER</span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-8 text-base sm:text-lg text-foreground/70 max-w-xl leading-relaxed">
              VYRONEX STUDIO creates futuristic websites, premium UI experiences and cinematic
              digital products with high-performance modern frontend engineering.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="group relative overflow-hidden rounded-full px-8 py-4 font-display text-sm tracking-[0.25em] text-black transition-all hover:-translate-y-1"
                style={{ background: "var(--gradient-neon)", boxShadow: "var(--shadow-glow)" }}>
                <span className="relative z-10">START PROJECT</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #7B61FF, #00E5FF)" }} />
              </a>
              <a
                href="https://x.com/VYRONEXSTUxg"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-8 py-4 font-display text-sm tracking-[0.25em] glass border border-cyan-400/40 text-cyan-200 hover:border-cyan-400 hover:text-white hover:-translate-y-1 transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
              >
                VISIT X →
              </a>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "100%", l: "PREMIUM" },
                { n: "∞", l: "VISION" },
                { n: "24/7", l: "ENGINEER" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-4 text-center">
                  <div className="font-display text-2xl text-gradient-neon font-bold">{s.n}</div>
                  <div className="text-[10px] tracking-[0.3em] text-foreground/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={300} className="hidden lg:flex justify-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(0,229,255,0.6), transparent 70%)" }} />
            <img
              src={logo}
              alt="Vyronex Studio"
              className="relative w-[480px] h-[480px] object-contain drop-shadow-[0_0_60px_rgba(0,229,255,0.6)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
