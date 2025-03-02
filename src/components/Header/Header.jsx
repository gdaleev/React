import './Header.css';

export default function Header() {
    return (
        <>
            <header>
        <nav>
          <div className="logo">
            <a href="/">BarberShop</a>
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/profile">User Profile</a>
            </li>
          </ul>
        </nav>
      </header>

        </>
    )
}