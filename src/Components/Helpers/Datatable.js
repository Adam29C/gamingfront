import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Loader from "./Loader";

const Data_Table = ({ columns, data, tableStyle, isLoading }) => {
  const adminStyles = {
    rows: {
      style: {},
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

  const columns1 = [
    {
      name: "Sr. No",
      selector: (row, index) => index + 1,
    },
    ...columns,
  ];

  return (
    <>
      <DataTableExtensions
        columns={columns1}
        data={data}
        print={false}
        export={false}
      >
        <DataTable
          noHeader
          // defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          yles={tableStyle ? adminStyles : userStyles}
          noDataComponent={
            isLoading ? (
              <div className="user-loading-main">
                <Loader lodersize={25} />
              </div>
            ) : (
              "There are no records to display"
            )
          }
        />
      </DataTableExtensions>
    </>
  );
};

export default Data_Table;
