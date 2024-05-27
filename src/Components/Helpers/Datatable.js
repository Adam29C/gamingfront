import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const Data_Table = ({ columns, data }) => {
  const customStyles = {
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

  return (
    <>
      <DataTableExtensions columns={columns} data={data}>
        <DataTable
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          customStyles={customStyles}
        />
      </DataTableExtensions>
    </>
  );
};

export default Data_Table;
