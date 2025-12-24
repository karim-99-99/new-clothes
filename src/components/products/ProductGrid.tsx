import { motion } from "motion/react";
import { Product } from "../../data/products";
import { ProductCard } from "../ProductCard";

interface ProductGridProps {
  products: Product[];
  title: string;
}

export const ProductGrid = ({ products, title }: ProductGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-12 mx-auto">
        {title}
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
  );
};


