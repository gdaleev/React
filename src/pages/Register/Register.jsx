import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    e.preventDefault();
    setError(null);

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <Header />
      <div className="auth-container">
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleRegister}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
}
