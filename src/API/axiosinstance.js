import Axios from 'axios'
export const Axiosuser = Axios.create({
    baseURL: 'https://playtime-service.onrender.com',
    // baseURL: 'http://localhost:3001',
    headers: {'Content-Type': 'application/json'}
})

