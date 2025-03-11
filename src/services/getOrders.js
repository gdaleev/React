import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const getOrders = async (userId) => {
    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}