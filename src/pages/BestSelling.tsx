import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { getProductsByCategory } from "../data/products";

export const BestSelling = () => {
  const products = getProductsByCategory("best-selling");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const navigate = useNavigate();

  const scrollToProduct = (productId: string) => {
    const element = document.getElementById(`product-${productId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-[#2a2a2a] pt-40 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 mb-96"
      >
        <div className="flex items-center justify-between mt-96 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
            Best Selling
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-2.5 rounded-none text-sm uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 font-medium whitespace-nowrap"
          >
            Shop All Best Selling
          </motion.button>
        </div>
      </motion.div>

      {/* Horizontal Scrollable Product Gallery */}
      <div className="w-full mb-12 mt-96 relative">
        {/* Scrollable Container */}
        <div 
          className="overflow-x-auto overflow-y-hidden px-16 py-4 scrollbar-hide" 
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none', 
            WebkitOverflowScrolling: 'touch',
            top: '35px',
            marginTop: '35px',
          }}
        >
          <div 
            className="flex gap-4" 
            style={{ 
              display: 'flex', 
              flexWrap: 'nowrap', 
              width: 'max-content',
              paddingRight: '16px'
            }}
          >
            {products.map((product) => {
              const description = product.description || 
                `Premium quality ${product.name.toLowerCase()}. Available in multiple colors. Perfect for everyday wear with exceptional comfort and style.`;
              
              return (
              <motion.div 
                key={product.id} 
                className="flex-shrink-0 cursor-pointer relative"
                style={{ width: '120px', minWidth: '120px', flexShrink: 0 }}
                onClick={() => handleProductClick(product.id)}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Hover Tooltip - At Bottom of Image */}
                {hoveredProduct === product.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-4 rounded-lg shadow-2xl pointer-events-none w-56 border border-white/10"
                  >
                    <h4 className="text-white font-bold text-lg mb-2">
                      {product.name}
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">{description}</p>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                  </motion.div>
                )}
                <div className="bg-[#f5f5f5] rounded-none group h-full w-full">
                  <div className="relative overflow-hidden bg-gray-200 w-full" style={{ aspectRatio: '3/4' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {product.onSale && (
                      <div className="absolute top-1 left-1 bg-black text-white px-1.5 py-0.5 text-[9px] font-medium uppercase z-10">
                        -{Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}%
                      </div>
                    )}
                    
                    {/* Product Info Overlay at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-2">
                      <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <span className="text-white font-semibold text-xs">
                          CHF {product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through text-[10px]">
                            CHF {product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </div>

      {/* Additional sections with all products */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 mt-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-12 mx-auto">
          All Best Selling
        </h2>
        <div className="mx-auto">
          <div 
            className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(4, 1fr)'
            }}
          >
            {products.map((product) => (
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
