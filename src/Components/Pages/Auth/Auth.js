import React, { useState, useEffect } from "react";
import Content from "../../Layout/Content/Content1";
import Formikform from "../../Helpers/Form";
// import * as valid_err from "../../../Utils/Common_Messages";
import * as valid_err from "../../Utils/Common_Msg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ToastButton from "../../Helpers/Toast";
import toast from "react-hot-toast";
import { v4 } from "uuid";
import { Login, Generate_Token } from "../../Redux/Slice/Auth/auth.slice";
import {
  Name_regex,
  Password_Rejex,
  Mobile_regex,
} from "../../Utils/Valid_Rejex";

import { useFormik } from "formik";

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [token, setToken] = useState("");

  const isValidContact = (mobile) => {
    return Mobile_regex(mobile);
  };
  const isValidPassword = (mobile) => {
    return Password_Rejex(mobile);
  };

  const getToken = async () => {
    const request1 = {
      deviceId: v4(),
    };
    const res1 = await dispatch(Generate_Token(request1)).unwrap();

    if (res1.statusCode === 200) {
      setToken(res1.data);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

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
        token: token,
      };

      const res = await dispatch(Login(request)).unwrap();

      if (res.status) {
        localStorage.setItem("user_details", JSON.stringify(res.details));
        localStorage.setItem("roles", JSON.stringify(res.details.role));
        localStorage.setItem("token", res.token);
        let ROLES = res.details.role === 0 ? "admin" : res.details.role === 1 ? "subadmin" : res.details.role === 2 ? "user" : ""
        if (ROLES==="admin") {
        
          setTimeout(() => {
            navigate("/admin/dashboard");
          }, 1000);
        } else if (ROLES === "subadmin") {
        
          setTimeout(() => {
            navigate("/subadmin/dashboard");
          }, 1000);
        } else if (ROLES === "user") {
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
