import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const addOrder = async (userId, cart, total, address, payment, notes) => {
  await addDoc(collection(db, "orders"), {
    userId,
    cart,
    total,
    address,
    payment,
    notes,
    createdAt: serverTimestamp(),
  });
};
