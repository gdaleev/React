import "./EditOrderModal.css";
import { useState } from "react";
import { updateOrder } from "../../../services/updateOrder";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditOrderModal({ order, closeModal, refreshOrders }) {
  const [address, setAddress] = useState(order.address || "");
  const [payment, setPayment] = useState(order.payment || "");
  const [notes, setNotes] = useState(order.notes || "");
  const [error, setError] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!address || !payment) {
      setError("Please fill out address and payment fields!");
      return;
    }

    try {
      await updateOrder(order.id, { address, payment, notes });
      refreshOrders();
      closeModal();
      toast.success("Order updated successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to update the order. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <div className="edit-order-container">
            <h2>Edit Order #{order.id}</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleUpdate}>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                placeholder="Enter new address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />

              <label>Payment Method:</label>
              <select
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                required
              >
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Cash on Delivery</option>
              </select>

              <label htmlFor="orderNotes">Additional Notes:</label>
              <textarea
                id="orderNotes"
                placeholder="Enter new special requests"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button type="submit" className="btn-save">
                Save Changes
              </button>
              <button onClick={closeModal} type="button" className="btn-cancel">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
