export const getTopSellingProducts = () => {
    return {
        type: 'TOP_SELLING_PRODUCTS_REQUESTED',
    }
};

export const getProducts = (page: number) => {
    return {
        type: 'PRODUCT_LIST_REQUESTED',
        payload: {
            page,
        },
    };
};

export const getProduct = (id: number) => {
    return {
        type: 'PRODUCT_REQUESTED',
        payload: {
            id,
        },
    };
};
