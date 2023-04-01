import React from 'react'
import { NavLink } from "react-router-dom"

function Recipe_Box({id,imageSrc,name}) {
    return (
        <>
            <div className="bg-white ">
                <div className="mx-auto max-w-2xl px-4  sm:px-6 py-10 lg:max-w-7xl lg:px-8">
                        <NavLink to="/recipe_details">
                                <div key={id} className="group relative">
                                    <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                        loading='lazy'
                                            src={imageSrc}
                                            alt={name}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                            <h3 className="text-sm font-extrabold text-gray-700">
                                                {name}

                                            </h3>
                                    </div>
                                </div>
                        </NavLink>
                    </div>
            </div>
        </>
    )
}

export default Recipe_Box