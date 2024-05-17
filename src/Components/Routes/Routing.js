import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import Admin from "./Admin";
import SuperAdmin from "./Superadmin";
import Admin from "./Admin";
import Users from "./User";
import Wraper from "../Pages/Users/Wraper/Wraper";

import Login from "../Pages/Auth/Auth";
import SignUpUser from "../Pages/Auth/SignUpUser";
import Otp from "../Pages/Auth/OtpProcess";
import ForgotPassword from "../Pages/Auth/ForgotPassword";

import ProtectedRoutes from "./ProtectedRoute";
import PublicRoutes from "./PublicRoutes";


// // import NotFound from "../Layout/NotFound"

// const Routing = () => {
//   const location = useLocation();

//   const navigate = useNavigate();
//   const roles = JSON.parse(localStorage.getItem("roles"));
//   const accessToken = localStorage.getItem("token");

//   return (
//     <>
//       <Routes>
//         <Route
//           path="/super/*"
//           element={roles === 0 ? <SuperAdmin /> : <Wraper />}
//         />
//         {/* <Route path="/admin/*" element={roles === 1  ? <Admin /> : <Wraper/>} /> */}
//         <Route path="/*" element={roles === 2 ? <Users /> : <Wraper />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUpUser />} />
//         <Route path="/verifyotp" element={<Otp />} />
//         <Route path="/forgetpassword" element={<ForgotPassword />} />
//       </Routes>
//     </>
//   );
// };

// export default Routing;



const Routing = () => {
  const location = useLocation();
  const roles = JSON.parse(localStorage.getItem("roles"));

  // Check if user is authenticated
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? <ProtectedRoutes roles={roles} /> : <PublicRoutes />;
};

export default Routing;
