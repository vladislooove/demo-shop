const card = (state = { isLoading: false, list: []}, action) => {
    switch (action.type) {
        case 'PRODUCT_ADDED_TO_CART':
            console.log(action);
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

        case 'PRODUCT_REMOVED_FROM_CART':
            return {
                isLoading: false,
                list: state.list
            };

        default:
            return state;
    }
};

export default card;