import { configureStore } from "@reduxjs/toolkit";
import productBasicDetailsReducer from "./utilities/slices/productBasicDetailsSlice.js";

export default configureStore({
    reducer: {
        productDetails: productBasicDetailsReducer,
    }
})