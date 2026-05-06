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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(3,7,18,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px", display: "flex", justifyContent: "space-between", alignItems: "center", height: 72 }}>
          <a href="#" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", letterSpacing: "-0.02em" }}>
            <span className="gradient-text">Redoan</span>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>.</span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: 40, fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9rem" }} className="hidden md:flex">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleScroll(l.href)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted-light)", transition: "color 0.2s", fontFamily: "inherit", fontSize: "inherit", fontWeight: "inherit" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-light)")}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll("#contact"); }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                color: "#000", fontWeight: 700, fontSize: "0.85rem",
                padding: "10px 22px", borderRadius: 40,
                fontFamily: "var(--font-display)",
                transition: "opacity 0.2s, transform 0.2s",
                boxShadow: "0 0 20px rgba(0,229,255,0.2)",
              }}
              className="hidden md:inline-flex"
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Hire Me
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "white", display: "flex" }}
              className="flex md:hidden"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed", top: 72, left: 0, right: 0, zIndex: 49,
              background: "rgba(3,7,18,0.97)", backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "24px 28px 32px",
              display: "flex", flexDirection: "column", gap: 8,
            }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleScroll(l.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "var(--muted-light)", fontFamily: "var(--font-display)",
                  fontWeight: 600, fontSize: "1.4rem", textAlign: "left", padding: "10px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {l.label}
              </motion.button>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll("#contact"); }}
              style={{
                marginTop: 16, display: "inline-flex", alignItems: "center", justifyContent: "center",
                background: "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                color: "#000", fontWeight: 700, fontSize: "0.95rem",
                padding: "14px 28px", borderRadius: 40,
                fontFamily: "var(--font-display)",
              }}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
