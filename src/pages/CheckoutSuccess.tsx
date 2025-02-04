import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl mb-4">Thank you for your purchase!</h1>
      <p>Your order has been successfully placed.</p>
      <Link to="/">
        <button className="bg-blue-600 text-white p-2 mt-4">
          Back to Store
        </button>
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
