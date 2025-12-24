import { getProductsByCategory } from "../data/products";
import { PageHeader } from "../components/layout/PageHeader";
import { ProductHorizontalScroll } from "../components/products/ProductHorizontalScroll";
import { ProductGrid } from "../components/products/ProductGrid";

export const BestSelling = () => {
  const products = getProductsByCategory("best-selling");

  return (
    <div className="min-h-screen bg-[#2a2a2a] pt-40 pb-20">
      <PageHeader 
        title="Best Selling" 
        buttonText="Shop All Best Selling" 
      />

      <ProductHorizontalScroll products={products} />

      <ProductGrid products={products} title="All Best Selling" />
    </div>
  );
};
