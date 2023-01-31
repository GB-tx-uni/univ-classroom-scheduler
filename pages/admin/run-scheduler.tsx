import React, { useEffect, useState } from "react"
import AdminLayout from "../../layout/Admin";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MultipleSelectCheckmarks from "../../Components/Dropdowns/MultipleSelectionDropdown";
import Alert from '../../Components/Alert'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function ClassroomSchedule() {
    const [selectedProf, setSelectedProf] = React.useState<number[]>([]);

    const [runSchedulerDialog, setRunSchedulerDialog] = useState(false)

    const handleChange = (event: SelectChangeEvent<typeof selectedProf>) => {
        const {
            target: { value },
        } = event;
        setSelectedProf(value as any)
        console.log(value)
    };

    const [professorsAndCourses, setProfessorsAndCourses] = useState([
        {
            profName: "Patty O’Furniture",
            courses: [
                {
                    courseName: "Integrated Quantitative Sciences",
                    enabled: false
                },
                {
                    courseName: "Intro Discrete Math",
                    enabled: false
                },
                {
                    courseName: "Software Design & Data Structures ",
                    enabled: false
                },
                {
                    courseName: " Intro to Computer Organization",
                    enabled: false
                }

            ]
        },
        {
            profName: "Isabelle Ringing",
            courses: [
                {
                    courseName: "Integrated Quantitative Sciences",
                    enabled: false
                },
                {
                    courseName: "Intro Discrete Math",
                    enabled: false
                },
                {
                    courseName: "Software Design & Data Structures ",
                    enabled: false
                }

            ]
        },
        {
            profName: "Eileen Sideways",
            courses: [
                {
                    courseName: "Integrated Quantitative Sciences",
                    enabled: false
                },
                {
                    courseName: "Intro Discrete Math",
                    enabled: false
                },
                {
                    courseName: " Intro to Computer Organization",
                    enabled: false
                }

            ]
        },
        {
            profName: "B. Homesoon",
            courses: [
                {
                    courseName: "Integrated Quantitative Sciences",
                    enabled: false
                },
                {
                    courseName: "Intro Discrete Math",
                    enabled: false
                },
                {
                    courseName: "Software Design & Data Structures ",
                    enabled: false
                },
                {
                    courseName: " Intro to Computer Organization",
                    enabled: false
                }

            ]
        },
        {
            profName: "Pat N. Toffis",
            courses: [
                {
                    courseName: "Integrated Quantitative Sciences",
                    enabled: false
                },
                {
                    courseName: "Intro Discrete Math",
                    enabled: false
                },
                {
                    courseName: "Software Design & Data Structures ",
                    enabled: false
                },
                {
                    courseName: " Intro to Computer Organization",
                    enabled: false
                }

            ]
        },
        {
            profName: "Karen Onnabit",
            courses: [
                {
                    courseName: "Integrated Quantitative Sciences",
                    enabled: false
                },
                {
                    courseName: "Intro Discrete Math",
                    enabled: false
                }

            ]
        },
        {
            profName: "Patty O’Furniture",
            courses: [
                {
                    courseName: "Integrated Quantitative Sciences",
                    enabled: false
                },
                {
                    courseName: "Intro Discrete Math",
                    enabled: false
                },
                {
                    courseName: "Software Design & Data Structures ",
                    enabled: false
                },
                {
                    courseName: " Intro to Computer Organization",
                    enabled: false
                }

            ]
        },
        {
            profName: "PLois Di Nominator",
            courses: [
                {
                    courseName: "Integrated Quantitative Sciences",
                    enabled: false
                },
                {
                    courseName: "Intro Discrete Math",
                    enabled: false
                },
                {
                    courseName: "Software Design & Data Structures ",
                    enabled: false
                },
                {
                    courseName: " Intro to Computer Organization",
                    enabled: false
                }

            ]
        },
        {
            profName: "Ray O’Sun",
            courses: [
                {
                    courseName: "Integrated Quantitative Sciences",
                    enabled: false
                },
                {
                    courseName: "Intro Discrete Math",
                    enabled: false
                },
                {
                    courseName: "Software Design & Data Structures ",
                    enabled: false
                },
                {
                    courseName: " Intro to Computer Organization",
                    enabled: false
                }

            ]
        },
        {
            profName: "Joe V. Awl",
            courses: [
                {
                    courseName: "Integrated Quantitative Sciences",
                    enabled: false
                },
                {
                    courseName: "Intro Discrete Math",
                    enabled: false
                },
                {
                    courseName: "Software Design & Data Structures ",
                    enabled: false
                },
                {
                    courseName: " Intro to Computer Organization",
                    enabled: false
                }

            ]
        },
        {
            profName: "Olive Yew",
            courses: [
                {
                    courseName: "Integrated Quantitative Sciences",
                    enabled: false
                },
                {
                    courseName: "Intro Discrete Math",
                    enabled: false
                },
                {
                    courseName: "Software Design & Data Structures ",
                    enabled: false
                },
                {
                    courseName: " Intro to Computer Organization",
                    enabled: false
                }

            ]
        }

    ])
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Run Scheduler</h6>

                    </div>
                </div>
                <div className="flex-auto lg:px-10 pt-6">
                    <form className="">
                        <div className="flex flex-wrap py-4">
                            <div className="w-1/2 px-2">
                                <div className="relative w-full mb-3">
                                    <div>
                                        <FormControl sx={{ m: 1, width: 300 }}>
                                            <InputLabel id="demo-multiple-checkbox-label">Select Professors</InputLabel>
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={selectedProf}
                                                onChange={handleChange}
                                                input={<OutlinedInput label="Select Professors" />}
                                                renderValue={(selected) => selected.map(eachSelected => professorsAndCourses[eachSelected].profName).join(', ')}
                                                MenuProps={MenuProps}
                                            >
                                                {professorsAndCourses.map((pc, index) => (
                                                    <MenuItem key={index} value={index}>
                                                        <Checkbox checked={selectedProf.includes(index)} />
                                                        <ListItemText primary={pc.profName} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 px-2">
                                <div className="relative w-full mb-3">
                                    <div className="flex items-center justify-end py-6 border-t border-solid border-blueGray-200 rounded-b">

                                        <button
                                            className="text-blueGray-600 active:bg-emerald-600 font-bold text-sm px-6 py-3 underline hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => {
                                                Alert({
                                                    title: "",
                                                    type: "info",
                                                    message: "Are you sure you want to run the scheduler for all the courses?",
                                                    confirmButtonText: "Run"
                                                })
                                            }}

                                        >
                                            Run Scheduler for all courses
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>




                    </form>
                </div>

                <div className="grid grid-cols-3 y-10 pt-8 px-6">
                    {selectedProf?.map((eachperson, i) => {
                        return (

                            <div className="col-span-1 my-4" key={i}>
                                <h3>{professorsAndCourses[eachperson].profName}</h3>
                                {professorsAndCourses[eachperson].courses?.map((eachcourse, ci) => {
                                    return (
                                        <label className="block items-center cursor-pointer py-2 ml-2" key={ci}>
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                checked={eachcourse.enabled}
                                                onChange={(event) => {
                                                    eachcourse.enabled = !eachcourse.enabled
                                                    setProfessorsAndCourses([...professorsAndCourses])
                                                }}
                                                className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            />
                                            <span className="ml-2 text-sm text-blueGray-600">
                                                {eachcourse?.courseName}

                                            </span>
                                        </label>
                                    )
                                })}
                            </div>

                        )
                    })}
                    {/* <WeekDayAvailabilityTable /> */}
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">

                    <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                            Alert({
                                title: "",
                                type: "info",
                                message: "Are you sure you want to run the scheduler?",
                                confirmButtonText: "Run"
                            })
                        }}

                    >
                        Run Scheduler
                    </button>
                </div>
                {runSchedulerDialog && (
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
                                            {"Run Scheduler"}
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
                                    <p className="font-semibold text-md px-4 py-4 rounded-lg">Do you want to run the scheduler?</p>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="bg-blueGray-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                        // onClick={() => setShowModal(false)}
                                        >
                                            Run
                                        </button>
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setRunSchedulerDialog(false)}
                                        >
                                            Close
                                        </button>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                )}



            </div>
        </>
    )

}
ClassroomSchedule.layout = AdminLayout;

