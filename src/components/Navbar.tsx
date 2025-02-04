import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link> {/* Link to Products list */}
        </li>
        <li>
          <Link to="/cart">Cart</Link> {/* Link to Cart page */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Link to Contact page */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
