import "./DeleteOrderModal.css";

export default function DeleteOrderModal({closeModal}) {
  return (
    <>
      <div className="modal-overlay" id="DeleteOrderModal">
        <div className="modal">
          <h3>Delete Order</h3>
          <p>Are you sure you want to delete this order from your history?</p>
          <button className="btn-confirm">Yes, Remove</button>
          <button onClick={closeModal} className="btn-cancel">Cancel</button>
        </div>
      </div>
    </>
  );
}
