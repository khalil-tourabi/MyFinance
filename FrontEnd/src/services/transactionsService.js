import axios from "axios";

const transactionAPI = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json"
    }
});

export const getTransacitons = async () => {
    const transactions = await transactionAPI.get('/transactions');
    return transactions.data;
}

export const addTransaction = async (data) => {
    const newTransaction = await transactionAPI.post('/addtransaction', data);
    return newTransaction.data;
}