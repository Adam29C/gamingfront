import React from "react";
import { admin_sidebar, supper_admin_sidebar } from "./SidebarData";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/CreateContext";

const Sidebar = () => {
  const ROLES = JSON.parse(localStorage.getItem("user_role"));

  const { handleMouseLeave, handleMouseEnter } = useAppContext();

  const MouserExit = () => {
    handleMouseLeave();
  };
  const mouseEnter = () => {
    handleMouseEnter();
  };

  // res.role === 0
  //   ? "superadmin"
  //   : res.role === 1
  //   ? "admin"
  //   : res.role === 2
  //   ? "user"
  //   : "";
  // if (ROLES === "superadmin") {
  // }
  return (
    <>
      <div className="side-menu-area">
        <nav onMouseEnter={mouseEnter} onMouseLeave={MouserExit}>
          <ul className="sidebar-menu" data-widget="tree">
            {admin_sidebar &&
              admin_sidebar.map((item) => {
                // console.log("item" ,item);
                return (
                  <>
                    {item.Data.length === 0 ? (
                      <li className="active">
                        <Link to={item.route}>
                          <i className={item.Icon} />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ) : (
                      <li className="treeview">
                        <a href="">
                          <i className={item.Icon} />
                          <span>{item.name}</span>
                          <i className="fa fa-angle-right" />
                        </a>
                        <ul className="treeview-menu">
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

            {/* <li className="active">
              <a href="index.html">
                <i className="bx bx-home-heart" />
                <span>Dashboard</span>
              </a>
            </li>
            <li className="treeview">
              <a href="javascript:void(0)">
                <i className="bx bxs-cart" />
                <span>Shop</span> <i className="fa fa-angle-right" />
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="product.html">Products</a>
                </li>
                <li>
                  <a href="product-details.html">Products Details</a>
                </li>
                <li>
                  <a href="order.html">Orders</a>
                </li>
                <li>
                  <a href="cart.html">Cart</a>
                </li>
                <li>
                  <a href="checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="invoice.html">Invoice</a>
                </li>
              </ul>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
