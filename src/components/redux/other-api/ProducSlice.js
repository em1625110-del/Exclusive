import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../../axios/ApiClient";


export const getProductFetch = createAsyncThunk(
    'products/get',
    async(categoryName, ThunkApi) => {
        try{
           const res = await apiClient.get(`/products/category/${categoryName}`)
           console.log(res.data.products);
           return res.data.products
           
        }catch(error){
            return ThunkApi.rejectWithValue(error.message || 'not found');
        }
    }
)

const ProductCategorySlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(getProductFetch.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getProductFetch.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getProductFetch.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default ProductCategorySlice.reducer;