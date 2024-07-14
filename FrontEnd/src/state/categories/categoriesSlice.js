import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    status: 'idle',
    error: null
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState
})

export default categoriesSlice.reducer;