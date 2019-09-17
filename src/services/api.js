import axios from 'axios';

const api = axios.create({
    baseURL: "https://mais-que-especial.herokuapp.com"
    //baseURL: "http://localhost:9001"
});

export default api; 