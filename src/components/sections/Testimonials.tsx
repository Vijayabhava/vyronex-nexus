import { Reveal } from "@/components/Reveal";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "VYRONEX didn't just build a website — they engineered an experience. Our launch broke every record we had.",
    name: "ARJUN MEHTA",
    role: "Founder · Nova Commerce",
  },
  {
    quote: "It feels like the future shipped early. The motion, the polish, the speed — absolutely cinematic.",
    name: "PRIYA RAO",
    role: "CMO · Aether Labs",
  },
  {
    quote: "Every detail engineered with obsession. Our investors thought we hired a Hollywood studio.",
    name: "RAHUL VERMA",
    role: "CEO · Orbit Finance",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-15" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(123,97,255,0.12), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.5em] text-cyan-300/80 font-display mb-4">[ 05 ] SIGNALS</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
              VOICES FROM THE <span className="text-gradient-neon">FUTURE</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 150}>
              <div className="relative glass rounded-2xl p-8 h-full hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-cyan-400/30" />
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-cyan-300 text-cyan-300" />
                  ))}
                </div>
                <p className="text-foreground/85 leading-relaxed text-sm">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-cyan-500/15">
                  <div className="font-display font-bold text-sm tracking-[0.2em] text-gradient-neon">{t.name}</div>
                  <div className="text-xs text-foreground/55 mt-1">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
