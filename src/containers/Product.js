import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getProduct, cartProductAdd, lastAddedProductAdd } from '../actions';

import { getProductState, getProductLoadingState, getLastViewedProductsState } from '../selectors';

import Loader from '../components/Loader';
import Price from '../components/Price';
import ProductList from '../components/ProductList';

class Product extends React.PureComponent {
    
    componentDidMount() {
        if (this.props.id !== this.props.product.id) {
            this.props.getProduct(this.props.id);
        }
    }

    componentWillUnmount() {
        this.props.addLastViewedProduct(this.props.product);
    }

    onBuyHandler() {
        this.props.addProduct(this.props.product);
    }

    render() {
        const { isLoading, product } = this.props;
        const { name, img, price, description } = product;

        if (isLoading) {
            return (
                <Loader />
            );
        }

        return ([
            <div className="product" key="product">
                <div className="product__media-wrapper">
                    <picture className="product__media">
                        <img src={img} alt={name} className="product__img" />
                    </picture>
                </div>
                <div className="product__info">
                    <h1 className="product__title">
                        {name}
                    </h1>
                    <div className="product__price">
                        <Price price={price} />
                    </div>
                    <div className="product__buy-section">
                        <button className="product__buy-btn" onClick={this.onBuyHandler.bind(this)}>
                            Buy
                        </button>
                    </div>
                    <div className="product__description">
                        {description}
                    </div>
                </div>
            </div>,
            <div key="lastViewedProducts">
                { this.props.lastViewedProducts.length > 1 && 
                    <ProductList
                        isLoading={false}
                        products={this.props.lastViewedProducts}
                        title="Last viewed products" />
                }
            </div>    
        ]);
    }
};

const mapStateToProps = state => {
    return {
        product: getProductState(state),
        isLoading: getProductLoadingState(state),
        lastViewedProducts: getLastViewedProductsState(state),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProduct: (id) => {
            dispatch(getProduct(id));
        },
        addProduct: (product) => {
            dispatch(cartProductAdd(product));
        },
        addLastViewedProduct: (product) => {
            dispatch(lastAddedProductAdd(product));
        },
    };
};

Product.propTypes = {
    id: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
    product: PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);