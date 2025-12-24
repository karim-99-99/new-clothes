import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(cartItems[0]?.id || null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<{ [key: string]: number }>({});

  // Update selected item when cart changes
  useEffect(() => {
    if (cartItems.length > 0) {
      if (!selectedItemId || !cartItems.find(item => item.id === selectedItemId)) {
        setSelectedItemId(cartItems[0].id);
      }
    } else {
      setSelectedItemId(null);
    }
  }, [cartItems, selectedItemId]);

  const handleCheckout = () => {
    alert(`Order placed! Total: CHF ${totalPrice.toFixed(2)}`);
    clearCart();
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#2a2a2a] pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-white text-4xl font-bold mb-8">Shopping Cart</h1>
          <div className="text-center py-20">
            <svg className="w-24 h-24 mx-auto text-gray-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-white text-2xl mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">Add some products to get started!</p>
            <button
              onClick={() => navigate("/")}
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2a2a2a] pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-white text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cart Items - Left Side */}
          <div className="space-y-4">
            <h2 className="text-white text-2xl font-bold mb-4">
              Cart Items ({cartItems.length})
            </h2>
            <div className="space-y-3">
              {cartItems.map((item) => {
                const isSelected = selectedItemId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => setSelectedItemId(item.id)}
                    className={`bg-gray-800 rounded-lg p-4 cursor-pointer transition-all ${
                      isSelected ? "border-2 border-amber-500" : "border border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <div className="flex gap-4 items-center">
                      {/* Thumbnail Image */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-700 border border-gray-600">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white text-sm font-semibold mb-1 line-clamp-1">{item.name}</h3>
                        <p className="text-white font-bold text-base mb-1">CHF {(item.price * item.quantity).toFixed(2)}</p>
                        <div className="flex items-center gap-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(item.id, item.quantity - 1);
                              }}
                              className="w-6 h-6 rounded bg-gray-700 text-white hover:bg-gray-600 flex items-center justify-center text-sm font-bold"
                            >
                              -
                            </button>
                            <span className="text-white font-semibold text-sm w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(item.id, item.quantity + 1);
                              }}
                              className="w-6 h-6 rounded bg-gray-700 text-white hover:bg-gray-600 flex items-center justify-center text-sm font-bold"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-gray-400 text-sm">Subtotal: CHF {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFromCart(item.id);
                          if (selectedItemId === item.id) {
                            const remainingItems = cartItems.filter(i => i.id !== item.id);
                            setSelectedItemId(remainingItems[0]?.id || null);
                          }
                        }}
                        className="flex-shrink-0 text-red-400 hover:text-red-300 transition-all p-2"
                        title="Delete item"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Selected Product - Right Side */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            {selectedItemId && (() => {
              const selectedItem = cartItems.find(item => item.id === selectedItemId);
              if (!selectedItem) return null;

              const product = products.find((p) => p.id === selectedItem.productId);
              const getProductImages = () => {
                if (product?.images && product.images[selectedItem.color]) {
                  return product.images[selectedItem.color];
                }
                return [
                  selectedItem.image,
                  selectedItem.image.replace("w=400&h=500", "w=400&h=500&fit=crop&crop=face"),
                  selectedItem.image.replace("w=400&h=500", "w=400&h=500&fit=crop&crop=entropy"),
                ];
              };

              const productImages = getProductImages();
              const currentImageIndex = selectedImageIndex[selectedItemId] || 0;
              const currentImage = productImages[currentImageIndex] || selectedItem.image;

              const handlePreviousImage = () => {
                const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : productImages.length - 1;
                setSelectedImageIndex(prev => ({ ...prev, [selectedItemId]: newIndex }));
              };

              const handleNextImage = () => {
                const newIndex = currentImageIndex < productImages.length - 1 ? currentImageIndex + 1 : 0;
                setSelectedImageIndex(prev => ({ ...prev, [selectedItemId]: newIndex }));
              };

              const handleThumbnailClick = (index: number) => {
                setSelectedImageIndex(prev => ({ ...prev, [selectedItemId]: index }));
              };

              return (
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h2 className="text-white text-2xl font-bold mb-6">Selected Product</h2>
                  
                  {/* Main Product Image with Navigation */}
                  <div className="relative mb-4">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-700 mb-4">
                      <motion.img
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        src={currentImage}
                        alt={selectedItem.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Navigation Arrows */}
                    {productImages.length > 1 && (
                      <>
                        <button
                          onClick={handlePreviousImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 text-white flex items-center justify-center border border-gray-600 transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 text-white flex items-center justify-center border border-gray-600 transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {productImages.length > 1 && (
                    <div className="mb-4">
                      <div className="flex gap-2 justify-center">
                        {productImages.map((img, index) => (
                          <button
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                            className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                              currentImageIndex === index
                                ? "border-amber-500 scale-105"
                                : "border-gray-600 hover:border-gray-400"
                            }`}
                          >
                            <img
                              src={img}
                              alt={`${selectedItem.name} view ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                      <p className="text-gray-400 text-sm text-center mt-2">
                        Image {currentImageIndex + 1} of {productImages.length}
                      </p>
                    </div>
                  )}

                  {/* Product Details */}
                  <div className="space-y-3">
                    <h3 className="text-white text-xl font-bold">{selectedItem.name}</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm">Color:</span>
                        <div
                          className="w-6 h-6 rounded-full border-2 border-white/30"
                          style={{ backgroundColor: selectedItem.color }}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm">Size:</span>
                        <span className="text-white font-semibold">{selectedItem.size}</span>
                      </div>
                    </div>
                    <div className="text-white font-bold text-2xl">
                      CHF {(selectedItem.price * selectedItem.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 max-w-2xl mx-auto">
            <h2 className="text-white text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-300 text-base">
                <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span className="text-white font-semibold">CHF {totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300 text-base">
                <span>Shipping</span>
                <span className="text-white font-semibold">Free</span>
              </div>
              <div className="border-t border-gray-700 pt-4 flex justify-between">
                <span className="text-white text-xl font-bold">Total</span>
                <span className="text-white text-2xl font-bold">CHF {totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                className="w-full bg-white text-black py-4 rounded-lg text-lg font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-300"
              >
                Proceed to Checkout
              </motion.button>
              
              <button
                onClick={clearCart}
                className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold text-base hover:bg-gray-600 transition-all duration-300"
              >
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

