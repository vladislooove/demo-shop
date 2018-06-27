import React from 'react';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';

const CheckoutScreen = () => {
    const checkoutBreadcrumbsLinks = [{
        name: 'app.navigation.cart',
        path: '/cart,'
    }, {
        name: 'app.navigation.checkout',
        path: '/cart/checkout',
    }];

    return (
        <Layout>
            <Breadcrumbs
                links={checkoutBreadcrumbsLinks}
            />
            <p>Look ya</p>
        </Layout>
    );
}

export default CheckoutScreen;