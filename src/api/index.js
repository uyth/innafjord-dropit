import axios from 'axios';
const config = require('./GROUP_SECRET.json');

const api = axios.create({
    baseURL: 'http://innafjord.azurewebsites.net/api/',
    headers: config
})

const openApi = axios.create({
  baseURL: "http://innafjord.azurewebsites.net/api"
})

const getTurbines = () => api.get(`Turbines`);
const getGroupState = () => api.get(`GroupState`);
const putTurbine = (id, capacityUsage) => api.put(`Turbines/${id}`, null, {
    params: {
        capacityUsage: capacityUsage
    }
});
const getWaterInflux = () => openApi.get(`WaterInflux`);

const apis = {
    getTurbines,
    getGroupState,
    putTurbine,
    getWaterInflux
}

export default apis;