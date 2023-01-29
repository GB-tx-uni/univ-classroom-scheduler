import React from "react";
const FormLabel = ({ title = "", required = false, className = "" }) => {
    return (
        <label className={"text-blueGray-400 text-xs font-bold mb-2" + className}>
            {title}
            {required && <span className="inline text-red-500">{" " + "*"}</span>}
        </label>
    )
}
export default FormLabel