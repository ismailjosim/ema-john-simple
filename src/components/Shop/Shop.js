import React from 'react';
import { useState, useEffect } from 'react';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Shop.css'

const Shop = () => {
    // declare state
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // Load data from json file
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // Event Handler
    const handleAddToCart = (product) => {
        // cart.push(product):don't do that
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className='shop-section'>
                <div className="product-section">
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className="cart-section">
                    <h2 className='cart-title'>Order Summary</h2>
                    <div className="order-details">
                        <p className="selected-items-count">Selected Items: {cart.length}</p>
                        <p className="total-price">Total Price: ${cart.price}</p>
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
            </div>
        </div>
    );
};

export default Shop;
