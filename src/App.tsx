import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./store/CartContext";
import Layout from "./components/Layout";
import Homepage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />{" "}
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
};

export default App;
