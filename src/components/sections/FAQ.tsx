import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What makes VYRONEX different from other agencies?",
    a: "We engineer cinematic experiences — not templates. Every project is a custom-built digital universe with motion, lighting, and performance dialed to perfection.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most cinematic launches ship in 3–6 weeks. Larger universes — full brand systems, multi-page experiences — typically span 6–10 weeks.",
  },
  {
    q: "Do you handle branding and identity too?",
    a: "Yes. We design futuristic logos, motion grammars, design systems, and brand worlds — then bring them to life on the web.",
  },
  {
    q: "Will my website be fast?",
    a: "Brutally fast. We obsess over Core Web Vitals — sub-second loads, fluid 60fps animations, optimized assets, and modern frontend engineering.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We specialize in transforming ordinary sites into cinematic, high-performance digital experiences.",
  },
  {
    q: "How do I start?",
    a: "Ping us on Instagram, WhatsApp, X, or email. Tell us your vision — we'll send back a launch plan.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-15" />

      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.5em] text-cyan-300/80 font-display mb-4">[ 07 ] FREQUENCIES</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
              ANSWERS FROM <span className="text-gradient-neon">THE CORE</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left glass rounded-2xl p-6 hover:border-cyan-400/60 transition-all group"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-base sm:text-lg font-semibold text-foreground/90 group-hover:text-cyan-200 transition">
                    {f.q}
                  </span>
                  <Plus className={`w-5 h-5 text-cyan-300 shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
                </div>
                <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm text-foreground/65 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
