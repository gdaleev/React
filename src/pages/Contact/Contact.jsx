import "./Contact.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Have questions? Reach out to us, and we’ll be happy to help!</p>

        <div className="contact-info">
          <div>
            <h2>📍 Our Location</h2>
            <p>123 Barber Street, Grooming City, BG 1000</p>
          </div>
          <div>
            <h2>📧 Email</h2>
            <p>support@barbershop.com</p>
          </div>
          <div>
            <h2>📞 Phone</h2>
            <p>+359 888 123 456</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
