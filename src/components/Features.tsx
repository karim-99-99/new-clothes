"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);
  const x2 = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const features = [
    {
      title: "Premium Fabrics",
      description: "100% organic cotton and breathable materials for ultimate comfort throughout the day",
      icon: "✨",
      color: "from-slate-200 to-white"
    },
    {
      title: "Tailored Fit",
      description: "Expertly crafted with precision cuts for a perfect fit that complements every body type",
      icon: "📐",
      color: "from-gray-300 to-slate-100"
    },
    {
      title: "Timeless Design",
      description: "Minimalist aesthetics that never go out of style, perfect for any occasion",
      icon: "🎨",
      color: "from-zinc-200 to-gray-100"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl text-white mb-6">
            <span className="bg-gradient-to-r from-slate-100 to-white bg-clip-text text-transparent">
              Crafted
            </span>
            <br />
            <span className="text-white">Excellence</span>
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto">
            Discover the meticulous attention to detail that makes every piece a masterpiece of fashion and comfort
          </p>
        </motion.div>

        {/* Main product showcase */}
        <div className="relative mb-32">
          <motion.div
            style={{ scale }}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotateY: [0, 15, -15, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1604136172384-b2e9c43271ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRyb3VzZXJzJTIwcGFudHN8ZW58MXx8fHwxNzY2NDQ4Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Premium Black Trousers"
                  className="w-[28rem] h-[28rem] object-contain"
                  style={{
                    filter: "contrast(1.2) brightness(1.15) saturate(0.9) drop-shadow(0 20px 40px rgba(0,0,0,0.8)) drop-shadow(0 8px 20px rgba(100,100,120,0.3))",
                  }}
                />
                
                {/* Premium lighting effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-gray-300/20 via-transparent to-slate-200/15 rounded-full blur-2xl"
                  style={{ transform: "translateZ(-5px)" }}
                />
              </motion.div>
              
              {/* Animated detail callouts */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-1/4 -left-20 w-4 h-4 bg-slate-200 rounded-full"
              >
                <div className="absolute inset-0 bg-slate-200 rounded-full animate-ping" />
                <div className="absolute -left-32 -top-8 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200/30 text-white text-sm whitespace-nowrap">
                  Stretch Waistband
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-1/2 -right-20 w-4 h-4 bg-white rounded-full"
              >
                <div className="absolute inset-0 bg-white rounded-full animate-ping" />
                <div className="absolute -right-32 -top-8 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/30 text-white text-sm whitespace-nowrap">
                  Reinforced Stitching
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full"
              >
                <div className="absolute inset-0 bg-gray-300 rounded-full animate-ping" />
                <div className="absolute -left-16 -bottom-12 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-gray-300/30 text-white text-sm whitespace-nowrap">
                  Tapered Fit
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                style={{ x: index === 1 ? 0 : index === 0 ? x1 : x2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-35 transition-opacity duration-300`} />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}