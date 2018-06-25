import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { cartProductRemove } from '../actions';

import ProductCartItem from '../components/ProductCartItem';

class Cart extends React.PureComponent {
    render() {
        return (
            <section className="cart">
                <div className="cart__title">
                    Cart
                </div>
                <div className="cart__list">
                    {this.props.products.length > 0 ? 
                        this.props.products.map((product, index) => {
                            return (
                                <ProductCartItem key={index} {...product} />
                            );
                        })
                    :
                        <p>There are no items yet...</p>
                    }
                </div>
            </section>
        );
    }
};

const mapStateToProps = state => {
    return {
        products: state.cart.list,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeProduct: (id: number) => {
            dispatch(cartProductRemove(id))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);