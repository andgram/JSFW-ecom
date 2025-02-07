// CheckoutSuccess.tsx
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="checkout-success-container">
      <h1 className="checkout-success-title">Thank you for your purchase!</h1>
      <p>Your order has been successfully placed.</p>
      <Link to="/">
        <button className="back-to-store-button">Back to Store</button>
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
