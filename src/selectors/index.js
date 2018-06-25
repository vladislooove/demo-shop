import { createSelector } from 'reselect';

export const getCartState = createSelector(
    state => state.cart.list,
    products => products,
);

export const getCartIconState = createSelector(
    state => state.cart.list,
    products => products,
);

export const getProductState = createSelector(
    state => state.product.product,
    product => product,
);

export const getProductLoadingState = createSelector(
    state => state.product.isLoading,
    isLoading => isLoading,
);

export const getProductsState = createSelector(
    state => state.products.list,
    products => products,
);

export const getProductsLoadingState = createSelector(
    state => state.products.isLoading,
    isLoading => isLoading,
);

export const getProductsPageState = createSelector(
    state => state.products.page,
    page => page,
);

export const getProductsRequestState = createSelector(
    state => state.products.isRequestedBefore,
    isRequestedBefore => isRequestedBefore,
);

export const getTopSellingProductsLoadingState = createSelector(
    state => state.topSellingProducts.isLoading,
    isLoading => isLoading,
);

export const getTopSellingProductsState = createSelector(
    state => state.topSellingProducts.list,
    products => products,
);

export const getTopSellingProductsRequestState = createSelector(
    state => state.topSellingProducts.isRequestedBefore,
    isRequestedBefore => isRequestedBefore,
);

export const getCartPopupShonwState = createSelector(
    state => state.cartPopup.isShown,
    isShown => isShown,
);

export const getCartPopupProduct = createSelector(
    state => state.cartPopup.lastAddedProduct,
    lastAddedProduct => lastAddedProduct,
)