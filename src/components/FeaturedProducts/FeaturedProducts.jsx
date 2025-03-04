import "./FeaturedProducts.css";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export default function FeaturedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
          try {
            const productsRef = collection(db, "products");
            const q = query(productsRef, orderBy("createdAt", "desc"), limit(4));
            const querySnapshot = await getDocs(q);
            const productList = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setProducts(productList);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        }
    
        fetchProducts();
      }, []);

  return (
    <>
      <section className="featured-products">
        <h2>Featured Products</h2>
        {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
      </section>
    </>
  );
}
