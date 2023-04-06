
import { useSelector } from "react-redux"
import NavBar from '../NavBar/NavBar'
import Detail_Box from "./Detail_Box"
import { useDispatch } from "react-redux"
import { saved_recipe } from "../features/Recipe_Slice"
import { useEffect, useState } from "react"
export default function Recipe_details() {

  const dispatch = useDispatch();
  const data = useSelector((state)=>state.recipe.details_data)
  const [count, setcount] = useState(1);

  function clik() {
    if (count == 1) {
      dispatch(saved_recipe({
        title: data[0].title,
        instructions: data[0].instructions,
        image: data[0].image,
        ingredients: data[0].ingredients
      }))
      setcount(0);
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <NavBar />
      <div className="bg-white pt-20">
        <div onClick={clik} className="flex justify-end pr-10">
          <img className="h-12 hover:bg-violet-500 cursor-pointer" src="mark.png" />
        </div>
        <Detail_Box instructions={data[0].instructions} ingredients={data[0].ingredients} title={data[0].title} image={data[0].image} />
      </div>
    </>
  )
}
