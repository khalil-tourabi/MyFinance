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

export const deleteTransaction = async(id) => {
    const deletedTransaction = await transactionAPI.delete(`/deletetransaction/${id}`);
    return deletedTransaction.data;
}

export const  modifyTransaction = async (id, data) => {
    const updatedTransaction = await transactionAPI.put(`/updatetransaction/${id}`, data)
    return updatedTransaction.data;
}