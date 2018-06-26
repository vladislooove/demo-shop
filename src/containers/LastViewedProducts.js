import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getLastViewedProductsState } from '../selectors';

import ProductList from '../components/ProductList';

class LastViewedProducts extends React.PureComponent {
    render() {
        if (this.props.lastViewedProducts.length < 1) {
            return null;
        }
        return (
            <ProductList
                isLoading={false}
                products={this.props.lastViewedProducts}
                title="app.header.last_viewed" />
        );
    }
}

LastViewedProducts.prototypes = {
    lastViewedProducts: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
    return {
        lastViewedProducts: getLastViewedProductsState(state),
    }
};


export default connect(mapStateToProps, null)(LastViewedProducts);