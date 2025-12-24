import { getSaleProducts } from "../data/products";
import { PageHeader } from "../components/layout/PageHeader";
import { ProductHorizontalScroll } from "../components/products/ProductHorizontalScroll";
import { ProductGrid } from "../components/products/ProductGrid";

export const Sale = () => {
  const saleProducts = getSaleProducts();

  return (
    <div className="min-h-screen bg-[#2a2a2a] pt-40 pb-20">
      <PageHeader 
        title="Sale Items" 
        buttonText="Shop All Sale" 
      />

      <ProductHorizontalScroll products={saleProducts} />

      <ProductGrid products={saleProducts} title="All Sale Items" />
    </div>
  );
};
