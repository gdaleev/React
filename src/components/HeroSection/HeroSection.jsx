import { Link } from "react-router-dom";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Premium Grooming Essentials</h1>
          <p>Barbershop-quality tools and products, now available online.</p>
          <Link to="/shop" className="btn">
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
}
