import React from "react";
import Content from "../../../Layout/Content/Content";
import Widgets from "../../../Helpers/Widgets";

const Users = () => {
  return (
    <>
      <div className="flapt-page-content">
        <div class="main-panel">
          <div className="content-wrapper">
            <div className="container-fluid">
            <div className="row">
              <Widgets  sm={"col-sm-6 col-xl-3 mb-30"}  data={""}  icon="" color=" bg-primary" title="Total Users"/>
              <Widgets  sm={"col-sm-6 col-xl-3 mb-30"}  data={""}  icon="" color=" bg-info"/>
              <Widgets  sm={"col-sm-6 col-xl-3 mb-30"}  data={""}  icon="" color=" bg-danger"/>
              <Widgets  sm={"col-sm-6 col-xl-3 mb-30"}  data={""}  icon="" color=" bg-success"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
