import React, { useEffect, useState } from "react";
import Content from "../../../Layout/Content/Content";
import Data_Table from "../../../Helpers/Datatable";
import { Link, useNavigate } from "react-router-dom";
import { getGameRule } from "../../../Redux/Slice/common/common.slice";
import ToastButton from "../../../Helpers/Toast";
import toast from "react-hot-toast";
import { SUB_ADMIN_DELETE_LIST, SUB_ADMIN_GET_LIST } from "../../../Service/admin.service";
import { show } from "../../../Utils/Common_Date";


const AdminsList = () => {
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false);



  const navigate = useNavigate();


  const getUserList = async () => {
    setLoading(true);
    try {
      const res = await SUB_ADMIN_GET_LIST(userId, token);

      if (res?.status === 200) {
        setUserData(res?.data?.list);
      }
    } catch (error) {

    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    getUserList()
  }, [])

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,

    },

    {
      name: "Mobile Number",
      selector: (row) => row.mobileNumber,

    },
    {
      name: "Login Status",
      selector: (row) =>
      (
        <span
          className={`${row.loginStatus == "logOut" ? "bg-danger" : "bg-success"
            } px-3 rounded-3 text-light py-1 text-center`}
        >
          {row.loginStatus}
        </span>
      )

      ,

    },
    {
      name: "Is Varified",
      selector: (row) => (
        <span
          className={`${row.isVerified ? "bg-success" : "bg-danger"
            } px-3 rounded-3 text-light py-1 text-center`}
        >
          {row.isVerified ? "Verified" : "Not Verified"}
        </span>
      )

    },
    {
      name: "Created Date",
      selector: (cell) => (
        <span data-toggle="tooltip" data-placement="top" title="Edit">
          {show(cell)}
        </span>
      ),

    },

    {
      name: "actions",

      selector: (cell, row) => (
        <div >
          <div>


            <Link href="#" onClick={() => handleDeleteUser(cell?.userId)}>
              <span data-toggle="tooltip" data-placement="top" title="Delete">
                <i class="ti-trash fs-5 mx-1"></i>
              </span>
            </Link>
          </div>
        </div>
      ),
    },
  ];



  const handleDeleteUser = async (id) => {
    console.log(id)
    const confirmed = window.confirm(
      "Do You Really Want To Remove This User"
    );
    if (confirmed) {
      const response = await SUB_ADMIN_DELETE_LIST(id, token);
      
      // if (response.statusCode == 200) {
      //   toast.success(response.msg);
      //   dispatch(getGameRule(token));
      // } else {
      //   toast.error(response.msg);
      // }
    } else {
      console.log("");
    }
  };


  const handleAdd = () => {
    navigate("/admin/userlist/add");
  };
  return (
    <>
      <Content
        title="User List"
        addtitle="Add User"
        handleAdd={handleAdd}
        col_size={12}
      >
        <Data_Table isLoading={loading} columns={columns} data={userData}  tableStyle={true}/>

        <ToastButton />
      </Content>
    </>
  );
};

export default AdminsList;
