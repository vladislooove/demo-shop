import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getCartIconState } from '../selectors';

import cartIcon from '../assets/cart.svg';

class CartIcon extends React.PureComponent {
    render() {
        return (
            <Link className="cart-icon" to="/cart">
                <img className="cart-icon__icon"
                     src={cartIcon}
                     alt="cart">
                </img>
                { this.props.products.length > 0 &&
                    <span className="cart-icon__badge">
                        {this.props.products.length}
                    </span>
                }
            </Link>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: getCartIconState(state),
    }
};

CartIcon.proptypes = {
    products: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(CartIcon);