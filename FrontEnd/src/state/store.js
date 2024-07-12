import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./users/usersSlice";
import categoriesSlice from "./categories/categoriesSlice";
import transactionsSlice from "./transactions/transactionsSlice";

export const store = configureStore({
    reducer: {
        users: usersSlice,
        categories: categoriesSlice,
        transactions: transactionsSlice,
    }
})