import React from 'react';
import Layout from '../components/Layout';

import TopSellingProducts from '../containers/TopSellingProducts';
import LastViewedProducts from '../containers/LastViewedProducts';

const HomeScreen = () => {
    return (
        <Layout>
            <TopSellingProducts />
            <LastViewedProducts />
        </Layout>
    );
};

export default HomeScreen;