import React from 'react'

function Text_area({value,type,ref,onChange,name}) {
    return (
        <>

            <div>
                <label className="sr-only">{value}</label>
                <input onChange={onChange} name={name} id={value} type={type} autoComplete={type} required className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 " placeholder={value} />
            </div>
        </>
    )
}

export default Text_area