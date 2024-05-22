import React from "react";
import { admin_sidebar, supper_admin_sidebar } from "./SidebarData";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../../Context/CreateContext";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const ROLES = JSON.parse(localStorage.getItem("user_role"));

  const [ShowSubMenu, setShowSubMenu] = useState(false);
  const { handleMouseLeave, handleMouseEnter } = useAppContext();

  const MouserExit = () => {
    handleMouseLeave();
  };
  const mouseEnter = () => {
    handleMouseEnter();
  };

  return (
    <>
      <div className="side-menu-area">
        <nav onMouseEnter={mouseEnter} onMouseLeave={MouserExit}>
          <ul className="sidebar-menu tree" data-widget="tree">
            {admin_sidebar &&
              admin_sidebar.map((item) => {
                return (
                  <>
                    {item.Data.length === 0 ? (
                      <li
                        className={
                          location.pathname === item.route ? ` active` : ""
                        }
                      >
                        <Link to={item.route}>
                          <i className={item.Icon} />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ) : (
                      <li
                        className={`${ShowSubMenu ? "menu-open" : ""} treeview`}
                      >
                        <a
                          href="#"
                          onClick={() => setShowSubMenu(!ShowSubMenu)}
                        >
                          <i className={item.Icon} /> &nbsp;
                          <span>{item.name}</span>
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul
                          className={`${
                            ShowSubMenu ? "d-block" : ""
                          } treeview-menu `}
                        >
                          {item.Data.map((subItem) => (
                            <li key={subItem.id}>
                              <Link to={subItem.route}>{subItem.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </>
                );
              })}

           
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
