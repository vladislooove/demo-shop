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
    getDeliveryCity(query: string): Promise<any> {
        return axios.post('http://api.novaposhta.ua/v2.0/json/Address/searchSettlements/', {
            apiKey: 'e4f40e7b4dc275c1807aca40aacec6db',
            modelName: "Address",
            calledMethod: "searchSettlements",
            methodProperties: {
                CityName: query,
                Limit: 20
            }        
        });
    }
}