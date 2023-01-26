import React, { useEffect, useState } from "react"

import AdminLayout from "../../layout/Admin";
import ClassroomCard from "../../Components/Cards/ClassroomCard";
import ClassroomTabs from "../../Components/Tabs/ClassroomTabs";

import { Auth } from "aws-amplify";
import NetworkService from "../../service/NetworkService";
export default function Classrooms() {
    const classroomsData = [
        {
            name: "Class A-101",
            currentClass: "5004 GTA Workshop"
        },
        {
            name: "Class A-102",
            currentClass: "5024 Data Management Skills"
        }, {
            name: "Class A-103",
            currentClass: "5004 Academic Integrity and Plagiarism"
        }, {
            name: "Class A-104",
            currentClass: "5114 Contemporary Pedagogy"
        }, {
            name: "Class A-201",
            currentClass: "5089 Topics in Interdisciplinary Research"
        }, {
            name: "Class A-202",
            currentClass: "9004 Communicating Science"
        }, {
            name: "Class A-203",
            currentClass: "5214 Diversity and Inclusion for a Global Society"
        }, {
            name: "Class A-204",
            currentClass: "5224G Advanced Global Aspects of Intellectual Property Law"
        },

    ]
    const signIn = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser()
            console.log("user", user)
            // if (!user) {
            //     const res = await Auth.signIn("ektakesharwani111@gmail.com", "Test@123")
            //     console.log(res)

            // }
            test()

        }
        catch (error) {
            const res = await Auth.signIn("ektakesharwani111@gmail.com", "Test@123")
            console.log(res)
            test()
            console.log("Error", error)

        }
    }
    const test = async () => {
        const body = {
            booking_type: "active"
        }
        try {
            await new NetworkService().makeRequest("get_list_of_all_respondent", body, (data: any, err = null) => {

                if (!err) {
                    console.log(data)
                }
                else {
                    console.log("Error")
                }
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        signIn()

    }, [])
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Classrooms</h6>

                    </div>
                </div>
                <div className="mt-6">
                    <ClassroomTabs />
                </div>

            </div>
        </>
    )

}
Classrooms.layout = AdminLayout;

