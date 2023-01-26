import React from "react"

const TextInput = ({ className = "", error = null, touched = null, ...props }) => {
    return (
        <div>
            <input
                className={"border-0 px-3 py-3 mt-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-blueGray-300 w-full ease-linear transition-all duration-150 " + className}
                {...props}
            />
            <label hidden={!touched} className="text-red-500 font-medium text-xs ">{error}</label>
        </div>
    )
}
export default TextInput