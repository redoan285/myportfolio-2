"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Code2 } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-accent/10 blur-[120px] opacity-50" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-accent-purple/10 blur-[120px] opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-[#2aff8c] shadow-[0_0_8px_#2aff8c]" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-white/90 font-display">Available for New Projects</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-normal mb-8 text-white"
            >
              Building <span className="gradient-text">digital products</span> that matter.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 tracking-wide"
            >
              I&apos;m <span className="text-white font-bold">Redoan Ahmad</span> — a full-stack developer dedicated to crafting fast, beautiful, and accessible web experiences using React, Next.js and Node.js.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="#projects"
                className="group relative inline-flex items-center gap-3 bg-linear-to-r from-accent to-[#0af] text-black font-bold font-display px-8 py-4 rounded-full shadow-[0_10px_20px_rgba(0,229,255,0.2)] hover:shadow-[0_15px_30px_rgba(0,229,255,0.3)] transition-all uppercase tracking-widest text-sm"
              >
                View My Work <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold font-display px-8 py-4 rounded-full backdrop-blur-sm transition-all uppercase tracking-widest text-sm"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stats - Responsive Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mt-16 max-w-md mx-auto lg:mx-0"
            >
              {[
                { num: "3+", label: "Years Exp." },
                { num: "15+", label: "Projects" },
                { num: "12+", label: "Clients" }
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
                  <span className="block text-2xl md:text-3xl font-black font-display text-accent mb-1 tracking-tight">{stat.num}</span>
                  <span className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.3em]">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 order-1 lg:order-2 max-w-sm sm:max-w-md mx-auto w-full relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-accent-purple/10 z-10" />
              <img
                src="/mm.png"
                alt="Redoan Ahmad"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 glass-card px-6 py-3 rounded-full flex items-center gap-3 border-white/20 whitespace-nowrap">
                <Code2 size={18} className="text-accent" />
                <span className="text-xs font-black text-white tracking-[0.3em] uppercase">Full Stack Developer</span>
              </div>
            </div>
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
