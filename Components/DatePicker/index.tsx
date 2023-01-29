import * as React from 'react';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function MaterialUIPickers({ touched = undefined,
    error = null,
    ...props }) {

    const [value, setValue] = React.useState<Date | null>(
        new Date(),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };


    return (
        <>
            <div className="border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-orange-300 w-full ease-linear transition-all duration-150">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker

                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField size="small" name={props?.name} {...params} />}
                        InputProps={{
                            // disableUnderline: true,
                            style: { paddingTop: '2px', paddingBottom: '2px' }
                        }}
                        {...props}
                    />
                </LocalizationProvider>

            </div>
            <label hidden={!touched} className="text-red-500 font-medium text-xs ">{error}</label>
        </>

    );
}


