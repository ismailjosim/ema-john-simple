import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Cart = ({ cart }) => {
    return (
        <div>
            <h2 className='cart-title'>Order Summary</h2>
            <div className="order-details">
                <p className="selected-items-count">Selected Items:{cart.length}</p>
                <p className="total-price">Total Price: $</p>
                <p className="shipping-charge">Total Shipping Charge: $5</p>
                <p className="tax">Tax:</p>
                <h3 className='final-total-amount'>Grand Total: $1559</h3>

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
