import { motion } from "motion/react";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { Features } from "./components/Features";
import { Lifestyle } from "./components/Lifestyle";
import { Protection } from "./components/Protection";
import { ColorShowcase } from "./components/ColorShowcase";

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Top banner */}
          <div className="text-center text-white/60 text-xs uppercase tracking-wider mb-4 border-b border-white/10 pb-3">
            <span className="mr-8">Free shipping on orders over $100 - Shop Now</span>
            <span>New customers save 10% with code WELCOME10</span>
          </div>
          
          {/* Main nav */}
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl tracking-wider">
              <span className="bg-gradient-to-r from-slate-100 to-white bg-clip-text text-transparent">
                LUXE
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-white/70 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider">
                Shop
              </a>
              <a href="#categories" className="text-white/70 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider">
                Best Sellers
              </a>
              <a href="#features" className="text-white/70 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider">
                New Arrivals
              </a>
              <a href="#lifestyle" className="text-white/70 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider">
                Community
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 py-2 rounded-none text-sm uppercase tracking-wider hover:bg-slate-100 transition-all duration-300"
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Categories Section */}
      <section id="categories">
        <Categories />
      </section>

      {/* Features Section with 3D Product */}
      <section id="features">
        <Features />
      </section>

      {/* Lifestyle Section */}
      <section id="lifestyle">
        <Lifestyle />
      </section>

      {/* Protection/Care Section */}
      <section id="protection">
        <Protection />
      </section>

      {/* Color Showcase Section */}
      <section id="colors">
        <ColorShowcase />
      </section>

      {/* Footer / CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-gray-900 via-black to-slate-900 py-20"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl text-white mb-8"
          >
            Ready to Elevate
            <br />
            <span className="bg-gradient-to-r from-slate-100 to-white bg-clip-text text-transparent">
              Your Style?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white/70 text-xl mb-12 max-w-2xl mx-auto"
          >
            Join thousands of fashion enthusiasts who have discovered the perfect blend of comfort and style. 
            Shop now and be among the first to experience our premium collection.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-12 py-4 rounded-none text-base uppercase tracking-wider hover:bg-slate-100 transition-all duration-300"
            >
              Shop Now - From $49
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-12 py-4 rounded-none text-base uppercase tracking-wider hover:border-slate-200 transition-all duration-300"
            >
              View Collection
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-white/50 text-sm"
          >
            Free shipping worldwide • 30-day returns • Premium quality guarantee
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced background ambient animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-200/5 rounded-full blur-3xl"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/2 w-96 h-96 bg-gray-300/5 rounded-full blur-3xl"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 12, delay: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-slate-400/4 rounded-full blur-3xl"
          animate={{ 
            opacity: [0.15, 0.4, 0.15],
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}