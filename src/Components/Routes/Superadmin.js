import React, { useRef, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import * as Config from "../Utils/Config";

import Wraper from "../Layout/Wraper/Wraper";
import Dashboard from "../Pages/Superadmin/Dashboard/Dashboard";
// import { useDispatch, useSelector } from "react-redux";
import AddUsers from "../Pages/Superadmin/Users/AddUsers";
import EditUsers from "../Pages/Superadmin/Users/EditUsers";
import Users from "../Pages/Superadmin/Users/Users";
import Profile from "../Pages/Superadmin/profile/Profile";
import GameRuleList from "../Pages/Admin/gamerule/GameRuleList";
import GameRuleAdd from "../Pages/Admin/gamerule/GameRuleAdd";
import GameList from "../Pages/Admin/addgame/GameList";
import GameAdd from "../Pages/Admin/addgame/GameAdd";

// Bank Details
import BankDetailsList from "../Pages/Admin/BankDetails/BankDetailsList";
import BankDetailsAdd from "../Pages/Admin/BankDetails/BankDetailsAdd";

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const role_id = localStorage.getItem("Role");
  //   const dispatch = useDispatch();
  const roles = JSON.parse(localStorage.getItem("user_role"));
  const token = localStorage.getItem("token");

  const [admin_permission, setAdmin_permission] = useState([]);

  return (
    <>
      {token != null &&
      token != "null" &&
      token != undefined &&
      location.pathname !== "/super" &&
      location.pathname !== "/super/*" ? (
        <Wraper />
      ) : null}
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/user/add" element={<AddUsers />} />
        <Route exact path="/user/edit/1" element={<EditUsers />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/rules" element={<GameRuleList />} />
        <Route exact path="/rules/add" element={<GameRuleAdd />} />
        <Route exact path="/game" element={<GameList />} />
        <Route exact path="/game/add" element={<GameAdd />} />
        <Route exact path="/bankdetails" element={<BankDetailsList />} />
        <Route exact path="/bankdetail/add" element={<BankDetailsAdd />} />
      </Routes>
    </>
  );
};

export default Admin;
