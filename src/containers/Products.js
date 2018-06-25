import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 

import { getProducts } from '../actions';

import { 
    getProductsState,
    getProductsLoadingState,
    getProductsPageState,
    getProductsRequestState,
} from '../selectors';

import ProductList from '../components/ProductList';

class Products extends React.PureComponent {

    componentDidMount(): void {
        if(!this.props.isRequestedBefore) {
            this.props.getProducts(1);
        }
    }


    loadMoreHandler(): void {
        this.props.getProducts(this.props.page);
    }

    render() {
        return (
            <ProductList
                    isLoading={this.props.isLoading}
                    products={this.props.products}
                    loadMore={this.loadMoreHandler.bind(this)}
                    hasMoreItems={this.props.page <= 3}
                    title="Products list" />
        );
    }
};

const mapStateToProps = state => {
    return {
        isLoading: getProductsLoadingState(state),
        products: getProductsState(state),
        page: getProductsPageState(state),
        isRequestedBefore: getProductsRequestState(state),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: (page: number) => {
            dispatch(getProducts(page))
        }
    };
};

Products.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    products: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    isRequestedBefore: PropTypes.bool.isRequired,
    getProducts: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);