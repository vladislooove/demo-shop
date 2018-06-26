// @flow

import {
    PRODUCT_REQUESTED,
    PRODUCT_FETCHED_SUCCESSFULLY,
    PRODUCT_FETCH_FAILED,
} from '../constants';

import type {
    ProductStateType,
} from '../types';

const product = (state: ProductStateType = { 
    isLoading: false, 
    product: {
        id: null,
        name: null,
        img: null,
        description: null,
        price: null,
    }
}, action: Object) => {
    switch (action.type) {
        case PRODUCT_REQUESTED:
            return {
                isLoading: true,
                product: state.product
            };

        case PRODUCT_FETCHED_SUCCESSFULLY:
            return {
                isLoading: false,
                product: {
                    id: action.payload.id,
                    description: action.payload.description,
                    img: action.payload.img,
                    name: action.payload.name,
                    price: action.payload.price,
                    shortDescription: action.payload.shortDescription,
                },
            };

        case PRODUCT_FETCH_FAILED:
            return {
                isLoading: false,
                product: state.product,
            };

        default:
            return state;
    }
};

export default product;