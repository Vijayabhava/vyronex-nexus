import { Reveal } from "@/components/Reveal";
import { Code2, Palette, Sparkles, Gauge } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Websites",
    desc: "Hand-crafted, futuristic websites engineered for speed, SEO, and cinematic interactions.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Premium interfaces, design systems and motion crafted for next-generation products.",
  },
  {
    icon: Sparkles,
    title: "Brand Identity",
    desc: "Modern, cinematic branding with logos, palettes and visual languages that command attention.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Sub-second loads, perfect Lighthouse scores and bulletproof frontend architecture.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-0 -z-10 w-[600px] h-[600px] -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(123,97,255,0.18), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.5em] text-cyan-300/80 font-display mb-4">[ 01 ] CAPABILITIES</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
              ENGINEERED <span className="text-gradient-neon">SERVICES</span>
            </h2>
            <p className="mt-6 text-foreground/60 max-w-2xl mx-auto">
              A complete arsenal for launching premium digital products.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 120}>
                <div className="group relative h-full glass rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/60 overflow-hidden">
                  <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,229,255,0.3), rgba(123,97,255,0.3))",
                      filter: "blur(20px)",
                    }}
                  />
                  <div className="absolute top-0 right-0 text-[80px] font-display font-black text-white/[0.03] leading-none">
                    0{i + 1}
                  </div>

                  <div className="relative w-14 h-14 rounded-xl glass-strong flex items-center justify-center mb-6 group-hover:animate-pulse-neon">
                    <Icon className="w-6 h-6 text-cyan-300" />
                  </div>

                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-gradient-neon transition-all">
                    {s.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
