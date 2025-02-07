import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ id, title, imageUrl, price, discountedPrice }: any) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-card-image" />
      <h2 className="product-card-title">{title}</h2>
      <p className="product-card-price">
        {discountedPrice ? (
          <span className="product-card-price-old">${price}</span>
        ) : (
          <span>${price}</span>
        )}
      </p>
      {discountedPrice && (
        <p className="product-card-price-discount">${discountedPrice}</p>
      )}

      {/* Link to ProductPage */}
      <Link to={`/product/${id}`} className="product-card-link">
        View Product
      </Link>
    </div>
  );
};

export default ProductCard;
