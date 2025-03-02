export default function EditOrderModal({ closeModal }) {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <div className="edit-order-container">
            <h2>Edit Order</h2>
            <form>
              <label htmlFor="orderName">Order Name:</label>
              <input
                type="text"
                id="orderName"
                placeholder="Enter order name"
                required
              />

              <label htmlFor="orderQuantity">Quantity:</label>
              <input type="number" id="orderQuantity" required />

              <label htmlFor="orderNotes">Additional Notes:</label>
              <textarea
                id="orderNotes"
                placeholder="Enter any special requests"
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
