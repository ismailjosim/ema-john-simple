import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Cart = ({ cart }) => {

    // calculate Total Product cost
    let totalPrice = 0;
    let totalShipping = 0;
    for (const item of cart) {
        totalPrice = totalPrice + item.price;
        totalShipping = totalShipping + item.shipping;
    }

    // Calculate Tax
    const totalTax = (totalPrice * 0.10).toFixed(2);
    // calculate Grand Total Cost
    const taxValue = parseFloat(totalTax);
    const grandTotalCost = (totalPrice + totalShipping + taxValue).toFixed(2);

    return (
        <div className="cart-section">
            <h2 className='cart-title'>Order Summary</h2>
            <div className="order-details">
                <p className="selected-items-count">Selected Items: <span className='item-amount'>{cart.length}</span></p>
                <p className="total-price">Total Price: <span className='item-amount'>${totalPrice}</span></p>
                <p className="shipping-charge">Total Shipping Charge: <span className='item-amount'>${totalShipping}</span></p>
                <p className="tax">Tax: <span className='item-amount'>${totalTax}</span></p>
                <h3 className='final-total-amount'>Grand Total: <span className='item-amount'>${grandTotalCost}</span></h3>

            </div>
            <div className="button-box">
                <button className="btn-cart btn-clear">Clear Cart
                    <FontAwesomeIcon className='cart-icon' icon={faTrashCan} />
                </button>
                <button className="btn-cart btn-review-order">Review Order
                    <FontAwesomeIcon className='cart-icon' icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Cart;
