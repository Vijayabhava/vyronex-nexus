import { Reveal } from "@/components/Reveal";

const projects = [
  {
    tag: "WEB · UI/UX",
    title: "NOVA COMMERCE",
    desc: "A cinematic e-commerce universe with WebGL transitions and parallax scroll.",
    hue: "from-cyan-500/30 to-blue-500/30",
  },
  {
    tag: "BRAND · MOTION",
    title: "AETHER LABS",
    desc: "Identity system for an AI research lab — futuristic logo, motion grammar, full website.",
    hue: "from-purple-500/30 to-pink-500/30",
  },
  {
    tag: "WEB · PERFORMANCE",
    title: "ORBIT FINANCE",
    desc: "High-frequency dashboard delivering sub-100ms interactions and real-time charts.",
    hue: "from-emerald-500/30 to-cyan-500/30",
  },
  {
    tag: "LANDING · CINEMATIC",
    title: "ZENITH XR",
    desc: "Award-style launch site for an XR headset — interactive 3D hero, glass UI.",
    hue: "from-amber-500/30 to-pink-500/30",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-15" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.15), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.5em] text-cyan-300/80 font-display mb-4">[ 02 ] CASE FILES</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
              SELECTED <span className="text-gradient-neon">TRANSMISSIONS</span>
            </h2>
            <p className="mt-6 text-foreground/60 max-w-2xl mx-auto">
              A glimpse into the universes we've engineered. Every project — a portal to what's next.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="group relative overflow-hidden rounded-2xl glass aspect-[16/10] hover:-translate-y-2 transition-all hover:shadow-[0_0_40px_rgba(0,229,255,0.25)] hover:border-cyan-400/60">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.hue} opacity-60 group-hover:opacity-90 transition-opacity`} />
                <div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03040A] via-[#03040A]/40 to-transparent" />

                {/* corner brackets */}
                <span className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-300/80" />
                <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-300/80" />
                <span className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-300/80" />
                <span className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-300/80" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-[10px] tracking-[0.4em] text-cyan-300 font-display">{p.tag}</div>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-black text-gradient-neon">{p.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75 max-w-md">{p.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.3em] text-cyan-300 font-display opacity-0 group-hover:opacity-100 transition-opacity">
                    CASE STUDY <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
