const topSellingProducts = (state = { isLoading: false, list: [], isRequestedBefore: false}, action) => {
    switch (action.type) {
        case 'TOP_SELLING_PRODUCTS_REQUESTED':
            return {
                isLoading: true,
                list: state.list,
                isRequestedBefore: state.isRequestedBefore,
            };
        
        case 'TOP_SELLING_PRODUCTS_FETCHED_SUCCESSFULLY':
            return {
                isLoading: false,
                list: action.payload,
                isRequestedBefore: true,
            };

        case 'TOP_SELLING_PRODUCTS_FETCH_FAILED':
            return {
                isLoading: false,
                list: state.list,
                isRequestedBefore: state.isRequestedBefore,
            };

        default:
            return state;
    }
};

export default topSellingProducts;