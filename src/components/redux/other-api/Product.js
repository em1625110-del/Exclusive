import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://dummyjson.com/products/categories";

export const fetchCategories = createAsyncThunk(
    "categories/fetch",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(API_URL);
            console.log(res.data);
            return res.data; 
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload; 
                state.loading = false;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default categorySlice.reducer;
