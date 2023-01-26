import React from "react";
import Select from 'react-select';

const Dropdown = ({
    id = "",
    name = "",
    options = [],
    onChange = () => { },
    touched = undefined,
    error = null,
    className = "",
    ...props
}) => {
    // const customStyles = {
    //     control: (base, state) => ({
    //         ...base,
    //         height: 45,
    //         minHeight: 35,
    //         border: state.isFocused ? '1px solid orange' : 'none',
    //         boxShadow: state.isFocused ? '1px solid orange' : 'none',
    //         '&:hover': { border: '1px solid white' },
    //     })
    // };
    return (

        <div className={"relative"}>
            <Select options={options}
                onChange={onChange}
                className={"border-0 px-3 py-1 mt-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-blueGray-300 w-full ease-linear transition-all duration-150 " + className}
                styles={{
                    control: (baseStyles: any, state: { isFocused: any; }) => ({
                        ...baseStyles,
                        boxShadow: 'none',
                        border: 0,
                    }),
                }}
                {...props}
            />
            {/* <Select2
                instanceId={name || id}
                className={"border-0 outline-none placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-orange-300 w-full ease-linear transition-all duration-150 "}
                autoFocus={false}
                placeholder="Select..."
                onChange={onChange}
                options={options}
                styles={customStyles}
                name={name}
                {...props}
            /> */}
            <label hidden={!touched} className="text-red-500 font-medium text-xs ">{error}</label>
        </div>



    )
}
export default Dropdown