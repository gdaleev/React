import "./RemoveProductModal.css";

export default function RemoveProductModal({closeModal}) {
  return (
    <>
      <div className="modal-overlay" id="removeProductModal">
        <div className="modal">
          <h3>Remove Product</h3>
          <p>Are you sure you want to remove this product from your cart?</p>
          <button className="btn-confirm">Yes, Remove</button>
          <button onClick={closeModal} className="btn-cancel">Cancel</button>
        </div>
      </div>
    </>
  );
}
