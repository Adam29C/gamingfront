import React, { useEffect, useState } from "react";
import Content from "../../../Layout/Content/Content";
import Data_Table from "../../../Helpers/Datatable";
import { Link } from "react-router-dom";
import { GET_ALL_SUBADMINS } from "../../../Service/superadmin.service";
import ToastButton from "../../../Helpers/Toast";
import toast from "react-hot-toast";
import { show } from "../../../Utils/Common_Date";
import { Tooltip } from "bootstrap";

const Users = () => {
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const token = localStorage.getItem("token");

  const [GetData, setGetData] = useState([]);

  console.log("GetData", GetData);

  const getRules = async () => {
    const response = await GET_ALL_SUBADMINS(userId, token);

    if (response.statusCode == 200) {
      setGetData(response.list);
    } else {
      toast.error(response.msg);
    }
  };

  useEffect(() => {
    getRules();
  }, []);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.name,
    },
    {
      name: "Mobile Number",
      selector: (row) => row.mobileNumber,
    },
    {
      name: "Is Verified",

      selector: (row) => (
        <span
          className={`${row.isVerified ? "bg-success" : "bg-danger"} px-3 rounded-3 text-light py-1 text-center`}
          // style={{
          //   backgroundColor: "rgba(63, 195, 128, 0.9)",
          //   color: "white",
          // }}
        >
          {row.isVerified ? "Verified" : "Not Verified"}
        </span>
      ),
    },

    {
      name: "Create At",
      selector: (cell) => (
        <span data-toggle="tooltip" data-placement="top" title="Edit">
          {show(cell)}
        </span>
      ),
    },
    {
      name: "actions",
      selector: (cell, row) => (
        <div style={{ width: "120px" }}>
          <div>
            <Link to={`/admin/user/edit/1`} state={row}>
              <span data-toggle="tooltip" data-placement="top" title="Edit">
                <i class="ti-marker-alt fs-5 mx-1"></i>
              </span>
            </Link>

            <Link>
              <span data-toggle="tooltip" data-placement="top" title="Delete">
                <i class="ti-trash fs-5 mx-1"></i>
              </span>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Content title="Users11" col_size={12}>
        <Data_Table columns={columns} data={GetData && GetData} />
      </Content>
      <ToastButton />
    </>
  );
};

export default Users;

export const tooltip = (
  <Tooltip id="tooltip">
    <strong>Holy guacamole!</strong> Check this info.
  </Tooltip>
);
