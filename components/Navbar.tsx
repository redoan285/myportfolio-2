"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (href: string) => {
    setMobileOpen(false);
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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled 
            ? "bg-bg-primary/90 backdrop-blur-xl border-b border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a
            href="#"
            className="text-xl md:text-2xl font-black text-white tracking-tighter"
          >
            <span className="gradient-text">Redoan</span><span className="text-white/40">.</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleScroll(l.href)}
                className="text-xs font-bold uppercase tracking-[0.4em] text-white/60 hover:text-accent transition-colors cursor-pointer bg-transparent border-none"
              >
                {l.label}
              </button>
            ))}
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#contact");
              }}
              className="px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-black bg-linear-to-r from-accent to-accent-purple hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 text-white bg-white/5 border border-white/10 rounded-xl cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-bg-primary flex flex-col items-center justify-center gap-8 px-6"
          >
            <button 
              onClick={() => setMobileOpen(false)}
              className="absolute top-8 right-8 p-3 text-white bg-white/5 border border-white/10 rounded-full"
            >
              <X size={28} />
            </button>

            {links.map((l, i) => (
              <motion.button
                key={l.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                onClick={() => handleScroll(l.href)}
                className="text-4xl font-black text-white hover:text-accent transition-colors bg-transparent border-none cursor-pointer font-display tracking-tight"
              >
                {l.label}
              </motion.button>
            ))}
            
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#contact");
              }}
              className="w-full max-w-xs text-center py-5 rounded-full text-lg font-black uppercase tracking-[0.4em] text-black bg-linear-to-r from-accent to-accent-purple shadow-2xl mt-4"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}