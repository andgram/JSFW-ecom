import { Link } from "react-router-dom";

interface ProductProps {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  discountedPrice: number;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  title,
  imageUrl,
  price,
  discountedPrice,
}) => {
  const isDiscounted = price > discountedPrice;
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <div className="flex items-center gap-2">
        {isDiscounted && (
          <span className="text-red-500 font-bold">
            ${discountedPrice.toFixed(2)}
          </span>
        )}
        <span
          className={`${
            isDiscounted ? "line-through text-gray-400" : "text-black"
          }`}
        >
          ${price.toFixed(2)}
        </span>
      </div>
      <Link
        to={`/product/${id}`}
        className="mt-2 block bg-blue-500 text-white text-center py-1 rounded"
      >
        View Product
      </Link>
    </div>
  );
};

export default ProductCard;
