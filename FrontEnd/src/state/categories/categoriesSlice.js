import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCategorie, deleteCategorie, getCategories, modifyCategorie } from "../../services/categoriesService";

const initialState = {
    categories: [],
    status: 'idle',
    error: null
}

export const getCategoriesSlice = createAsyncThunk('categories/getCategoriesSlice', async () => {
    try {
        const categoreis = await getCategories();
        return categoreis;
    } catch (error) {
        console.log('Error fetching categoreis', error);
        throw error;
    }
})

export const addCategorieSlice = createAsyncThunk('categories/addCategorieSlice', async (newCategorieData) => {
    try {
        const newCategorie = await addCategorie(newCategorieData);
        return newCategorie;
    } catch (error) {
        console.log('Error while adding new categorie', error);
        throw error;
    }
})

export const deleteCategorieSlice = createAsyncThunk('categories/deleteCategorieSlice', async (id) => {
    try {
        await deleteCategorie(id);
        return id
    } catch (error) {
        console.log('Error while deleting categorie', error);
        throw error;
    }
})

export const modifyCategorieSlice = createAsyncThunk(
    'categories/modifyCategorieSlice',
    async ({ id, data }) => {
        try {
            const modifiedCategorie = await modifyCategorie(id, data);
            return modifiedCategorie;
        } catch (error) {
            console.log('error occurred while modifying categories', error);
            throw(error)
        }
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: (builder) => {
        builder.addCase
            (getCategoriesSlice.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getCategoriesSlice.fulfilled, (state, action) => {
                state.status = 'success'
                state.categories = action.payload
                console.log(state.categories);
            })
            .addCase(getCategoriesSlice.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })
            .addCase(addCategorieSlice.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addCategorieSlice.fulfilled, (state, action) => {
                state.status = 'success';
                state.categories.push(action.payload);
            })
            .addCase(addCategorieSlice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteCategorieSlice.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteCategorieSlice.fulfilled, (state, action) => {
                state.status = 'success';
                state.categories = state.categories.filter(categorie => categorie.id !== action.payload);
            })
            .addCase(deleteCategorieSlice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(modifyCategorieSlice.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(modifyCategorieSlice.fulfilled, (state, action) => {
                state.status = 'success';
                const index = state.categories.findIndex(categorie => categorie.id === action.payload.id);
                if (index !== -1) {
                    state.categories[index] = action.payload;
                }
            })
            .addCase(modifyCategorieSlice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export default categoriesSlice.reducer;