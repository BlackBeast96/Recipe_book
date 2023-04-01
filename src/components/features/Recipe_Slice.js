import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    user:[],
    loading:false,
    open:false
}

export const fetch_recipe=createAsyncThunk("recipe/fetch_recipe",async()=>{
    const options = {
        method: 'GET',
        url: 'https://random-recipes.p.rapidapi.com/ai-quotes/250',
        headers: {
          'X-RapidAPI-Key': '3d32ca6ca8msha4cbc8e126ccd9fp1ab026jsn36e45bc8dc12',
          'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
        }
      };
      
      const res=await axios.request(options);
      return res.data;
})

const Recipe_Slice=createSlice({
    name:"recipe",
    initialState,
    reducers:{
        side_bar:(state,action)=>{
            state.open=action.payload
            
        }
    },
    extraReducers(builder){
        builder.addCase(fetch_recipe.rejected,(state,action)=>{
            state.user=[]
            state.loading=true
        })
        .addCase(fetch_recipe.fulfilled,(state,action)=>{
            state.user=action.payload
            state.loading=true
        })
    }
})

export default Recipe_Slice.reducer
export const {side_bar} =Recipe_Slice.actions