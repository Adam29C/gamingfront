import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Loader from "./Loader";

const Data_Table = ({ columns, data , tableStyle,isLoading }) => {
  const adminStyles = {
    rows: {
      style: {
        // minHeight: "72px",
      },
    },
    headCells: {
      style: {
        // paddingLeft: "8px",
        // paddingRight: "8px",

        background: "#0e0b2b",
        color: "#fff",
      },
    },
    cells: {
      // style: {
      //   paddingLeft: "8px",
      //   paddingRight: "8px",
      // },
    },
  };

  const userStyles = {
    rows: {
      style: {
        // minHeight: "72px",
      },
    },
    headCells: {
      style: {
        // paddingLeft: "8px",
        // paddingRight: "8px",

        background: "#4E3896",
        color: "#fff",
      },
    },
    cells: {
      // style: {
      //   paddingLeft: "8px",
      //   paddingRight: "8px",
      // },
    },
  };


  return (
    <>
      <DataTableExtensions columns={columns} data={data}>
        <DataTable
          noHeader
          // defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          customStyles={tableStyle ? adminStyles : userStyles }
          noDataComponent={isLoading ? (<div className="user-loading-main">
          <Loader lodersize={25}/>
        </div>) :"There are no records to display"}


        />
      </DataTableExtensions>
    </>
  );
};

export default Data_Table;
