import React from 'react'

function Recipe_Box({id,imageSrc,name,onClick}) {
    return (
        <>
            <div onClick={onClick} className="bg-white ">
                <div className="mx-auto max-w-2xl px-4  sm:px-6 py-10 lg:max-w-7xl lg:px-8">
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
                    </div>
            </div>
        </>
    )
}

export default Recipe_Box