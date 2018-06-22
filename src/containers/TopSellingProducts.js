import React from 'react';
import { connect } from 'react-redux';

import { getTopSellingProducts } from '../actions';

import ProductList from '../components/ProductList';

class TopSellingProducts extends React.PureComponent {
    componentDidMount(): void {
        this.props.getProducts();
    }

    render() {
        return (
            <ProductList
                    isLoading={this.props.isLoading}
                    products={this.props.products}
                    topSelling={true}
                    title="Top selling products" />
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