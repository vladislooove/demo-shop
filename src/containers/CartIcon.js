import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import cartIcon from '../assets/cart.svg';

class CartIcon extends React.PureComponent {
    render() {
        return (
            <div className="cart-icon">
                <img className="cart-icon__icon"
                     src={cartIcon}
                     alt="cart">
                </img>
                { this.props.products.length > 1 &&
                    <span className="cart-icon__badge">
                        {this.props.products.length}
                    </span>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.cart.list,
    }
};

CartIcon.proptypes = {
    products: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(CartIcon);