import {doc, updateDoc} from 'firebase/firestore';
import {db} from '../firebase';

export async function updateOrder(orderId, updatedData) {
    const orderRef = doc(db, 'orders', orderId);
    await updateDoc(orderRef, updatedData);
}