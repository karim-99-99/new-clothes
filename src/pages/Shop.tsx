import { motion } from "motion/react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

export const Shop = () => {
  // Display ALL products from all categories
  const allProducts = products;

  return (
    <div className="min-h-screen bg-[#2a2a2a] pt-40 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 mb-12"
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
            All Products
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-2.5 rounded-none text-sm uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 font-medium whitespace-nowrap"
          >
            Shop All Products
          </motion.button>
        </div>
      </motion.div>

      {/* All Products Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 mt-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-12 mx-auto">
          All Products
        </h2>
        <div className="mx-auto">
          <div 
            className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(4, 1fr)'
            }}
          >
            {allProducts.map((product) => (
              <div key={product.id} id={`product-${product.id}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

