import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../screens/Home';
import Products from '../screens/Products';
import Product from '../screens/Product';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';

import { getCartState } from '../selectors';

class Router extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products" component={Products} />
                    <Route path="/products/:id" component={Product} />
                    <Route exact path="/cart" component={Cart} />
                    <Route path ="/cart/checkout" render={() => (
                        this.props.cartProducts.length ? (
                            <Checkout />
                        ) : (
                            <Redirect to="/products" />
                        )
                    )} />
                </Switch>
            </BrowserRouter>
        );
    }
}

Router.proptypes = {
    cartProducts: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
    return {
        cartProducts: getCartState(state),
    }
};

export default connect(mapStateToProps, null)(Router);