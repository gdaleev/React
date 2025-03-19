import { useEffect, useState } from "react";
import "./Profile.css";
import EditOrderModal from "../../components/modals/EditOrderModal/EditOrderModal";
import DeleteOrderModal from "../../components/modals/DeleteOrderModal/DeleteOrderModal";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../services/getOrders";

export default function Profile() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const fetchOrders = () => {
    if (user) {
      getOrders(user.uid).then(setOrders);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [user]);

  const openEditModal = (order) => {
    setSelectedOrder(order);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setSelectedOrder(null);
  };

  const openDeleteModal = (order) => {
    setSelectedOrder(order);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <>
      <div className="profile-container">
        <h2>Your Profile</h2>
        <img src="/public/hwcfalqa.png" alt="user-img" />
        <h3>Welcome, {user?.email}!</h3>

        <h3>Order History</h3>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div className="order" key={order.id}>
              <p>
                <strong>Order #{order.id}</strong>
              </p>
              <p>Total: ${order.total}</p>
              <p>Payment Method: {order.payment}</p>
              <p>Address: {order.address}</p>
              <p>Notes: {order.notes || "None"}</p>

              <ul>
                {order.cart.map((item) => (
                  <li key={item.id}>
                    Product: {item.name} - Quantity: {item.quantity} - Price: $
                    {item.price}
                  </li>
                ))}
              </ul>

              <button onClick={() => openEditModal(order)} className="edit">
                Edit
              </button>
              <button onClick={() => openDeleteModal(order)} className="delete">
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {editModalOpen && selectedOrder && (
        <EditOrderModal
          order={selectedOrder}
          closeModal={closeEditModal}
          refreshOrders={fetchOrders}
        />
      )}

      {deleteModalOpen && selectedOrder && (
        <DeleteOrderModal
          order={selectedOrder}
          closeModal={closeDeleteModal}
          refreshOrders={fetchOrders}
        />
      )}
    </>
  );
}
