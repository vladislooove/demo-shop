// @flow

import {
    TOP_SELLING_PRODUCTS_REQUESTED,
    TOP_SELLING_PRODUCTS_FETCHED_SUCCESSFULLY,
    TOP_SELLING_PRODUCTS_FETCH_FAILED,
} from '../constants';

import type {
    TopSellingProductsStateType
} from '../types';

const topSellingProducts = (state: TopSellingProductsStateType = { isLoading: false, list: [], isRequestedBefore: false}, action: Object) => {
    switch (action.type) {
        case TOP_SELLING_PRODUCTS_REQUESTED:
            return {
                isLoading: true,
                list: state.list,
                isRequestedBefore: state.isRequestedBefore,
            };
        
        case TOP_SELLING_PRODUCTS_FETCHED_SUCCESSFULLY:
            return {
                isLoading: false,
                list: action.payload,
                isRequestedBefore: true,
            };

        case TOP_SELLING_PRODUCTS_FETCH_FAILED:
            return {
                isLoading: false,
                list: state.list,
                isRequestedBefore: state.isRequestedBefore,
            };

        default:
            return state;
    }
};

export default topSellingProducts;