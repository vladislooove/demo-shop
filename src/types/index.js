// @flow

export type ProductType = {
    id: number | null,
    name: string | null,
    img: string | null,
    description: string | null,
    price: number | null,
};

export type ProductCartType = {
    added: string,
    description: string,
    id: number,
    img: string,
    name: string,
    price: number,
    shortDescription: string,
};

export type CartStateType = {
    isLoading: boolean,
    list: Array<ProductCartType>
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

export type CartPopupStateType = {
    isShown: boolean,
    lastAddedProduct: ProductType,
};

export type NotificationType = {
    isShown: boolean,
    message: string,
    type: string,
    id: number,
};

export type LocaleType = {
    isActive: boolean,
    name: string,
};

export type AddressType = {
    Area: string,
    DeliveryCity: string,
    MainDescription: string,
    ParentRegionCode: string,
    ParentRegionTypes: string,
    Present: string,
    Ref: string,
    Region: string,
    RegionTypes: string,
    RegionTypesCode: string,
    SettlementTypeCode: string,
    StreetsAvailability: string,
    Warehouses: string,
};

export type CheckoutStateType = {
    availableCities: Array<AddressType>,
    deliveryCity: AddressType | null,
    deliveryAddress: string | null,
    userFirstName: string | null,
    userLastName: string | null,
};