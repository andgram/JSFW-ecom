import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  discountedPrice: number;
}

const Homepage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const json = await response.json();

        console.log("API Response:", json); // Debugging

        if (json && Array.isArray(json.data)) {
          setProducts(json.data); // Extract 'data' array
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err) {
        console.error(err);
        setError("Error loading products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Welcome to Our Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.isArray(products) &&
          products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              {product.price !== product.discountedPrice ? (
                <p className="text-red-600">
                  <span className="line-through">${product.price}</span> $
                  {product.discountedPrice}
                </p>
              ) : (
                <p>${product.price}</p>
              )}
              <Link to={`/products/${product.id}`}>
                <button className="bg-blue-600 text-white px-4 py-2 mt-2 w-full">
                  View Product
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Homepage;
