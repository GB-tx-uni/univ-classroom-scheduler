import React, { useEffect, useState } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);
import AdminLayout from "../../layout/Admin";

interface event {
    start: String,
    end: String,
    title: String
}
export default function ClassroomSchedule() {
    const [state, setState] = useState({
        events: [
            {
                start: moment().toDate(),
                end: moment()
                    .add(1, "hours")
                    .toDate(),
                title: "5004 GTA Workshop"
            },
            {
                start: moment().add(2, "hours").toDate(),
                end: moment()
                    .add(3, "hours")
                    .toDate(),
                title: "5024 Data Management Skills"
            },
            {
                start: moment().add(1, "day").toDate(),
                end: moment()
                    .add(1, "day")
                    .add(1, "hours")
                    .toDate(),
                title: "5004 GTA Workshop"
            },
            {
                start: moment().add(1, "day").add(2, "hours").toDate(),
                end: moment()
                    .add(1, "day")
                    .add(1, "hours")
                    .toDate(),
                title: "5024 Data Management Skills"
            },
            {
                start: moment().add(2, "day").toDate(),
                end: moment()
                    .add(2, "day")
                    .add(1, "hours")
                    .toDate(),
                title: "5004 GTA Workshop"
            },
            {
                start: moment().add(2, "day").add(2, "hours").toDate(),
                end: moment()
                    .add(2, "day")
                    .add(1, "hours")
                    .toDate(),
                title: "5024 Data Management Skills"
            },
            {
                start: moment().add(3, "day").toDate(),
                end: moment()
                    .add(3, "day")
                    .add(1, "hours")
                    .toDate(),
                title: "5004 GTA Workshop"
            },
            {
                start: moment().add(3, "day").add(2, "hours").toDate(),
                end: moment()
                    .add(3, "day")
                    .add(1, "hours")
                    .toDate(),
                title: "5024 Data Management Skills"
            },
        ]
    })
    const [classroomName, setClassroomName] = useState<null | string>(null)

    const [selectedEvent, setSelectedEvent] = useState<null | event>(null)
    useEffect(() => {
        const windowUrl = window.location.search;
        const params = new URLSearchParams(windowUrl);
        setClassroomName(params.get('class'))
    }, [])
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Classroom Schedule</h6>

                    </div>
                </div>



                <div className="mt-5">
                    <div className="App p-2">
                        <Calendar
                            localizer={localizer}
                            defaultDate={new Date()}
                            defaultView="week"
                            events={state.events}
                            style={{ height: "100vh" }}
                            onSelectEvent={(e) => {
                                console.log(e)
                                setSelectedEvent(e as any)
                            }}
                            dayLayoutAlgorithm={'no-overlap'}
                        />
                    </div>
                </div>
                {
                    selectedEvent && (
                        <>
                            <div
                                className="w-1/2 mx-auto fixed justify-center items-center flex overflow-x-hidden inset-0 z-50 outline-none focus:outline-none"
                            // onClick={() => setShowModal(false)}

                            >
                                <div className="relative w-full my-6 mx-auto max-w-2xl">
                                    {/*content*/}
                                    <div className="overflow-y-scroll border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className="text-2xl font-semibold">
                                                {classroomName}
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
                                        <div className="relative p-6">
                                            <label className="font-semibold text-md px-4 bg-blueGray-400 py-4 rounded-lg mx-auto">Current Subject:<span className="font-normal px-4 text-blueGray-600">{selectedEvent?.title}</span></label>
                                            <div className="py-8 px-8 flex">
                                                <div className="w-1/12 my-auto"><i className="fa-regular fa-calendar-days text-blueGray-500 text-2xl"></i></div>
                                                <div className="w-11/12"><label>{`${moment(selectedEvent?.start as any).format('dddd, MMMM Do YYYY')} ${moment(selectedEvent?.start as any).format("HH:mm")}-${moment(selectedEvent?.end as any).format("HH:mm")}`}</label>
                                                    <label className="block">(Mon,Tue,Wed,Thu,Fri)</label>
                                                    <label className="block">Repeats every weekday</label></div>


                                            </div>
                                            <div className="px-8 flex">
                                                <div className="w-1/12 my-auto"><i className="fa-solid fa-location-dot text-blueGray-500 text-2xl"></i></div>
                                                <div className="w-11/12"><label>Robeson Hall-North Wing</label>
                                                </div>

                                            </div>
                                            <div className="py-8 px-8 flex">
                                                <div className="w-1/12 my-auto"><i className="fa-solid fa-chalkboard-user text-blueGray-500 text-2xl"></i></div>
                                                <div className="w-11/12"><label>Carol C. Reyna (Professor)</label>
                                                    <label className="block">Biomedical Engineering and Mechanics</label></div>


                                            </div>

                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="bg-blueGray-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            // onClick={() => setShowModal(false)}
                                            >
                                                Reschedule
                                            </button>
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setSelectedEvent(null)}
                                            >
                                                Close
                                            </button>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    )
                }
            </div>
        </>
    )

}
ClassroomSchedule.layout = AdminLayout;

