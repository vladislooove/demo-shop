// @flow

export type ProductType = {
    id: number | null,
    name: string | null,
    img: string | null,
    description: string | null,
    price: number | null,
};

export type ProductCardType = {
    added: string,
    description: string,
    id: number,
    img: string,
    name: string,
    price: number,
    shortDescription: string,
};

export type CardStateType = {
    isLoading: boolean,
    list: Array<ProductCardType>
};

export type ProductStateType = {
    isLoading: boolean,
    product: ProductType, 
};

export type ProductsStateType = {
    isLoading: boolean,
    list: Array<ProductType>,
    page: number,
    isRequestedBefore: boolean,
};

export type TopSellingProductsStateType = {
    isLoading: boolean,
    list: Array<ProductType>,
    isRequestedBefore: boolean,
};

