import { Link } from "react-router-dom";
import { useCart } from "../store/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.length; // Count total items in cart

  return (
    <header className="navbar">
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <Link to="/" className="logo">
            Ecom Store
          </Link>

          {/* Navigation Links */}
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            {/* Cart Icon with Badge */}
            <li className="cart-container">
              <Link to="/checkout" className="cart-link">
                <FaShoppingCart className="cart-icon" />
                {itemCount > 0 && (
                  <span className="cart-badge">{itemCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
