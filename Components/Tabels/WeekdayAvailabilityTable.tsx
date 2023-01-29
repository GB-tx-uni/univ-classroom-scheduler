import React, { useState } from "react";
import PropTypes from "prop-types";
import TimeSlotsButton from "../Button/TimeSlotsButton";

// components


export default function WeekDayAvailabilityTable({ color }: { color: string }) {
    const weekArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const defaultSlots = [
        {
            "startTime": "10:00",
            "endTime": "10:30",
            "available": false
        }, {
            "startTime": "10:30",
            "endTime": "11:00",
            "available": false
        },
        {
            "startTime": "11:00",
            "endTime": "11:30",
            "available": false
        },
        {
            "startTime": "11:30",
            "endTime": "12:00",
            "available": false
        },
        {
            "startTime": "12:00",
            "endTime": "12:30",
            "available": false
        },
        {
            "startTime": "12:30",
            "endTime": "13:00",
            "available": false
        },
        {
            "startTime": "13:00",
            "endTime": "13:30",
            "available": false
        },
        {
            "startTime": "13:30",
            "endTime": "14:00",
            "available": false
        },
        {
            "startTime": "14:00",
            "endTime": "14:30",
            "available": false
        },
        {
            "startTime": "14:30",
            "endTime": "15:00",
            "available": false
        },
        {
            "startTime": "15:00",
            "endTime": "15:30",
            "available": false
        },
        {
            "startTime": "15:30",
            "endTime": "16:00",
            "available": false
        },
        {
            "startTime": "16:00",
            "endTime": "16:30",
            "available": false
        },
        {
            "startTime": "16:30",
            "endTime": "17:00",
            "available": false
        },
        {
            "startTime": "17:00",
            "endTime": "17:30",
            "available": false
        },
        {
            "startTime": "17:30",
            "endTime": "18:00",
            "available": false
        }
    ]
    const [availability, setAvailability] = useState([
        {
            day: "Monday",
            slots: [
                {
                    "startTime": "10:00",
                    "endTime": "10:30",
                    "available": false
                }, {
                    "startTime": "10:30",
                    "endTime": "11:00",
                    "available": false
                },
                {
                    "startTime": "11:00",
                    "endTime": "11:30",
                    "available": false
                },
                {
                    "startTime": "11:30",
                    "endTime": "12:00",
                    "available": false
                },
                {
                    "startTime": "12:00",
                    "endTime": "12:30",
                    "available": false
                },
                {
                    "startTime": "12:30",
                    "endTime": "13:00",
                    "available": false
                },
                {
                    "startTime": "13:00",
                    "endTime": "13:30",
                    "available": false
                },
                {
                    "startTime": "13:30",
                    "endTime": "14:00",
                    "available": false
                },
                {
                    "startTime": "14:00",
                    "endTime": "14:30",
                    "available": false
                },
                {
                    "startTime": "14:30",
                    "endTime": "15:00",
                    "available": false
                },
                {
                    "startTime": "15:00",
                    "endTime": "15:30",
                    "available": false
                },
                {
                    "startTime": "15:30",
                    "endTime": "16:00",
                    "available": false
                },
                {
                    "startTime": "16:00",
                    "endTime": "16:30",
                    "available": false
                },
                {
                    "startTime": "16:30",
                    "endTime": "17:00",
                    "available": false
                },
                {
                    "startTime": "17:00",
                    "endTime": "17:30",
                    "available": false
                },
                {
                    "startTime": "17:30",
                    "endTime": "18:00",
                    "available": false
                }
            ]
        },
        {
            day: "Tuesday",
            slots: [
                {
                    "startTime": "10:00",
                    "endTime": "10:30",
                    "available": false
                }, {
                    "startTime": "10:30",
                    "endTime": "11:00",
                    "available": false
                },
                {
                    "startTime": "11:00",
                    "endTime": "11:30",
                    "available": false
                },
                {
                    "startTime": "11:30",
                    "endTime": "12:00",
                    "available": false
                },
                {
                    "startTime": "12:00",
                    "endTime": "12:30",
                    "available": false
                },
                {
                    "startTime": "12:30",
                    "endTime": "13:00",
                    "available": false
                },
                {
                    "startTime": "13:00",
                    "endTime": "13:30",
                    "available": false
                },
                {
                    "startTime": "13:30",
                    "endTime": "14:00",
                    "available": false
                },
                {
                    "startTime": "14:00",
                    "endTime": "14:30",
                    "available": false
                },
                {
                    "startTime": "14:30",
                    "endTime": "15:00",
                    "available": false
                },
                {
                    "startTime": "15:00",
                    "endTime": "15:30",
                    "available": false
                },
                {
                    "startTime": "15:30",
                    "endTime": "16:00",
                    "available": false
                },
                {
                    "startTime": "16:00",
                    "endTime": "16:30",
                    "available": false
                },
                {
                    "startTime": "16:30",
                    "endTime": "17:00",
                    "available": false
                },
                {
                    "startTime": "17:00",
                    "endTime": "17:30",
                    "available": false
                },
                {
                    "startTime": "17:30",
                    "endTime": "18:00",
                    "available": false
                }
            ]
        },
        {
            day: "Wednesday",
            slots: [
                {
                    "startTime": "10:00",
                    "endTime": "10:30",
                    "available": false
                }, {
                    "startTime": "10:30",
                    "endTime": "11:00",
                    "available": false
                },
                {
                    "startTime": "11:00",
                    "endTime": "11:30",
                    "available": false
                },
                {
                    "startTime": "11:30",
                    "endTime": "12:00",
                    "available": false
                },
                {
                    "startTime": "12:00",
                    "endTime": "12:30",
                    "available": false
                },
                {
                    "startTime": "12:30",
                    "endTime": "13:00",
                    "available": false
                },
                {
                    "startTime": "13:00",
                    "endTime": "13:30",
                    "available": false
                },
                {
                    "startTime": "13:30",
                    "endTime": "14:00",
                    "available": false
                },
                {
                    "startTime": "14:00",
                    "endTime": "14:30",
                    "available": false
                },
                {
                    "startTime": "14:30",
                    "endTime": "15:00",
                    "available": false
                },
                {
                    "startTime": "15:00",
                    "endTime": "15:30",
                    "available": false
                },
                {
                    "startTime": "15:30",
                    "endTime": "16:00",
                    "available": false
                },
                {
                    "startTime": "16:00",
                    "endTime": "16:30",
                    "available": false
                },
                {
                    "startTime": "16:30",
                    "endTime": "17:00",
                    "available": false
                },
                {
                    "startTime": "17:00",
                    "endTime": "17:30",
                    "available": false
                },
                {
                    "startTime": "17:30",
                    "endTime": "18:00",
                    "available": false
                }
            ]
        },
        {
            day: "Thursday",
            slots: [
                {
                    "startTime": "10:00",
                    "endTime": "10:30",
                    "available": false
                }, {
                    "startTime": "10:30",
                    "endTime": "11:00",
                    "available": false
                },
                {
                    "startTime": "11:00",
                    "endTime": "11:30",
                    "available": false
                },
                {
                    "startTime": "11:30",
                    "endTime": "12:00",
                    "available": false
                },
                {
                    "startTime": "12:00",
                    "endTime": "12:30",
                    "available": false
                },
                {
                    "startTime": "12:30",
                    "endTime": "13:00",
                    "available": false
                },
                {
                    "startTime": "13:00",
                    "endTime": "13:30",
                    "available": false
                },
                {
                    "startTime": "13:30",
                    "endTime": "14:00",
                    "available": false
                },
                {
                    "startTime": "14:00",
                    "endTime": "14:30",
                    "available": false
                },
                {
                    "startTime": "14:30",
                    "endTime": "15:00",
                    "available": false
                },
                {
                    "startTime": "15:00",
                    "endTime": "15:30",
                    "available": false
                },
                {
                    "startTime": "15:30",
                    "endTime": "16:00",
                    "available": false
                },
                {
                    "startTime": "16:00",
                    "endTime": "16:30",
                    "available": false
                },
                {
                    "startTime": "16:30",
                    "endTime": "17:00",
                    "available": false
                },
                {
                    "startTime": "17:00",
                    "endTime": "17:30",
                    "available": false
                },
                {
                    "startTime": "17:30",
                    "endTime": "18:00",
                    "available": false
                }
            ]
        },
        {
            day: "Friday",
            slots: [
                {
                    "startTime": "10:00",
                    "endTime": "10:30",
                    "available": false
                }, {
                    "startTime": "10:30",
                    "endTime": "11:00",
                    "available": false
                },
                {
                    "startTime": "11:00",
                    "endTime": "11:30",
                    "available": false
                },
                {
                    "startTime": "11:30",
                    "endTime": "12:00",
                    "available": false
                },
                {
                    "startTime": "12:00",
                    "endTime": "12:30",
                    "available": false
                },
                {
                    "startTime": "12:30",
                    "endTime": "13:00",
                    "available": false
                },
                {
                    "startTime": "13:00",
                    "endTime": "13:30",
                    "available": false
                },
                {
                    "startTime": "13:30",
                    "endTime": "14:00",
                    "available": false
                },
                {
                    "startTime": "14:00",
                    "endTime": "14:30",
                    "available": false
                },
                {
                    "startTime": "14:30",
                    "endTime": "15:00",
                    "available": false
                },
                {
                    "startTime": "15:00",
                    "endTime": "15:30",
                    "available": false
                },
                {
                    "startTime": "15:30",
                    "endTime": "16:00",
                    "available": false
                },
                {
                    "startTime": "16:00",
                    "endTime": "16:30",
                    "available": false
                },
                {
                    "startTime": "16:30",
                    "endTime": "17:00",
                    "available": false
                },
                {
                    "startTime": "17:00",
                    "endTime": "17:30",
                    "available": false
                },
                {
                    "startTime": "17:30",
                    "endTime": "18:00",
                    "available": false
                }
            ]
        },
        {
            day: "Saturday",
            slots: [
                {
                    "startTime": "10:00",
                    "endTime": "10:30",
                    "available": false
                }, {
                    "startTime": "10:30",
                    "endTime": "11:00",
                    "available": false
                },
                {
                    "startTime": "11:00",
                    "endTime": "11:30",
                    "available": false
                },
                {
                    "startTime": "11:30",
                    "endTime": "12:00",
                    "available": false
                },
                {
                    "startTime": "12:00",
                    "endTime": "12:30",
                    "available": false
                },
                {
                    "startTime": "12:30",
                    "endTime": "13:00",
                    "available": false
                },
                {
                    "startTime": "13:00",
                    "endTime": "13:30",
                    "available": false
                },
                {
                    "startTime": "13:30",
                    "endTime": "14:00",
                    "available": false
                },
                {
                    "startTime": "14:00",
                    "endTime": "14:30",
                    "available": false
                },
                {
                    "startTime": "14:30",
                    "endTime": "15:00",
                    "available": false
                },
                {
                    "startTime": "15:00",
                    "endTime": "15:30",
                    "available": false
                },
                {
                    "startTime": "15:30",
                    "endTime": "16:00",
                    "available": false
                },
                {
                    "startTime": "16:00",
                    "endTime": "16:30",
                    "available": false
                },
                {
                    "startTime": "16:30",
                    "endTime": "17:00",
                    "available": false
                },
                {
                    "startTime": "17:00",
                    "endTime": "17:30",
                    "available": false
                },
                {
                    "startTime": "17:30",
                    "endTime": "18:00",
                    "available": false
                }
            ]
        },
        {
            day: "Sunday",
            slots: [
                {
                    "startTime": "10:00",
                    "endTime": "10:30",
                    "available": false
                }, {
                    "startTime": "10:30",
                    "endTime": "11:00",
                    "available": false
                },
                {
                    "startTime": "11:00",
                    "endTime": "11:30",
                    "available": false
                },
                {
                    "startTime": "11:30",
                    "endTime": "12:00",
                    "available": false
                },
                {
                    "startTime": "12:00",
                    "endTime": "12:30",
                    "available": false
                },
                {
                    "startTime": "12:30",
                    "endTime": "13:00",
                    "available": false
                },
                {
                    "startTime": "13:00",
                    "endTime": "13:30",
                    "available": false
                },
                {
                    "startTime": "13:30",
                    "endTime": "14:00",
                    "available": false
                },
                {
                    "startTime": "14:00",
                    "endTime": "14:30",
                    "available": false
                },
                {
                    "startTime": "14:30",
                    "endTime": "15:00",
                    "available": false
                },
                {
                    "startTime": "15:00",
                    "endTime": "15:30",
                    "available": false
                },
                {
                    "startTime": "15:30",
                    "endTime": "16:00",
                    "available": false
                },
                {
                    "startTime": "16:00",
                    "endTime": "16:30",
                    "available": false
                },
                {
                    "startTime": "16:30",
                    "endTime": "17:00",
                    "available": false
                },
                {
                    "startTime": "17:00",
                    "endTime": "17:30",
                    "available": false
                },
                {
                    "startTime": "17:30",
                    "endTime": "18:00",
                    "available": false
                }
            ]
        }

    ])
    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color == "light" ? "bg-white" : "bg-blueGray-700 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-6 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                Manage Availability              </h3>

                        </div>

                    </div>
                </div>
                <div className="w-full overflow-x-auto px-3" >
                    <div className="grid grid-cols-7 px-1 pb-6">
                        {availability?.map((eachDay, eachdayIndex) => {
                            return (

                                <div className="grid grid-cols-1" key={eachdayIndex}>
                                    <label className="mb-4 col-span-1 px-8 align-middle border border-solid py-4 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">{eachDay?.day}</label>
                                    {eachDay?.slots?.map((slot, eachTimeIndex) => {
                                        return (
                                            <div className="col-span-1 px-2" key={eachTimeIndex}>

                                                <TimeSlotsButton
                                                    label={`${slot?.startTime}-${slot?.endTime}`}
                                                    selected={slot?.available}

                                                    onClick={() => {
                                                        availability[eachdayIndex].slots[eachTimeIndex].available = !availability[eachdayIndex].slots[eachTimeIndex].available
                                                        setAvailability([...availability])

                                                    }}
                                                /></div>
                                        )
                                    })}
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>
        </>
    );
}

WeekDayAvailabilityTable.defaultProps = {
    color: "light",
};

WeekDayAvailabilityTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
