import React from 'react'
import Router from "next/router"
const ClassroomCard = ({
    name = "",
    currentClass = "",
    className = "",
    ...props
}) => {
    return (
        <div className="bg-white p-10 rounded-lg shadow-md" {...props}>
            <h1 className="text-xl font-bold">{name}</h1>
            {/* <div className="mt-4 mb-10">
            <p className="text-gray-600">Course 75% completed</p>
            <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                <div className="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
            </div>
        </div> */}
            <h3 className="text-xs uppercase mt-4">Current lesson:</h3>
            <h2 className="tracking-wide">
                {currentClass}
                <br />
                {/* (Challenge) */}
            </h2>
            <button className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75"
                onClick={() => {
                    Router.push({
                        pathname: "/admin/classroom-schedule",
                        query: {
                            "class": name
                        }
                    })
                }}
            >Go to Classroom schedule</button>
        </div>
    )

}
export default ClassroomCard