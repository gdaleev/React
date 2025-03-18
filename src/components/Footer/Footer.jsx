import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Barbershop Essentials. All Rights Reserved.</p>
          <ul className="social-links">
            <li>
              <Link
                to="#"
                className="fa fa-facebook"
                aria-label="Facebook"
              ></Link>
            </li>
            <li>
              <Link
                to="#"
                className="fa fa-instagram"
                aria-label="Instagram"
              ></Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
