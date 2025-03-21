import "./Header.css";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link to="/"><img src="/clipper_4034863.png" alt="" /></Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>

            {user ? (
              <>
                <li>
                  <Link to="/profile/${user.uid}">Your Profile</Link>
                </li>
                <li>
                  <Link onClick={logout}>Logout</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
