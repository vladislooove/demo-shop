// @flow

import {
    TOP_SELLING_PRODUCTS_REQUESTED,
    PRODUCT_LIST_REQUESTED,
    PRODUCT_REQUESTED,
    PRODUCT_ADDED_TO_CART,
    PRODUCT_REMOVED_FROM_CART,
} from '../constants';

export const getTopSellingProducts = (): Object => {
    return {
        type: TOP_SELLING_PRODUCTS_REQUESTED,
    }
};

export const getProducts = (page: number): Object => {
    return {
        type: PRODUCT_LIST_REQUESTED,
        payload: {
            page,
        },
    };
};

export const getProduct = (id: number): Object => {
    return {
        type: PRODUCT_REQUESTED,
        payload: {
            id,
        },
    };
};

export const cartProductAdd = (product: any): Object => {
    return {
        type: PRODUCT_ADDED_TO_CART,
        payload: product,
    };
};

export const cartProductRemove = (id: number, dateAdded: Date): Object => {
    return {
        type: PRODUCT_REMOVED_FROM_CART,
        payload: {
            id,
            dateAdded,
        },
    };
};
