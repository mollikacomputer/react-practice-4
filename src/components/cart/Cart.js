import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart}=props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){

        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return(
        <div className='cart'>
            <h2> Cart info </h2>
            <h4>Selected Items : {cart.length} </h4>
            <h4> Total : ${total} </h4>
            <p>Shipping : ${shipping} </p>
            <p> Tax : ${tax} </p>
            <h4>Grand Total :{grandTotal} </h4>
        </div>
    );
};

export default Cart;