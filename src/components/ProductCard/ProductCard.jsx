import "./ProductCard.css";

export default function ProductCard({ product }) {
  function truncateDescription(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  return (
    <>
      <div className="product-card">
        <div className="product-info">
          <a href="/product">
            <img src={product.imageUrl} alt={product.name} />
          </a>
          <h3>{product.name}</h3>
          <p>{truncateDescription(product.description, 50)}</p>
          <p className="price">${product.price}</p>
          <a href="/cart">
            <button>Add to Cart</button>
          </a>
        </div>
      </div>
    </>
  );
}
