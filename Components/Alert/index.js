import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';


const Alert = ({ title, message, confirmButtonText, type, callback = () => { } }) => {
    const MySwal = withReactContent(Swal)
    console.log("message", message)
    MySwal.fire(
        {
            icon: type,
            title: <p>{title}</p>,
            text: message,
            // confirmButtonColor: '#FF4D30',
            confirmButtonText: confirmButtonText
        }
        // <p>{title}</p>, <p className='mb-8 '>{message}</p>, type
        //     {
        //     title: <p>Success</p>,
        //     // confirmButtonColor:'#FF4D30',

        //     onOpen: () => {
        //         MySwal.clickConfirm()
        //             MySwal.clickCancel()
        //     }
        // }

    )?.then(() => {
        callback()
    });
    // .then(() => {
    //     return MySwal.fire(<p>{title}</p>, <p className='mb-8 '>{message}</p>, type)
    // })?

}

export default Alert;