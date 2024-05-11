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
  console.log(roles,"accesstoken")

  // const roles = JSON.parse(localStorage.getItem("user_role"));
  // const gotodashboard = JSON.parse(localStorage.getItem("gotodashboard"));
  // const user_role_goTo = JSON.parse(localStorage.getItem("user_role_goTo"));
  

  useEffect(() => {
    // if (location.pathname === "/forget") {
    //   console.log("test1");
    //   navigate("/forget");
    //   return;
    // }
    // if (location.pathname === "/") {
    //   navigate("/login");
    // }
    // if (location.pathname === "/newsignup") {
    //   navigate("/newsignup");
    //   return;
    // }
    // if (
    //   accessToken === null ||
    //   accessToken === undefined ||
    //   accessToken === "null"
    // ) {
    //   navigate("/login");
    //   return;
    // }
    // if (roles !== null) {
    //   if (roles === "ADMIN" && location.pathname === "/login") {
    //     navigate("/admin/dashboard");
    //     window.location.reload();
    //   } else if (roles === "USER" && location.pathname === "/login") {
    //     navigate("/client/dashboard");
    //     window.location.reload();
    //   } else if (roles === "SUBADMIN" && location.pathname === "/login") {
    //     navigate("/subadmin/clients");
    //     window.location.reload();
    //   } else if (roles === "SUPERADMIN" && location.pathname === "/login") {
    //     navigate("/super/dashboard");
    //     window.location.reload();
    //   }
    // }
  }, [location.pathname]);

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
