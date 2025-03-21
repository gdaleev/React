import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleAddToCart() {
    addToCart(product);
    navigate("/cart");
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchProduct() {
      try {
        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.error("Product not found in Firestore.");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  // if (loading) {
  //   return <p>Loading product details...</p>;
  // }

  // if (!product) {
  //   return <p>Product not found.</p>;
  // }

  return (
    <>
      {loading ? (
        <div className="loader"></div> 
      ) : product ? (
        <div className="product-details">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
  
          <div className="product-data">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </>
  );  
}
