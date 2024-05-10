import React from "react";
import Content from "../../../Layout/Content/Content";
import Formikform from "../../../Helpers/Form";
// import * as valid_err from "../../../Utils/Common_Messages";
import { useFormik } from "formik";

const Add_User = () => {
  const formik = useFormik({
    initialValues: {
      panel_name: "",
      domain: "",
      port: "",
      key: "",
      ip_address: "",
      is_active: 1,
      is_expired: 0,
      theme_id: "",
      db_url: "",
      db_name: "",
      broker_id: [],
      Create_Strategy: false,
      Option_chain: false,
      Strategy_plan: false,
      backend_rul: "",
    },

    validate: (values) => {
      const errors = {};

      // if (!values.panel_name && formik.touched.panel_name) {
      //   errors.panel_name = valid_err.PANEL_NAME_ERROR;
      // }

      // if (!values.domain) {
      //   errors.domain = valid_err.DOMAIN_ERROR;
      // }

      // if (!values.port) {
      //   errors.port = valid_err.PORT_ERROR;
      // }

      // if (!values.key) {
      //   errors.key = valid_err.KEY_ERROR;
      // }

      // if (!values.db_url) {
      //   errors.db_url = valid_err.DBURL_ERROR;
      // }

      // if (!values.db_name) {
      //   errors.db_name = valid_err.DBNAME_ERROR;
      // }

      // if (!values.backend_rul) {
      //   errors.backend_rul = valid_err.DBNAME_ERROR;
      // }

      return errors;
    },
    onSubmit: async (values) => {
      const req = {
        // panel_name: values.panel_name,
        // domain: values.domain,
        // port: values.port,
        // key: values.key,
        // ip_address: values.ip_address,
        // theme_id: values.theme_id,
        // db_url: values.db_url,
        // db_name: values.db_name,
        // broker_id: state1,
        // Create_Strategy:
        //   values.Create_Strategy && values.Create_Strategy ? 1 : 0,
        // Option_chain: values.Option_chain && values.Option_chain ? 1 : 0,
        // Strategy_plan: values.Strategy_plan && values.Strategy_plan ? 1 : 0,
        // backend_rul: values.backend_rul,
      };

      // await dispatch(Add_Panel_data({ req: req, token: user_token }))
      //   .unwrap()
      //   .then((response) => {
      //     if (response.status === 409) {
      //       toast.error(response.data.msg);
      //     } else if (response.status) {
      //       toast.success(response.msg);

      //       setTimeout(() => {
      //         navigate("/super/alladmins");
      //       }, 1000);
      //     } else if (!response.status) {
      //       toast.error(response.msg);
      //     }
      //   });
    },
  });

  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "username",
      label: "User Name",
      type: "text",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "mobile",
      label: "Mobile",
      type: "text",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "key",
      label: "key",
      type: "text",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "ip_address",
      label: "Ip Address",
      type: "text",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "db_url",
      label: "Database Url",
      type: "text",
      label_size: 12,
      col_size: 6,
    },

  
   
  ];

  return (
    <>
      <Content title="Add User" col_size={12}>
        <Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          btn_name="Add Panel"
          additional_field={
            <>
              <h6>All Brokers</h6>
              {/* {getGetAllBrokerName.map((broker) => (
                <div className={`col-lg-2 mt-2`} key={broker.broker_id}>
                  <div className="row ">
                    <div className="col-lg-12 ">
                      <div class="form-check custom-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name={broker.title}
                          value={broker.broker_id}
                          onChange={(e) => handleSBrokerChange(e, broker)}
                        />
                        <label className="form-check-label" for={broker.title}>
                          {broker.title}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}

              {formik.errors.title && (
                <div style={{ color: "red" }}>{formik.errors.title}</div>
              )}
            </>
          }
        />
      </Content>
    </>
  );
};

export default Add_User;
