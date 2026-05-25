import { Reveal } from "@/components/Reveal";
import { Compass, PenTool, Cpu, Rocket } from "lucide-react";

const steps = [
  { icon: Compass, n: "01", title: "DISCOVER", text: "We decode your vision — brand, audience, mission. The blueprint of your digital universe begins here." },
  { icon: PenTool, n: "02", title: "DESIGN", text: "Cinematic wireframes, glassmorphism systems, motion language. Every pixel engineered for emotion." },
  { icon: Cpu, n: "03", title: "ENGINEER", text: "Pixel-perfect frontend, blistering performance, fluid animations. Built with the modern web stack." },
  { icon: Rocket, n: "04", title: "LAUNCH", text: "Deploy, optimize, dominate. Your futuristic presence goes live — and never stops evolving." },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(123,97,255,0.15), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.5em] text-cyan-300/80 font-display mb-4">[ 03 ] PROTOCOL</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
              FROM SPARK TO <span className="text-gradient-neon">SUPERNOVA</span>
            </h2>
            <p className="mt-6 text-foreground/60 max-w-2xl mx-auto">
              A four-phase launch sequence — engineered for brands ready to break orbit.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-16 left-12 right-12 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.4), rgba(123,97,255,0.4), transparent)" }} />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 120}>
                <div className="relative glass rounded-2xl p-7 h-full hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all">
                  <div className="absolute -top-4 left-7 text-xs tracking-[0.4em] font-display text-cyan-300 glass-strong px-3 py-1 rounded-full">
                    PHASE {s.n}
                  </div>
                  <div className="w-14 h-14 rounded-xl glass-strong flex items-center justify-center mt-3 mb-5">
                    <Icon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-wide text-gradient-neon">{s.title}</h3>
                  <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
