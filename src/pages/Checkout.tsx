import { Link } from "react-router-dom";

const cart = [
  { id: "1", title: "Product 1", discountedPrice: 20 },
  { id: "2", title: "Product 2", discountedPrice: 30 },
];

const Checkout = () => {
  const total = cart.reduce((sum, product) => sum + product.discountedPrice, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add products before checking out.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product, index) => (
              <li key={index} className="border-b py-2">
                <p>{product.title}</p>
                <p>${product.discountedPrice}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-xl">Total: ${total.toFixed(2)}</p>
            <Link to="/checkout-success">
              <button className="bg-green-600 text-white p-2 mt-4">
                Confirm Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
