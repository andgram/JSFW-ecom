import { useCart } from "../store/CartContext";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ id, title, imageUrl, price, discountedPrice }: any) => {
  const { addToCart } = useCart();

  // Calculate the discount percentage
  const calculateDiscountPercentage = (
    price: number,
    discountedPrice: number
  ) => {
    if (!discountedPrice || price === discountedPrice) return 0;
    return Math.round(((price - discountedPrice) / price) * 100);
  };

  const discountPercentage = calculateDiscountPercentage(
    price,
    discountedPrice
  );

  const handleAddToCart = () => {
    addToCart({ id, title, imageUrl, discountedPrice, quantity: 1 });
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-card-image" />
      <h2 className="product-card-title">{title}</h2>

      <div className="product-card-price-container">
        <p className="product-card-price">
          {discountedPrice && discountedPrice !== price ? (
            <>
              <span className="product-card-price-old">${price}</span>
              <span className="product-card-price-discounted">
                ${discountedPrice}
              </span>
              <span className="product-card-discount">
                {discountPercentage}% OFF
              </span>
            </>
          ) : (
            <span>${price}</span>
          )}
        </p>
      </div>

      <div className="card-button-container">
        <button className="card-add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        {/* Link to ProductPage */}
        <Link to={`/product/${id}`} className="product-card-link">
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
