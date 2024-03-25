import "./Cart.css";
import { BsCart3 } from "react-icons/bs";

function Cart() {
    return(
        <div>
            <button className="cart-button">
                <div className="cart-button-content">
                    <BsCart3 className="cart-icon"/>
                    <p className="cart-total">$0.00</p>
                </div>
            </button>
        </div>
    );
}

export default Cart;