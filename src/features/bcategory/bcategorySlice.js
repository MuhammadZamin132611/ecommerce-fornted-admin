import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import bCategoryService from "./bcategoryService";





export const getbCategory = createAsyncThunk(
    "blog/get-blogs",
    async (thunkAPI) => {
        try {
            return await bCategoryService.getBCategory();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    bcategory: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const bCategorySlice = createSlice({
    name: "bcategory",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getbCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getbCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.bcategory = action.payload;
            })
            .addCase(getbCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
    },
})

export default bCategorySlice.reducer;