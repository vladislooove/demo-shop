import React from 'react';
import { connect } from 'react-redux';
 
import { getProducts } from '../actions';

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
        isLoading: state.products.isLoading,
        products: state.products.list,
        page: state.products.page,
        isRequestedBefore: state.products.isRequestedBefore,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: (page: number) => {
            dispatch(getProducts(page))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);