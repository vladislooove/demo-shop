import axios from 'axios';

const apiBaseUrl: string = '../mocks/';

export default {
    getTopSellingProducts(): Promise {
        return axios.get(`${apiBaseUrl}topSellingProducts.json`);
    }
}