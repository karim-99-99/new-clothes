import { getProductsByCategory } from "../data/products";
import { PageHeader } from "../components/layout/PageHeader";
import { ProductHorizontalScroll } from "../components/products/ProductHorizontalScroll";
import { ProductGrid } from "../components/products/ProductGrid";

export const NewArrivals = () => {
  const products = getProductsByCategory("new-arrivals");

  return (
    <div className="min-h-screen bg-[#2a2a2a] pt-40 pb-20">
      <PageHeader 
        title="Trending this Season" 
        buttonText="Shop All Trending" 
      />

      <ProductHorizontalScroll products={products} />

      <ProductGrid products={products} title="All New Arrivals" />
    </div>
  );
};
