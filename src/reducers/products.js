const products = (state = { isLoading: false, list: []}, action) => {
    switch (action.type) {
        case 'PRODUCT_LIST_REQUESTED':
            return {
                isLoading: true,
                list: state.list,
            };
        
        case 'PRODUCT_LIST_FETCHED_SUCCESSFULLY':
            return {
                isLoading: false,
                list: action.payload,
            };

        case 'PRODUCT_LIST_FETCH_FAILED':
            return {
                isLoading: false,
                list: state.list,
            };

        default:
            return state;
    }
};

export default products;