import axios from "axios";
import { base_url } from "../../utils/base_url";

const getTokenFromLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const config = {
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage.token}`,
        Accept: "Application/json"
    }
}

const login = async (user) => {
    const response = await axios.post(`${base_url}user/admin-login`, user);
    console.log(response.data);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const getOrders = async () => {

    const response = await axios.get(`${base_url}user/getallorders`, config);

    return response.data;
};


const authService = {
    login,
    getOrders,
}

export default authService;