import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { NewArrivals } from "./pages/NewArrivals";
import { Sale } from "./pages/Sale";
import { Shop } from "./pages/Shop";
import { BestSelling } from "./pages/BestSelling";
import { Hoodies } from "./pages/Hoodies";
import { Joggers } from "./pages/Joggers";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-black overflow-x-hidden relative">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/best-selling" element={<BestSelling />} />
            <Route path="/hoodies" element={<Hoodies />} />
            <Route path="/joggers" element={<Joggers />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}