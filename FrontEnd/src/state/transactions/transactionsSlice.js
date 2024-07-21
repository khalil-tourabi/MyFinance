import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTransaction, getTransacitons } from "../../services/transactionsService";

const initialState = {
    transactions: [],
    status: 'idle',
    error: null
}

export const getTransactionsSlice = createAsyncThunk('transactions/getTransactionsSlice', async () => {
    try {
        const transactionsData = await getTransacitons();
        return transactionsData;
    } catch (error) {
        console.log('Error while fetching data!', error)
        throw error;
    }
})

export const addTransactionSlice = createAsyncThunk('transactions/addTransactionSlice', async (data) => {
    try {
        const newTransaction = await addTransaction(data);
        return newTransaction;
    } catch (error) {
        console.log('error while adding new transaction', error)
        throw error;
    }
})

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getTransactionsSlice.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getTransactionsSlice.fulfilled, (state, action) => {
            state.status = 'success';
            state.transactions = action.payload;
            console.log(state.transactions);
        })
        .addCase(getTransactionsSlice.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(addTransactionSlice.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(addTransactionSlice.fulfilled, (state, action) => {
            state.status = 'success';
            state.transactions.transactions.push(action.payload);
        })
        .addCase(addTransactionSlice.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default transactionsSlice.reducer;