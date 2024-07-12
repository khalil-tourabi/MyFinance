import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    transactions: []
})

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState
})

export default transactionsSlice.reducer;