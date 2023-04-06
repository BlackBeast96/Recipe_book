import React, { useEffect } from 'react'
import Sign_in from './components/Sign_IN/Sign_in'
import Sign_up from './components/Sign_Up/Sign_up'
import Recipe_catalog from './components/Recipe_Catalog/Recipe_catalog'
// import Request from './components/Recipe_Catalog/request'
import Error_404 from './components/Page_Error/Error_404'
import Recipe_details from './components/Recipe_details/Recipe_details'
import Saved_recipe from './components/Saved_Recipe/Saved_recipe'
import Profile from './components/Profile/Profile'
import {Routes,Route} from "react-router-dom"
import { useSelector } from "react-redux";

function App() {
  const visible_saved=useSelector((state)=>state.recipe.open);
 
  return (
    <>
    {/* <Request/> */}
    {visible_saved==true?<Saved_recipe />:""}
    <Routes>
    <Route path='/recipe_catalog' element={<Recipe_catalog/>} />
    <Route path='/sign_in' element={<Sign_in/>} />
    <Route path='/' element={<Sign_up/>} />
    <Route path='/recipe_details' element={<Recipe_details/>} />
    <Route path='/saved_recipe' element={<Saved_recipe/>} />
    <Route path='/profile' element={<Profile/>} />


    <Route path='*' element={<Error_404/>} />

    </Routes>
    </>
  )
}

export default App