import { Reveal } from "@/components/Reveal";
import sumit from "@/assets/founder-sumit.jpg";
import subham from "@/assets/founder-subham.jpg";

const founders = [
  {
    name: "Sumit Sharma",
    role: "TECH HEAD",
    img: sumit,
    desc: "Focused on futuristic web systems, frontend engineering and cinematic UI experiences.",
    accent: "rgba(0,229,255,0.6)",
  },
  {
    name: "Subham Patra",
    role: "BUSINESS HEAD",
    img: subham,
    desc: "Focused on communication, strategy and client experience management.",
    accent: "rgba(123,97,255,0.6)",
  },
];

export function Founders() {
  return (
    <section id="founders" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse at center, rgba(10,14,40,0.6), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.5em] text-cyan-300/80 font-display mb-4">[ 02 ] ARCHITECTS</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
              THE <span className="text-gradient-neon">FOUNDERS</span>
            </h2>
            <p className="mt-6 text-foreground/60 max-w-2xl mx-auto">
              The minds engineering Vyronex Studio's digital universe.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 200}>
              <div className="group relative glass-strong rounded-3xl p-10 text-center transition-all hover:-translate-y-2 overflow-hidden">
                <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${f.accent}, transparent 70%)`, filter: "blur(30px)" }}
                />

                <div className="relative mx-auto w-44 h-44 mb-6">
                  <div className="absolute inset-0 rounded-full animate-spin-slow"
                    style={{ background: `conic-gradient(from 0deg, transparent, ${f.accent}, transparent)` }}
                  />
                  <div className="absolute inset-[3px] rounded-full bg-background" />
                  <img
                    src={f.img}
                    alt={f.name}
                    width={400}
                    height={400}
                    loading="lazy"
                    className="absolute inset-[6px] rounded-full object-cover w-[calc(100%-12px)] h-[calc(100%-12px)]"
                  />
                  <div className="absolute inset-0 rounded-full"
                    style={{ boxShadow: `0 0 40px ${f.accent}, inset 0 0 30px ${f.accent}` }}
                  />
                </div>

                <h3 className="font-display text-2xl font-bold tracking-wider">{f.name}</h3>
                <div className="mt-2 text-xs tracking-[0.4em] text-gradient-neon font-display">{f.role}</div>
                <p className="mt-5 text-sm text-foreground/65 leading-relaxed max-w-sm mx-auto">{f.desc}</p>

                <div className="mt-8 flex justify-center gap-2">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <span key={k} className="h-1 w-6 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-400/30" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
