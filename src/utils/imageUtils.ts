/**
 * Get product image based on color
 * Maps product colors to appropriate clothing images
 */
export const getImageByColor = (color: string, category: string = "hoodies"): string => {
  // Normalize color for comparison
  const normalizedColor = color.toUpperCase().trim();
  
  // Color to image mapping based on ColorShowcase colors
  const colorImageMap: { [key: string]: string } = {
    // White colors
    "#FFFFFF": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop",
    "#F5F5F5": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop",
    
    // Beige/Off-white colors
    "#F5E6D3": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop",
    "#8B7355": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop",
    "#C2B280": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop",
    "#C3B091": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop",
    
    // Gray colors
    "#808080": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
    "#696969": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop",
    "#36454F": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop",
    "#2F2F2F": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop",
    
    // Black colors
    "#000000": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop",
    "#1A1A1A": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop",
    
    // Green colors
    "#6B8E23": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    "#228B22": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    "#006400": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    
    // Blue colors
    "#000080": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    "#191970": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    
    // Other colors
    "#800020": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop", // Burgundy
    "#800000": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop", // Maroon
    "#008080": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop", // Teal
    "#8B4513": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop", // Brown
    "#800080": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop", // Purple
  };
  
  // Return mapped image or default based on category
  if (colorImageMap[normalizedColor]) {
    return colorImageMap[normalizedColor];
  }
  
  // Default images by category
  const defaultImages: { [key: string]: string } = {
    "hoodies": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    "joggers": "https://images.unsplash.com/photo-1669159423685-4fa4e23faaad?w=400&h=500&fit=crop",
    "new-arrivals": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    "sale": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    "best-selling": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
  };
  
  return defaultImages[category] || defaultImages["hoodies"];
};


