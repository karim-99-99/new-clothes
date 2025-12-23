"use client";

import { motion } from "motion/react";

export function Categories() {
  const categories = [
    {
      id: "new-arrivals",
      title: "New Arrivals",
      subtitle: "SHOP NOW",
      image: "https://images.unsplash.com/photo-1604272490759-7c465473958a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWlnZSUyMGhvb2RpZSUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzY2NTE3MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-amber-500/20 to-orange-600/20"
    },
    {
      id: "best-selling",
      title: "Best Selling",
      subtitle: "NOW",
      image: "https://images.unsplash.com/photo-1745825219087-802850857308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWUlMjBmYXNoaW9uJTIwbWluaW1hbHxlbnwxfHx8fDE3NjY1MTcyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-gray-800/30 to-black/40"
    },
    {
      id: "hoodies",
      title: "Hoodies",
      subtitle: "SHOP NOW",
      image: "https://images.unsplash.com/photo-1604272490759-7c465473958a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWlnZSUyMGhvb2RpZSUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzY2NTE3MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-stone-500/20 to-amber-600/20"
    },
    {
      id: "joggers",
      title: "Joggers",
      subtitle: "NOW",
      image: "https://images.unsplash.com/photo-1669159423685-4fa4e23faaad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwam9nZ2VycyUyMHBhbnRzfGVufDF8fHx8MTc2NjUxNzA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-green-700/20 to-emerald-600/20"
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
            The Essentials
          </p>
          <h2 className="text-4xl md:text-6xl text-white">
            Shop by Category
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden bg-gray-900 rounded-none cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[500px] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                
                {/* Animated border effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-white origin-left"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-white/60 text-xs tracking-[0.2em] uppercase mb-2"
                >
                  {category.subtitle}
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-white text-2xl group-hover:text-slate-200 transition-colors duration-300"
                >
                  {category.title}
                </motion.h3>

                {/* Hover arrow indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, x: 5 }}
                  className="absolute right-6 bottom-6 text-white text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
