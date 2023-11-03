import axios from 'axios';

var ngrokToken = 'https://a19a-195-25-86-163.ngrok-free.app'

export const fetchProductsData = async () => {
    try {
        const response = await axios.get(ngrokToken + '/api/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching data from API: ', error);
        throw error;
    }
};