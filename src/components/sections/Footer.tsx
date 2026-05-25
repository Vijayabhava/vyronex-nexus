import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative py-10 border-t border-cyan-500/15">
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.6), transparent)" }}
      />
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
          <span className="font-display text-sm tracking-[0.3em] text-gradient-neon font-bold">VYRONEX</span>
        </div>
        <p className="text-xs tracking-[0.2em] text-foreground/50 font-display text-center">
          © 2026 VYRONEX STUDIO — WE ENGINEER DIGITAL PRESENCE
        </p>
      </div>
    </footer>
  );
}
