import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Admin from "./Admin";
import SuperAdmin from "./Superadmin";
import Users from "./User";

import Login from "../Pages/Auth/Auth";
import SignUpUser from "../Pages/Auth/SignUpUser";
import Otp from "../Pages/Auth/OtpProcess";
import ForgotPassword from "../Pages/Auth/ForgotPassword";

// import NotFound from "../Layout/NotFound"

const Routing = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const roles = JSON.parse(localStorage.getItem("roles"));

  const accessToken  = localStorage.getItem("token")

 
  

  // useEffect(() => {
    // if (location.pathname === "/forgetpassword") {
    //   navigate("/forgetpassword");
    //   return;
    // }
    // if (location.pathname === "/") {
    //   navigate("/login");
    //   // return;
    // }
    // if (location.pathname === "/signup") {
    //   navigate("/signup");
    //   return;
    // }
    // if (
    //   accessToken  === null ||
    //   accessToken  === undefined ||
    //   accessToken  === "null"
    // ) {
    //   navigate("/login");
    //   return;
    // }
  //   if (roles !== null || accessToken  === null ||
  //      accessToken  === undefined ||
  //       accessToken  === "null") {

  //     if ((roles ==0) ) {
  //       navigate("/admin/dashboard");
       
  //     } else if ((roles ==2) ) {
  //       navigate("/user/dashboard");
        
  //     } else{ navigate("/")}    }
    
  // }, [location.pathname]);

  

 

  return (
    <>
      <Routes>
        {/* <Route path="/super/*" element={<SuperAdmin />} /> */}
        {/* <Route path="/admin/*" element={<Admin />} /> */}
        {/* <Route path="/*" element={<Users />} /> */}
        {/* <Route path="/super/*" element={(roles === "SUPERADMIN") ? <SuperAdmin /> : <Login />} /> */}
      <Route path="/admin/*" element={(roles === 0 || "0") ? <Admin /> : "/"} />
        <Route path="/*" element={(roles === 2 || "2") ? <Users /> : "/"} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="/verifyotp" element={<Otp />} />
        <Route path="/forgetpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default Routing;
