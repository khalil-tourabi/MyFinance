import axios from "axios";

const transactionAPI = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "Application/json"
    }
});

export const getTransacitons = async () => {
    return await transactionAPI.get('/transactions');
}