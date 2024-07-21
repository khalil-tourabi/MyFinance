import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTransaction, deleteTransaction, getTransacitons, modifyTransaction } from "../../services/transactionsService";

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

export const deleteTransactionSlice = createAsyncThunk('transactions/deleteTransactionSlice' , async (id) => {
    try {
        const deletedTransaction = await deleteTransaction(id);
        return deletedTransaction;
    } catch (error) {
        console.log('error while deleting transaciton', error)
        throw error;   
    }
})

export const updateTransaction = createAsyncThunk(
    'transactions/updateTransaction',
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const updatedTransaction = await modifyTransaction(id, data);
            return updatedTransaction;
        } catch (error) {
            console.log('error while updating transaction!', error);
            return rejectWithValue(error.response?.data || 'An error occurred');
        }
    }
);

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
        .addCase(deleteTransactionSlice.fulfilled, (state, action) => {
            state.status = 'success';
            state.transactions.transactions = state.transactions.transactions.filter(transaction => transaction.id !== action.payload)
        })
        .addCase(deleteTransactionSlice.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(updateTransaction.fulfilled, (state, action) => {
            state.status = 'success';
            const index = state.transactions.transactions.findIndex(transaction => transaction.id === action.payload.id);
            if (index !== -1) {
                state.transactions[index] = action.payload;
            }
        })
        .addCase(updateTransaction.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default transactionsSlice.reducer;