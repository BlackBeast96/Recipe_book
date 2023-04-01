import Heroic from "../Heroic_Section/Heroic"
import { useSelector,useDispatch } from "react-redux"
import { fetch_recipe } from "../features/Recipe_Slice"
import Recipe_Box from "./Recipe_Box"
import { useEffect } from "react"
import Saved_recipe from "../Saved_Recipe/Saved_recipe"
export default function Recipe_catalog() {
    
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetch_recipe())
    },[])


    const data=useSelector((state)=>state.recipe.user)
    const loading=useSelector((state)=>state.recipe.loading)

    function cliked(){
        console.log(data);
    }
    return (
        <>
            <Heroic/>
            <div  className="sm:flex flex-wrap justify-center">
            {loading==true?data.map((elem,id)=>{
                return(
                    <Recipe_Box key={elem.id} id={elem.id} name={elem.title} imageSrc={elem.image}/>                   
                 
            )}):<h1 className="text-center text-6xl mt-2 mb-20 font-black animate-pulse text-emerald-500">Loading Recipe ...</h1>
        }
        </div>
        </>
    )
}
