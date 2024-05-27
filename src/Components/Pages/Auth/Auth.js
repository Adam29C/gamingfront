// import React, { useState } from "react";
// import { Login } from "../../Redux/Slice/Auth/auth.slice";
// import { useDispatch, useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import ToastButton from "../../Helpers/Toast";
import { Link, useNavigate } from "react-router-dom";

// // Login

// const Auth = () => {
//   const dispatch = useDispatch();

//   const [UserName, setUserName] = useState("");
//   const [Password, setPassword] = useState("");
//   const [LoginDetails, setLoginDetails] = useState([]);

//   const SignInUSer = async (e) => {
//     e.preventDefault();

//     const request = {
//       mobileNumber: 1234567890,
//       password: "superAdmin123",
//     };
//     const res = await dispatch(Login({ data: request })).unwrap();
//     if (res.status) {
//       if (res.data.role === 0 || "0") {
//         navigate("/admin/dashboard");
//       } else if (res.data.role === 1 || "1") {
//         navigate("/subadmin/dashboard");
//       } else if (res.data.role === 2 || "2") {
//         navigate("/user/dashboard");
//       }
//       localStorage.setItem("user_details", JSON.stringify(res));
//       setLoginDetails(res);
//     } else {
//       toast.error(res.msg);
//     }
//   };

//   return (
//     <>
//       <div className="container ">
//         <div
//           className="row d-flex align-items-center justify-content-center"
//           style={{ height: "100vh" }}
//         >
//           <div className="hero">
//             <div className="cube" />
//             <div className="cube" />
//             <div className="cube" />
//             <div className="cube" />
//             <div className="cube" />
//             <div className="cube" />
//           </div>
//           <div className="col-sm-10 col-md-8 col-lg-5">
//             <div className="middle-box py-4">
//               <div className="card">
//                 <div className="card-body p-4">
//                   {/* Logo */}
//                   <h4 className="font-24 mb-30">Login2</h4>
//                   <form action="#">
//                     <div className="form-group mb-3">
//                       <input
//                         className="form-control login"
//                         type="email"
//                         id="emailaddress"
//                         required=""
//                         placeholder="Enter your email"
//                         style={{
//                           backgroundImage: 'url("data:image/png',
//                           backgroundRepeat: "no-repeat",
//                           backgroundSize: 20,
//                           backgroundPosition: "97% center",
//                           cursor: "auto",
//                         }}
//                         onClick={(e) => setUserName(e.target.value)}
//                       />
//                     </div>
//                     <div className="form-group mb-3">
//                       <a
//                         href="forget-password.html"
//                         className="text-dark float-right"
//                       />
//                       <input
//                         className="form-control login"
//                         type="password"
//                         required=""
//                         id="password"
//                         placeholder="Enter your password"
//                         onClick={(e) => setPassword(e.target.value)}
//                       />
//                     </div>
//                     <div className="form-group d-flex justify-content-between align-items-center mb-3">
//                       <span>
//                         <a
//                           className="font-12 text-success"
//                           href="forget-password.html"
//                         >
//                           Forgot your password?
//                         </a>
//                       </span>
//                     </div>
//                     <div className="form-group mb-0">
//                       <button
//                         className="btn btn-primary btn-block"
//                         type="submit"
//                         onClick={(e) => SignInUSer(e)}
//                       >
//                         Log In
//                       </button>
//                     </div>
//                     <div className="text-center mt-15">
//                       <span className="mr-2 font-12">
//                         Don't have an account?
//                       </span>
//                       <Link className="font-12" to={"/signup"}>
//                         Sign up
//                       </Link>
//                     </div>
//                   </form>
//                   {/* end card */}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <ToastButton />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Auth;

import React from "react";
import Content from "../../Layout/Content/Content1";
import Formikform from "../../Helpers/Form";
// import * as valid_err from "../../../Utils/Common_Messages";
import * as valid_err from "../../Utils/Common_Msg";
import { useDispatch, useSelector } from "react-redux";
import ToastButton from "../../Helpers/Toast";
import toast from "react-hot-toast";

import { Login } from "../../Redux/Slice/Auth/auth.slice";
import {
  Name_regex,
  Password_Rejex,
  Mobile_regex,
} from "../../Utils/Valid_Rejex";

import { useFormik } from "formik";

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isValidContact = (mobile) => {
    return Mobile_regex(mobile);
  };
  const isValidPassword = (mobile) => {
    return Password_Rejex(mobile);
  };

  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
      password: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.password) {
        errors.password = valid_err.PASSWORD_ERROR;
      } else if (!isValidPassword(values.password)) {
        errors.password = valid_err.PASSWORD__LENGTH_ERROR;
      }
      if (!values.mobileNumber) {
        errors.mobileNumber = valid_err.CONTACT_ERROR;
      } else if (!isValidContact(values.mobileNumber)) {
        errors.mobileNumber = valid_err.INVALID_CONTACT_ERROR;
      }

      return errors;
    },
    onSubmit: async (values) => {
      const request = {
        mobileNumber: parseInt(values.mobileNumber),
        password: values.password,
      };

      const res = await dispatch(Login(request)).unwrap();
      if (res.status) {
        if (res.data.role === 0 || "0") {
          navigate("/admin/dashboard");
        } else if (res.data.role === 1 || "1") {
          navigate("/subadmin/dashboard");
        } else if (res.data.role === 2 || "2") {
          navigate("/user/dashboard");
        }
        localStorage.setItem("user_details", JSON.stringify(res));
      } else {
        toast.error(res.msg);
      }
    },
  });

  const fields = [
    {
      name: "mobileNumber",
      label: " Mobile/UserName",
      type: "text",
      label_size: 12,
      col_size: 12,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      label_size: 12,
      col_size: 12,
    },
  ];

  return (
    <>
      <Content title="Login " responsive_col={"col-md-8 col-lg-6"}>
        <Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          btn_name="Login "
          button_Size="col-12"
          additional_field={
            <div className="d-flex justify-content-between mb-2">
              <div className="text-center mt-15">
                <Link
                  className="font-12 text-danger fw-bold"
                  to={"/forgetpassword"}
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="text-center mt-15">
                <span className="mr-2 font-12"> Don't have an account?</span>
                <Link className="font-12" to={"/signup"}>
                  Sign up
                </Link>
              </div>
            </div>
          }
        />
        <ToastButton />
      </Content>
    </>
  );
};

export default Users;
