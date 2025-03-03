import "./Header.css";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

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

            {user ? (
              <>
                <li>
                  <a href="/profile">Your Profile</a>
                </li>
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </>
            ) : (
              <li>
                <a href="/login">Sign In</a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
