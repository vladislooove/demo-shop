import { call, put, takeEvery } from 'redux-saga/effects';

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
} from '../constants';

function* rootSaga() {
    yield takeEvery(TOP_SELLING_PRODUCTS_REQUESTED, getTopSellingProductsSaga);
    yield takeEvery(PRODUCT_LIST_REQUESTED, getProductsListSaga);
    yield takeEvery(PRODUCT_REQUESTED, getProductSaga);
}

function* getTopSellingProductsSaga(action) {
    try {
        const response = yield call(Api.getTopSellingProducts);
        yield put({ type: TOP_SELLING_PRODUCTS_FETCHED_SUCCESSFULLY, payload: response.data.data });
    } catch (e) {
        yield put({ type: TOP_SELLING_PRODUCTS_FETCH_FAILED });
    }
}

function* getProductsListSaga(action) {
    try {
        const response = yield call(Api.getProducts, action.payload.page);
        yield put({ type: PRODUCT_LIST_FETCHED_SUCCESSFULLY, payload: response.data.data });
    } catch (e) {
        yield put({ type: PRODUCT_LIST_FETCH_FAILED });
    }
}

function* getProductSaga(action) {
    try {
        const requesId = action.payload.id > 2 ? (Math.floor(Math.random() * 2)) : action.payload.id; 
        const response = yield call(Api.getProduct, requesId);
        yield put({ type: PRODUCT_FETCHED_SUCCESSFULLY, payload: response.data });
    } catch (e) {
        yield put({ type: PRODUCT_FETCH_FAILED });
    }
}

export default rootSaga;