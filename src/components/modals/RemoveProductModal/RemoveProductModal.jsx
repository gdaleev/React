import "./RemoveProductModal.css";

export default function RemoveProductModal({ closeModal, confirmRemove }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Are you sure you want to remove this item?</h3>
        <div className="modal-actions">
          <button onClick={confirmRemove} className="btn-confirm">
            Yes, Remove
          </button>
          <button onClick={closeModal} className="btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
