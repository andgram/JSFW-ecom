import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch product");

        const json = await response.json();
        setProduct(json.data);
      } catch (err) {
        setError("Error loading product. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Re-run the fetch whenever the ID changes

  if (loading) return <p>Loading product...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="product-page-container">
      <h1 className="product-title">{product.title}</h1>
      <img
        src={product.imageUrl}
        alt={product.title}
        className="product-image"
      />
      <p className="product-description">{product.description}</p>

      <div className="product-price-container">
        <p className="original-price">
          {product.discountedPrice ? (
            <span className="line-through original-price-text">
              ${product.price}
            </span>
          ) : (
            <span>${product.price}</span>
          )}
        </p>
        {product.discountedPrice && (
          <p className="discounted-price">${product.discountedPrice}</p>
        )}
      </div>

      {/* Add to Cart button */}
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductPage;
