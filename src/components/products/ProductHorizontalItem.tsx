import { motion } from "motion/react";
import { Product } from "../../data/products";
import { formatPrice, calculateDiscount } from "../../utils/productUtils";
import { ProductHoverTooltip } from "./ProductHoverTooltip";

interface ProductHorizontalItemProps {
  product: Product;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export const ProductHorizontalItem = ({
  product,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: ProductHorizontalItemProps) => {
  const discount = product.originalPrice 
    ? calculateDiscount(product.originalPrice, product.price)
    : 0;

  return (
    <motion.div 
      key={product.id} 
      className="flex-shrink-0 cursor-pointer relative"
      style={{ width: '120px', minWidth: '120px', flexShrink: 0 }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isHovered && (
        <ProductHoverTooltip 
          productName={product.name}
          description={product.description || `Premium quality ${product.name.toLowerCase()}. Available in multiple colors. Perfect for everyday wear with exceptional comfort and style.`}
        />
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
              -{discount}%
            </div>
          )}
          
          {/* Product Info Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-2">
            <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">
              {product.name}
            </h3>
            <div className="flex items-center gap-1">
              <span className="text-white font-semibold text-xs">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through text-[10px]">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


