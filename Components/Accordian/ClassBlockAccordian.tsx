import { useState, Fragment } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import ClassroomTooltip from "../Tooltip/ClassroomTooltip";
function Icon({ id, open }: { id: any, open: any }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}
export default function Example({ blockDetails }: { blockDetails: any }) {
    const [open, setOpen] = useState(0);

    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    return (
        <Fragment>
            {blockDetails?.map((b: any, i: any) => {
                return (
                    <Accordion open={open === i} icon={<Icon id={i} open={open} />} animate={customAnimation} key={i}>
                        <AccordionHeader onClick={() => handleOpen(i)} className="bg-blueGray-100 px-6 rounded-sm">
                            {b.block}
                        </AccordionHeader>
                        <AccordionBody className={"px-6 py-4"}>
                            <div className="grid grid-cols-6 gap-4">
                                {b?.classrooms.map((c: any, ci: any) => {
                                    return (
                                        <div className="col-span-1" key={ci}>
                                            <ClassroomTooltip classData={c} />
                                        </div>
                                    )
                                })}
                            </div>
                        </AccordionBody>
                    </Accordion>
                )
            })}
        </Fragment>
    );
}