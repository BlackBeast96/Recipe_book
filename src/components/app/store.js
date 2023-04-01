import { configureStore } from "@reduxjs/toolkit";
import Recipe_Slice from "../features/Recipe_Slice";
import Sign_Slice from "../features/Sign_in_and_out"
const store=configureStore({
    reducer:{
        recipe:Recipe_Slice,
        sign:Sign_Slice
    }
})

export default store

