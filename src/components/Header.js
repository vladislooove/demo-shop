import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

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
                            className="header__nav-link"
                            activeClassName="header__nav-link--active">
                            Home
                        </NavLink>
                    </li>
                </nav>
            </div>
        </header>
    );
}

export default Header;