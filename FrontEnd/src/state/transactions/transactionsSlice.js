import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    transactions: [],
    status: 'idle',
    error: null
})

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState
})

export default transactionsSlice.reducer;