// @flow
import { 
    CITIES_FETCHED_SUCCESSFULLY,
    SUBMIT_CHECKOUT,
} from '../constants';

import type { CheckoutStateType } from '../types';

const checkout = (state: CheckoutStateType = {
    availableCities: [],
    deliveryCity: null,
    deliveryAddress: null,
    userFirstName: null,
    userLastName: null,
}, action: Object) => {
    switch (action.type) {
        case CITIES_FETCHED_SUCCESSFULLY:
            let addresses: Array<any> = [];

            if(action.payload.length) {
                action.payload[0].Addresses.forEach((item: Object) => {
                    addresses.push(item.Present);
                });
            }

            return {
                availableCities:addresses,
                deliveryCity: state.deliveryCity,
                deliveryAddress: state.deliveryAddress,
                userFirstName: state.userFirstName,
                userLastName: state.userLastName,            
            };

        case SUBMIT_CHECKOUT:
            const { deliveryCity, deliveryAddress, userFirstName, userLastName } = action.payload;

            return {
                availableCities: state.availableCities,
                deliveryCity,
                deliveryAddress,
                userFirstName,
                userLastName,
            };

        default:
            return state;
    }
};

export default checkout;