import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/HomePage.css";

// Define the type for a product
type Product = {
  id: string;
  title: string;
  image: { url: string };
  price: number;
  discountedPrice: number;
};

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) throw new Error("Failed to fetch products");

        const json = await response.json();
        if (json && Array.isArray(json.data)) {
          setProducts(json.data);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err) {
        setError("Error loading products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="section-padding">
      <div className="container">
        <h1 className="title">Products</h1>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image.url}
              price={product.price}
              discountedPrice={product.discountedPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
