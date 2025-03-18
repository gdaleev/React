import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError(null);

    try {
      await login(email, password);
      navigate("/");
    } catch {
      setError("Invalid email or password.");
    }
  }

  return (
    <>
      <div className="auth-container">
        <h2>Sign In</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>
          <p>
            Don&apos;t have an account? <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
}
