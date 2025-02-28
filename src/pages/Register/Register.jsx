import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Register.css";

export default function Register() {
  return (
    <>
      <Header />
      <div className="auth-container">
        <h2>Register</h2>
        <form action="#">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Choose a username" required/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" required/>

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Create a password" required/>

            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" required/>

            <button type="submit">Register</button>
            <p>Already have an account? <a href="/login">Login here</a></p>
        </form>
    </div>

      <Footer />
    </>
  );
}
