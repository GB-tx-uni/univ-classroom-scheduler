import React from "react";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from "@material-tailwind/react";
import Router from "next/router"

const Example = ({ classData }) => {
    // const [popoverShow, setPopoverShow] = React.useState(false);
    // const btnRef = React.createRef();
    // const popoverRef = React.createRef();
    // const openTooltip = () => {
    //     createPopper(btnRef.current, popoverRef.current, {
    //         placement: "left"
    //     });
    //     setPopoverShow(true);
    // };
    // const closeTooltip = () => {
    //     setPopoverShow(false);
    // };
    return (
        <>
            <Popover>
                <PopoverHandler>
                    <Button className="bg-blueGray-600" color={"black"} variant="gradient">{classData?.name}</Button>
                </PopoverHandler>
                <PopoverContent>
                    <div>
                        <div
                            className="bg-blueGray-800 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
                        >
                            {classData?.name}
                        </div>
                        <div className=" px-3 py-1">
                            <h3 className="text-xs uppercase mt-2">Current lesson:</h3>
                            <h2 className="tracking-wide">
                                {classData?.currentClass}
                                <br />
                                {/* (Challenge) */}
                            </h2>
                        </div>
                        <button className="bg-orange-400 py-3 px-8 mt-2 mb-2 mx-3 rounded text-sm font-semibold hover:bg-opacity-75 text-black"
                            onClick={() => {
                                Router.push({
                                    pathname: "/admin/classroom-schedule",
                                    query: {
                                        "class": classData?.name
                                    }
                                })
                            }}
                        >Go to Classroom schedule</button>
                    </div>
                </PopoverContent>
            </Popover>
            {/* <div className="flex flex-wrap">
                <div className="w-full text-center">
                    <button
                        className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                        onMouseEnter={openTooltip}
                        onMouseLeave={closeTooltip}
                        ref={btnRef}
                    >
                        {classData?.name}
                    </button>
                    <div
                        className={
                            (popoverShow ? "" : "hidden ") +
                            "bg-blueGray-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
                        }
                        ref={popoverRef}
                    >
                        <div>
                            <div
                                className="bg-blueGray-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
                            >
                                {classData?.name}
                            </div>
                            <div className="text-white px-3 py-1">
                                <h3 className="text-xs uppercase mt-2">Current lesson:</h3>
                                <h2 className="tracking-wide">
                                    {classData?.currentClass}
                                    <br />
                                    {/* (Challenge) */}
            {/* </h2>
                            </div >
    <button className="bg-orange-400 py-3 px-8 mt-2 mb-2 mx-3 rounded text-sm font-semibold hover:bg-opacity-75"
        onClick={() => {
            Router.push({
                pathname: "/admin/classroom-schedule",
                query: {
                    "class": classData?.name
                }
            })
        }}
    >Go to Classroom schedule</button>
                        </div >
                    </div >
                </div >
            </div > * /} */}
        </>
    );
};

export default Example;