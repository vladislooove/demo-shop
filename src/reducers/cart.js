import {
    PRODUCT_ADDED_TO_CART,
    PRODUCT_REMOVED_FROM_CART,
} from '../constants';

const card = (state = { isLoading: false, list: []}, action) => {
    switch (action.type) {
        case PRODUCT_ADDED_TO_CART:
            return {
                isLoading: false,
                list: [
                    {
                        ...action.payload,
                        added: new Date(),
                    },
                    ...state.list,
                ],
            };

        case PRODUCT_REMOVED_FROM_CART:
            const newList = state.list.filter((product) => {
                return !(product.id === action.payload.id && product.added === action.payload.dateAdded);
            });
        
            return {
                isLoading: false,
                list: newList,
            };

        default:
            return state;
    }
};

export default card;