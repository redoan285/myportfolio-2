"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

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
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center lg:text-left"
        >
          <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Kind Words</span>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-normal leading-tight text-white">
            Client <span className="gradient-text">Feedback</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass-card rounded-[2.5rem] p-8 md:p-12 overflow-hidden flex flex-col"
            >
              {/* Animated top border line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-accent/40 to-transparent group-hover:scale-x-110 transition-transform duration-700" />
              
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} className="fill-accent text-transparent" />
                  ))}
                </div>
                <Quote size={32} className="text-white/5 group-hover:text-accent/10 transition-colors duration-500" />
              </div>

              <blockquote className="text-base md:text-lg text-white/80 leading-loose font-medium mb-10 italic flex-grow tracking-wide">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-5 mt-auto">
                <div className="w-12 h-12 rounded-full flex-shrink-0 bg-linear-to-br from-accent to-accent-purple flex items-center justify-center font-display font-black text-black text-xl">
                  {t.author[0]}
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg tracking-tight">{t.author}</div>
                  <div className="text-[10px] font-black text-white/30 tracking-[0.3em] uppercase">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[20vw] h-[20vw] bg-accent-purple/5 blur-[100px] -z-10" />
    </section>
  );
}
