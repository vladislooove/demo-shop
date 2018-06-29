import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactInputSelect from 'react-input-select';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';

import { getCity, submitCheckout } from '../actions';

import { getCheckoutState } from '../selectors';

class Checkout extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            firstNameValue: '',
            lastNameValue: '',
            deliveryCityValue: '',
            deliveryAddressValue: '',
        };
    }

    inputHandler(event, stateKey) {
        const newState = {};
        newState[stateKey] = event.target.value;
        this.setState(newState);
    }

    inputSelecthandler(event) {
        this.setState({
            deliveryCityValue: event.target.value,
        });
        this.props.getCity(event.target.value);
    }

    optionHandler(item, data, event) {
        this.setState({
            deliveryCityValue: item,
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.submitCheckout(this.state);
        this.props.history.push('/');
    }

    render() {
        const { availableCities } = this.props.checkout;
        return (
            <section className="checkout">
                <div className="checkout__title">
                    <FormattedMessage id="app.header.checkout" />
                </div>
                <form className="checkout__form" onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="checkout__form-title">
                        <FormattedMessage id="checkout.form_label.info" />
                    </div>
                    <label className="checkout__form-label">
                        <FormattedMessage id="checkout.form_label.first_name" />
                    </label>
                    <input className="checkout__form-input" 
                            type="text"
                            value={this.state.firstNameValue}
                            onChange={(event) => {this.inputHandler(event, 'firstNameValue')}}
                            required />

                    <label className="checkout__form-label">
                        <FormattedMessage id="checkout.form_label.last_name" />
                    </label>
                    <input className="checkout__form-input" 
                            type="text"
                            value={this.state.lastNameValue}
                            onChange={(event) => {this.inputHandler(event, 'lastNameValue')}}
                            required />


                    <label className="checkout__form-label">
                        <FormattedMessage id="checkout.form_label.delivery_city" />
                    </label>
                    <ReactInputSelect
                        data={availableCities}
                        value={this.state.deliveryCityValue}
                        onChange={this.inputSelecthandler.bind(this)}
                        containerClass="checkout__form-input-select"
                        inputClass="checkout__form-input"
                        onOptionClick={this.optionHandler.bind(this)}
                        dropdownClass="checkout__form-dropdown"
                        dropdownOptionClass="checkout__form-dropdown-option"
                    />

                    <label className="checkout__form-label">
                        <FormattedMessage id="checkout.form_label.delivery_address" />
                    </label>
                    <input className="checkout__form-input" 
                            type="text"
                            value={this.state.deliveryAddressValue}
                            onChange={(event) => {this.inputHandler(event, 'deliveryAddressValue')}}
                            required />
                    <button className="checkout__submit-btn" onClick={this.onFormSubmit.bind(this)}>
                        <FormattedMessage id="btn.submit" />
                    </button>               
                </form>
            </section>
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
        },
        submitCheckout: (userData) => {
            dispatch(submitCheckout(userData))
        },
    };
};

Checkout.proptypes = {
    checkout: PropTypes.object.isRequired,
    getCity: PropTypes.func.isRequired,
    submitCheckout
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout));