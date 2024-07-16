import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers, registerUser, loginUser, refreshToken, logoutUser, updateUser, getCurrentUser } from "../../services/usersService";

const initialState = {
    users: [],
    status: 'idle',
    currentUser: {},
    error: null,
    accessToken: null,
    refreshToken: null
}

export const getUsersSlice = createAsyncThunk('users/getUsersSlice', async () => {
    try {
        const res = await getUsers();
        return res.data;
    } catch (error) {
        console.log(error);
        throw (error);
    }
})

export const register = createAsyncThunk('users/register', async (newUser) => {
    try {
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
        return {};
    } catch (error) {
        console.log(error);
        throw error;
    }
})

export const modifyUserProfile = createAsyncThunk('users/modifyUsersProfile', async ({ userData, token }) => {
    try {
        const res = await updateUser(userData, token);
        return res;
    } catch (error) {
        console.log('error updating the user data', error)
        throw error;
    }
})

export const getCurrentUserProfile = createAsyncThunk('users/getCurrentUserProfile', async (token) => {
    try {
        const res = await getCurrentUser(token);
        return res;
    } catch (error) {
        console.log('error getting the user', error)
        throw error;
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase
            (getUsersSlice.pending, (state) => {
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
                console.log(state.accessToken);
                console.log(state.refreshToken);
            })
            .addCase(logout.rejected, (state, action) => {
                state.error = action.error.message;
                console.error('Logout failed: ', action.error.message);
            })
            .addCase(modifyUserProfile.fulfilled, (state, action) => {
                state.status = 'success'
                state.users = action.payload.data;
            })
            .addCase(modifyUserProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(getCurrentUserProfile.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getCurrentUserProfile.fulfilled, (state, action) => {
                state.status = 'success'
                state.currentUser = action.payload;
                console.log(state.currentUser);
            })
            .addCase(getCurrentUserProfile.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })
    }
})

export default usersSlice.reducer;