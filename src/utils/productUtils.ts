import { Product } from "../data/products";

/**
 * Calculate discount percentage
 */
export const calculateDiscount = (originalPrice: number, currentPrice: number): number => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

/**
 * Format price with currency
 */
export const formatPrice = (price: number): string => {
  return `CHF ${price.toFixed(2)}`;
};

/**
 * Get product description or generate default
 */
export const getProductDescription = (product: Product): string => {
  return product.description || 
    `Premium quality ${product.name.toLowerCase()}. Available in multiple colors. Perfect for everyday wear with exceptional comfort and style.`;
};


