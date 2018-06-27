import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCity } from '../actions';

import { getCheckoutState } from '../selectors';

class Checkout extends React.PureComponent {
    render() {
        const { availableCities, deliveryCity, deliveryAddress, userFirstName, userLastName } = this.props.checkout;
        console.log(this.props);
        return (
            <p>Woow, Look, ya</p>
        );
    }
}

const mapStateToProps = state => {
    return {
        checkout: getCheckoutState(state),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCity: (query) => {
            dispatch(getCity(query))
        }
    };
};

Checkout.proptypes = {
    checkout: PropTypes.object.isRequired,
    getCity: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);