import axios from "axios";

const categorieAPI = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json"
    }
})

export const getCategories = async () => {
    const res = await categorieAPI.get('/categories')
    return res.data;
}

export const addCategorie = async (data) => {
    const res = await categorieAPI.post('/addcategorie', data)
    return res.data;
}

export const modifyCategorie = async (id, data) => {
    const res = await categorieAPI.put(`/updatecategorie/${id}`, data)
    return res.data;
}

export const deleteCategorie = async (id) => {
    await categorieAPI.delete(`/deletecategorie/${id}`)
    return {Message: 'categorie Deleted successfuly!'}
}