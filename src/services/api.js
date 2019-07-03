import axios from 'axios';

const api = axios.create({
    baseURL: "https://mais-que-especial.herokuapp.com"
});

export default api; 