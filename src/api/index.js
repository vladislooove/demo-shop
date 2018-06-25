// @flow

import axios from 'axios';

const apiBaseUrl: string = '../mocks/';

export default {
    getTopSellingProducts(): Promise<any> {
        return axios.get(`${apiBaseUrl}topSellingProducts.json`);
    },

    getProducts(page: number): Promise<any> {
        return axios.get(`${apiBaseUrl}/products/${page}.json`);
    },

    getProduct(id: number): Promise<any> {
        return axios.get(`${apiBaseUrl}/product/${id}.json`);
    },
}