import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from '../features/brand/brandSlice';
import pCategoryReducer from '../features/pcategory/pcategorySlice';
import blogReducer from '../features/blogs/blogSlice'
import bCategoryReducer from '../features/bcategory/bcategorySlice'
import colorReducer from '../features/color/colorSlice'
import enquiryReducer from '../features/enquiry/enquirySlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        pCategory: pCategoryReducer,
        blogs: blogReducer,
        bcategory: bCategoryReducer,
        color: colorReducer,
        enquiry: enquiryReducer,
    },
})