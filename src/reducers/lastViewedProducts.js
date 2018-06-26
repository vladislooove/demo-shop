// @flow

import { LAST_VIEWED_PRODUCT_ADD } from '../constants';

import type { ProductType } from '../types';

const lastViewedProducts = (state: Array<ProductType> = [], action: Object) => {
    switch (action.type) {
        case LAST_VIEWED_PRODUCT_ADD:
            const newState: Array<ProductType> = [...state];
            let containsProduct: boolean = false;

            newState.forEach((product: ProductType) => {
                if(product.id === action.payload.id) {
                    containsProduct = true;
                }
            });

            if (!containsProduct) {
                newState.unshift(action.payload);
            }

            if (newState.length > 4) {
                newState.pop();
            }

            return newState;

        default:
            return state;
    }
};

export default lastViewedProducts;