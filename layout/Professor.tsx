import React from "react";
import AdminNavbar from "../Components/Navbar/Admin"
import Sidebar from "../Components/Sidebar/Sidebar";

const Professor = ({ children }: { children: any }) => {
    return (
        <>
            <Sidebar />
            <div className="bg-blueGray-100">
                <AdminNavbar />
                <div className="px-4 md:px-10 mx-auto" style={{ marginLeft: '16rem', paddingTop: '100px' }}>
                    {children}

                </div>
            </div>
        </>
    );
}
export default Professor