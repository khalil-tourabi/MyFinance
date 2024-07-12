import axios from 'axios'

const userAPI = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json"
    }
});

export const getUsers = async () => {
    return await userAPI.get('/users')
}