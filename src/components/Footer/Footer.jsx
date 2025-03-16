import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <p>&copy; 2025 BarberShop. All Rights Reserved.</p>
        <ul>
          <li>
            <Link className="fa fa-facebook"></Link>
          </li>
          <li>
            <Link className="fa fa-instagram"></Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
