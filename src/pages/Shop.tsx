import { motion } from "motion/react";
import { products } from "../data/products";
import { PageHeader } from "../components/layout/PageHeader";
import { ProductGrid } from "../components/products/ProductGrid";

export const Shop = () => {
  return (
    <div className="min-h-screen bg-[#2a2a2a] pt-40 pb-20">
      <PageHeader 
        title="All Products" 
        buttonText="Shop All Products" 
      />

      <ProductGrid products={products} title="All Products" />
    </div>
  );
};
