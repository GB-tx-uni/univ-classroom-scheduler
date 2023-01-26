import React, { useState } from "react"
import Router from "next/router"

import ProfessorLayout from "../../layout/Professor";
import TextInput from "../../Components/InputBoxs/TextInput";
import FormLabel from "../../Components/Labels/FormLabel";
import WeekdayButton from "../../Components/Button/WeekdayButton";
import WeekdayModal from "../../Components/Modals/WeekdayModal";
import Dropdown from "../../Components/Dropdowns/SelectDropdown";
import WeekDayAvailabilityTable from "../../Components/Tabels/WeekdayAvailabilityTable";
import DatePicker from "../../Components/DatePicker";
export default function Professor() {
    const weekArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    const professors = [
        {
            value: "Patty O’Furniture",
            label: "Patty O’Furniture"
        },
        {
            value: "Olive Yew",
            label: "Olive Yew"
        },
        {
            value: "Aida Bugg",
            label: "Aida Bugg"
        },
        {
            value: "Lois Di Nominator",
            label: "Lois Di Nominator"
        },
        {
            value: "Minnie Van Ryder",
            label: "Minnie Van Ryder"
        },
        {
            value: "PLynn O’Leeum",
            label: "PLynn O’Leeum"
        },
        {
            value: "P. Ann O’Recital",
            label: "P. Ann O’Recital"
        },
        {
            value: "Ray O’Sun",
            label: "Ray O’Sun"
        },
        {
            value: "Isabelle Ringing",
            label: "Isabelle Ringing"
        },
        {
            value: "Eileen Sideways",
            label: "Eileen Sideways"
        },
        {
            value: "B. Homesoon",
            label: "B. Homesoon"
        },
        {
            value: "Pat N. Toffis",
            label: "Pat N. Toffis"
        },
        {
            value: "Karen Onnabit",
            label: "Karen Onnabit"
        },
        {
            value: "Joe V. Awl",
            label: "Joe V. Awl"
        },
        {
            value: "Glad I. Oli",
            label: "Glad I. Oli"
        },
        {
            value: "Roy L. Commishun",
            label: "Roy L. Commishun"
        },
        {
            value: "Patty O’Furniture",
            label: "Patty O’Furniture"
        },
        {
            value: "Olive Yew",
            label: "Olive Yew"
        },
        {
            value: "Aida Bugg",
            label: "Aida Bugg"
        },
        {
            value: "Lois Di Nominator",
            label: "Lois Di Nominator"
        },
        {
            value: "Minnie Van Ryder",
            label: "Minnie Van Ryder"
        },
        {
            value: "PLynn O’Leeum",
            label: "PLynn O’Leeum"
        },
        {
            value: "P. Ann O’Recital",
            label: "P. Ann O’Recital"
        },
        {
            value: "Ray O’Sun",
            label: "Ray O’Sun"
        },
        {
            value: "Isabelle Ringing",
            label: "Isabelle Ringing"
        },
        {
            value: "Eileen Sideways",
            label: "Eileen Sideways"
        },


    ]
    const departments = [
        {
            value: "Aerospace and Ocean Engineering",
            label: "Aerospace and Ocean Engineering"
        },
        {
            value: "Biological Systems Engineering",
            label: "Biological Systems Engineering"
        },
        {
            value: "Biomedical Engineering and Mechanics",
            label: "Biomedical Engineering and Mechanics"
        },
        {
            value: "Chemical Engineering",
            label: "Chemical Engineering"
        },
        {
            value: "Civil and Environmental Engineering",
            label: "Civil and Environmental Engineering"
        },
        {
            value: "Computer Science",
            label: "Computer Science"
        },
        {
            value: "Electrical and Computer Engineering",
            label: "Electrical and Computer Engineering"
        },
        {
            value: "Engineering Education",
            label: "Engineering Education"
        },
        {
            value: "Industrial and Systems Engineering",
            label: "Industrial and Systems Engineering"
        }


    ]
    const mingap = [
        {
            value: "15 min",
            label: "15 min"
        },
        {
            value: "30 min",
            label: "30 min"
        },
        {
            value: "45 min",
            label: "45 min"
        },
        {
            value: "1 hour",
            label: "1 hour"
        },
    ]
    const classroomDistance = [
        {
            value: "less than 1 mile",
            label: "less than 1 mile"
        },
        {
            value: "upto 1 mile",
            label: "upto 1 mile"
        },

        {
            value: "less than 2 mile",
            label: "less than 2 mile"
        },
        {
            value: "upto 2 mile",
            label: "upto 2 mile"
        },

    ]
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Course Allocation</h6>

                    </div>
                </div>


                <div className="flex-auto lg:px-10 pt-6">
                    <form className="">
                        <div className="flex flex-wrap py-4">
                            <div className="w-1/2 px-2">
                                <div className="relative w-full mb-3">
                                    <FormLabel
                                        title="Professor Name"
                                        required={true}
                                    />
                                    <Dropdown options={[
                                        ...professors
                                    ] as any}

                                    />
                                </div>
                            </div>
                            <div className="w-1/2 px-2">
                                <div className="relative w-full mb-3">
                                    <FormLabel
                                        title="Department"
                                        required={true}
                                    />
                                    <Dropdown options={[
                                        ...departments
                                    ] as any} />
                                </div>
                            </div>
                            <div className="w-1/3 px-2">
                                <div className="relative w-full mb-3">
                                    <FormLabel
                                        title="Course Identifier"
                                        required={true}
                                    />
                                    <TextInput />
                                </div>
                            </div>
                            <div className="w-2/3 px-2">
                                <div className="relative w-full mb-3">
                                    <FormLabel
                                        title="Course Name"
                                        required={true}
                                    />
                                    <TextInput />
                                </div>
                            </div>
                            <div className="w-1/3 px-2">
                                <div className="relative w-full mb-3">
                                    <FormLabel
                                        title="Min. No. of Students"
                                        required={true}
                                    />
                                    <TextInput />
                                </div>
                            </div>
                            <div className="w-1/3 px-2">
                                <div className="relative w-full mb-3">
                                    <FormLabel
                                        title="Max. No. of Students"
                                        required={true}
                                    />
                                    <TextInput />
                                </div>
                            </div>
                            <div className="w-1/3 px-2">
                                <div className="relative w-full mb-3">
                                    <FormLabel
                                        title="Total Contact Hours"
                                        required={true}
                                    />
                                    <TextInput />
                                </div>
                            </div>

                            <div className="w-1/3 px-2">
                                <div className="relative w-full mb-3">
                                    <FormLabel
                                        title="Grading Criteria"
                                        required={true}
                                    />
                                    <TextInput />
                                </div>
                            </div>
                            <div className="w-1/3 px-2">
                                <div className="relative w-full mb-3">
                                    <FormLabel
                                        title="Minimum Time Gap Between Two Consecutive Classes "
                                        required={true}
                                    />
                                    <Dropdown options={[
                                        ...mingap
                                    ] as any} />
                                </div>
                            </div>
                            {/* <div className="w-1/3 px-2">
                                <div className="relative w-full mb-3">
                                    <FormLabel
                                        title="Classroom distance "
                                        required={true}
                                    />

                                    <Dropdown options={[
                                        ...classroomDistance
                                    ] as any} />
                                </div>
                            </div> */}
                            <div className="w-1/3 px-2">
                                <div className="relative w-full mb-3">
                                    <FormLabel
                                        title="Terms "
                                        required={true}
                                    />

                                    <Dropdown options={[
                                        {
                                            value: "Summer",
                                            label: "Summer"
                                        },
                                        {
                                            value: "Fall",
                                            label: "Fall"
                                        },
                                        {
                                            value: "Winter",
                                            label: "Winter"
                                        },
                                        {
                                            value: "Spring",
                                            label: "Spring"
                                        }
                                    ] as any} />
                                </div>
                            </div>
                            <div className="w-1/3 px-2">
                                <div className="relative w-full mb-3">
                                    <FormLabel
                                        title="Start Date"
                                        required={true}
                                    />
                                    <DatePicker />
                                </div>
                            </div>
                            <div className="w-1/3 px-2">
                                <div className="relative w-full mb-3">
                                    <FormLabel
                                        title="End Date"
                                        required={true}
                                    />
                                    <DatePicker />
                                </div>
                            </div>
                        </div>




                    </form>
                </div>

                <div className="flex-auto py-10 pt-8 px-6">
                    <WeekDayAvailabilityTable />
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">

                    <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"

                    >
                        Allocate
                    </button>
                </div>

            </div>
        </>
    )

}
Professor.layout = ProfessorLayout;

