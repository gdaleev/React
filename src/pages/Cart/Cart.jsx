import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import RemoveProductModal from "../../components/modals/RemoveProductModal/RemoveProductModal";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { cart, removeFromCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      alert("You must be logged in to checkout.");
      navigate("/login");
      return;
    }
  
    navigate("/checkout", { state: { cart } });
  };
  

  function openModal(productId) {
    setSelectedProduct(productId);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedProduct(null);
  }

  return (
    <>
      <div className="cart-container">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={product.quantity}
                      readOnly
                    />
                  </td>
                  <td>${(product.price * product.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => openModal(product.id)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="cart-total">
          <p>
            Total: $
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>

          <button className="checkout-btn" onClick={handleCheckout} disabled={cart.length === 0}>
            Proceed to Checkout
          </button>
        </div>
      </div>

      {modalOpen && (
        <RemoveProductModal
          closeModal={closeModal}
          confirmRemove={() => {
            removeFromCart(selectedProduct);
            closeModal();
          }}
        />
      )}

    </>
  );
}
