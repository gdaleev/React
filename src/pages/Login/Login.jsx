import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Login.css";

export default function Login() {
  return (
    <>
      <Header />
      <div className="auth-container">
        <h2>Login</h2>
        <form action="#">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
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
