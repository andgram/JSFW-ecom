// CheckoutSuccess.tsx
import { Link } from "react-router-dom";
import "../styles/CheckoutSuccess.css";

const CheckoutSuccess = () => {
  return (
    <div className="section-padding">
      <div className="container checkout-success-container">
        <h1 className="checkout-success-title">Thank you for your purchase!</h1>
        <p>Your order has been successfully placed.</p>
        <Link to="/">
          <button className="back-to-store-button">Back to Store</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
