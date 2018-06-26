import React from 'react';

import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import Product from '../containers/Product';

const ProductScreen = (props) => {
    const productBreadcrumbsLinks = [{
        name: 'app.navigation.products',
        path: '/products'
    }, {
        name: 'app.navigation.product',
        path: `/products/${props.match.params.id}`,
    }];
        
    return (
        <Layout>
            <Breadcrumbs
                links={productBreadcrumbsLinks}
            />
            <Product id={parseInt(props.match.params.id, 10)} />
        </Layout>
    );
};

export default ProductScreen;