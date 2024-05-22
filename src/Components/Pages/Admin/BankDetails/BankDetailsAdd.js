import React from "react";
import Content from "../../../Layout/Content/Content";
import Formikform from "../../../Helpers/Form";
import { useFormik } from "formik";
import * as valid_err from "../../../Utils/Common_Msg";
import { useLocation, useNavigate } from "react-router-dom";
import {
  GameRuleAddApi,
  GameRuleUpdateApi,
} from "../../../Service/common.service";
import toast from "react-hot-toast";
import { getGameRule } from "../../../Redux/Slice/common/common.slice";
import { useDispatch } from "react-redux";
import ToastButton from "../../../Helpers/Toast";

const GameRuleAdd = () => {
  const token = localStorage.getItem("token");
  const user_details = JSON.parse(localStorage.getItem("user_details"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;

  const formik = useFormik({
    initialValues: {
      title: state?.title ? state?.title : "",
      description: state?.description ? state?.description : "",
      status: state?.status ? state?.status : "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.title) {
        errors.title = valid_err.TITLE_ERROR;
      }
      if (!values.description) {
        errors.description = valid_err.DESCRIPTION_ERROR;
      }
      if (!values.status) {
        errors.status = valid_err.STATUS_ERROR;
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      if (state?._id) {
        const data = {
          ruleId: state?._id,
          title: values.title,
          description: values.description,
          status: values.status,
        };
        const res = await GameRuleUpdateApi(data, token);

        if (res?.status === 409) {
          toast.error(res.data.msg);
        } else if (res?.statusCode === 200) {
          toast.success(res?.msg);
          resetForm();
          setTimeout(() => {
            navigate("/super/rules");
          }, 1000);

          dispatch(getGameRule(token));
        } else if (!res.status) {
          toast.error(res.msg);
        }
      } else {
        const data = {
          userId: user_details?.id,
          title: values.title,
          description: values.description,
          status: values.status,
        };
        const res = await GameRuleAddApi(data, token);

        if (res?.status === 409) {
          toast.error(res.data.msg);
        } else if (res?.statusCode === 201) {
          resetForm();
          toast.success(res?.msg);
          setTimeout(() => {
            navigate("/super/rules");
          }, 1000);

          dispatch(getGameRule(token));
        } else if (!res.status) {
          toast.error(res.msg);
        }
      }
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
