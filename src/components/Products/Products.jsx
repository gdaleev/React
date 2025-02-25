import "./Products.css"

export default function Products() {
    return (
        <>
            <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-card">
          <img src="product-image.jpg" alt="product name" />
          <h3>Product Name</h3>
          <p>Description of the product.</p>
          <p className="price">$25.99</p>
          <button>Add to Cart</button>
        </div>
      </section>
        </>
    )
}
