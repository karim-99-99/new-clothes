"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

export function ColorShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const colors = [
    {
      id: "pure-white",
      name: "Pure White",
      gradient: "from-white to-slate-50",
      accent: "bg-white",
      description: "Classic white for a fresh, clean look",
      filter: "",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      id: "off-white",
      name: "Off-White",
      gradient: "from-slate-50 to-stone-100",
      accent: "bg-slate-50",
      description: "Warm off-white with subtle elegance",
      filter: "brightness(0.98) sepia(0.05)",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      id: "cloud-gray",
      name: "Cloud Gray",
      gradient: "from-gray-100 to-slate-200",
      accent: "bg-gray-100",
      description: "Soft gray for sophisticated casual wear",
      filter: "grayscale(0.3) brightness(1.05)",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      id: "dove-gray",
      name: "Dove Gray",
      gradient: "from-gray-300 to-slate-400",
      accent: "bg-gray-300",
      description: "Medium gray for versatile styling",
      filter: "grayscale(0.5) brightness(0.95)",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      id: "charcoal",
      name: "Charcoal",
      gradient: "from-gray-600 to-slate-700",
      accent: "bg-gray-600",
      description: "Deep charcoal for urban sophistication",
      filter: "grayscale(0.8) brightness(0.75)",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      id: "jet-black",
      name: "Jet Black",
      gradient: "from-gray-900 to-black",
      accent: "bg-gray-900",
      description: "Timeless black for ultimate elegance",
      filter: "grayscale(1) brightness(0.6)",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black pt-40 pb-20 overflow-hidden mt-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl text-white mb-6">
            <span className="text-white">Express</span>
            <br />
            <span className="bg-gradient-to-r from-slate-100 via-white to-slate-100 bg-clip-text text-transparent">
              Your Style
            </span>
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto">
            Discover our wide range of colors, from classic neutrals to bold statements. Each shade is carefully selected to help you express your unique personality
          </p>
        </motion.div>

        <div className="relative">
          {/* Main product display */}
          <motion.div
            style={{ y }}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              {/* Background gradient that changes with selected color */}
              <motion.div
                key={selectedColor}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 bg-gradient-to-br ${colors[selectedColor].gradient} rounded-full blur-3xl opacity-20 scale-150`}
              />
              
              <motion.div
                key={selectedColor}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <motion.div
                  animate={{ 
                    rotateY: [0, 10, -10, 0],
                    rotateX: [0, 3, -3, 0],
                    y: [0, -12, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={colors[selectedColor].image}
                    alt={`${colors[selectedColor].name} Clothing`}
                    className="w-[28rem] h-[28rem] object-contain transition-all duration-500"
                    style={{
                      filter: `contrast(1.2) brightness(1.15) saturate(0.95) drop-shadow(0 25px 50px rgba(0,0,0,0.8)) drop-shadow(0 10px 25px rgba(150,150,170,0.3)) ${colors[selectedColor].filter}`,
                    }}
                  />
                  
                  {/* Dynamic color-based lighting */}
                  <motion.div 
                    key={selectedColor}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className={`absolute inset-0 bg-gradient-to-br ${colors[selectedColor].gradient} rounded-full blur-3xl opacity-25`}
                    style={{ transform: "translateZ(-10px)" }}
                  />
                  
                  {/* Animated rim lighting */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360] 
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${
                        colors[selectedColor].gradient.includes('white') ? '#ffffff' : 
                        colors[selectedColor].gradient.includes('slate-50') ? '#f8fafc' : 
                        colors[selectedColor].gradient.includes('gray-100') ? '#f3f4f6' :
                        colors[selectedColor].gradient.includes('gray-300') ? '#d1d5db' :
                        colors[selectedColor].gradient.includes('gray-600') ? '#4b5563' : '#111827'
                      }50, transparent)`,
                      filter: "blur(2px)",
                      transform: "translateZ(-5px)"
                    }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Floating color indicator */}
              <motion.div
                key={selectedColor}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2"
              >
                <div className={`w-6 h-6 ${colors[selectedColor].accent} rounded-full border-4 border-white shadow-lg`} />
              </motion.div>
            </div>
          </motion.div>

          {/* Color selector */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {colors.map((color, index) => (
              <motion.button
                key={color.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedColor(index)}
                className={`relative group ${
                  selectedColor === index ? 'ring-4 ring-white/50' : ''
                } rounded-full overflow-hidden transition-all duration-300`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${color.gradient} rounded-full border-2 border-white/20`} />
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Color name tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {color.name}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Selected color details */}
          <motion.div
            key={selectedColor}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className={`text-3xl md:text-4xl mb-4 bg-gradient-to-r ${colors[selectedColor].gradient} bg-clip-text text-transparent`}>
              {colors[selectedColor].name}
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {colors[selectedColor].description}
            </p>
          </motion.div>

          {/* Enhanced floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {colors.map((color, colorIndex) => (
              <motion.div
                key={`color-particle-${color.id}-${colorIndex}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.sin(colorIndex * 2) * 50, 0],
                  y: [0, Math.cos(colorIndex * 2) * 50, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: colorIndex * 0.3,
                  ease: "easeInOut"
                }}
                className={`absolute w-3 h-3 bg-gradient-to-br ${color.gradient} rounded-full blur-sm`}
                style={{
                  top: `${15 + (colorIndex % 4) * 20}%`,
                  left: `${5 + (colorIndex % 5) * 18}%`,
                }}
              />
            ))}
            
            {/* Additional micro particles for current color */}
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={`micro-particle-${colors[selectedColor].id}-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.sin(i * 0.8) * 80, 0],
                  y: [0, Math.cos(i * 0.8) * 80, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className={`absolute w-1 h-1 bg-gradient-to-br ${colors[selectedColor].gradient} rounded-full blur-sm`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}