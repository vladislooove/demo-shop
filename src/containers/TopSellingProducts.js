import React from 'react';
import { connect } from 'react-redux';

import { getTopSellingProducts } from '../actions';

class TopSellingProducts extends React.PureComponent {
    render() {
        return (
            <p>topSelling</p>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.topSellingProducts.isLoading,
        products: state.topSellingProducts.list,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => {
            dispatch(getTopSellingProducts())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopSellingProducts);