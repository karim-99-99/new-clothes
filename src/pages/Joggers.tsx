import { getProductsByCategory } from "../data/products";
import { PageHeader } from "../components/layout/PageHeader";
import { ProductHorizontalScroll } from "../components/products/ProductHorizontalScroll";
import { ProductGrid } from "../components/products/ProductGrid";

export const Joggers = () => {
  const products = getProductsByCategory("joggers");

  return (
    <div className="min-h-screen bg-[#2a2a2a] pt-40 pb-20">
      <PageHeader 
        title="Joggers" 
        buttonText="Shop All Joggers" 
      />

      <ProductHorizontalScroll products={products} />

      <ProductGrid products={products} title="All Joggers" />
    </div>
  );
};
