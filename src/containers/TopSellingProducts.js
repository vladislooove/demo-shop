import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTopSellingProducts } from '../actions';

import {
    getTopSellingProductsLoadingState,
    getTopSellingProductsState,
    getTopSellingProductsRequestState,
} from '../selectors';

import ProductList from '../components/ProductList';

class TopSellingProducts extends React.PureComponent {
    componentDidMount() {
        if(!this.props.isRequestedBefore) {
            this.props.getProducts();
        }
    }

    render() {
        return (
            <ProductList
                    isLoading={this.props.isLoading}
                    products={this.props.products}
                    topSelling
                    title="app.header.top_selling" />
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: getTopSellingProductsLoadingState(state),
        products: getTopSellingProductsState(state),
        isRequestedBefore: getTopSellingProductsRequestState(state),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => {
            dispatch(getTopSellingProducts())
        }
    };
};

TopSellingProducts.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    products: PropTypes.array.isRequired,
    isRequestedBefore: PropTypes.bool.isRequired,
    getProducts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopSellingProducts);