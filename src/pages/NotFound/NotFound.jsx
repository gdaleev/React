import "./NotFound.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="not-found">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
      <Footer />
    </>
  );
}
