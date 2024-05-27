import React from "react";
import Content from "../../../Layout/Content/Content";
import Formikform from "../../../Helpers/Form";
import { useFormik } from "formik";
import * as valid_err from "../../../Utils/Common_Msg";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getGameRule } from "../../../Redux/Slice/common/common.slice";
import { useDispatch } from "react-redux";
import ToastButton from "../../../Helpers/Toast";
import { ADD_ADMIN_ACCOUNT_DETAILS } from "../../../Service/superadmin.service";

const GameRuleAdd = () => {
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;

  const formik = useFormik({
    initialValues: {
      upiId: "",
      upiName: "",
      image: "",
      accountNumber: "",
      accountHolderName: "",
      ifscCode: "",
      bankName: "",
    },

    validate: (values) => {
      console.log(values);
      // const errors = {};

      // if (!values.title) {
      //   errors.title = valid_err.TITLE_ERROR;
      // }
      // if (!values.description) {
      //   errors.description = valid_err.DESCRIPTION_ERROR;
      // }
      // if (!values.status) {
      //   errors.status = valid_err.STATUS_ERROR;
      // }

      // return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      let formData = new FormData();
      formData.append("id", userId);
      formData.append("isBank", false);
      formData.append("upiName", values.upiName);
      formData.append("upiId", values.upiId);
      formData.append("image", values.image);

      console.log("formData", formData);

      const res = await ADD_ADMIN_ACCOUNT_DETAILS(formData, token);

      // if (values.isBank && values.isBank === "true") {
      //   let formData = new FormData();
      //   formData.append("id", userId);
      //   formData.append("isBank", true);
      //   formData.append("bankName", values.bankName);
      //   formData.append("accountHolderName", values.accountHolderName);
      //   formData.append("accountNumber", values.accountNumber);
      //   formData.append("ifscCode", values.ifscCode);
      //   formData.append("image", values.image);
      //   const res = await ADD_ADMIN_ACCOUNT_DETAILS(formData, token);
      // } else {
      //   let formData = new FormData();
      //   formData.append("id", userId);
      //   formData.append("isBank", false);
      //   formData.append("upiName", values.upiName);
      //   formData.append("upiId", values.upiId);
      //   formData.append("image", values.image);

      //   const res = await ADD_ADMIN_ACCOUNT_DETAILS(formData, token);
      //   // Log FormData contents for debugging
      //   for (let [key, value] of formData.entries()) {
      //     console.log(`${key}:`, value);
      //   }
      // }
    },
  });

  const fields = [
    {
      name: "isBank",
      label: "Account Type",
      type: "select",
      label_size: 12,
      col_size: 6,
      options: [
        { label: "UPI", value: false },
        { label: "Bank Account", value: true },
      ],
    },
    {
      name: "bankName",
      label: "Bank Name",
      type: "text",
      label_size: 12,
      col_size: 6,
      showWhen: (values) => values.isBank && values.isBank === "true",
    },
    {
      name: "accountHolderName",
      label: "Account Holder Name",
      type: "text",
      label_size: 12,
      col_size: 6,
      showWhen: (values) => values.isBank && values.isBank === "true",
    },

    {
      name: "accountNumber",
      label: "A/C Number",
      type: "text",
      label_size: 12,
      col_size: 6,
      showWhen: (values) => values.isBank && values.isBank === "true",
    },

    {
      name: "ifscCode",
      label: "IFSC Number",
      type: "text",
      label_size: 12,
      col_size: 6,
      showWhen: (values) => values.isBank && values.isBank === "true",
    },

    {
      name: "upiName",
      label: "UPI Name",
      type: "text",
      label_size: 12,
      col_size: 6,
      showWhen: (values) => values.isBank && values.isBank === "false",
    },
    {
      name: "upiId",
      label: "UPI Id",
      type: "text",
      label_size: 12,
      col_size: 6,
      showWhen: (values) => values.isBank && values.isBank === "false",
    },
    {
      name: "image",
      label:
        formik.values.isBank && formik.values.isBank === "false"
          ? "QR Code"
          : "Somthing Else",
      type: "file",
      label_size: 12,
      col_size: 6,
    },
  ];

  return (
    <>
      <Content
        title={state?._id ? "Update Bank" : "Add Bank"}
        Back_Button={true}
        Back__Button_route="/super/bankdetails"
        col_size={12}
      >
        <Formikform
          fieldtype={fields.filter(
            (field) => !field.showWhen || field.showWhen(formik.values)
          )}
          formik={formik}
          btn_name={state?._id ? "Update Bank" : "Add Bank"}
        />
        <ToastButton />
      </Content>
    </>
  );
};

export default GameRuleAdd;
