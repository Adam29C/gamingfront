import React, { useRef, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import * as Config from "../Utils/Config";

import Wraper from "../Pages/Users/Wraper/Wraper";
import Dashboard from "../Pages/Users/Layout/Pages/dashbaord";
import Deposit from "../Pages/Users/Layout/Pages/deposit/Deposit";
import Withdraw from "../Pages/Users/Layout/Pages/withdraw/Withdraw";
import UserProfile from "../Pages/Users/Layout/Pages/userprofile/UserProfile";

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const role_id = localStorage.getItem("Role");
  const roles = JSON.parse(localStorage.getItem("user_role"));
  const token = localStorage.getItem("token");

  const [admin_permission, setAdmin_permission] = useState([]);

  return (
    <>
      {token != null &&
      token != "null" &&
      token != undefined &&
      location.pathname !== "/user" &&
      location.pathname !== "/user/*" ? (
        <Wraper />
      ) : null}
      <Routes>

        <Route exact path="/deposit" element={<Deposit />} />
        <Route exact path="/withdraw" element={<Withdraw />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default Admin;
