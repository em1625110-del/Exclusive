import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './other-api/Product'
import categoryReducer from './other-api/CategorySlice'
import productReducer from './other-api/ProducSlice'
export const myStore =  configureStore({
    reducer: {
        categories:  categoriesReducer,
        category:  categoryReducer,
        products: productReducer
    }
})