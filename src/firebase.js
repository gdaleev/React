// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLmlOcO09PHnvDGyONKr05839-KWiflOA",
  authDomain: "barbershop-ecommerce.firebaseapp.com",
  projectId: "barbershop-ecommerce",
  storageBucket: "barbershop-ecommerce.firebasestorage.app",
  messagingSenderId: "101747877204",
  appId: "1:101747877204:web:842fa472ab0cdc31ded4c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);