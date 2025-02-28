import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Cart.css";

export default function Cart() {
    return (
        <>
        <Header/>
        <div className="cart-container">
        <h2>Shopping Cart</h2>

        <table className="cart-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Premium Beard Oil</td>
                    <td><input type="number" min="1" value="1"/></td>
                    <td>$19.99</td>
                    <td><button className="remove-btn">Remove</button></td>
                </tr>
            </tbody>
        </table>

        <div className="cart-total">
            <h3>Total: $19.99</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
        </div>
    </div>
    <Footer/>
        </>
    )
}
