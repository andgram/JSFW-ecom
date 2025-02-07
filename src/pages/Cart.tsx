// CartPage.tsx
import { useCart } from "../store/CartContext";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.discountedPrice, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  className="cart-item-image"
                  src={item.imageUrl}
                  alt={item.title}
                />
                <p>{item.title}</p>
                <p>${item.discountedPrice}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total-container">
            <p className="cart-total">Total: ${total.toFixed(2)}</p>
            <Link to="/checkout">
              <button className="cart-button">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
