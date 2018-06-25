import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

import CartIcon from '../containers/CartIcon';
import CartPopup from '../containers/CartPopup';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/"
                      className="header__logo">
                    <img 
                        src={logo} 
                        className="header__logo-img"
                        alt="Logo" />
                </Link>
                <nav className="header__nav">
                    <li className="header__nav-item">
                        <NavLink 
                            to="/"
                            exact
                            className="header__nav-link"
                            activeClassName="header__nav-link--active">
                            Home
                        </NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink 
                            to="/products"
                            className="header__nav-link"
                            activeClassName="header__nav-link--active">
                            Products
                        </NavLink>
                    </li>
                </nav>
                <div className="header__cart">
                    <CartIcon />
                </div>
                <CartPopup />
            </div>
        </header>
    );
}

export default Header;