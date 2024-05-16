import React from "react";
import Formikform from "../../../../Helpers/Form";
import * as valid_err from "../../../../Utils/Common_Msg";
import { useFormik } from "formik";
import ToastButton from "../../../../Helpers/Toast";
import { ChangePasswordApi } from "../../../../Service/admin.service";
import toast from "react-hot-toast";

const UserChangePassword = () => {
  const token = localStorage.getItem("token");
  const user_details = JSON.parse(localStorage.getItem("user_details"))
  
  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },

    validate: (values) => {
      const errors = {};

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
          user_id:user_details?.id,
          old_password: values.old_password,
          new_password: values.new_password,
        };

        const response = await ChangePasswordApi(data, token);
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
    <app-change-password
    _ngcontent-aja-c61=""
    _nghost-aja-c53=""
  >
    {/* <form
      _ngcontent-aja-c53=""
      noValidate=""
      className="cp_form ng-untouched ng-pristine ng-invalid"
    >
      <div
        _ngcontent-aja-c53=""
        className="row mb-lg-3 mt-lg-2 align-items-center"
      >
        <label
          _ngcontent-aja-c53=""
          htmlFor="currentPassword"
          className="col-md-3 col-lg-3 col-form-label text-lg-end"
        >
          Current Password :
        </label>
        <div
          _ngcontent-aja-c53=""
          className="col-md-9 col-lg-9"
        >
          <input
            _ngcontent-aja-c53=""
            type="password"
            id="currentPassword"
            formcontrolname="old_password"
            className="form-control ng-untouched ng-pristine ng-invalid"
          />
        </div>
      </div>
      <div
        _ngcontent-aja-c53=""
        className="row mb-lg-3 mt-lg-2 align-items-center"
      >
        <label
          _ngcontent-aja-c53=""
          htmlFor="newPassword"
          className="col-md-3 col-lg-3 col-form-label text-lg-end"
        >
          New Password :
        </label>
        <div
          _ngcontent-aja-c53=""
          className="col-md-9 col-lg-9"
        >
          <input
            _ngcontent-aja-c53=""
            type="password"
            id="newPassword"
            formcontrolname="new_password"
            className="form-control ng-untouched ng-pristine ng-invalid"
          />
        </div>
      </div>
      <div
        _ngcontent-aja-c53=""
        className="row mb-lg-3 mt-lg-2 align-items-center"
      >
        <label
          _ngcontent-aja-c53=""
          htmlFor="renewPassword"
          className="col-md-3 col-lg-3 col-form-label text-lg-end"
        >
          Re-enter New Password :
        </label>
        <div
          _ngcontent-aja-c53=""
          className="col-md-9 col-lg-9"
        >
          <input
            _ngcontent-aja-c53=""
            type="password"
            id="renewPassword"
            formcontrolname="new_password_re"
            className="form-control ng-untouched ng-pristine ng-invalid"
          />
        </div>
      </div>
      <div _ngcontent-aja-c53="" className="feedback">
        <p _ngcontent-aja-c53="" className="small m-0">
          <i _ngcontent-aja-c53="">
            <b _ngcontent-aja-c53="">Note:</b> The New
            Password field must be at least 6 characters
          </i>
        </p>
        <p _ngcontent-aja-c53="" className="small m-0">
          <i _ngcontent-aja-c53="">
            <b _ngcontent-aja-c53="">Note:</b> The New
            Password must contain at least: 1 uppercase
            letter, 1 lowercase letter, 1 number
          </i>
        </p>
      </div>
      <div _ngcontent-aja-c53="" className="row">
        <button
          _ngcontent-aja-c53=""
          type="submit"
          className="btn btn-thmemes"
        >
          Change Password
        </button>
      </div>
    </form> */}
    <Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          btn_name="Update"
        />
        <ToastButton />
  </app-change-password>
  )
}

export default UserChangePassword