"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles, Code2, Zap } from "lucide-react";
import { useRef } from "react";
// import imghero from "../public/mm.png";

const floatingBadges = [
  { icon: <Code2 size={14} />, text: "React & Next.js", delay: 0, pos: { top: "18%", right: "-8%" } },
  { icon: <Zap size={14} />, text: "Node.js", delay: 0.2, pos: { bottom: "28%", right: "-10%" } },
  { icon: <Sparkles size={14} />, text: "Tailwind CSS", delay: 0.4, pos: { top: "55%", left: "-10%" } },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section ref={ref} style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 80 }}>
      {/* Background orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 70%)", top: "-20%", left: "-15%", filter: "blur(40px)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)", bottom: "-10%", right: "-10%", filter: "blur(50px)" }}
        />
        {/* Grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }} />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 60, alignItems: "center" }}
          className="grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)",
                padding: "6px 14px", borderRadius: 40, fontSize: "0.75rem",
                fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "var(--accent)",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2aff8c", boxShadow: "0 0 6px #2aff8c", display: "inline-block" }} />
                Available for Work
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants}
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 5.2rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 28 }}>
              <span style={{ color: "white" }}>Building</span>
              <br />
              <span className="gradient-text">digital products</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.7)" }}>that matter.</span>
            </motion.h1>

            <motion.p variants={itemVariants}
              style={{ color: "var(--muted-light)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 520, marginBottom: 40 }}>
              I&apos;m <strong style={{ color: "white" }}>Redoan Ahmad</strong> — a full-stack developer who turns complex ideas into fast, beautiful, scalable web applications using React, Next.js, Node.js, and modern tooling.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "linear-gradient(135deg, var(--accent), #0af)",
                  color: "#000", fontWeight: 700, fontFamily: "var(--font-display)",
                  padding: "14px 30px", borderRadius: 40, fontSize: "0.95rem",
                  boxShadow: "0 0 30px rgba(0,229,255,0.25)",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,229,255,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(0,229,255,0.25)"; }}
              >
                View My Work <ArrowDown size={16} />
              </a>
              <a href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)",
                  color: "white", fontWeight: 600, fontFamily: "var(--font-display)",
                  padding: "14px 30px", borderRadius: 40, fontSize: "0.95rem",
                  backdropFilter: "blur(4px)", transition: "all 0.25s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,229,255,0.08)"; e.currentTarget.style.borderColor = "rgba(0,229,255,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} style={{ display: "flex", gap: 16, marginTop: 52, flexWrap: "wrap" }}>
              {[["3+", "Years Exp."], ["15+", "Projects"], ["12+", "Clients"]].map(([num, label]) => (
                <div key={label} style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20, padding: "16px 24px", textAlign: "center", minWidth: 110,
                }}>
                  <strong style={{ fontFamily: "var(--font-display)", fontSize: "1.9rem", fontWeight: 800, color: "var(--accent)", display: "block", lineHeight: 1.1 }}>{num}</strong>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
          >
            <div style={{
  width: "100%", aspectRatio: "4/5", borderRadius: "1.5rem", overflow: "hidden",
  background: "linear-gradient(145deg, rgba(0,229,255,0.1), rgba(168,85,247,0.08))",
  position: "relative",
}}>
  {/* Placeholder portrait with gradient */}
  <div style={{
    position: "absolute", inset: 0,
    background: "linear-gradient(145deg, rgba(0,229,255,0.05) 0%, transparent 40%, rgba(168,85,247,0.08) 100%)",
  }} />
  <img
    src="/mm.png"  // ← শুধু এতটুকু就行
    alt="Redoan Ahmad — Full-Stack Developer"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
</div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={18} style={{ color: "var(--muted)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}





// kiso add korla 
