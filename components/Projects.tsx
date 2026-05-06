"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack Next.js marketplace with cart, auth, Stripe payments, and real-time inventory management. Deployed on Vercel with PostgreSQL.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    accent: "rgba(0,229,255,0.12)",
    accentBorder: "rgba(0,229,255,0.2)",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform built with React, Recharts, and a Node.js backend. Features live WebSocket data streams.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "WebSocket", "Recharts"],
    accent: "rgba(168,85,247,0.1)",
    accentBorder: "rgba(168,85,247,0.2)",
  },
  {
    title: "Portfolio CMS",
    description: "Content management system with Next.js App Router, MDX blog, GitHub integration, and automated deployment pipeline.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "MDX", "GitHub API", "Vercel"],
    accent: "rgba(255,107,53,0.1)",
    accentBorder: "rgba(255,107,53,0.2)",
  },
];

export default function Projects() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true });

  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        <motion.div ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: 14 }}>
            Featured Projects
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 56 }}>
            Recent <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "1.75rem", overflow: "hidden", cursor: "default",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = project.accentBorder)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
            >
              {/* Thumbnail */}
              <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                <img src={project.image} alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(3,7,18,0.9) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", top: 16, right: 16, display: "flex", gap: 8 }}>
                  <motion.button whileHover={{ scale: 1.1 }} style={{
                    background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.15)", borderRadius: "50%",
                    width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", cursor: "pointer",
                  }}>
                    <ExternalLink size={14} />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.1 }} style={{
                    background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.15)", borderRadius: "50%",
                    width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", cursor: "pointer",
                  }}>
                    <Globe size={14} />
                  </motion.button>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "24px 26px 28px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, marginBottom: 10 }}>
                  {project.title}
                </h3>
                <p style={{ color: "var(--muted-light)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 20 }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: "0.75rem", fontWeight: 600, padding: "4px 12px", borderRadius: 20,
                      background: project.accent, color: "rgba(255,255,255,0.8)",
                      border: `1px solid ${project.accentBorder}`,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginTop: 52 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)",
              color: "white", fontWeight: 600, fontFamily: "var(--font-display)",
              padding: "14px 30px", borderRadius: 40, fontSize: "0.95rem",
              backdropFilter: "blur(4px)", transition: "all 0.25s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
          >
            <Globe size={18} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
