import React, { useRef, useEffect, useState } from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  useLocation,
  useNavigate,  
} from "react-router-dom";
// import * as Config from "../Utils/Config";

import Wraper from "../Pages/Users/Wraper/Wraper";
import Dashboard from "../Pages/Users/Layout/Pages/dashbaord";
import Deposit from "../Pages/Users/Layout/Pages/deposit/Deposit";
import Withdraw from "../Pages/Users/Layout/Pages/withdraw/Withdraw";
import UserProfile from "../Pages/Users/pages/userprofile/UserProfile";
import PaymentHistory from "../Pages/Users/Layout/Pages/paymenthistory/PaymentHistory";


// import { useDispatch, useSelector } from "react-redux";
// import AddUsers from "../Pages/Admin/Users/AddUsers";
// import EditUsers from "../Pages/Admin/Users/EditUsers";
// import Users from "../Pages/Admin/Users/Users";

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const role_id = localStorage.getItem("Role");
  //   const dispatch = useDispatch();
  const roles = JSON.parse(localStorage.getItem("user_role"));
  //   const token = JSON.parse(localStorage.getItem("user_details")).token;

  const [admin_permission, setAdmin_permission] = useState([]);

  return (
    <>
      {location.pathname !== "/user" && location.pathname !== "/user/*" ? (
        <Wraper />
      ) : null}
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/deposit" element={<Deposit />} />
        <Route exact path="/withdraw" element={<Withdraw />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
        <Route exact path="/payment-history" element={<PaymentHistory />} />

     
        {/* <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/user/add" element={<AddUsers />} />
        <Route exact path="/user/edit/1" element={<EditUsers />} />
        <Route exact path="/users" element={<Users />} /> */}
      </Routes>
    </>
  );
};

export default Admin;
