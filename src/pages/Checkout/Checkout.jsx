import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import PlaceOrderModal from "../../components/modals/PlaceOrderModal/PlaceOrderModal";
import { addOrder } from "../../services/addOrder";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Checkout.css";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { clearCart } = useCart();
  const [modalOpen, setModalOpen] = useState(false);

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  if (!state || !state.cart || state.cart.length === 0) {
    navigate("/cart");
    return null;
  }

  const total = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!address || !payment) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setModalOpen(true);
  };

  const confirmOrder = async () => {
    try {
      await addOrder(user.uid, state.cart, total, address, payment, notes);
      clearCart();
      toast.success("Order placed successfully.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      navigate("/profile/${user.uid}");
    } catch (error) {
      console.error(error);
      toast.error("Failed to place the order. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <>
      <div className="checkout-container">
        <h2>Checkout</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label htmlFor="payment">Payment Method:</label>
          <select
            id="payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option value="">Select a payment method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
          </select>

          <label htmlFor="orderNotes">Additional Notes:</label>
          <textarea
            id="orderNotes"
            placeholder="Enter any special requests"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>

          <button
            type="button"
            className="cancel"
            onClick={() => navigate("/cart")}
          >
            Cancel
          </button>
        </form>
      </div>

      {modalOpen && (
        <PlaceOrderModal
          closeModal={() => setModalOpen(false)}
          confirmOrder={confirmOrder}
          orderDetails={{ address, payment, notes }}
        />
      )}
    </>
  );
}
