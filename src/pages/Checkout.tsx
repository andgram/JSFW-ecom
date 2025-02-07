// Checkout.tsx

import { useCart } from "../store/CartContext";
import { Link } from "react-router-dom";
import "../styles/Checkout.css";

const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );

  return (
    <div className="section-padding">
      <div className="container">
        <h1 className="checkout-title">Checkout</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. Please add products before checking out.</p>
        ) : (
          <div>
            <ul className="checkout-list">
              {cartItems.map((item) => (
                <li key={item.id} className="checkout-item">
                  <img
                    className="checkout-item-image"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <p>{item.title}</p>
                  <p>${item.discountedPrice}</p>
                  <p>Quantity: {item.quantity}</p> {/* Display quantity */}
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="checkout-total-container">
              <p className="checkout-total">
                Total: ${total.toFixed(2)} {/* Calculate total with quantity */}
              </p>
              <Link to="/checkout-success">
                <button className="checkout-button">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
