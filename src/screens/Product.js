import React from 'react';

import Layout from '../components/Layout';
import Product from '../containers/Product';

export default class ProductScreen extends React.Component {
    render() {
        return (
            <Layout>
                <Product id={parseInt(this.props.match.params.id, 10)} />
            </Layout>
        );
    }
}