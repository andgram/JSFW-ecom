import { Link } from "react-router-dom";

// Sample product data (replace with data from an API)
const products = [
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
  {
    id: "3",
    title: "Product 3",
    discountedPrice: 40,
    imageUrl: "https://via.placeholder.com/150",
  },
];

const Products = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-32 object-cover mb-4"
            />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-xl text-blue-600">${product.discountedPrice}</p>
            <Link to={`/products/${product.id}`}>
              <button className="bg-blue-600 text-white p-2 mt-4 w-full">
                View Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
