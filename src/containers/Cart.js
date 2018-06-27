import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { cartProductRemove } from '../actions';
import { getCartState } from '../selectors';

import ProductCartItem from '../components/ProductCartItem';
import Price from '../components/Price';

class Cart extends React.PureComponent {
    getSummaryPrice() {
        let sum = 0;

        this.props.products.forEach((product) => {
            sum += product.price;
        });
        
        return sum;
    }

    render() {
        return (
            <section className="cart">
                <div className="cart__title">
                    <FormattedMessage id="app.header.cart" />
                </div>
                {this.props.products.length > 0 && 
                    <div className="cart__headers">
                        <div>
                            <FormattedMessage id="cart.label.image" />
                        </div>
                        <div>
                            <FormattedMessage id="cart.label.info" />
                        </div>
                        <div>
                            <FormattedMessage id="cart.label.price" />
                        </div>
                        <div>
                            <FormattedMessage id="cart.label.added" />
                        </div>
                        <div>
                            <FormattedMessage id="cart.label.remove" />
                        </div>
                    </div>
                }
                <div className="cart__list">
                    {this.props.products.length > 0 ? 
                        this.props.products.map((product, index) => {
                            return (
                                <ProductCartItem 
                                    key={index}
                                    onRemoveClick={this.props.removeProduct} 
                                    {...product} />
                            );
                        })
                    :
                        <p><FormattedMessage id="msg.no_items" /></p>
                    }
                </div>
                {this.props.products.length > 0 &&
                    <div className="cart__footer">
                        <div className="cart__summary">
                            <span className="cart__summary-label">
                                <FormattedMessage id="cart.label.summary" />
                            </span>
                            <Price price={this.getSummaryPrice()} />
                        </div>
                        <Link className="cart__footer-link" to="/cart/checkout">
                            <FormattedMessage id="btn.checkout" />
                        </Link>
                    </div>
                    
                }
            </section>
        );
    }
};

Cart.proptypes = {
    products: PropTypes.array.isRequired,
    removeProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
        products: getCartState(state),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeProduct: (id, dateAdded) => {
            dispatch(cartProductRemove(id, dateAdded))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);