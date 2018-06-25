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

export const cartProductAdd = (product: any) => {
    return {
        type: 'PRODUCT_ADDED_TO_CART',
        payload: product,
    };
};

export const cartProductRemove = (id: number) => {
    return {
        type: 'PRODUCT_REMOVED_FROM_CART',
        payload: id,
    };
};

