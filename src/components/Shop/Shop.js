import React from 'react';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';

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

    // load data from outside(example: local storage, database)
    // useEffect(()=>{},[]) //
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart);
    }, [products])

    // Event Handler
    const handleAddToCart = (product) => {
        // cart.push(product):don't do that
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);

    }

    return (
        <div className="shop-container">
            <div className='shop-section'>
                <div className="product-section">
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
