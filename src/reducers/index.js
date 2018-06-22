import { combineReducers } from 'redux';

import topSellingProducts from './topSellingProducts';
import products from './products';

const combinedStore = combineReducers({
    topSellingProducts,
    products,
});

export default combinedStore;