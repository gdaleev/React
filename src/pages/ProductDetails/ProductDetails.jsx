import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function ProductDetails() {
  const { id } = useParams();

  const product = {
    id,
    name: "Premium Beard Oil",
    description: "Keeps your beard soft, smooth, and healthy.",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/81DycYsQi0L._SL1500_.jpg",
  };

  return (
    <>
    <Header />
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>${product.price.toFixed(2)}</h2>
        <a href="/cart"><button className="add-to-cart">Add to Cart</button></a>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ProductDetails;
