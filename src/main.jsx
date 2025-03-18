import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </CartProvider>
);
