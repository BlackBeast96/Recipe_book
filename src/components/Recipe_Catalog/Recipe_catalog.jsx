import Heroic from "../Heroic_Section/Heroic"
import { useSelector, useDispatch } from "react-redux"
import { fetch_recipe, filter,details } from "../features/Recipe_Slice"
import Recipe_Box from "./Recipe_Box"
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom"
export default function Recipe_catalog() {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.recipe.user)
    

    const loading = useSelector((state) => state.recipe.loading)

    const navigate=useNavigate();

    

    function cliked(e) {
        var title=e.target.getAttribute("alt")
        dispatch(details(title))
        navigate("/recipe_details")
    }
    return (
        <>
            <NavBar />
            <Heroic />
            <div className="sm:flex flex-wrap justify-center">
                {loading == true ? data.map((elem, id) => {
                    return (
                            <Recipe_Box onClick={cliked}
                            key={id}
                              id={elem.id} name={elem.title} imageSrc={elem.image} />
                    )
                }) : <h1 className="text-center text-6xl mt-2 mb-20 font-black animate-pulse text-emerald-500">Loading Recipe ...</h1>
                }
            </div>
        </>
    )
}
