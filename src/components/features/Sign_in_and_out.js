import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:"",
    email:"",
    desc:"",
    img:"",
    password:"",
}

const Sign_Slice=createSlice({
    name:"sign",
    initialState,
    reducers:{
        sign_up:(state,action)=>{
            state.name=action.payload.name
            state.password=action.payload.password
            state.email=action.payload.email
            state.img=action.payload.img
            state.desc=action.payload.desc
        },
        sign_in:(state,action)=>{

        }
    }
})

export default Sign_Slice.reducer
export const {sign_up,sign_in} =Sign_Slice.actions


