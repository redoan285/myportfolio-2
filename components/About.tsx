"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Cpu, Globe } from "lucide-react";

const cards = [
  { icon: <Layers size={20} />, title: "Tech Stack", body: "React, Next.js, Tailwind CSS, Node.js, Express, Git, GitHub, REST APIs, MongoDB, PostgreSQL" },
  { icon: <Cpu size={20} />, title: "Approach", body: "Component-driven development, responsive-first design, performance optimization, and clean maintainable code." },
  { icon: <Globe size={20} />, title: "Experience", body: "E-commerce platforms, analytics dashboards, landing pages, full-stack applications, and API integrations." },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 0 80px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        <FadeIn>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: 14 }}>
            About Me
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 56 }}>
            Developer &amp; <span className="gradient-text">Problem Solver</span>
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}
          className="grid-cols-1 lg:grid-cols-2">
          
          <FadeIn delay={0.1}>
            <div style={{
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "1.75rem", padding: "40px 36px", height: "100%",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 1,
                background: "linear-gradient(90deg, transparent, var(--accent), transparent)", opacity: 0.3,
              }} />
              <p style={{ color: "var(--muted-light)", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: 20 }}>
                I&apos;m <strong style={{ color: "white" }}>Redoan Ahmad</strong>, a web developer passionate about crafting seamless, performant digital experiences. I specialize in the modern JavaScript ecosystem — from React and Next.js on the frontend to Node.js and RESTful APIs on the backend.
              </p>
              <p style={{ color: "var(--muted-light)", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: 20 }}>
                My workflow combines clean architecture, pixel-perfect design execution, and an obsession with performance. Every project I ship is fast, accessible, and maintainable.
              </p>
              <p style={{ color: "var(--muted-light)", lineHeight: 1.85, fontSize: "1.05rem" }}>
                I constantly explore emerging technologies — from edge computing to AI-assisted tooling — to deliver cutting-edge solutions that keep clients ahead of the curve.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {cards.map((card, i) => (
              <FadeIn key={card.title} delay={0.15 + i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.015, borderColor: "rgba(0,229,255,0.2)" }}
                  style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "1.5rem", padding: "24px 28px", cursor: "default",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span style={{ color: "var(--accent)", display: "flex" }}>{card.icon}</span>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700 }}>{card.title}</h3>
                  </div>
                  <p style={{ color: "var(--muted-light)", fontSize: "0.92rem", lineHeight: 1.7 }}>{card.body}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
