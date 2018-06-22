import React, { Component } from 'react';
import Layout from '../components/Layout';

import Products from '../containers/Products';

export default class ProductsScreen extends Component {
    render() {
        return (
            <Layout>
                <Products />
            </Layout>
        );
    }
}