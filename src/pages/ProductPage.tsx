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

  // Calculate discount percentage, but only if the prices are different
  const calculateDiscountPercentage = (
    price: number,
    discountedPrice: number
  ) => {
    if (!discountedPrice || price === discountedPrice) return 0; // No discount if prices are the same
    return Math.round(((price - discountedPrice) / price) * 100);
  };

  const discountPercentage = calculateDiscountPercentage(
    product.price,
    product.discountedPrice
  );

  return (
    <div className="section-padding">
      <div className="container">
        <h1 className="product-title">{product.title}</h1>
        <img
          src={product.image.url}
          alt={product.title}
          className="product-image"
        />
        <p className="product-description">{product.description}</p>

        <div className="product-price-container">
          <p className="original-price">
            {product.discountedPrice &&
            product.discountedPrice !== product.price ? (
              <>
                <span className="line-through original-price-text">
                  ${product.price}
                </span>
                <span className="discount-percentage">
                  {discountPercentage}% OFF
                </span>
              </>
            ) : (
              <span>${product.price}</span>
            )}
          </p>
          {product.discountedPrice &&
            product.discountedPrice !== product.price && (
              <p className="discounted-price">${product.discountedPrice}</p>
            )}
        </div>

        {/* Reviews Section */}
        {product.reviews && product.reviews.length > 0 ? (
          <div className="reviews-section section-padding">
            <h2>Customer Reviews</h2>
            <ul className="reviews-list">
              {product.reviews.map((review, index) => (
                <li key={review.id} className="review-item">
                  <div className="review-header">
                    <span className="review-author">{review.username}</span>
                    <span className="review-rating">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <span key={idx} className="star">
                          ★
                        </span>
                      ))}
                    </span>
                  </div>
                  <p className="review-text">{review.description}</p>{" "}
                  {/* Displaying comment */}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No reviews yet.</p> // Display this if no reviews exist
        )}

        {/* Add to Cart button */}
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
