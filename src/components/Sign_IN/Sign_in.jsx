import React, { useRef, useState } from 'react'
import Button from './button'
import Text_area from './text_area'
import { NavLink, useNavigate } from 'react-router-dom'

function Sign_in() {

  const navigate = useNavigate()
  const [value_data, setdata] = useState({
    email: "",
    password: ""
  });

  function Change(e) {
    const value = e.target.value
    const name = e.target.name
    setdata((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }
  function auth(e) {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("log_details"))
    if (data.email == value_data.email && data.password == value_data.password) {
      navigate("/recipe_catalog")
    }
    else {
      alert("invalid details")
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-32 w-auto rounded-2xl" src="./cover_image.png" alt="Your Company" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={auth}>
            <div className=" rounded-md shadow-sm space-y-2">
              <Text_area onChange={Change} name="email" type={"email"} value={"Enter Email"} />
              <Text_area onChange={Change} name="password" type={"password"} value={"Password"} />
            </div>
            <div className="flex items-center justify-between">

              <div className="text-sm">
                <NavLink to="/" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</NavLink>
              </div>
            </div>
            <Button value="sign in" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Sign_in