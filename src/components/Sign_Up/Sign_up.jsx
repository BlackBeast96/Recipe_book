import React, { useState } from 'react'
import Button from '../Sign_IN/button'
import { NavLink } from 'react-router-dom'
import Text_area from '../Sign_IN/text_area'
import { useDispatch,useSelector } from 'react-redux'
import { sign_up } from '../features/Sign_in_and_out'
import { useNavigate } from 'react-router-dom'
function Sign_up() {
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const [data,setdata]=useState({
        name:"",
        img:"",
        password:"",
        email:"",

    })


    function changed(e){
        const value=e.target.value
        const name=e.target.name
        setdata((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }

    function changing_image(e){
        if(e.target.files){
            const file=e.target.files[0];
            const url=URL.createObjectURL(file);
            setdata({...data,img:url})
        }
    }

    function submite_data(e){
        e.preventDefault();
        localStorage.setItem("log_details",JSON.stringify(data))
        dispatch(sign_up(data))
        navigate("/recipe_catalog")
    }
    return (
        <>
            <div className="flex min-h-full items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-6">
                    <div>
                        <img className="mx-auto h-32 w-auto rounded-2xl" src="./cover_image.png" alt="Your Company" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign up account</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={submite_data}>
                        <div className=" rounded-md shadow-sm space-y-2">
                            <Text_area name="img" onChange={changing_image} type={"file"} value={"image"} />
                            <Text_area name="name" onChange={changed} type={"text"} value={"Enter Your Full Name"} />
                            <Text_area name="email" onChange={changed} type={"email"} value={"Enter Email"} />
                            <Text_area name="password" onChange={changed} type={"password"} value={"Password"} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <NavLink to="/sign_in" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in </NavLink>
                            </div>
                        </div>
                        <Button value="sign up"/>

                    </form>
                </div>
            </div>
        

        </>
    )
}

export default Sign_up