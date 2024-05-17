import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const Data_Table = ({ columns, data , tableStyle }) => {
  const adminStyles = {
    rows: {
      style: {
      },
    },
    headCells: {
      style: {
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
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          customStyles={tableStyle ? adminStyles : userStyles }
        />
      </DataTableExtensions>
    </>
  );
};

export default Data_Table;
