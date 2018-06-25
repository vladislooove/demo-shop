import React from 'react';

import Header from './Header';
import Footer from './Footer';

import Notification from '../containers/Notification';

const Layout = (props) => {
    return ([
        <Header key="header" />,
        <div className="main" key="main">
            <div className="main__container">
                {props.children}
            </div>
        </div>,
        <Footer key="footer" />,
        <Notification key="notifications" />,
    ]);
};

export default Layout;