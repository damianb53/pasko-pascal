import axios from 'axios';

const API = axios.create({
    baseURL: 'https://pps-api.herokuapp.com/api/'
});

export default API;
