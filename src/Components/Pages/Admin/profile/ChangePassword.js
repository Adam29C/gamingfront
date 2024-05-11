import React from "react";

import Formikform from "../../../Helpers/Form";
import * as valid_err from "../../../Utils/Common_Msg";

import { useFormik } from "formik";

import ToastButton from "../../../Helpers/Toast";
import { ChangePasswordApi } from "../../../Service/admin.service";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const token = localStorage.getItem("token");
  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },

    validate: (values) => {
      const errors = {};

      // if (!values.panel_name && formik.touched.panel_name) {
      //   errors.panel_name = valid_err.PANEL_NAME_ERROR;
      // }

      if (!values.old_password) {
        errors.old_password = valid_err.OLD_PASSWORD_ERROR;
      }

      if (!values.new_password) {
        errors.new_password = valid_err.NEW_PASSWORD_ERROR;
      }

      if (!values.confirm_password) {
        errors.confirm_password = valid_err.CONFIRM_PASSWORD_ERROR;
      } else if (values.confirm_password !== values.new_password) {
        errors.confirm_password = valid_err.CONFIRM_AND_NEW_PASSWORD_ERROR;
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const data = {
          old_password: values.old_password,
          new_password: values.new_password,
        };

        const response = await ChangePasswordApi(data, token);
        console.log(response);
        if (response?.status) {
          toast.success(response?.data?.msg);
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  const fields = [
    {
      name: "old_password",
      label: "Old Password",
      type: "text",
      label_size: 12,
      col_size: 12,
    },
    {
      name: "new_password",
      label: "New Password",
      type: "text",
      label_size: 12,
      col_size: 12,
    },
    {
      name: "confirm_password",
      label: "Confirm Password",
      type: "text",
      label_size: 12,
      col_size: 12,
    },
  ];

  return (
    <>
      {/* <Content title="Add Users" col_size={12} show_footer={false}> */}
      <div className=" card col-12 col-md-6 d-flex justify-content-center align-items-center">
        <h1 className="change-pass-title my-3">Change Password</h1>
        <Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          btn_name="Update"
        />
        {/* </Content> */}
        <ToastButton />
      </div>
    </>
  );
};

export default ChangePassword;
