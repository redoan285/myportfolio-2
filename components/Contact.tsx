"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Globe, Link, X, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/redoanmollik582@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...form,
          _subject: `New Portfolio Message: ${form.subject}`
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-normal mb-6 text-white leading-tight">
            Let&apos;s Build <span className="gradient-text">Something Great</span>
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed tracking-wide">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="glass-card rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden">
              <h3 className="font-display text-2xl font-bold text-white mb-8 tracking-tight">Direct Channels</h3>
              
              <a 
                href="mailto:redoanmollik582@gmail.com" 
                className="group flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Email Me</div>
                  <div className="text-sm md:text-base font-semibold text-white tracking-wide">redoanmollik582@gmail.com</div>
                </div>
              </a>

              <div className="mt-12 pt-10 border-t border-white/5">
                <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-8">Social Ecosystem</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Globe size={20} />, label: "GitHub", href: "https://github.com/redoan285" },
                    { icon: <Link size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/redoan285" },
                    { icon: <X size={20} />, label: "Twitter", href: "https://twitter.com/redoan285" }
                  ].map((s) => (
                    <a 
                      key={s.label} 
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                      aria-label={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-accent/5 border border-accent/20 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#2aff8c] shadow-[0_0_8px_#2aff8c]" />
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Available for new opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-[2.5rem] p-8 md:p-12 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Redoan Ahmad" 
                    required 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-hidden focus:border-accent/50 focus:bg-white/10 transition-all placeholder:text-white/20 tracking-wide"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@example.com" 
                    required 
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-hidden focus:border-accent/50 focus:bg-white/10 transition-all placeholder:text-white/20 tracking-wide"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can I help you?" 
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-hidden focus:border-accent/50 focus:bg-white/10 transition-all placeholder:text-white/20 tracking-wide"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell me about your project or vision..." 
                  required 
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-hidden focus:border-accent/50 focus:bg-white/10 transition-all resize-none placeholder:text-white/20 leading-relaxed tracking-wide"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full md:w-auto px-10 py-5 rounded-full font-display font-black text-black text-lg flex items-center justify-center gap-3 transition-all duration-300 uppercase tracking-widest ${
                  status === "success" 
                    ? "bg-[#2aff8c] shadow-[0_0_20px_rgba(42,255,140,0.4)]" 
                    : status === "error"
                    ? "bg-red-500 text-white"
                    : "bg-linear-to-r from-accent to-accent-purple shadow-xl hover:shadow-accent/20"
                }`}
              >
                {status === "loading" ? (
                  <><Loader2 size={20} className="animate-spin" /> Sending...</>
                ) : status === "success" ? (
                  <><CheckCircle size={22} /> Sent Successfully</>
                ) : status === "error" ? (
                  <>Failed to Send</>
                ) : (
                  <><Send size={20} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
