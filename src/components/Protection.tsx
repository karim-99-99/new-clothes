"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Protection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 180, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const tshirtOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [1, 1, 0, 0]);
  const hangerOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, 1, 1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-slate-800 pt-40 pb-20 flex items-center mt-8" style={{ borderWidth: '1px', borderColor: 'rgba(0, 0, 0, 1)', borderImage: 'radial-gradient(circle at 50% 50%, rgba(65, 121, 129, 1) 55%, rgba(110, 7, 7, 1) 100%) 1' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl text-white mb-8">
              <span className="text-white">Long Lasting</span>
              <br />
              <span className="bg-gradient-to-r from-slate-100 to-white bg-clip-text text-transparent">
                Quality
              </span>
            </h2>
            <p className="text-white/70 text-xl mb-8 leading-relaxed">
              Built to last. Our premium materials and construction ensure your clothing stays 
              fresh and maintains its quality for years, with easy care instructions included.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-200 to-white rounded-full flex items-center justify-center">
                  <span className="text-black text-xl">🧺</span>
                </div>
                <div>
                  <h3 className="text-white text-xl mb-2">Easy Care</h3>
                  <p className="text-white/60">Machine washable with color-safe technology</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-200 to-white rounded-full flex items-center justify-center">
                  <span className="text-black text-xl">👔</span>
                </div>
                <div>
                  <h3 className="text-white text-xl mb-2">Wrinkle Free</h3>
                  <p className="text-white/60">Advanced fabric that stays crisp all day</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-200 to-white rounded-full flex items-center justify-center">
                  <span className="text-black text-xl">♻️</span>
                </div>
                <div>
                  <h3 className="text-white text-xl mb-2">Sustainable</h3>
                  <p className="text-white/60">Eco-friendly materials and ethical production</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3D Transition showcase */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* T-shirt */}
              <motion.div
                style={{ rotateY, scale, opacity: tshirtOpacity }}
                className="absolute inset-0"
              >
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotateX: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Premium Clothing"
                    className="w-[22rem] h-[22rem] object-contain"
                    style={{
                      filter: "contrast(1.15) brightness(1.2) saturate(0.95) drop-shadow(0 20px 40px rgba(0,0,0,0.6)) drop-shadow(0 8px 20px rgba(200,200,220,0.3))",
                    }}
                  />
                  
                  {/* Enhanced glow for transformation */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-slate-100/20 via-white/20 to-slate-100/20 rounded-full blur-2xl"
                    style={{ transform: "translateZ(-8px)" }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Clothing hanger */}
              <motion.div
                style={{ scale, opacity: hangerOpacity }}
                className="absolute inset-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Premium Storage"
                  className="w-80 h-80 object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Floating icons */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-16 -left-16"
              >
                <div className="bg-slate-200/20 backdrop-blur-sm rounded-full p-4 border border-slate-200/30">
                  <span className="text-2xl">🧺</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-16 -right-16"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                  <span className="text-2xl">👔</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
              >
                <div className="bg-gray-200/20 backdrop-blur-sm rounded-full p-4 border border-gray-200/30">
                  <span className="text-2xl">♻️</span>
                </div>
              </motion.div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center"
            >
              <p className="text-white/60 text-sm mb-2">Scroll to see the transformation</p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white/40 text-2xl"
              >
                ↓
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}