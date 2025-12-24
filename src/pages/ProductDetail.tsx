import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { products } from "../data/products";
import { Button } from "../components/ui/button";
import { useCart } from "../context/CartContext";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#2a2a2a] pt-40 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl mb-4">Product not found</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const availableSizes = product.sizes || ["XS", "S", "M", "L", "XL", "XXL"];
  const description = product.description || 
    `Premium quality ${product.name.toLowerCase()}. Available in multiple colors. Perfect for everyday wear with exceptional comfort and style.`;

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Get images for selected color or use default
  const getCurrentImages = () => {
    if (product?.images && product.images[selectedColor]) {
      return product.images[selectedColor];
    }
    // Generate multiple images with different positions/angles
    return [
      product.image,
      product.image.replace("w=400&h=500", "w=400&h=500&fit=crop&crop=face"),
      product.image.replace("w=400&h=500", "w=400&h=500&fit=crop&crop=entropy"),
    ];
  };

  const currentImages = getCurrentImages();
  const currentImage = currentImages[selectedImageIndex] || product.image;

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setSelectedImageIndex(0); // Reset to first image when color changes
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    // Use the currently displayed image (what user sees) or fallback to product image
    const imageToUse = currentImage || product.image;
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: imageToUse,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    });
    alert(`Added to cart: ${product.name} - Size: ${selectedSize} - Color: ${selectedColor} - Quantity: ${quantity}`);
  };

  return (
    <div className="min-h-screen bg-[#2a2a2a] pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-white/70 hover:text-white transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Product Image Gallery */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden bg-gray-200 aspect-[3/4] rounded-lg mb-4">
              <motion.img
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.onSale && (
                <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 text-sm font-medium uppercase tracking-wider z-10">
                  -{discount}%
                </div>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
            {currentImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto">
                {currentImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? "border-white scale-105"
                        : "border-gray-600 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, rotate: 360 }}
              transition={{ duration: 0.6 }}
              style={{
                boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.15)",
                height: "fit-content",
                paddingTop: "70px",
                paddingBottom: "70px"
              }}
            >
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-white font-bold text-3xl">
                  CHF {product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-xl">
                    CHF {product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-white text-xl font-semibold mb-3">Description</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <h2 className="text-white text-xl font-semibold mb-4">Color</h2>
                <div className="flex gap-4 flex-wrap">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorChange(color)}
                      className={`w-14 h-14 rounded-full border-4 transition-all ${
                        selectedColor === color
                          ? "border-white scale-110 shadow-lg ring-2 ring-white/50"
                          : "border-gray-600 hover:border-gray-400"
                      }`}
                      style={{ backgroundColor: color }}
                      title={`Color ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <h2 className="text-white text-xl font-semibold mb-4">Size</h2>
                <div className="flex gap-3 flex-wrap">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
                        selectedSize === size
                          ? "bg-white text-black"
                          : "bg-gray-800 text-white hover:bg-gray-700 border-2 border-gray-700"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-8">
                <h2 className="text-white text-xl font-semibold mb-4">Quantity</h2>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-lg bg-gray-800 text-white hover:bg-gray-700 flex items-center justify-center text-xl font-bold transition-all"
                  >
                    -
                  </button>
                  <span className="text-white text-2xl font-bold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-lg bg-gray-800 text-white hover:bg-gray-700 flex items-center justify-center text-xl font-bold transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="w-full bg-white text-black py-4 rounded-lg text-lg font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

