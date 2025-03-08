import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Profile.css";
import EditOrderModal from "../../components/modals/EditOrderModal/EditOrderModal";
import DeleteOrderModal from "../../components/modals/DeleteOrderModal/DeleteOrderModal";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  function openEditModal() {
    setEditModalOpen(true);
  }

  function closeEditModal() {
    setEditModalOpen(false);
  }
  function openDeleteModal() {
    setDeleteModalOpen(true);
  }

  function closeDeleteModal() {
    setDeleteModalOpen(false);
  }

  return (
    <>
      <Header />
      <div className="profile-container">
        <h2>Your Profile</h2>
        <h2>Welcome, {user?.email}</h2>

        <h3>Order History</h3>
        <div className="order">
          <p>
            <strong>Order #12345</strong>
          </p>
          <p>Product: Beard Oil</p>
          <p>Price: $20</p>
          <button onClick={openEditModal} className="edit">
            Edit
          </button>
          <button onClick={openDeleteModal} className="delete">
            Delete
          </button>
        </div>

        <div className="order">
          <p>
            <strong>Order #67890</strong>
          </p>
          <p>Product: Hair Wax</p>
          <p>Price: $15</p>
          <button onClick={openEditModal} className="edit">
            Edit
          </button>
          <button onClick={openDeleteModal} className="delete">
            Delete
          </button>
        </div>
      </div>
      {editModalOpen && <EditOrderModal closeModal={closeEditModal} />}
      {deleteModalOpen && <DeleteOrderModal closeModal={closeDeleteModal} />}
      <Footer />
    </>
  );
}
