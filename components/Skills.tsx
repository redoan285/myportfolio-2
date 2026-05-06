"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "JavaScript / TypeScript", level: 88, category: "Language" },
  { name: "Node.js & Express", level: 82, category: "Backend" },
  { name: "Git & GitHub", level: 90, category: "Tooling" },
  { name: "REST APIs", level: 88, category: "Backend" },
  { name: "Responsive Design", level: 95, category: "Design" },
];

const techIcons = [
  { label: "React", emoji: "⚛️" },
  { label: "Next.js", emoji: "▲" },
  { label: "Node.js", emoji: "🟢" },
  { label: "Tailwind", emoji: "🎨" },
  { label: "Git", emoji: "🔀" },
  { label: "TypeScript", emoji: "📘" },
  { label: "MongoDB", emoji: "🍃" },
  { label: "PostgreSQL", emoji: "🐘" },
  { label: "REST API", emoji: "🔗" },
  { label: "Figma", emoji: "🖌️" },
];

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={{ marginBottom: 20 }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>{skill.name}</span>
          <span style={{
            fontSize: "0.7rem", fontWeight: 600, padding: "2px 8px", borderRadius: 20,
            background: "rgba(0,229,255,0.08)", color: "var(--accent)", border: "1px solid rgba(0,229,255,0.15)",
          }}>{skill.category}</span>
        </div>
        <span style={{ color: "var(--muted)", fontSize: "0.85rem", fontFamily: "var(--font-display)" }}>{skill.level}%</span>
      </div>
      <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 6, overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.06 + 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "100%", borderRadius: 6,
            background: "linear-gradient(90deg, var(--accent), var(--accent-purple))",
            boxShadow: "0 0 10px rgba(0,229,255,0.3)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="skills" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        <motion.div ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: 14 }}>
            Technologies & Expertise
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 56 }}>
            Tools I <span className="gradient-text">Master</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 60, alignItems: "start" }}
          className="grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Skill bars */}
          <div style={{
            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "1.75rem", padding: "36px 32px",
          }}>
            {skills.map((skill, i) => <SkillBar key={skill.name} skill={skill} index={i} />)}
          </div>

          {/* Tech icon grid */}
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: 24, color: "var(--muted-light)" }}>
              Tech Ecosystem
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
              {techIcons.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.04, borderColor: "rgba(0,229,255,0.25)" }}
                  style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "1.25rem", padding: "18px 16px",
                    display: "flex", alignItems: "center", gap: 12,
                    cursor: "default", transition: "border-color 0.2s",
                  }}
                >
                  <span style={{ fontSize: "1.4rem" }}>{tech.emoji}</span>
                  <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{tech.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
