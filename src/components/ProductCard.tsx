import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Generate description if not provided
  const description = product.description || 
    `Premium quality ${product.name.toLowerCase()}. Available in multiple colors. Perfect for everyday wear with exceptional comfort and style.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#f5f5f5] rounded-none grid group cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Hover Tooltip - At Bottom of Image */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-5 rounded-lg shadow-2xl pointer-events-none border border-white/10"
        >
          <h4 className="text-white font-bold text-xl md:text-2xl mb-3">
            {product.name}
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{description}</p>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
        </motion.div>
      )}

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-200 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.onSale && isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-1 left-1 bg-black text-white px-1.5 py-0.5 text-[9px] font-medium uppercase z-10"
          >
            -{discount}%
          </motion.div>
        )}
        
        {/* Product Info Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4">
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          {/* Price */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white font-bold text-base">
              CHF {product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                CHF {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Color Swatches */}
          <div className="flex gap-2">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-sm border-2 border-white/50"
                style={{ backgroundColor: color }}
                title={`Color ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


