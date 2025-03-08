import { useCart } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  function truncateDescription(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  function handleAddToCart() {
    addToCart(product);
    navigate("/cart");
  }

  return (
    <>
      <div className="product-card">
        <div className="product-info">
          <Link to={`/product/${product.id}`}>
            <img src={product.imageUrl} alt={product.name} />
          </Link>
          <h3>{product.name}</h3>
          <p>{truncateDescription(product.description, 50)}</p>
          <p className="price">${product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
