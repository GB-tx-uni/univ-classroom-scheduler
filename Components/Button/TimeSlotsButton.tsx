import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Button = ({
    label = "",
    className = "",
    selected = false,
    ...props
}) => {
    return (
        <button className={`active:bg-blueGray-600 font-bold text-sm px-4 py-4 my-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer ${className} ${selected ? 'bg-blueGray-800 text-white' : 'text-blueGray-600'}`}
            {...props}>
            {label}
        </button >
    );
};

export default Button;
