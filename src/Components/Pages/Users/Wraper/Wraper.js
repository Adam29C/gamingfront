import React from "react";
import Header from "../Layout/Header/Header";
import Sidebar from "../Layout/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
// import Main from '../../container/pages/Main'

import "../common_style.css"
import "../global.css"
import "../theme_style.css"

const Layout = () => {
  return (
    <>
      <app-root _nghost-nsr-c9="" ng-version="12.1.5">
        <router-outlet _ngcontent-nsr-c9="" />
        <app-layout _nghost-nsr-c57="">
          <Header />
          <Sidebar />
          {/* <Main/> */}
          <Outlet />
          <app-footer _ngcontent-nsr-c57="" _nghost-nsr-c56="" />{" "}
        </app-layout>
        {/**/}
      </app-root>
      
    </>
  );
};

export default Layout;
