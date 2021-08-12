import axios from 'axios';
const config = require('./GROUP_SECRET.json');

const api = axios.create({
    baseURL: 'http://innafjord.azurewebsites.net/api/',
    headers: config
})


const getTurbines = () => api.get(`Turbines`);
const getGroupState = () => api.get(`GroupState`);
const putTurbine = (id, capacityUsage) => api.put(`Turbines/${id}`, null, {
    params: {
        capacityUsage: capacityUsage
    }
});

const apis = {
    getTurbines,
    getGroupState,
    putTurbine
}

export default apis;