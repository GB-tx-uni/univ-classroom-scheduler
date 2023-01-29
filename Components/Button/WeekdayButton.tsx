import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Button = ({
    label = "",
    className = "",
    isDisabled = false,
    ...props
}) => {
    return (
        <button className={`active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer ${isDisabled ? "text-blueGray-800" : "bg-blueGray-600 text-white"} ${className} `}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;
