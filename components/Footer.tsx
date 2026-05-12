"use client";
import { Globe, Link, X, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="py-16 border-t border-white/5 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left order-2 md:order-1">
            <a href="#" className="font-display font-black text-2xl tracking-tighter text-white inline-block mb-4">
              <span className="gradient-text">Redoan</span><span className="text-white/40">.</span>
            </a>
            <p className="text-xs md:text-sm font-bold text-white/30 leading-relaxed uppercase tracking-[0.4em]">
              © {currentYear} Redoan Ahmad. <br className="md:hidden" />
              Built with <Heart size={12} className="inline text-accent mx-1 animate-pulse" /> for the web.
            </p>
          </div>

          {/* Social Ecosystem */}
          <div className="flex items-center gap-4 order-1 md:order-2">
            {[
              { icon: <Globe size={18} />, label: "GitHub", href: "https://github.com/redoan285" },
              { icon: <Link size={18} />, label: "LinkedIn", href: "https://linkedin.com/in/redoan285" },
              { icon: <X size={18} />, label: "Twitter", href: "https://twitter.com/redoan285" },
            ].map((s) => (
              <a 
                key={s.label} 
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mt-16 h-[1px] w-full bg-linear-to-r from-transparent via-white/5 to-transparent" />
        
        {/* Navigation - Secondary */}
        <nav className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button 
              key={item} 
              onClick={() => handleScroll(`#${item.toLowerCase()}`)}
              className="hover:text-accent transition-colors bg-transparent border-none cursor-pointer uppercase font-black tracking-[0.4em]"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* Subtle background glow */}
      <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-accent/5 blur-[120px] -z-10 pointer-events-none rounded-full" />
    </footer>
  );
}


// hgdfhjgytftf