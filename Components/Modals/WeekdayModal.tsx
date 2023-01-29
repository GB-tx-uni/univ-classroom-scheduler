import React, { MouseEventHandler, useState } from 'react'
import TimeSlotsButton from '../Button/TimeSlotsButton'

const WeekdayModal = ({ day, onClosed = () => { }, onSaved = () => { } }: {
    day: string,
    onClosed: MouseEventHandler,
    onSaved: MouseEventHandler
}) => {
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
    const [slots, setSlots] = useState([...defaultSlots])
    return (
        <>
            <div
                className="w-1/2 mx-auto fixed justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
            >
                <div className="relative w-full my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-2xl font-semibold">
                                {day}
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            // onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 grid grid-cols-4 gap-5">


                            {slots?.map((slot, i) => {
                                return (

                                    <TimeSlotsButton label={`${slot?.startTime}-${slot?.endTime}`} className={"col-span-1"} key={i}
                                        onClick={() => {
                                            let selectedSlots = [...slots]
                                            selectedSlots[i].available = !selectedSlots[i].available
                                            setSlots([...selectedSlots])
                                        }}
                                        selected={slot?.available}
                                    />


                                )
                            })}

                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={onClosed}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={onSaved}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
export default WeekdayModal