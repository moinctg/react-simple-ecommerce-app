import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const {cart}=props;

    let total = 0;

    for (const data of cart){
        total = total+data.price;
    }
    const shiping = 100;
    const tax = (total+shiping) %10;
    const grandTotal = total+shiping+tax;

    return (
        <div>
            <h1>Order Summary</h1>
            <h5>Item Ordered: {cart.length}</h5>
            <h5>Total:$ {total.toFixed(2)} </h5>
            <h5>Shiping:${shiping}</h5>
            <h5>Tax:${tax.toFixed(2)}</h5>
            <h3>Grand Total:${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;