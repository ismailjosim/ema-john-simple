import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div className='container'>
            <nav className='navbar'>
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <ul className="navigation">
                    <li>
                        <a href="/home" className="nav-link active">Home</a>
                    </li>
                    <li>
                        <a href="/home" className="nav-link">Shop</a>
                    </li>
                    <li>
                        <a href="/home" className="nav-link">Inventory</a>
                    </li>
                    <li>
                        <a href="/home" className="nav-link">About</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
