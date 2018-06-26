import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import logo from '../assets/logo.png';

import CartIcon from '../containers/CartIcon';
import CartPopup from '../containers/CartPopup';
import LocaleSwitcher from '../containers/LocaleSwitcher';

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
                            <FormattedMessage id="app.navigation.home" />
                        </NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink 
                            to="/products"
                            className="header__nav-link"
                            activeClassName="header__nav-link--active">
                            <FormattedMessage id="app.navigation.products" />
                        </NavLink>
                    </li>
                </nav>
                <div className="header__group">
                    <div className="header__locales">
                        <LocaleSwitcher />
                    </div>
                    <div className="header__cart">
                        <CartIcon />
                    </div>
                </div>
                <CartPopup />
            </div>
        </header>
    );
}

export default Header;