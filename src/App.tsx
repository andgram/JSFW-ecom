import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./store/CartContext";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} /> {/* Cart route */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductPage />} />{" "}
            {/* Dynamic route for product */}
            {/* Single product */}
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
};

export default App;
