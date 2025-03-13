import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase"; // adjust the path if needed

export const deleteOrder = async (orderId) => {
  try {
    await deleteDoc(doc(db, "orders", orderId));
  } catch (error) {
    throw new Error("Failed to delete order: " + error.message);
  }
};
