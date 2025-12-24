"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Lifestyle() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black pt-40 pb-20 overflow-hidden mt-8">
      <div className="max-w-7xl mx-auto px-6" style={{ backgroundColor: 'var(--color-gray-900)', borderWidth: '1px', borderColor: 'rgba(13, 13, 13, 1)', borderImage: 'linear-gradient(90deg, rgba(13, 13, 13, 1) 74%, rgba(255, 255, 255, 1) 100%) 1' }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images section with 3D effects */}
          <div className="relative">
            {/* Back image */}
            <motion.div
              style={{ x: x1 }}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1080&h=800&fit=crop"
                  alt="Lifestyle"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30" />
              </div>
              
              {/* Floating glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-slate-300/10 blur-3xl -z-10" />
            </motion.div>

            {/* Front image */}
            <motion.div
              style={{ x: x2 }}
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative mt-8 lg:absolute lg:top-1/2 lg:right-0 lg:w-4/5 lg:mt-0 z-20"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1669159423685-4fa4e23faaad?w=1080&h=800&fit=crop"
                  alt="Lifestyle"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30" />
              </div>
              
              {/* Floating glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-amber-300/10 blur-3xl -z-10" />
            </motion.div>

            {/* Animated particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.sin(i * 2) * 60, 0],
                  y: [0, Math.cos(i * 2) * 60, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 bg-white/30 rounded-full blur-sm"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 10}%`,
                }}
              />
            ))}
          </div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:pl-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white/60 text-sm tracking-[0.3em] uppercase mb-6"
            >
              Daily comfort
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl text-white mb-8 leading-tight"
            >
              Style for{" "}
              <span className="bg-gradient-to-r from-slate-100 to-white bg-clip-text text-transparent italic">
                Every Day
              </span>{" "}
              Life
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              Our exclusive platform features collections crafted by our inspiring designers. 
              Experience the perfect blend of comfort, style, and functionality in every piece.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group text-white text-base uppercase tracking-wider border-b-2 border-white pb-2 hover:border-slate-200 transition-all duration-300 flex items-center gap-2"
            >
              OUR STORY
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
