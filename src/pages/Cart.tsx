import { Link } from "react-router-dom";

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
    <div className="p-4">
      <h1 className="text-2xl mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product, index) => (
              <li key={index} className="border-b py-2">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-16 inline-block"
                />
                <p>{product.title}</p>
                <p>${product.discountedPrice}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-xl">Total: ${total.toFixed(2)}</p>
            <Link to="/checkout">
              <button className="bg-blue-600 text-white p-2 mt-4">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
