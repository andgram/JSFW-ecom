import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products"; // Import Products page
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} /> {/* Cart route */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />{" "}
          {/* Products list */}
          <Route path="/products/:id" element={<ProductPage />} />{" "}
          {/* Single product */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
