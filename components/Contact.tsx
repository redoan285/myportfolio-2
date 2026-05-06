"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Globe, Link, X } from "lucide-react";

export default function Contact() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(3,8,20,0.7)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "1rem",
    padding: "15px 20px",
    color: "white",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "100px 0 120px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        <motion.div ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: 14 }}>
            Contact
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 16 }}>
            Let&apos;s Build <span className="gradient-text">Something Great</span>
          </h2>
          <p style={{ color: "var(--muted-light)", fontSize: "1.05rem", marginBottom: 56, maxWidth: 520 }}>
            Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 40, alignItems: "start" }}
          className="grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div style={{
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "1.75rem", padding: "36px 32px",
            }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.2rem", marginBottom: 24 }}>
                Direct Contact
              </h3>

              <a href="mailto:redoanmollik582@gmail.com" style={{
                display: "flex", alignItems: "center", gap: 14, marginBottom: 28,
                color: "var(--muted-light)", textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-light)")}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                  background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--accent)",
                }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginBottom: 2 }}>Email</div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>redoanmollik582@gmail.com</div>
                </div>
              </a>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 28 }}>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", marginBottom: 18, color: "var(--muted-light)" }}>
                  Find me on
                </h4>
                <div style={{ display: "flex", gap: 12 }}>
                  {[{ icon: <Globe size={18} />, label: "GitHub" }, { icon: <Link size={18} />, label: "LinkedIn" }, { icon: <X size={18} />, label: "Twitter" }].map((s) => (
                    <motion.a key={s.label} href="#" whileHover={{ scale: 1.1, borderColor: "rgba(0,229,255,0.3)" }}
                      style={{
                        width: 44, height: 44, borderRadius: "50%",
                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "var(--muted-light)", transition: "color 0.2s", textDecoration: "none",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-light)")}
                      aria-label={s.label}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 28, paddingTop: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#2aff8c", boxShadow: "0 0 6px #2aff8c", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.88rem", color: "var(--muted-light)" }}>Available for new projects</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} style={{
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "1.75rem", padding: "36px 32px",
              display: "flex", flexDirection: "column", gap: 18,
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}
                className="grid-cols-1 sm:grid-cols-2">
                <input type="text" placeholder="Your Name" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,229,255,0.4)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,229,255,0.08)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
                />
                <input type="email" placeholder="Your Email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,229,255,0.4)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,229,255,0.08)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
                />
              </div>
              <input type="text" placeholder="Subject" value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                style={inputStyle}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,229,255,0.4)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,229,255,0.08)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
              />
              <textarea rows={6} placeholder="Tell me about your project..." required value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,229,255,0.4)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,229,255,0.08)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 8px 40px rgba(0,229,255,0.35)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                  background: sent ? "linear-gradient(135deg, #2aff8c, #00d4aa)" : "linear-gradient(135deg, var(--accent), var(--accent-purple))",
                  color: "#000", fontWeight: 700, fontFamily: "var(--font-display)",
                  padding: "15px 30px", borderRadius: 40, fontSize: "0.95rem",
                  border: "none", cursor: "pointer", transition: "background 0.3s",
                  alignSelf: "flex-start",
                }}
              >
                {sent ? "✓ Message Sent!" : <><Send size={16} /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
