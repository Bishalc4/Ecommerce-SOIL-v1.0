import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import "./Cart.css"


function Cart() {

    const [totalCost, setTotalCost] = useState(0);

    return(
        <>
            <Button variant="light" className='cart-button'>
                <FaShoppingCart />
                ${totalCost}
            </Button>
        </>
    );
}

export default Cart;