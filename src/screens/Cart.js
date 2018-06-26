import React from 'react';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';

import Cart from '../containers/Cart';

const CartScreen = () => {
    const cartBreadcrumbsLinks = [{
        name: 'cart',
        path: '/cart'
    }];
        
    return (
        <Layout>
            <Breadcrumbs
                links={cartBreadcrumbsLinks}
            />
            <Cart />
        </Layout>
    );
};

export default CartScreen;