import { Link } from "react-router-dom";
import "../styles/Cart.css";

const cart = [
  {
    id: "1",
    title: "Product 1",
    discountedPrice: 20,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "Product 2",
    discountedPrice: 30,
    imageUrl: "https://via.placeholder.com/150",
  },
];

const Cart = () => {
  const total = cart.reduce((sum, product) => sum + product.discountedPrice, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((product, index) => (
              <li key={index} className="cart-item">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="cart-item-image"
                />
                <p>{product.title}</p>
                <p>${product.discountedPrice}</p>
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

export default Cart;
