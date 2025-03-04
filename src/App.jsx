import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { Navigate } from "react-router-dom";
// import { db } from "./firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { useEffect } from "react";

import Home from "./pages/Home";
import "./App.css";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import Profile from "./pages/Profile/Profile";

function App() {

  //Test fetching data from Firestore

  // useEffect(() => {
  //   async function fetchOrders() {
  //     try {
  //       console.log("Fetching orders...");
  //       const querySnapshot = await getDocs(collection(db, "orders"));
        
  //       if (querySnapshot.empty) {
  //         console.log("No orders found.");
  //       } else {
  //         querySnapshot.forEach((doc) => {
  //           console.log(doc.id, " => ", doc.data());
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error fetching orders:", error);
  //     }
  //   }
  
  //   fetchOrders();
  // }, []);

  const { user } = useAuth();
  

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" replace/> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" replace/> : <Register />} />
        <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
