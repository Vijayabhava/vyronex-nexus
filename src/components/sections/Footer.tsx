import logo from "@/assets/logo.png";
import { Instagram, Github, Mail, MessageCircle, Send } from "lucide-react";

const XIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.93l-5.43-7.09L3.9 22H.64l8.03-9.18L1.5 2h7.1l4.92 6.5L18.24 2Zm-1.22 18h1.92L7.06 4H5.02L17.02 20Z" />
  </svg>
);

const socials = [
  { icon: Instagram, href: "https://instagram.com/vyronexstudio", label: "Instagram" },
  { icon: XIcon, href: "https://x.com/VYRONEXSTUxg", label: "X" },
  { icon: Github, href: "https://github.com/Vijayabhava", label: "GitHub" },
  { icon: Send, href: "https://t.me/vyronexstudio", label: "Telegram" },
  { icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp" },
  { icon: Mail, href: "mailto:studiovyronex@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative pt-16 pb-10 border-t border-cyan-500/15 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.6), transparent)" }}
      />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.3), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="" className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
              <span className="font-display text-xl tracking-[0.3em] text-gradient-neon font-bold">VYRONEX</span>
            </div>
            <p className="text-sm text-foreground/60 max-w-xs leading-relaxed">
              Architecting the next chapter of the internet — one cinematic interface at a time.
            </p>
          </div>

          <div>
            <div className="text-xs tracking-[0.4em] text-cyan-300/80 font-display mb-4">EXPLORE</div>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#home" className="hover:text-cyan-300 transition">Home</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition">Services</a></li>
              <li><a href="#work" className="hover:text-cyan-300 transition">Work</a></li>
              <li><a href="#process" className="hover:text-cyan-300 transition">Process</a></li>
              <li><a href="#founders" className="hover:text-cyan-300 transition">Founders</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.4em] text-cyan-300/80 font-display mb-4">CONNECT</div>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-cyan-300 hover:text-white hover:border-cyan-400/60 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="mt-5 text-xs text-foreground/50 tracking-wider">studiovyronex@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-cyan-500/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs tracking-[0.2em] text-foreground/50 font-display text-center">
            © 2026 VYRONEX STUDIO — WE ENGINEER DIGITAL PRESENCE
          </p>
          <p className="text-[10px] tracking-[0.3em] text-cyan-300/60 font-display">
            BUILT IN THE FUTURE · DEPLOYED TODAY
          </p>
        </div>
      </div>
    </footer>
  );
}
