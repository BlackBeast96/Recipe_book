import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    details_data:JSON.parse(localStorage.getItem("data_details"))?JSON.parse(localStorage.getItem("data_details")):[] ,

    saved:JSON.parse(localStorage.getItem("saved_recipe"))?JSON.parse(localStorage.getItem("saved_recipe")):[],

    user:[],
    loading:false,
    open:false
}

export const fetch_recipe=createAsyncThunk("recipe/fetch_recipe",async()=>{
    const options = {
        method: 'GET',
        url: 'https://random-recipes.p.rapidapi.com/ai-quotes/20',
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
        },
        filter:(state,action)=>{
            var data=state.user.filter((elem,id)=>{
                return elem.title==action.payload
            })
            state.user=data
        },
        details:(state,action)=>{
            var data=state.user.filter((elem,id)=>{
                return elem.title==action.payload
            })
            state.details_data=data
            localStorage.setItem("data_details",JSON.stringify(data));
        },
        saved_recipe:(state,action)=>{
            state.saved.push(action.payload)
            localStorage.setItem("saved_recipe",JSON.stringify(state.saved))
        },
        saved_recipe_filter:(state,action)=>{
            const data=JSON.parse(localStorage.getItem("saved_recipe"))
            const val=data.filter((elem,id)=>{
                return elem.title==action.payload
            })
            state.details_data=val
            localStorage.setItem("data_details",JSON.stringify(val));
            
        },
        remove_saved_recipe:(state,action)=>{
            const data=state.saved.filter((elem)=>{
                return elem.title!=action.payload
            })
            state.saved=data
            localStorage.setItem("saved_recipe",JSON.stringify(state.saved))
        }
    },
    extraReducers(builder){
        builder.addCase(fetch_recipe.rejected,(state,action)=>{
            state.user=[]
            state.loading=false
        }).addCase(fetch_recipe.pending,(state,action)=>{
            state.loading=false
        })
        .addCase(fetch_recipe.fulfilled,(state,action)=>{
            state.user=action.payload
            state.loading=true
        })
    }
})

export default Recipe_Slice.reducer
export const {side_bar,filter,saved_recipe,details,remove_saved_recipe,saved_recipe_filter} =Recipe_Slice.actions