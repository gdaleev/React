import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PlaceOrderModal from "../../components/modals/placeOrderModal/PlaceOrderModal";
import "./Checkout.css";

export default function Checkout() {
  const [modalOpen, setModalOpen] = useState(false);

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

  return (
    <>
      <Header />
      <div className="checkout-container">
        <h2>Checkout</h2>
        <form>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            placeholder="Enter your address"
            required
          />

          <label htmlFor="payment">Payment Method:</label>
          <select id="payment" required>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
          </select>
          <a href="">
            <button onClick={openModal} type="submit">Place Order</button>
          </a>

          <a href="/cart">
            <button type="button" className="cancel">
              Cancel
            </button>
          </a>
        </form>
      </div>
      {modalOpen && <PlaceOrderModal closeModal={closeModal} />}
      <Footer />
    </>
  );
}
