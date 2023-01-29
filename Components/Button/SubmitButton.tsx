import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Button = ({
    label = "",
    className = "",
    style = "primary",
    isLoading = false,
    isDisabled = false,

    ...props
}) => {
    return (
        <button
            type={props.type || "button"}
            disabled={isDisabled || isLoading} //Dont comment this. This is make the button disabled when loading starts and prevent duplicates click
            name={props.name ? props.name : "button"}
            className={isDisabled ? `bg-white-r text-white active:button-red button-red-one h-12 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 opacity-75 cursor-not-allowed ${className}` :
                `bg-white-r text-white active:button-red button-red-one h-12 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 ${className}`}

            {...props}
        >

            {/* {!isLoading ? (
                props.value
            ) : (
                <BeatLoader size={8} color={"#FFFFFF"} loading={true} />
            )}
            {!isLoading && label} */}
        </button>
    );
};

export default Button;
