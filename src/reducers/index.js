import { combineReducers } from 'redux';

import topSellingProducts from './topSellingProducts';

const combinedStore = combineReducers({
    topSellingProducts,
});

export default combinedStore;