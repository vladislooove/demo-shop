import axios from 'axios';

const apiBaseUrl: string = '../mocks/';

export default {
    getTopSellingProducts(): Promise {
        return axios.get(`${apiBaseUrl}topSellingProducts.json`);
    },

    getProducts(page: number): Promise {
        return axios.get(`${apiBaseUrl}/products/${page}.json`);
    }
}