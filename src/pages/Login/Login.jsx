import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError(null);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch {
      setError("Invalid email or password.");
    }
  }

  return (
    <>
      <Header />
      <div className="auth-container">
        <h2>Login</h2>
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

          <button type="submit">Login</button>
          <p>
            Don&apos;t have an account?{" "}
            <a href="/register">Register here</a>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
}
