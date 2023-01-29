import { Accordion, Button } from "@material-tailwind/react";
import ClassBlockAccordian from "../Components/Accordian/ClassBlockAccordian";


export default function Example() {
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
    return (
        <>
            <Button>Button</Button>;
            <ClassBlockAccordian blockDetails={blockDetails} />
        </>
    )
}