const topSellingProducts = (state = { isLoading: false, list: []}, action) => {
    switch (action.type) {
        case 'TOP_SELLING_PRODUCTS_REQUESTED':
            return {
                isLoading: true,
                list: state.list,
            };
        
        case 'TOP_SELLING_PRODUCTS_FETCHED_SUCCESSFULLY':
            return {
                isLoading: false,
                list: action.payload,
            };

        case 'TOP_SELLING_PRODUCTS_FETCH_FAILED':
            return {
                isLoading: false,
                list: state.list,
            };

        default:
            return state;
    }
};

export default topSellingProducts;