import React, { useState } from "react";
import ClassBlockAccordian from "../Accordian/ClassBlockAccordian";
import ClassroomTooltip from "../Tooltip/ClassroomTooltip";

const Tabs = () => {
    const [openTab, setOpenTab] = useState(1);
    const blockDetails = [
        {
            block: "Block-A",
            classrooms: [
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
        },
        {
            block: "Block-B",
            classrooms: [
                {
                    name: "Class B-101",
                    currentClass: "5004 GTA Workshop"
                },
                {
                    name: "Class B-102",
                    currentClass: "5024 Data Management Skills"
                }, {
                    name: "Class B-103",
                    currentClass: "5004 Academic Integrity and Plagiarism"
                }, {
                    name: "Class B-104",
                    currentClass: "5114 Contemporary Pedagogy"
                }, {
                    name: "Class B-201",
                    currentClass: "5089 Topics in Interdisciplinary Research"
                }, {
                    name: "Class B-202",
                    currentClass: "9004 Communicating Science"
                }, {
                    name: "Class B-203",
                    currentClass: "5214 Diversity and Inclusion for a Global Society"
                }, {
                    name: "Class B-204",
                    currentClass: "5224G Advanced Global Aspects of Intellectual Property Law"
                },

            ]
        },
        {
            block: "Block-C",
            classrooms: [
                {
                    name: "Class C-101",
                    currentClass: "5004 GTA Workshop"
                },
                {
                    name: "Class C-102",
                    currentClass: "5024 Data Management Skills"
                }, {
                    name: "Class C-103",
                    currentClass: "5004 Academic Integrity and Plagiarism"
                }, {
                    name: "Class C-104",
                    currentClass: "5114 Contemporary Pedagogy"
                }, {
                    name: "Class C-201",
                    currentClass: "5089 Topics in Interdisciplinary Research"
                }, {
                    name: "Class C-202",
                    currentClass: "9004 Communicating Science"
                }, {
                    name: "Class C-203",
                    currentClass: "5214 Diversity and Inclusion for a Global Society"
                }, {
                    name: "Class C-204",
                    currentClass: "5224G Advanced Global Aspects of Intellectual Property Law"
                },

            ]
        },
        {
            block: "Block-C",
            classrooms: [
                {
                    name: "Class C-101",
                    currentClass: "5004 GTA Workshop"
                },
                {
                    name: "Class C-102",
                    currentClass: "5024 Data Management Skills"
                }, {
                    name: "Class C-103",
                    currentClass: "5004 Academic Integrity and Plagiarism"
                }, {
                    name: "Class C-104",
                    currentClass: "5114 Contemporary Pedagogy"
                }, {
                    name: "Class C-201",
                    currentClass: "5089 Topics in Interdisciplinary Research"
                }, {
                    name: "Class C-202",
                    currentClass: "9004 Communicating Science"
                }, {
                    name: "Class C-203",
                    currentClass: "5214 Diversity and Inclusion for a Global Society"
                }, {
                    name: "Class C-204",
                    currentClass: "5224G Advanced Global Aspects of Intellectual Property Law"
                },

            ]
        },
        {
            block: "Block-D",
            classrooms: [
                {
                    name: "Class D-101",
                    currentClass: "5004 GTA Workshop"
                },
                {
                    name: "Class D-102",
                    currentClass: "5024 Data Management Skills"
                }, {
                    name: "Class D-103",
                    currentClass: "5004 Academic Integrity and Plagiarism"
                }, {
                    name: "Class D-104",
                    currentClass: "5114 Contemporary Pedagogy"
                }, {
                    name: "Class D-201",
                    currentClass: "5089 Topics in Interdisciplinary Research"
                }, {
                    name: "Class D-202",
                    currentClass: "9004 Communicating Science"
                }, {
                    name: "Class D-203",
                    currentClass: "5214 Diversity and Inclusion for a Global Society"
                }, {
                    name: "Class D-204",
                    currentClass: "5224G Advanced Global Aspects of Intellectual Property Law"
                },

            ]
        },
        {
            block: "Block-E",
            classrooms: [
                {
                    name: "Class E-101",
                    currentClass: "5004 GTA Workshop"
                },
                {
                    name: "Class E-102",
                    currentClass: "5024 Data Management Skills"
                }, {
                    name: "Class E-103",
                    currentClass: "5004 Academic Integrity and Plagiarism"
                }, {
                    name: "Class E-104",
                    currentClass: "5114 Contemporary Pedagogy"
                }, {
                    name: "Class E-201",
                    currentClass: "5089 Topics in Interdisciplinary Research"
                }, {
                    name: "Class E-202",
                    currentClass: "9004 Communicating Science"
                }, {
                    name: "Class E-203",
                    currentClass: "5214 Diversity and Inclusion for a Global Society"
                }, {
                    name: "Class E-204",
                    currentClass: "5224G Advanced Global Aspects of Intellectual Property Law"
                },

            ]
        },

    ]
    const classDetails = [
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
        {
            name: "Class B-101",
            currentClass: "5004 GTA Workshop"
        },
        {
            name: "Class B-102",
            currentClass: "5024 Data Management Skills"
        }, {
            name: "Class B-103",
            currentClass: "5004 Academic Integrity and Plagiarism"
        }, {
            name: "Class B-104",
            currentClass: "5114 Contemporary Pedagogy"
        }, {
            name: "Class B-201",
            currentClass: "5089 Topics in Interdisciplinary Research"
        }, {
            name: "Class B-202",
            currentClass: "9004 Communicating Science"
        }, {
            name: "Class B-203",
            currentClass: "5214 Diversity and Inclusion for a Global Society"
        }, {
            name: "Class B-204",
            currentClass: "5224G Advanced Global Aspects of Intellectual Property Law"
        },
        {
            name: "Class C-101",
            currentClass: "5004 GTA Workshop"
        },
        {
            name: "Class C-102",
            currentClass: "5024 Data Management Skills"
        }, {
            name: "Class C-103",
            currentClass: "5004 Academic Integrity and Plagiarism"
        }, {
            name: "Class C-104",
            currentClass: "5114 Contemporary Pedagogy"
        }, {
            name: "Class C-201",
            currentClass: "5089 Topics in Interdisciplinary Research"
        }, {
            name: "Class C-202",
            currentClass: "9004 Communicating Science"
        }, {
            name: "Class C-203",
            currentClass: "5214 Diversity and Inclusion for a Global Society"
        }, {
            name: "Class C-204",
            currentClass: "5224G Advanced Global Aspects of Intellectual Property Law"
        },
        {
            name: "Class D-101",
            currentClass: "5004 GTA Workshop"
        },
        {
            name: "Class D-102",
            currentClass: "5024 Data Management Skills"
        }, {
            name: "Class D-103",
            currentClass: "5004 Academic Integrity and Plagiarism"
        }, {
            name: "Class D-104",
            currentClass: "5114 Contemporary Pedagogy"
        }, {
            name: "Class D-201",
            currentClass: "5089 Topics in Interdisciplinary Research"
        }, {
            name: "Class D-202",
            currentClass: "9004 Communicating Science"
        }, {
            name: "Class D-203",
            currentClass: "5214 Diversity and Inclusion for a Global Society"
        }, {
            name: "Class D-204",
            currentClass: "5224G Advanced Global Aspects of Intellectual Property Law"
        },
        {
            name: "Class E-101",
            currentClass: "5004 GTA Workshop"
        },
        {
            name: "Class E-102",
            currentClass: "5024 Data Management Skills"
        }, {
            name: "Class E-103",
            currentClass: "5004 Academic Integrity and Plagiarism"
        }, {
            name: "Class E-104",
            currentClass: "5114 Contemporary Pedagogy"
        }, {
            name: "Class E-201",
            currentClass: "5089 Topics in Interdisciplinary Research"
        }, {
            name: "Class E-202",
            currentClass: "9004 Communicating Science"
        }, {
            name: "Class E-203",
            currentClass: "5214 Diversity and Inclusion for a Global Society"
        }, {
            name: "Class E-204",
            currentClass: "5224G Advanced Global Aspects of Intellectual Property Law"
        }

    ]

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block " +
                                    (openTab === 1
                                        ? "text-white bg-blueGray-600"
                                        : "text-blueGray-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                By Block
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-blueGray-600"
                                        : "text-blueGray-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                All Classrooms

                            </a>
                        </li>

                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <ClassBlockAccordian blockDetails={blockDetails} />
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">

                                    <div className="grid grid-cols-6 gap-4">
                                        {classDetails.map((c, i) => {
                                            return (
                                                <div className="col-span-1" key={i}>
                                                    <ClassroomTooltip classData={c} />
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tabs;