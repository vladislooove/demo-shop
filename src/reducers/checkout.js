// @flow
import { 
    CITIES_FETCHED_SUCCESSFULLY
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
        default:
            return state;
    }
};

export default checkout;