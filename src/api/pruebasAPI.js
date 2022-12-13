import axios from "axios";
import {API_BASE_URL} from '@env'
axios.defaults.withCredentials = true;
export const postUser = async (userData) => {
    return await axios.post(`${API_BASE_URL}/api/prueba`, userData);
};