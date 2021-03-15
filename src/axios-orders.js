import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-60dbd-default-rtdb.firebaseio.com/'
});

export default instance;