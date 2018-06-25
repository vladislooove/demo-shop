import React from 'react';

import Layout from '../components/Layout';
import Product from '../containers/Product';

const ProductScreen = (props) => {
    return (
        <Layout>
            <Product id={parseInt(props.match.params.id, 10)} />
        </Layout>
    );
};

export default ProductScreen;