import "./DeleteOrderModal.css";
import { deleteOrder } from "../../../services/deleteOrder";

export default function DeleteOrderModal({ order, closeModal, refreshOrders  }) {
  const handleDelete = async () => {
    try {
      await deleteOrder(order.id);
      refreshOrders(); // Refresh the list after deletion
      closeModal();
      alert(`Order #${order.id} has been deleted successfully!`);
    } catch (error) {
      console.error(error);
      alert("Failed to delete the order. Please try again.");
    }
  };

  return (
    <>
      <div className="modal-overlay" id="DeleteOrderModal">
        <div className="modal">
          <h3>Delete Order</h3>
          <p>Are you sure you want to delete this order from your history?</p>
          <button onClick={handleDelete} className="btn-confirm">Yes, Remove</button>
          <button onClick={closeModal} className="btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
