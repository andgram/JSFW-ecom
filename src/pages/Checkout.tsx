import { Link } from "react-router-dom";
import "../styles/Checkout.css";

const cart = [
  { id: "1", title: "Product 1", discountedPrice: 20 },
  { id: "2", title: "Product 2", discountedPrice: 30 },
];

const Checkout = () => {
  const total = cart.reduce((sum, product) => sum + product.discountedPrice, 0);

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add products before checking out.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((product, index) => (
              <li key={index} className="cart-item">
                <p>{product.title}</p>
                <p>${product.discountedPrice}</p>
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
