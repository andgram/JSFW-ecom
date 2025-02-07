// Checkout.tsx
import { useCart } from "../store/CartContext";
import { Link } from "react-router-dom";
import "../styles/Checkout.css";

const Checkout = () => {
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.discountedPrice, 0);

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add products before checking out.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <p>{item.title}</p>
                <p>${item.discountedPrice}</p>
              </li>
            ))}
          </ul>
          <div className="total-section">
            <p className="total-text">Total: ${total.toFixed(2)}</p>
            <Link to="/checkout-success">
              <button className="confirm-button">Confirm Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
