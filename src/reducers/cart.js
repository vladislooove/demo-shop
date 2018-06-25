const card = (state = { isLoading: false, list: []}, action) => {
    switch (action.type) {
        case 'PRODUCT_ADDED':
            return {
                isLoading: false,
                list: [
                    ...state.list,
                    action.payload.product,
                ]
            };

        case 'PRODUCT_REMOVED':
            return {
                isLoading: false,
                list: state.list
            };

        default:
            return state;
    }
};

export default card;