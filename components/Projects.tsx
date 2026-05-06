"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "Keep Your Friendships Alive",
    description: "A heartfelt platform to keep friendships alive - where you can stay connected with your loved ones, share memorable moments, and strengthen relationships.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    tags: ["React.js", "React Router DOM", "Tailwind CSS", "React Toastify"],
    liveLink: "https://keep-your-friendships-alive-by-redoan.netlify.app/",
    githubLink: "https://github.com/redoan285/Assignment-7",
    accent: "rgba(0,229,255,0.12)",
    accentBorder: "rgba(0,229,255,0.2)",
  },
  {
    title: "Digital Platform Tools",
    description: "A powerful digital tools platform that provides various digital tools and resources. A fully featured application built with modern web technologies.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["React.js", "React Router DOM", "Tailwind CSS", "React Toastify"],
    liveLink: "https://digitools-platform-by-redoan.netlify.app/",
    githubLink: "https://github.com/redoan285/DigiTools-Platform-",
    accent: "rgba(168,85,247,0.12)",
    accentBorder: "rgba(168,85,247,0.2)",
  },
  {
    title: "Your Third Project",
    description: "Add your third project description here. You can add more projects to this array.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://your-third-project.netlify.app/",
    githubLink: "https://github.com/redoan285/your-third-project",
    accent: "rgba(255,107,53,0.12)",
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
            My <span className="gradient-text">Projects</span>
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
                background: "rgba(255,255,255,0.02)", 
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "1.75rem", 
                overflow: "hidden", 
                cursor: "default",
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
                  {/* Live Demo Button */}
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "rgba(0,0,0,0.6)", 
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.15)", 
                      borderRadius: "50%",
                      width: 36, 
                      height: 36, 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      color: "white", 
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={14} />
                  </motion.a>
                  
                  {/* GitHub Button */}
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "rgba(0,0,0,0.6)", 
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.15)", 
                      borderRadius: "50%",
                      width: 36, 
                      height: 36, 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      color: "white", 
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    <Globe size={14} />
                  </motion.a>
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
                      fontSize: "0.75rem", 
                      fontWeight: 600, 
                      padding: "4px 12px", 
                      borderRadius: 20,
                      background: project.accent, 
                      color: "rgba(255,255,255,0.8)",
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginTop: 52 }}
        >
          <a 
            href="https://github.com/redoan285" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", 
              alignItems: "center", 
              gap: 10,
              background: "rgba(255,255,255,0.04)", 
              border: "1px solid rgba(255,255,255,0.12)",
              color: "white", 
              fontWeight: 600, 
              fontFamily: "var(--font-display)",
              padding: "14px 30px", 
              borderRadius: 40, 
              fontSize: "0.95rem",
              backdropFilter: "blur(4px)", 
              transition: "all 0.25s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { 
              e.currentTarget.style.background = "rgba(255,255,255,0.07)"; 
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.background = "rgba(255,255,255,0.04)"; 
            }}
          >
            <Globe size={18} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}