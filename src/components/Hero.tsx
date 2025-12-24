import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0.6]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40">
      {/* Background image with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Streetwear Fashion"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: [0, Math.sin(i) * 200, 0],
              y: [0, Math.cos(i) * 200, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              delay: i * 0.4,
              ease: "easeInOut" 
            }}
            className="absolute w-1 h-1 bg-white/40 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-white/70 text-sm md:text-base tracking-[0.3em] uppercase">
            Premium Fashion
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-5xl md:text-8xl text-white mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-slate-100 via-white to-slate-100 bg-clip-text text-transparent">
            STYLE YOUR
          </span>
          <br />
          <span className="text-white">LIFESTYLE</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Discover premium quality clothing that combines comfort with cutting-edge design. Express yourself with our exclusive collection.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/new-arrivals">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-4 rounded-none text-base uppercase tracking-wider transition-all duration-300 border-2 border-white"
            >
              Shop New Arrival
            </motion.button>
          </Link>
          
          <Link to="/sale">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-4 rounded-none text-base uppercase tracking-wider transition-all duration-300"
            >
              Shop Sale
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Ambient glow effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl z-0"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-200/5 rounded-full blur-3xl z-0"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}