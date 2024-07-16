import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers, registerUser, loginUser, refreshToken, logoutUser } from "../../services/usersService";
import { useNavigate } from "react-router-dom";

const initialState = {
    users: [],
    status: 'idle',
    accessToken: null,
    refreshToken: null
}

export const getUsersSlice = createAsyncThunk('users/getUsersSlice', async () => {
    try{
        const res = await getUsers();
        return res.data;
    } catch (error) {
        console.log(error);
        throw (error);
    }
})

export const register = createAsyncThunk('users/register', async (newUser) => {
    try{
        const res = await registerUser(newUser);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
})

export const login = createAsyncThunk('users/login', async (credentials) => {
    try {
        const res = await loginUser(credentials);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
})

export const refresh = createAsyncThunk('users/refresh', async (token) => {
    try {
        const res = await refreshToken(token);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
})

export const logout = createAsyncThunk('users/logout', async (token) => {
    try {
        await logoutUser(token);
    } catch (error) {
        console.log(error);
        throw error;
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUsersSlice.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getUsersSlice.fulfilled, (state, action) => {
            state.status = 'success';
            state.users = action.payload;
        })
        .addCase(getUsersSlice.rejected, (state, aciton) => {
            state.status = 'failed',
            state.error = aciton.payload.error;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.status = 'success',
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            console.log(state.accessToken);
            console.log(state.refreshToken);
        })
        .addCase(register.rejected, (state, action) => {
            state.status = 'failed',
            state.error = action.payload.error
        })
        .addCase(login.fulfilled, (state, action) => {
            state.status = 'success',
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            console.log(state.accessToken);
            console.log(state.refreshToken);
        })
        .addCase(login.rejected, (state, action) => {
            state.status = 'failed',
            state.error = action.payload.error
        })
        .addCase(refresh.fulfilled, (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        })
        .addCase(logout.fulfilled, (state) => {
            state.accessToken = null;
            state.refreshToken = null;
        })
    }
})

export default usersSlice.reducer;