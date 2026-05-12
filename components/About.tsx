"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Cpu, Globe } from "lucide-react";

const cards = [
  { 
    icon: <Layers size={22} />, 
    title: "Tech Stack", 
    body: "Expertise in React, Next.js, Tailwind CSS, Node.js, Express, MongoDB, and PostgreSQL for building robust full-stack solutions." 
  },
  { 
    icon: <Cpu size={22} />, 
    title: "Approach", 
    body: "Focus on component-driven development, responsive-first design, performance optimization, and writing clean, scalable code." 
  },
  { 
    icon: <Globe size={22} />, 
    title: "Experience", 
    body: "Proven track record in delivering high-quality e-commerce platforms, analytics dashboards, and interactive web applications." 
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 30 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn>
          <div className="flex flex-col mb-16 items-center lg:items-start text-center lg:text-left">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4">About Me</span>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-normal leading-tight text-white">
              Developer & <span className="gradient-text">Problem Solver</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main Biography Section */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <div className="glass-card rounded-[2.5rem] p-8 md:p-12 relative group">
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-linear-to-r from-transparent via-accent/30 to-transparent" />
                
                <div className="space-y-6 text-center md:text-left">
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium tracking-wide">
                    I&apos;m <span className="text-accent font-bold">Redoan Ahmad</span>, a web developer passionate about crafting seamless, performant digital experiences. I specialize in the modern JavaScript ecosystem.
                  </p>
                  <p className="text-base md:text-lg text-white/60 leading-loose tracking-wide">
                    My workflow combines clean architecture, pixel-perfect design execution, and an obsession with performance. Every project I ship is fast, accessible, and maintainable.
                  </p>
                  <p className="text-base md:text-lg text-white/60 leading-loose tracking-wide">
                    I constantly explore emerging technologies — from edge computing to AI-assisted tooling — to deliver cutting-edge solutions that keep clients ahead of the curve.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-3">
                  {["Continuous Learner", "Performance Driven", "Clean Code Enthusiast"].map(tag => (
                    <div key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Key Pillars Section */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {cards.map((card, i) => (
              <FadeIn key={card.title} delay={0.3 + i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, borderColor: "rgba(0,229,255,0.3)" }}
                  className="glass-card rounded-[2rem] p-8 group transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold text-white tracking-wide">{card.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed tracking-wide">
                    {card.body}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative blurred background element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[30vw] h-[30vw] bg-accent/5 blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
