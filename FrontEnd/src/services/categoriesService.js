import axios from "axios";

const categorieAPI = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json"
    }
})

export const getCategories = async () => {
    return await categorieAPI.get('/categories')
}