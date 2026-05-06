"use client";
import { Link, Globe, X } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "40px 0 48px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <div>
          <a href="#" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.02em", textDecoration: "none" }}>
            <span style={{ background: "linear-gradient(135deg, #ffffff, #00e5ff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Redoan</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>.</span>
          </a>
          <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginTop: 6 }}>
            © 2026 Redoan Ahmad. All rights reserved.
          </p>
        </div>

        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {[
            { icon: <Globe size={18} />, label: "GitHub" },
            { icon: <Link size={18} />, label: "LinkedIn" },
            { icon: <X size={18} />, label: "Twitter" },
          ].map((s) => (
            <a key={s.label} href="#" aria-label={s.label}
              style={{
                color: "var(--muted)", transition: "color 0.2s", display: "flex",
                width: 38, height: 38, borderRadius: "50%",
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                alignItems: "center", justifyContent: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
