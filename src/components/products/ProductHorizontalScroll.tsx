import { useState } from "react";
import { Product } from "../../data/products";
import { useProductNavigation } from "../../hooks/useProductNavigation";
import { ProductHorizontalItem } from "./ProductHorizontalItem";

interface ProductHorizontalScrollProps {
  products: Product[];
}

export const ProductHorizontalScroll = ({ products }: ProductHorizontalScrollProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const { handleProductClick } = useProductNavigation();

  return (
    <div className="w-full mb-12 mt-96 relative">
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
          {products.map((product) => (
            <ProductHorizontalItem
              key={product.id}
              product={product}
              isHovered={hoveredProduct === product.id}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


