import "./PlaceOrderModal.css";

export default function PlaceOrderModal({ closeModal }) {
  return (
    <>
      <div className="modal-overlay" id="placeOrderModal">
        <div className="modal">
          <h3>Place Order</h3>
          <p>Are you sure you want to place your order?</p>
          <button className="btn-confirm">Yes</button>
          <button onClick={closeModal} className="btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
