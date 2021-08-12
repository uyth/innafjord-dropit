import axios from 'axios';
const config = require('./GROUP_SECRET.json');

const api = axios.create({
    baseURL: 'http://innafjord.azurewebsites.net/api/',
    headers: config
})


const getTurbines = () => api.get(`Turbines`);
const getGroupState = () => api.get(`GroupState`);

const apis = {
    getTurbines,
    getGroupState
}

export default apis;