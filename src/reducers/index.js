import { combineReducers } from 'redux';

import topSellingProducts from './topSellingProducts';
import products from './products';
import product from './product';
import cart from './cart';

const combinedStore = combineReducers({
    topSellingProducts,
    products,
    product,
    cart,
});

export default combinedStore;