import { call, put, takeEvery } from 'redux-saga/effects';

import Api from '../api';

function* rootSaga(): void {
    yield takeEvery('TOP_SELLING_PRODUCTS_REQUESTED', getTopSellingProductsSaga);
}

function* getTopSellingProductsSaga(action) {
    try {
        const response = yield call(Api.getTopSellingProducts);
        yield put({ type: 'TOP_SELLING_PRODUCTS_FETCHED_SUCCESSFULLY', payload: response.data.data });
    } catch (e) {
        yield put({ type: 'TOP_SELLING_PRODUCTS_FETCH_FAILED' });
    }
}

export default rootSaga;