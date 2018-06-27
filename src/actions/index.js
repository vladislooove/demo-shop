// @flow

import {
    TOP_SELLING_PRODUCTS_REQUESTED,
    PRODUCT_LIST_REQUESTED,
    PRODUCT_REQUESTED,
    PRODUCT_ADDED_TO_CART,
    PRODUCT_REMOVED_FROM_CART,
    LAST_VIEWED_PRODUCT_ADD,
    NOTIFICATION_HIDE,
    LOCALE_CHANGE,
    GET_CITY,
} from '../constants';

import type {
    ProductType,
} from '../types';

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

export const cartProductAdd = (product: ProductType): Object => {
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

export const lastAddedProductAdd = (product: ProductType): Object => {
    return {
        type: LAST_VIEWED_PRODUCT_ADD,
        payload: product,
    };
};

export const hideNotification = (id: number): Object => {
    return {
        type: NOTIFICATION_HIDE,
        payload: id,
    };
};

export const localeChange = (locale: string): Object => {
    return {
        type: LOCALE_CHANGE,
        payload: locale,
    };
};

export const getCity = (query: string): Object => {
    return {
        type: GET_CITY,
        payload: query,
    };
};