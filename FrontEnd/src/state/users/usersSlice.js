import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState
})

export default usersSlice.reducer;