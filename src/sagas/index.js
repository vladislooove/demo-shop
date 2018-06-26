import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import Api from '../api';

import {
    TOP_SELLING_PRODUCTS_REQUESTED,
    PRODUCT_LIST_REQUESTED,
    PRODUCT_REQUESTED,
    TOP_SELLING_PRODUCTS_FETCHED_SUCCESSFULLY,
    TOP_SELLING_PRODUCTS_FETCH_FAILED,
    PRODUCT_LIST_FETCHED_SUCCESSFULLY,
    PRODUCT_LIST_FETCH_FAILED,
    PRODUCT_FETCHED_SUCCESSFULLY,
    PRODUCT_FETCH_FAILED,
    PRODUCT_ADDED_TO_CART,
    PRODUCT_REMOVED_FROM_CART,
    CART_POPUP_SHOW,
    CART_POPUP_HIDE,
    NOTIFICATION_SHOW,
    NOTIFICATION_HIDE,
} from '../constants';

function* rootSaga() {
    yield takeEvery(TOP_SELLING_PRODUCTS_REQUESTED, getTopSellingProductsSaga);
    yield takeEvery(PRODUCT_LIST_REQUESTED, getProductsListSaga);
    yield takeEvery(PRODUCT_REQUESTED, getProductSaga);
    yield takeEvery(PRODUCT_ADDED_TO_CART, addProductToCartSaga);
    yield takeEvery(PRODUCT_REMOVED_FROM_CART, removeProductFromCartSaga);
    yield takeEvery(NOTIFICATION_SHOW, notificationSaga);
}

function* getTopSellingProductsSaga(action) {
    try {
        const response = yield call(Api.getTopSellingProducts);
        yield put({ type: TOP_SELLING_PRODUCTS_FETCHED_SUCCESSFULLY, payload: response.data.data });
    } catch (e) {
        yield put({ type: TOP_SELLING_PRODUCTS_FETCH_FAILED });
        yield put({ type: NOTIFICATION_SHOW, payload: {
            message: 'Oops, something went wrong...',
            type: 'error',
        } });
    }
}

function* getProductsListSaga(action) {
    try {
        const response = yield call(Api.getProducts, action.payload.page);
        yield put({ type: PRODUCT_LIST_FETCHED_SUCCESSFULLY, payload: response.data.data });
    } catch (e) {
        yield put({ type: PRODUCT_LIST_FETCH_FAILED });
        yield put({ type: NOTIFICATION_SHOW, payload: {
            message: 'Oops, something went wrong...',
            type: 'error',
        } });
    }
}

function* getProductSaga(action) {
    try {
        const requesId = action.payload.id > 7 ? (Math.floor(Math.random() * 7)) : action.payload.id; 
        const response = yield call(Api.getProduct, requesId);
        yield put({ type: PRODUCT_FETCHED_SUCCESSFULLY, payload: response.data });
    } catch (e) {
        yield put({ type: PRODUCT_FETCH_FAILED });
        yield put({ type: NOTIFICATION_SHOW, payload: {
            message: 'Oops, something went wrong...',
            type: 'error',
        } });
    }
}

function* addProductToCartSaga(action) {
    yield put({ type: CART_POPUP_SHOW, payload: {
        product: action.payload,
    } });

    yield put({ type: NOTIFICATION_SHOW, payload: {
        message: 'Product added to your cart',
        type: 'success',
    } });

    yield delay(3000);

    yield put({ type: CART_POPUP_HIDE });
}

function* removeProductFromCartSaga(action) {
    yield put({ type: NOTIFICATION_SHOW, payload: {
        message: 'Product removed from your cart',
        type: 'success',
    } });
}

function* notificationSaga(action) {
    yield delay(1500);

    yield put({ type: NOTIFICATION_HIDE });
}


export default rootSaga;