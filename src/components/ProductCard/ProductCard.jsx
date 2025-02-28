import "./ProductCard.css";

export default function ProductCard() {
    return (
        <>
        <div className="product-card">
            <a href="/product"><img src="https://m.media-amazon.com/images/I/81DycYsQi0L._SL1500_.jpg" alt="product name" /></a>
            <h3>Premium Beard Oil</h3>
            <p>Keeps your beard soft...</p>
            <p className="price">$19.99</p>
            <button>Add to Cart</button>
        </div>
        </>
        
    );
}


