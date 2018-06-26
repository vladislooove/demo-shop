// @flow

import { createSelector } from 'reselect';

import type {
    ProductCartType,
    ProductType,
} from '../types';

export const getCartState: Object = createSelector(
    (state: Object) => state.cart.list,
    (products: Array<ProductCartType>) => products,
);

export const getCartIconState: Object = createSelector(
    (state: Object) => state.cart.list,
    (products: Array<ProductCartType>) => products,
);

export const getProductState = createSelector(
    (state: Object) => state.product.product,
    (product: ProductType) => product,
);

export const getProductLoadingState = createSelector(
    (state: Object) => state.product.isLoading,
    (isLoading: boolean) => isLoading,
);

export const getProductsState = createSelector(
    (state: Object) => state.products.list,
    (products: Array<ProductType>) => products,
);

export const getProductsLoadingState = createSelector(
    (state: Object) => state.products.isLoading,
    (isLoading: boolean) => isLoading,
);

export const getProductsPageState = createSelector(
    (state: Object) => state.products.page,
    (page: number) => page,
);

export const getProductsRequestState = createSelector(
    (state: Object) => state.products.isRequestedBefore,
    (isRequestedBefore: boolean) => isRequestedBefore,
);

export const getTopSellingProductsLoadingState = createSelector(
    (state: Object) => state.topSellingProducts.isLoading,
    (isLoading: boolean) => isLoading,
);

export const getTopSellingProductsState = createSelector(
    (state: Object) => state.topSellingProducts.list,
    (products: Array<ProductType>) => products,
);

export const getTopSellingProductsRequestState = createSelector(
    (state: Object) => state.topSellingProducts.isRequestedBefore,
    (isRequestedBefore: boolean) => isRequestedBefore,
);

export const getCartPopupShonwState = createSelector(
    (state: Object) => state.cartPopup.isShown,
    (isShown: boolean) => isShown,
);

export const getCartPopupProductState = createSelector(
    (state: Object) => state.cartPopup.lastAddedProduct,
    (lastAddedProduct: ProductType) => lastAddedProduct,
);

export const getNotificationShownState = createSelector(
    (state: Object) => state.notification.isShown,
    (isShown: boolean) => isShown,
);

export const getNotificationMessageState = createSelector(
    (state: Object) => state.notification.message,
    (message: string) => message,
);

export const getNotificationTypeState = createSelector(
    (state: Object) => state.notification.type,
    (type: string) => type,
);

export const getLastViewedProductsState = createSelector(
    (state: Object) => state.lastViewedProducts,
    (lastViewedProducts: Array<ProductType>) => lastViewedProducts,
);