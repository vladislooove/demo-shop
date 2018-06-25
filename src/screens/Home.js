import React from 'react';
import Layout from '../components/Layout';

import TopSellingProducts from '../containers/TopSellingProducts';

const HomeScreen = () => {
    return (
        <Layout>
            <TopSellingProducts />
        </Layout>
    );
};

export default HomeScreen;