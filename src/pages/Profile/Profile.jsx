import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Profile.css";
import EditOrderModal from "../../components/modals/EditOrderModal/EditOrderModal";
import DeleteOrderModal from "../../components/modals/DeleteOrderModal/DeleteOrderModal";

export default function Profile() {
const [editModalOpen, setEditModalOpen] = useState(false);
const [deleteModalOpen, setDeleteModalOpen] = useState(false);

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
        <Header/>
        <div className="profile-container">
        <h2>Your Profile</h2>
        <div className="user-info">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
        </div>

        <h3>Order History</h3>
        <div className="order">
          <p><strong>Order #12345</strong></p>
          <p>Product: Beard Oil</p>
          <p>Price: $20</p>
          <button onClick={openEditModal} className="edit">Edit</button>
          <button onClick={openDeleteModal} className="delete">Delete</button>
        </div>

        <div className="order">
          <p><strong>Order #67890</strong></p>
          <p>Product: Hair Wax</p>
          <p>Price: $15</p>
          <button onClick={openEditModal} className="edit">Edit</button>
          <button onClick={openDeleteModal} className="delete">Delete</button>
        </div>
      </div>
      {editModalOpen && <EditOrderModal closeModal={closeEditModal} />}
      {deleteModalOpen && <DeleteOrderModal closeModal={closeDeleteModal} />}
        <Footer/>
        </>
    )
}
