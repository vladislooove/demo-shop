// @flow

import {
    CART_POPUP_SHOW,
    CART_POPUP_HIDE,
} from '../constants';

import type {
    CartPopupStateType,
} from '../types';

const cartPopup = (state: CartPopupStateType = {
    isShown: false,
    lastAddedProduct: {
        id: null,
        name: null,
        img: null,
        description: null,
        price: null,    
    }
}, action: Object) => {
    switch (action.type) {
        case CART_POPUP_SHOW:
            console.log(action);
            return {
                isShow: true,
                lastAddedProduct: action.payload.product,
            };

        case CART_POPUP_HIDE:
            console.log(action);
            return {
                isShown: false,
                lastAddedProduct: state.lastAddedProduct,
            };

        default:
            return state;
    }
};

export default cartPopup;
