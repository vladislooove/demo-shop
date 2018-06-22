import { combineReducers } from 'redux';

import topSellingProducts from './topSellingProducts';
import products from './products';
import product from './product';

const combinedStore = combineReducers({
    topSellingProducts,
    products,
    product,
});

export default combinedStore;