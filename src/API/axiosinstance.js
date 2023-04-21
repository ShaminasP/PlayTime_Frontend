import Axios from 'axios'
export const Axiosuser = Axios.create({
    baseURL: 'https://playtime-service.onrender.com',
    headers: {'Content-Type': 'application/json'}
})

