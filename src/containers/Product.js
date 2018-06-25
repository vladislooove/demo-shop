import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getProduct } from '../actions';

import Loader from '../components/Loader';

class Product extends React.PureComponent {
    
    componentDidMount(): void {
        if (this.props.id !== this.props.product.id) {
            this.props.getProduct(this.props.id);
        }
    }

    render() {
        const { isLoading, product } = this.props;
        const { name, img, price, description } = product;

        if (isLoading) {
            return (
                <Loader />
            );
        }

        return (
            <div className="product">
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
                        {price}
                    </div>
                    <div className="product__buy-section">buy</div>
                    <div className="product__description">
                        {description}
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isLoading: state.product.isLoading,
        product: state.product.product,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProduct: (id: number) => {
            dispatch(getProduct(id));
        }
    };
};

Product.propTypes = {
    id: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
    product: PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);