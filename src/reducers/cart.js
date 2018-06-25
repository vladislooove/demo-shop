const card = (state = { isLoading: false, list: []}, action) => {
    switch (action.type) {
        case 'PRODUCT_ADDED_TO_CART':
            console.log(action);
            return {
                isLoading: false,
                list: [
                    ...state.list,
                    {
                        ...action.payload,
                        added: new Date(),
                    },
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