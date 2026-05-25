import { Reveal } from "@/components/Reveal";
import { Mail, MessageCircle, Instagram, Github, Linkedin, Send } from "lucide-react";

const wa = `https://wa.me/?text=${encodeURIComponent(
  "Hello VYRONEX STUDIO, I want to build a futuristic website."
)}`;

const XIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.93l-5.43-7.09L3.9 22H.64l8.03-9.18L1.5 2h7.1l4.92 6.5L18.24 2Zm-1.22 18h1.92L7.06 4H5.02L17.02 20Z" />
  </svg>
);

const cards = [
  {
    icon: Instagram,
    label: "INSTAGRAM",
    value: "@vyronexstudio",
    href: "https://instagram.com/vyronexstudio",
    cta: "FOLLOW",
    glow: "rgba(236,72,153,0.4)",
  },
  {
    icon: XIcon,
    label: "X / TWITTER",
    value: "@VYRONEXSTUxg",
    href: "https://x.com/VYRONEXSTUxg",
    cta: "FOLLOW ON X",
    glow: "rgba(0,229,255,0.4)",
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "Vijayabhava",
    href: "https://github.com/Vijayabhava",
    cta: "OPEN GITHUB",
    glow: "rgba(160,170,255,0.4)",
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: "studiovyronex@gmail.com",
    href: "mailto:studiovyronex@gmail.com?subject=Project%20Inquiry%20—%20VYRONEX%20STUDIO&body=Hello%20VYRONEX%20STUDIO%2C%20I%20want%20to%20build%20a%20futuristic%20website.",
    cta: "SEND MESSAGE",
    glow: "rgba(123,97,255,0.4)",
  },
  {
    icon: MessageCircle,
    label: "WHATSAPP",
    value: "Chat instantly",
    href: wa,
    cta: "OPEN WHATSAPP",
    glow: "rgba(34,197,94,0.4)",
  },
  {
    icon: Send,
    label: "TELEGRAM",
    value: "Direct line",
    href: "https://t.me/vyronexstudio",
    cta: "OPEN TELEGRAM",
    glow: "rgba(0,162,255,0.4)",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.12), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.5em] text-cyan-300/80 font-display mb-4">[ 06 ] TRANSMISSION</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black">
              LET'S BUILD <span className="text-gradient-neon">THE FUTURE</span>
            </h2>
            <p className="mt-6 text-foreground/60 max-w-2xl mx-auto">
              One signal away from your next-gen digital identity. Pick a frequency — we'll respond at light speed.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.label} delay={i * 100}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group block h-full glass rounded-2xl p-8 transition-all hover:-translate-y-2 hover:border-cyan-400/60"
                  style={{ ["--g" as never]: c.glow }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 40px ${c.glow}`)}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
                >
                  <div className="w-14 h-14 rounded-xl glass-strong flex items-center justify-center mb-6 group-hover:animate-pulse-neon">
                    <Icon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div className="text-[10px] tracking-[0.4em] text-foreground/50 font-display">{c.label}</div>
                  <div className="mt-2 text-lg font-display font-semibold break-all">{c.value}</div>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.25em] font-display text-cyan-300 group-hover:text-white transition-colors">
                    {c.cta} <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={500}>
          <div className="mt-20 text-center glass-strong rounded-3xl p-12 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(123,97,255,0.3), transparent 70%)" }}
            />
            <div className="relative">
              <div className="text-xs tracking-[0.5em] text-cyan-300/80 font-display">READY TO LAUNCH?</div>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl font-black">
                Your <span className="text-gradient-neon">cinematic website</span> starts here.
              </h3>
              <p className="mt-4 text-foreground/60 max-w-xl mx-auto text-sm">
                We don't just design websites — we engineer digital experiences that move at the speed of imagination.
              </p>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-8 rounded-full px-10 py-4 font-display text-sm tracking-[0.3em] text-black hover:-translate-y-1 transition-all"
                style={{ background: "var(--gradient-neon)", boxShadow: "var(--shadow-glow)" }}
              >
                START ON WHATSAPP
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
