import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "FOUNDERS", href: "#founders" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass-strong" : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img src={logo} alt="Vyronex" className="h-10 w-10 object-contain drop-shadow-[0_0_12px_rgba(0,229,255,0.6)] transition-transform group-hover:scale-110" />
          <span className="font-display font-bold text-xl tracking-[0.3em] text-gradient-neon">
            VYRONEX
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="relative font-display text-sm tracking-[0.25em] text-foreground/80 hover:text-cyan-300 transition-colors group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-2 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-cyan-300 font-display text-xs tracking-widest"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-strong border-t border-cyan-500/20 mt-3">
          <ul className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="block font-display tracking-[0.25em] text-foreground/80 hover:text-cyan-300"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
