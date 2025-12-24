import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Navigation = () => {
  const location = useLocation();
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Top banner */}
        <div className="hidden md:block text-center text-white/60 text-xs uppercase tracking-wider mb-4 border-b border-white/10 pb-3">
          <span className="mr-8">Free shipping on orders over $100 - Shop Now</span>
          <span>New customers save 10% with code WELCOME10</span>
        </div>
        
        {/* Main nav */}
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-2xl tracking-wider">
            <span className="bg-gradient-to-r from-slate-100 to-white bg-clip-text text-transparent">
              K%H
            </span>
          </Link>
          
          {/* Navigation Links - Hidden on phone, visible on desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors duration-300 text-sm uppercase tracking-wider ${
                location.pathname === "/" ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/new-arrivals" 
              className={`transition-colors duration-300 text-sm uppercase tracking-wider ${
                location.pathname === "/new-arrivals" ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              New Arrivals
            </Link>
            <Link 
              to="/sale" 
              className={`transition-colors duration-300 text-sm uppercase tracking-wider ${
                location.pathname === "/sale" ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              Sale
            </Link>
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 py-2 rounded-none text-sm uppercase tracking-wider hover:bg-slate-100 transition-all duration-300"
              >
                Shop Now
              </motion.button>
            </Link>
          </div>

          {/* Cart Icon - Visible on all screens */}
          <Link 
            to="/cart" 
            className={`relative transition-colors duration-300 ${
              location.pathname === "/cart" ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};


