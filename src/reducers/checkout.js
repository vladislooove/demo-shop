// @flow

import type { CheckoutStateType } from '../types';

const checkout = (state: CheckoutStateType = {
    availableCities: [],
    deliveryCity: null,
    deliveryAddress: null,
    userFirstName: null,
    userLastName: null,
}, action: Object) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default checkout;