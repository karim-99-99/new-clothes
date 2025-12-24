import { useNavigate } from "react-router-dom";

/**
 * Hook for product navigation
 */
export const useProductNavigation = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const scrollToProduct = (productId: string) => {
    const element = document.getElementById(`product-${productId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return {
    handleProductClick,
    scrollToProduct,
  };
};


