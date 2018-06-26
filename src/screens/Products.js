import React from 'react';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';

import Products from '../containers/Products';

const ProductsScreen = () => {
    const productsBreadcrumbsLinks = [{
        name: 'app.navigation.products',
        path: '/products'
    }];
        
    return (
        <Layout>
            <Breadcrumbs
                links={productsBreadcrumbsLinks}
            />
            <Products />
        </Layout>
    );
};

export default ProductsScreen;