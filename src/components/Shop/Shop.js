import React from 'react';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
