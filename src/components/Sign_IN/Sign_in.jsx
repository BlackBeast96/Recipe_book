import React from 'react'
import Button from './button'
import Text_area from './text_area'
import { NavLink } from 'react-router-dom'

function Sign_in() {
  return (
    <>
          <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <img className="mx-auto h-32 w-auto rounded-2xl" src="./cover_image.png" alt="Your Company" />
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
              </div>
              <form className="mt-8 space-y-6" action="#" method="POST">
                  <div className=" rounded-md shadow-sm space-y-2">
                    <Text_area type={"email"} value={"Enter Email"}/>
                    <Text_area type={"password"} value={"Password"} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                    </div>

                    <div className="text-sm">
                      <NavLink to="/sign_up" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</NavLink>
                    </div>
                  </div>
              <Button value="sign in"/>
              </form>
            </div>
          </div>
        </>
        )
}

export default Sign_in