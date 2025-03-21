import "./PlaceOrderModal.css";

export default function PlaceOrderModal({ closeModal, confirmOrder, orderDetails }) {
  const { address, payment, notes } = orderDetails;

  return (
    <div className="modal-overlay" id="placeOrderModal">
      <div className="modal">
        <h3>Confirm Your Order?</h3>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Payment Method:</strong> {payment}</p>
        {notes && <p><strong>Notes:</strong> {notes}</p>}

        <div className="modal-buttons">
          <button onClick={confirmOrder} className="btn-confirm-order">
            Confirm Order
          </button>
          <button onClick={closeModal} className="btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
