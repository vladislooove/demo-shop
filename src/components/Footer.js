import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <Link to="/" className="footer__logo">
                    <img 
                        src={logo} 
                        className="footer__logo-img"
                        alt="Logo" />
                </Link>
                <small className="footer__copyright">
                    © DemoShop, 2018
                </small>
            </div>
        </footer>
    );
};

export default Footer;