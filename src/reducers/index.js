import { combineReducers } from 'redux';

import topSellingProducts from './topSellingProducts';
import products from './products';
import product from './product';
import cart from './cart';
import cartPopup from './cart-popup';

const combinedStore = combineReducers({
    topSellingProducts,
    products,
    product,
    cart,
    cartPopup,
});

export default combinedStore;