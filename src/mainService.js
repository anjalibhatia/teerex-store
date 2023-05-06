import axios from 'axios';

export const getAllProducts = async () => {
    let url = 'https://geektrust/catalogue.json';
    return axios.get(url);
};