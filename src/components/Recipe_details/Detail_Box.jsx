import React from 'react'

function Detail_Box({ image, title, ingredients, instructions }) {
    return (
        <>
            <div className="pt-2">
                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl flex justify-center  lg:max-w-7xl ">
                    <div className=" overflow-hidden rounded-lg ">
                        <img className='w-96 h-auto' src={image} />
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className=" lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className=" text-2xl font-bold tracking-tight text-violet-500 sm:text-3xl">{title}</h1>
                    </div>
                    <ol type="a" className='mt-2 font-semibold'>
                        {ingredients.map((elem, id) => {
                            return (
                                <li key={id}>{elem}</li>
                            )
                        })
                        }
                    </ol>
                    <div className=" lg:border-r lg:border-gray-200 lg:pr-8 pt-10">
                        <h1 className="text-2xl font-bold tracking-tight 
                        text-violet-500 sm:text-3xl">Instructions</h1>
                    </div>
                    <ol type="a" className='mt-2 font-semibold'>
                        {instructions.map((elem, id) => {
                            return (
                                <li key={id} >{elem.text}</li>
                            )
                        })
                        }
                    </ol>
                </div>
            </div>

        </>
    )
}

export default Detail_Box