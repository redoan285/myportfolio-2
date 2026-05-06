"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Redoan delivered an outstanding Next.js application. The code quality and attention to performance were exceptional. Communication was seamless throughout the project.",
    author: "Sarah Johnson",
    role: "Founder, TechStartup",
    stars: 5,
  },
  {
    quote: "Working with him was a great experience. The Tailwind + React setup was pixel-perfect and blazing fast. I was impressed by how well he understood our design vision.",
    author: "Michael Chen",
    role: "Product Manager, SaaS Co",
    stars: 5,
  },
  {
    quote: "He rebuilt our entire e-commerce site in record time, improving page speed by 60%. Highly professional and incredibly skilled.",
    author: "Aisha Rahman",
    role: "CEO, RetailBD",
    stars: 5,
  },
  {
    quote: "Redoan's ability to translate complex requirements into clean, scalable code is remarkable. Would absolutely hire again for our next big project.",
    author: "James Wilson",
    role: "CTO, DevAgency",
    stars: 5,
  },
];

export default function Testimonials() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true });

  return (
    <section style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        <motion.div ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: 14 }}>
            Testimonials
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 56 }}>
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}
          className="grid-cols-1 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "1.75rem", padding: "32px 30px",
                position: "relative", overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)" }} />

              {/* Stars */}
              <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} fill="#fbbf24" stroke="none" />
                ))}
              </div>

              {/* Large quote mark */}
              <div style={{ position: "absolute", top: 20, right: 28, fontFamily: "Georgia, serif", fontSize: "5rem", color: "rgba(0,229,255,0.08)", lineHeight: 1, userSelect: "none" }}>"</div>

              <blockquote style={{ color: "#d1d5db", lineHeight: 1.75, fontSize: "0.97rem", marginBottom: 24, position: "relative" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: "50%", flexShrink: 0,
                  background: "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem", color: "#000",
                }}>
                  {t.author[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", fontFamily: "var(--font-display)" }}>{t.author}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
