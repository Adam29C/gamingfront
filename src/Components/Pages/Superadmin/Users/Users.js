import React from "react";
import Content from "../../../Layout/Content/Content";
import Data_Table from "../../../Helpers/Datatable";
import { Link } from "react-router-dom";
const Users = () => {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    }, 
    {
      name: "Year",
      selector: (row) => row.year,
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

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <>
      <Content title="Users" col_size={12}> 
      
       <Data_Table columns={columns} data={data} />
      
      </Content>
    </>
  );
};

export default Users;
