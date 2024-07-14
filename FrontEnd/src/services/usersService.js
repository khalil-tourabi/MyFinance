import axios from 'axios'

const userAPI = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json"
    }
});

export const getUsers = async () => {
    return await userAPI.get('/users');
}

export const registerUser = async (newUser) => {
    const res =  await userAPI.post('/register', newUser);
    return res.data;
}

export const loginUser = async (credentials) => {
    const res = await userAPI.post('/login', credentials);
    return res.data;
}

export const refreshToken = async (token) => {
    const res = await userAPI.post('/refresh-token', { token });
    return res.data;
}

export const logoutUser = async (token) => {
    const res = await userAPI.post('/logout', { token });
    return res.data;
}