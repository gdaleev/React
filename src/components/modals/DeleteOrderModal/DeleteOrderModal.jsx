import "./DeleteOrderModal.css";
import { deleteOrder } from "../../../services/deleteOrder";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DeleteOrderModal({ order, closeModal, refreshOrders }) {
  const handleDelete = async () => {
    try {
      await deleteOrder(order.id);
      refreshOrders();
      closeModal();
      toast.success("Order deleted successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete the order. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <>
      <div className="modal-overlay" id="DeleteOrderModal">
        <div className="modal">
          <h3>Delete Order</h3>
          <p>Are you sure you want to delete this order from your history?</p>
          <button onClick={handleDelete} className="btn-confirm">
            Yes, Remove
          </button>
          <button onClick={closeModal} className="btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
