import React from 'react'
import { BrowserRouter, Route, Routes, NavLink, useLocation, useNavigate } from "react-router-dom";

import Wraper from '../Layout/Wraper/Wraper';

import Dashboard from '../Pages/Superadmin/Dashboard/Dashboard';

import Admins from '../Pages/Superadmin/AdminsList/AdminsList';





const Admin = () => {

    const location = useLocation();
    const navigate = useNavigate()
    const role_id = localStorage.getItem("Role")


    return (
        <>
            {location.pathname !== "/super" && location.pathname !== "/super/*" ? <Wraper /> : null}
            <Routes>
                {/* <> */}
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/alladmins" element={<Admins />} />
            </Routes>


        </>
    )
}

export default Admin